import styled from 'styled-components';
import { NextButton, PlayButton, PrevButton } from '../UI/Button';
import ProgressBar from '../UI/ProgressBar';
import { Preview } from '../UI/Preview';
import PropTypes from 'prop-types';
import { Heading, Paragraph } from '../UI/Typography';

export const Player = styled.div`
  height: 500px;
  width: 350px;
  background-color: #0c6369;
  margin: 5rem;
  border-radius: 2rem;
  box-shadow: 0 4px 10px #21294999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;

  & > * {
    z-index: 10;
  }

  .nothing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: #21294955;
    clip-path: polygon(0 0, 0 100%, 100% 80%, 100% 0);
    z-index: 0;
  }

  @media screen and (max-width: 500px) {
    height: 100vh;
    width: 100%;
    margin: 0;
    border-radius: 0;
    justify-content: center;
  }
`;

const PlayerBox = ({ options }) => {
  const {
    playingSong,
    playing,
    processTime,
    durationTime,
    processPercentage,
    prevSong,
    nextSong,
    togglePlay,
    skipSong
  } = options;

  const pauseButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );

  const playButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <Player>
      <section className="nothing"></section>
      <section>
        <Preview image={playingSong && playingSong.thumbnail} play={playing} />
      </section>

      <section
        style={{
          marginTop: '2rem'
        }}
      >
        <Heading size="2.7">{playingSong && playingSong.title}</Heading>
        <Paragraph size="1.3">
          By - {playingSong && playingSong.artist}
        </Paragraph>
      </section>
      <section
        style={{
          width: '100%',
          marginTop: '2rem'
        }}
      >
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#f3fbfb',
            fontSize: '1.4rem',
            marginBottom: '0.5rem'
          }}
        >
          <Paragraph size="1.5">{processTime}</Paragraph>
          <Paragraph size="1.5">{durationTime}</Paragraph>
        </section>
        <ProgressBar
          processPercentage={processPercentage}
          skipSong={skipSong}
        />
      </section>
      <section
        style={{
          marginTop: '3rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <PrevButton onClick={prevSong} />
        <PlayButton onClick={togglePlay}>
          {playing ? pauseButton : playButton}
        </PlayButton>
        <NextButton onClick={nextSong} />
      </section>
    </Player>
  );
};

PlayerBox.propTypes = {
  options: PropTypes.shape({
    playingSong: PropTypes.object,
    playing: PropTypes.bool,
    processTime: PropTypes.string,
    durationTime: PropTypes.string,
    processPercentage: PropTypes.number,
    prevSong: PropTypes.func,
    nextSong: PropTypes.func,
    togglePlay: PropTypes.func
  })
};

export default PlayerBox;
