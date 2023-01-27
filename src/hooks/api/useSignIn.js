import useAsync from '../useAsync';

import * as userApi from '../services/userApi';

export default function useSignIn() {
 
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(userApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}
