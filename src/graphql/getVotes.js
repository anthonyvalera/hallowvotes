import { gql } from '@apollo/client';

const GET_VOTES = gql`
  query getVotes($questionId: ID) {
      votes(where: {question: { id: $questionId } }) {
        id
        attendee {
          id
          name
        }
      }
  }
`;

export default GET_VOTES;
