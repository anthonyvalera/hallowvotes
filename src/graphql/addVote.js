import { gql } from '@apollo/client';

const ADD_VOTE = gql`
  mutation addVote($questionId: ID, $attendeeId: ID, $author: String!) {
    createVote(data: {
        question: { connect: { id: $questionId } },
        attendee: { connect: { id: $attendeeId }},
        author: $author
    }) {
      id
    }
  }
`;

export default ADD_VOTE;
