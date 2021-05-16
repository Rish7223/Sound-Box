import styled from 'styled-components';

export const ProgressBar = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 5rem;
  box-shadow: 0 0px 3px #21294944;
  background-color: #fff;
  transition: all 0.3s ease;

  &::after {
    content: '';
    height: 100%;
    position: absolute;
    border-radius: 5rem;
    top: 0;
    left: 0;
    background-color: #f76faf;
    width: ${props => (props.completed ? props.completed : '0')}%;
  }

  &::before {
    content: '';
    height: 20px;
    width: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 3px #555;
    border-radius: 50%;
    position: absolute;
    top: 0;
    transform: translateY(-25%);
    left: ${props => (props.completed ? props.completed - 1 : '-1')}%;
    z-index: 100;
  }
`;
