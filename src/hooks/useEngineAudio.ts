
import { useState, useEffect, useRef } from 'react';

export type EngineType = 'idle' | 'rev' | 'formula' | 'ambient' | 'off';

export const useEngineAudio = () => {
  const [currentEngine, setCurrentEngine] = useState<EngineType>('off');
  const [volume, setVolume] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const engineSounds = {
    idle: '/engine-sounds/idle.mp3',
    rev: '/engine-sounds/rev.mp3', 
    formula: '/engine-sounds/formula.mp3',
    ambient: '/engine-sounds/ambient.mp3',
    off: null
  };

  const playEngine = (engineType: EngineType) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (engineType === 'off') {
      setCurrentEngine('off');
      setIsPlaying(false);
      return;
    }

    const soundUrl = engineSounds[engineType];
    if (soundUrl) {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      audioRef.current.play().then(() => {
        setCurrentEngine(engineType);
        setIsPlaying(true);
      }).catch(() => {
        // Fallback silencioso si no hay archivos de audio
        setCurrentEngine(engineType);
        setIsPlaying(false);
      });
    }
  };

  const stopEngine = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setCurrentEngine('off');
    setIsPlaying(false);
  };

  const adjustVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return {
    currentEngine,
    volume,
    isPlaying,
    playEngine,
    stopEngine,
    adjustVolume
  };
};
