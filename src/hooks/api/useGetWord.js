import useAsync from '../useAsync';

import * as wordApi from '../services/wordApi';

export default function useGetWord() {
  const {
    data: word,
    loading: getWordLoading,
    error: getWordError,
    act: getWord
  } = useAsync(wordApi.getWord);

  return {
    word,
    getWordLoading,
    getWordError,
    getWord
  };
}