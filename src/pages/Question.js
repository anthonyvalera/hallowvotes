import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Title from '../components/Title';
import Form from '../components/Form';
import { useQuery, useMutation } from '@apollo/client';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import GET_QUESTIONS from '../graphql/getQuestions';
import { useQuestion } from '../context/QuestionsProvider';
import Users from '../components/Users';
import ADD_VOTE from '../graphql/addVote';
import GET_VOTE from '../graphql/getVote';
import UPDATE_VOTE from '../graphql/updateVote';

const StyledImage = styled.img`
  max-width: 200px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  filter: drop-shadow(0px 0px 1px #fff);
  font-family: Avenir;
  text-transform: lowercase;
  max-width: 80%;
  margin: 50px 0;
`;

const StyledMain = styled.main`
  max-width: 500px;
`;

function Question() {
  
  const history = useHistory();
  const authorId = localStorage.getItem('attendeeId');
  const { id: questionId = null } = useParams();
  const { data: { icon, title } = {}, next, prev } = useQuestion(questionId);

  const authorString = `${authorId}-${questionId}`;

  const { data: { vote = null } = {} } = useQuery(GET_VOTE, {
    variables: { author: authorString },
    fetchPolicy: 'no-cache',
  });

  const previousVote = vote?.attendee?.id;
  const [addVote] = useMutation(ADD_VOTE);
  const [updateVote] = useMutation(UPDATE_VOTE);

  const onClickSubmit = (attendeeId) => {
    if (!attendeeId || !authorId) return;

    const mutation = previousVote ? updateVote : addVote;

    mutation({
      variables: {
        attendeeId,
        author: authorString,
        questionId,
      },
    }).then(() => history.push(next ? `/question/${next.id}` : '/questions'));
  };

  return (
    <StyledMain>
      <StyledImage src={icon?.url} alt={title} />
      <StyledHeader>{title}</StyledHeader>
      <Users
        key={questionId}
        previousVote={previousVote}
        onClickSubmit={onClickSubmit}
      />
    </StyledMain>
  );
}

export default Question;
