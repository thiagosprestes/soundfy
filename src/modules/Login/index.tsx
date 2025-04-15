import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LoginContainer from './container';
import { storeUserData } from './slices/user';
import { firebaseClientId } from '../../config/environmentVariables';
import { ComponentState } from '../../utils/globalTypes';

const Login = () => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const dispatch = useDispatch();

  const handleOnLogin = async () => {
    setComponentState(ComponentState.loading);

    try {
      const response = await GoogleSignin.signIn();

      const { name, email } = response.data?.user || {};

      dispatch(storeUserData({ displayName: name, email }));

      setComponentState(ComponentState.default);
    } catch (error) {
      setComponentState(ComponentState.error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: firebaseClientId,
    });
  }, []);

  return (
    <LoginContainer
      componentState={componentState}
      onLogin={handleOnLogin}
      onRetry={handleOnLogin}
    />
  );
};
export default Login;
