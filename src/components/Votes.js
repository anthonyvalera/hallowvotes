import React, {
  memo,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
  useMemo,
} from 'react';
import styled from '@emotion/styled';
import { colors, font, sizes } from '../globalStyles';
import { useQuery } from '@apollo/client';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import GET_VOTES from '../graphql/getVotes';
import { CarouselContext } from 'pure-react-carousel';
import { useSlideNumber } from '../hooks/useSlideNumber';

function Votes({ active, questionId }) {
  const { data: { votes = [] } = {}, loading, error, refetch } = useQuery(GET_VOTES, {
    variables: { questionId },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    refetch({ questionId });
  }, [active, questionId]);

  const normalizedVotes = useMemo(() => {
    if (!votes.length) return [];

    const totals = votes.reduce((acc, { attendee: { id, name } }) => {
      const index = acc.findIndex(obj => obj.id === id);
      
      if (index !== -1) {
        acc[index].count += 1;  
      } else {
        acc.push({ id, name, count: 1})
      }
    
      return acc;
    }, []);
    
    const sortedTotals = totals.sort((a, b) => b.count - a.count)
    
    return sortedTotals.slice(0, 5);
  }, [votes])

  if (loading) {
    return null;
  }

  console.log({votes, normalizedVotes});

  return (
    <>
      <div>
        {normalizedVotes.map(({ id, name, count }) => {
          return <li key={id}>{name} - {count}</li>;
        })}
      </div>
    </>
  );
}

export default memo(Votes);
