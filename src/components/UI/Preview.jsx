/* eslint-disable no-undef */
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Preview = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #ddd;
  background-image: url('${props => props.image}');
  background-size: 150%;
  background-position: left;
  box-shadow: 0 0 3px #212949;
  animation: ${rotate} 10s linear
    ${props => (props.play ? 'running' : 'paused')} infinite;

  &::before {
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #dd4433;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  &::after {
    content: '';
    position: absolute;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #222222;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
