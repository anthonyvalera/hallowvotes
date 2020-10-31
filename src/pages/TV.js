import React, { useCallback, useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import Title from '../components/Title';
import Form from '../components/Form';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import ADD_ATTENDEE from '../graphql/addAttendee';
import { useQuestions } from '../context/QuestionsProvider';
import Votes from '../components/Votes';
import { useSlideNumber } from '../hooks/useSlideNumber';

const StyledBody = styled.div`
  height: 70vh;
`;

const StyledMain = styled.div`
  text-align: center;
  margin: auto;
`;

const StyledSlider = styled(Slider)`
  text-align: center;
  overflow: visible;
`;

const CustomSlider = ({ slides }) => {
  const slideNumber = useSlideNumber();
  console.log({ slideNumber });
  return (
    <StyledSlider>
      {slides.map(({ id, title, icon: { url = '' } }, i) => (
        <Slide index={i} key={id}>
          <img src={url} />
          <p>{title}</p>
          <Votes active={slideNumber === i} questionId={id} />
        </Slide>
      ))}
    </StyledSlider>
  );
};

function TV() {
  const history = useHistory();
  const questions = useQuestions();

  return (
    <StyledMain>
      <Title>HALLOWEEN VOTES</Title>
      <StyledBody>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={questions.length}
          isPlaying
          infinite
        >
          <CustomSlider slides={questions} />
        </CarouselProvider>
      </StyledBody>
    </StyledMain>
  );
}

export default TV;
