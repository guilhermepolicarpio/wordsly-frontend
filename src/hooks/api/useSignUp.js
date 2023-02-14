import useAsync from '../useAsync';

import * as userApi from '../services/userApi';

export default function useSignUp(name,email, password, userImage) {
  
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
