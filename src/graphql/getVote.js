import { gql } from '@apollo/client';

const GET_VOTE = gql`
  query getVote($author: String!) {
    vote(where: {author: $author}) {
      id
      attendee {
        id
        name
      }
    }
  }
`;

export default GET_VOTE;
