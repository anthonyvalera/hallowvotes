import { gql } from '@apollo/client';

const UPDATE_VOTE = gql`
  mutation updateVote($questionId: ID, $attendeeId: ID, $author: String!) {
    updateVote(where: { author: $author }, data: {
        question: { connect: { id: $questionId } },
        attendee: { connect: { id: $attendeeId }},
        author: $author
    }) {
      id
    }
  }
`;

export default UPDATE_VOTE;
