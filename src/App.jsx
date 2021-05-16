import { useRef } from 'react';
import { Player } from './components/Block/Player';
import { NextButton, PlayButton, PrevButton } from './components/UI/Button';
import { Preview } from './components/UI/Preview';
import { ProgressBar } from './components/UI/ProgressBar';
import usePlayer from './hooks/usePlayer';
import { songList } from './songs/index';

const App = () => {
  const song = useRef(null);

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
  const {
    togglePlay,
    playing,
    processTime,
    processPercentage,
    playingSong,
    nextSong,
    prevSong,
    durationTime
  } = usePlayer(song, songList);
  return (
    <>
      <div className="App">
        <audio src={playingSong && playingSong.song} ref={song} />

        <Player>
          <section
            style={{
              width: '200px',
              height: '200px'
            }}
          >
            <Preview
              image={playingSong && playingSong.thumbnail}
              play={playing}
            />
          </section>

          <section
            style={{
              marginTop: '2rem'
            }}
          >
            <h1
              style={{
                color: '#f3fbfb',
                fontSize: '2.5rem',
                textAlign: 'center'
              }}
            >
              {playingSong && playingSong.title}
            </h1>
            <p
              style={{
                color: '#f3fbfb',
                fontSize: '1.5rem',
                textAlign: 'center'
              }}
            >
              By - {playingSong && playingSong.artist}
            </p>
          </section>
          <section
            style={{
              width: '100%',
              marginTop: '3rem'
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
              <p>{processTime}</p>
              <p>{durationTime}</p>
            </section>
            <ProgressBar completed={processPercentage} />
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
      </div>
    </>
  );
};

export default App;
