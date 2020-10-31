import { css } from '@emotion/core'

export const font = "font-family: 'Knewave', cursive;";

export const colors = {
  main: '#3F0A68',
  secondary: '#74FF79',
  secondaryHighlight: '#00B106'
}

export const sizes = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '14px',
  std: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '28px'
}

// export margin = Object.keys(sizes).map(size => `.${size} { }`)
// export fontSize = Object.keys(sizes).map(size => `.${size} { }`)

export default css`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    background: ${colors.main};
    box-sizing: border-box;
    color: #fff;
    font-family: 'Knewave', cursive;
    height: 100vh;
    letter-spacing: 5px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    height: 100%;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    height: 100%;
    display: flex;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  img {
    filter: invert(1) drop-shadow(0px 0px 4px #fff);
    max-width: 300px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
