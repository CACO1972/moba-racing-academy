
import React from 'react';
import { Volume2, VolumeX, Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useEngineAudio, EngineType } from '@/hooks/useEngineAudio';

const EngineAudioControls = () => {
  const { currentEngine, volume, isPlaying, playEngine, stopEngine, adjustVolume } = useEngineAudio();

  const engineOptions: { type: EngineType; label: string; color: string }[] = [
    { type: 'ambient', label: 'Ambiente', color: 'text-racing-silver' },
    { type: 'idle', label: 'Ralentí', color: 'text-racing-gold' },
    { type: 'rev', label: 'Aceleración', color: 'text-racing-red' },
    { type: 'formula', label: 'Fórmula', color: 'text-purple-400' }
  ];

  return (
    <div className="racing-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-orbitron font-semibold text-white text-sm">Audio Racing</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={isPlaying ? stopEngine : () => playEngine('ambient')}
          className="text-racing-silver hover:text-white"
        >
          {isPlaying ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {engineOptions.map((option) => (
          <Button
            key={option.type}
            variant="ghost"
            size="sm"
            onClick={() => playEngine(option.type)}
            className={`text-xs ${option.color} ${
              currentEngine === option.type ? 'bg-racing-black-light' : ''
            } hover:bg-racing-black-light`}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <VolumeX className="h-4 w-4 text-racing-silver" />
        <Slider
          value={[volume * 100]}
          onValueChange={(value) => adjustVolume(value[0] / 100)}
          max={100}
          step={5}
          className="flex-1"
        />
        <Volume2 className="h-4 w-4 text-racing-silver" />
      </div>
    </div>
  );
};

export default EngineAudioControls;
