import { gql } from '@apollo/client';

const ADD_ATTENDEE = gql`
  mutation addAttendee($name: String!) {
    createAttendee(data: { name: $name }) {
      id
      name
    }
  }
`;

export default ADD_ATTENDEE;
