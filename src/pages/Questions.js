import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Title from '../components/Title';
import { Link, useHistory } from 'react-router-dom';
import { useQuestions } from '../context/QuestionsProvider';

const StyledList = styled.ul`
  padding: 0;
  max-width: 60%;
  margin: 0 auto;
  list-style-type: none;

  li {
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: 4px;
    filter: drop-shadow(0px 0px 1px #fff);
    font-family: Avenir;
    text-transform: lowercase;

    a {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 25px 0;
    }

    img {
      max-width: 60px;
      margin-right: 30px;
      filter: invert(1);
    }
  }
`


function Questions() {
  const history = useHistory();
  const questions = useQuestions();

  return (
    <main>
      <Title>VOTE</Title>
      <StyledList>
        {questions.map(({ id, title, icon: { url = '' } }, i) => (
          <li key={id}>
            <Link to={{ pathname: `/question/${id}`, state: { id } }}>
              <img src={url} />
              {title}
            </Link>
          </li>
        ))}
      </StyledList>
    </main>
  );
}

export default Questions;
