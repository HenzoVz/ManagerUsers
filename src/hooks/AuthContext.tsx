import React, {createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/apis';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData{
  token: string | undefined;
  signIn(credentials: SignInCredentials):  Promise<void>;
  signOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@ManagerUsers:accessToken');

    if (!token) {
      return;
    }
    return token;
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { accessToken } = response.data;

    localStorage.setItem('@ManagerUsers:accessToken', accessToken);

    setData(accessToken);


  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ManagerUsers:accessToken');

    setData('');
  }, []);

  return (
    <AuthContext.Provider value={{ token: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
