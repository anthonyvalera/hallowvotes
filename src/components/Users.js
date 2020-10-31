import React, { memo, useState, useCallback, useEffect, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { colors, font, sizes } from '../globalStyles';
import { useQuery } from '@apollo/client';
import GET_ATTENDEES from '../graphql/getAttendees';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const StyledList = styled.ul`
  width: 100%;
  border: 10px solid;
  max-height: 400px;
  overflow: scroll;
  width: 100%;
  font-size: 30px;
  text-align: center;
`;

const LoadingList = styled.div`
  height: 600px;
`;

const StyledAttendee = styled.li`
  cursor: pointer;
  padding: 20px;
  color: ${({ active }) => (active ? colors.secondary : 'white')};
`;

function AttendeeList({ previousVote, onClickSubmit }) {
  const [active, setActive] = useState(previousVote);

  const { data: { attendees = [] } = {}, loading, error } = useQuery(
    GET_ATTENDEES,
    {
      fetchPolicy: 'network-only',
    }
  );

  useEffect(() => {
    setActive(previousVote);
  }, [previousVote])

  if (loading) {
    return <LoadingList />;
  }

  return (
    <>
      <StyledList>
        {attendees.map(({ id, name }) => {
          return (
            <StyledAttendee
              active={id === active}
              key={id}
              onClick={() => setActive(id)}
            >
              {name}
            </StyledAttendee>
          );
        })}
      </StyledList>
      <Button onClick={() => active ? onClickSubmit(active) : null}>SUBMIT</Button>
    </>
  );
}

export default AttendeeList;
