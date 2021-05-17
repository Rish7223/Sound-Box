import { useRef } from 'react';
import PlayerBox from './components/Block/Player';
import usePlayer from './hooks/usePlayer';
import { songList } from './songs/index';

const App = () => {
  const song = useRef(null);

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
        <PlayerBox
          options={{
            togglePlay,
            playing,
            processTime,
            processPercentage,
            playingSong,
            nextSong,
            prevSong,
            durationTime
          }}
        />
      </div>
    </>
  );
};

export default App;
