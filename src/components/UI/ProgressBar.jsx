import styled from 'styled-components';

export const Progress = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 5rem;
  box-shadow: 0 0px 3px #21294944;
  background-color: #fff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

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
    left: ${props => (props.completed ? props.completed - 2 : '-2 ')}%;
    z-index: 100;
  }

  button {
    flex: 1;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 20;
  }
`;

const skipArray = [
  5, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95
];

const ProcessBar = ({ skipSong, processPercentage }) => {
  return (
    <Progress completed={processPercentage}>
      {skipArray.map(time => (
        <button
          onClick={() => {
            skipSong(time);
          }}
          key={time}
        ></button>
      ))}
    </Progress>
  );
};

export default ProcessBar;
