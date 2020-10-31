import { gql } from '@apollo/client';

const GET_QUESTIONS = gql`
  query getQuestions {
    questions {
      id
      title
      icon {
        ... on Asset {
          url
        }
      }
    }
  }
`;

export default GET_QUESTIONS;
