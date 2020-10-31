import { gql } from '@apollo/client';

const GET_ATTENDEES = gql`
  query getAttendees {
    attendees {
      id
      name
    }
  }
`;

export default GET_ATTENDEES;
