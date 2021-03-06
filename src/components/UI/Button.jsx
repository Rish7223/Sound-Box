import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  font-weight: 600;
  color: #f3fbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #21294900;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  & > * {
    z-index: 10;
  }

  &:hover::before {
    background-color: #21294944;
  }
`;

export const PlayButton = styled.button`
  margin: 0 2rem;
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

export const NextButton = ({ onClick }) => {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={50}
        width={50}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
};

export const PrevButton = ({ onClick }) => {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={50}
        width={50}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
};
