import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouterPros extends ReactRouteProps {
  isPrivate ?: boolean;
  component: React.ComponentType
}

const Route: React.FC<RouterPros> =
({ isPrivate = false,
   component: Component,
    ...rest }) => {

  const { token } = useAuth();

  return (
    <ReactDOMRoute {...rest}
    render={
      () => {
        console.log(isPrivate)
        console.log(token)
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard'}} />
        )
      }
    }/>
  )
};

export default Route;
