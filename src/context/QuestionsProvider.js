import React, { createContext, useContext, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import GET_QUESTIONS from '../graphql/getQuestions';

export const QuestionsContext = createContext([]);

function QuestionsProvider({ children }) {
  const { data: { questions = [] } = {}, loading, error } = useQuery(
    GET_QUESTIONS
  );

  return (
    <QuestionsContext.Provider value={questions}>
      {children}
    </QuestionsContext.Provider>
  );
}

export const useQuestions = () => useContext(QuestionsContext);

export const useQuestion = (id = null) => {
  const questions = useContext(QuestionsContext);
  const question = useMemo(() => {
    const index = questions.findIndex(q => q.id === id);
    return {
      previous: questions[index - 1],
      data: questions[index],
      next: questions[index + 1]
    };
  }, [id, questions]);

  return question;
}

export default QuestionsProvider;
