import useAsync from '../useAsync';
import * as answerApi from '../services/answerApi';

export default function useInsertAnswer(answer, userId) {
  const body = { answer, userId };

    const {
    loading: answerLoading,
    error: answerError,
    act: insertAnswer
  } = useAsync(() => answerApi.insertAnswer(body));

  return {
    answerLoading,
    answerError,
    insertAnswer
  };
}
