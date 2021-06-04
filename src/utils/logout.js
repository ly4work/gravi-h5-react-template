import SsoSDK from 'gj-sso-sdk';
export const logout = () => {
  SsoSDK.config({
    env: BUILD_ENV,
  });
};
