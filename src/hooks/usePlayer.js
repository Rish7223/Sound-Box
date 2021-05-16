import { useState, useEffect } from 'react';

const usePlayer = songRef => {
  const [currentSong, setCurrentSong] = useState(songRef);
  const [processTime, setProcessTime] = useState(0);
  const [processPercentage, setProcessPercentage] = useState(0);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (currentSong.current) {
        // const { togglePlay, stopcurrentSong, playing } = usePlayer(currentSong.current);
        const value =
          Math.floor(currentSong.current.currentTime / 60) +
          ':' +
          ('0' + Math.floor(currentSong.current.currentTime % 60)).slice(-2);
        setProcessTime(value);
        const percentage = Math.floor(
          (currentSong.current.currentTime / currentSong.current.duration) * 100
        );
        setProcessPercentage(percentage);
        if (currentSong.current.currentTime === currentSong.current.duration) {
          currentSong.current.pause();
          currentSong.current.currentTime = 0;
          setPlaying(false);
        }
      }
    }, 500);
  }, [currentSong]);

  const playSong = () => {
    if (currentSong) {
      currentSong.current.play();
      setPlaying(true);
    }
  };

  const stopSong = () => {
    if (currentSong) {
      currentSong.current.pause();
      currentSong.current.currentTime = 0;
      setPlaying(false);
    }
  };

  const pauseSong = () => {
    if (currentSong) {
      currentSong.current.pause();
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

  return {
    togglePlay,
    stopSong,
    playing,
    processTime,
    processPercentage
  };
};

export default usePlayer;
