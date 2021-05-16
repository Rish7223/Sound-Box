import { useState, useEffect } from 'react';

const usePlayer = (songRef, songList) => {
  const currentRef = songRef;
  const [playingSong, setPlayingSong] = useState(null);
  const [processTime, setProcessTime] = useState('0:00');
  const [durationTime, setDurationTime] = useState('0:00');
  const [processPercentage, setProcessPercentage] = useState(0);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!currentRef.current.currentSrc) {
      setPlayingSong(songList[0]);
    }

    setInterval(() => {
      if (currentRef.current) {
        const value =
          Math.floor(currentRef.current.currentTime / 60) +
          ':' +
          ('0' + Math.floor(currentRef.current.currentTime % 60)).slice(-2);
        let duration =
          Math.floor(currentRef.current.duration / 60) +
          ':' +
          ('0' + Math.floor(currentRef.current.duration % 60)).slice(-2);

        setDurationTime(duration);
        setProcessTime(value);
        const percentage = Math.floor(
          (currentRef.current.currentTime / currentRef.current.duration) * 100
        );
        setProcessPercentage(percentage);
        if (currentRef.current.currentTime === currentRef.current.duration) {
          currentRef.current.pause();
          currentRef.current.currentTime = 0;
          setPlaying(false);
        }
      }
    }, 500);
  }, [currentRef, songList]);

  const playSong = () => {
    if (currentRef) {
      currentRef.current.play();
      setPlaying(true);
    }
  };

  const stopSong = () => {
    if (currentRef) {
      currentRef.current.pause();
      currentRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  const pauseSong = () => {
    if (currentRef) {
      currentRef.current.pause();
      setPlaying(false);
    }
  };

  const togglePlay = () => {
    if (playing) {
      pauseSong();
    } else {
      playSong();
    }
  };

  // console.log(playingSong);

  const nextSong = () => {
    const index = playingSong && playingSong.id + 1;
    if (index > songList.length) {
      setPlayingSong(songList[0]);
      setPlaying(false);
      return;
    }
    setPlayingSong(songList[index - 1]);
    setPlaying(false);
  };
  const prevSong = () => {
    const index = playingSong && playingSong.id - 1;
    if (index !== 0) {
      setPlayingSong(songList[index - 1]);
      setPlaying(false);
    }
  };

  return {
    togglePlay,
    stopSong,
    playing,
    processTime,
    processPercentage,
    playingSong,
    nextSong,
    prevSong,
    durationTime
  };
};

export default usePlayer;
