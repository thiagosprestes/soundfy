import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import LoginContainer, { LoginOption } from './container';
import { firebaseClientId } from '../../config/environmentVariables';

const Login = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: firebaseClientId,
    });
  }, []);

  const handleOnLogin = async (type: LoginOption) => {
    // if (type === LoginOption.Facebook) {
    // }

    if (type === LoginOption.Google) {
      try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        const googleAuthResponse = await auth().signInWithCredential(
          googleCredential,
        );

        console.log(googleAuthResponse);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return <LoginContainer onLogin={handleOnLogin} />;
};
export default Login;
