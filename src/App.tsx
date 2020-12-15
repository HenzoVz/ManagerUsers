import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
    <Router>
    <ToastProvider autoDismissTimeout={3000}>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </ToastProvider>

    <GlobalStyle />
  </Router>
);

export default App;
