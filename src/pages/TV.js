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

const StyledTitle = styled.h2`
  text-transform: lowercase;
  font-family: Avenir;
  font-weight: 300;
  font-size: 40px;
`;

const StyledQR = styled.img`
  position: fixed;
  z-index: 30;
  left: 20px;
  bottom: 20px;
  filter: invert(1);
`;

const CustomSlider = ({ slides }) => {
  const slideNumber = useSlideNumber();
  console.log({ slideNumber });
  return (
    <StyledSlider>
      {slides.map(({ id, title, icon: { url = '' } }, i) => (
        <Slide index={i} key={id}>
          <img src={url} />
          <StyledTitle>{title}</StyledTitle>
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
      <StyledQR src="https://media.graphcms.com/m2FxXZMiTtqz2Kj90Ngy" />
    </StyledMain>
  );
}

export default TV;
