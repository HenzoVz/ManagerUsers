import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface AuthState {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {

    const token = localStorage.getItem('@ManagerUsers:token');
    const user = localStorage.getItem('@ManagerUsers:user');

    if (token && user) {
      return { token, user:JSON.parse(user) };
    }
    return {} as AuthState;

  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@ManagerUsers:token', token);
    localStorage.setItem('@ManagerUsers:user', JSON.stringify(user));

    setData({ token, user });

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ManagerUsers:token');
    localStorage.removeItem('@ManagerUsers:user');

    setData({} as AuthState);

  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error ('useAuth must be used within an AuthProvider');
  }

  return context;
}
