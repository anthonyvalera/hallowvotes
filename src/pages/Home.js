import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Title from '../components/Title';
import Form from '../components/Form';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import ADD_ATTENDEE from '../graphql/addAttendee';


function Home() {
  const history = useHistory();
  const [addAttendee, { data, loading, error }] = useMutation(ADD_ATTENDEE);

  const onFormSubmit = useCallback(({ value = null }) => {
    if (value) {
      addAttendee({ variables: { name: value } })
        .then(({ data: { createAttendee } }) => {
          localStorage.setItem('attendeeId', createAttendee.id);
          history.push("/questions")
        });
    };
  });

  return (
    <main>
      <Title>SIGN IN</Title>
      {
        loading
          ? <p>Loading...</p>
          : <Form onFormSubmit={onFormSubmit} label="ENTER YOUR NAME" />
      }
    </main>
  );
};

export default Home;
