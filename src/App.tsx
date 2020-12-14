import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
    <Router>
    <ToastContainer/>
      <AuthProvider>
        <Routes />
      </AuthProvider>

    <GlobalStyle />
  </Router>
);

export default App;
