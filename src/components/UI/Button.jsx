import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
`;

export const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  background-color: #f76faf;
  color: #f3fbfb;
  font-size: 4rem;
  font-weight: 600;
  border: 3px solid #ffffff;
  transition: all 0.2s ease;

  & > * {
    width: 60%;
  }

  &:hover {
    box-shadow: 0 0 0 3px #f76fafdd;
  }

  &:focus {
    box-shadow: 0 0 0 3px #f76faf99;
    outline: none;
  }
`;

export const NextButton = styled(Button)`
  color: #242e4c;
  font-size: 4rem;
  font-weight: 600;

  & > * {
    width: 60%;
  }
`;
