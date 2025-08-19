
import React, { memo } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEngineAudio, type EngineType } from '@/hooks/useEngineAudio';

const EngineAudioControls = memo(() => {
  const { currentEngine, volume, isPlaying, playEngine, stopEngine, adjustVolume } = useEngineAudio();

  const engineOptions: { type: EngineType; label: string; emoji: string }[] = [
    { type: 'idle', label: 'Ralentí', emoji: '🏎️' },
    { type: 'rev', label: 'Aceleración', emoji: '🚀' },
    { type: 'formula', label: 'Fórmula 1', emoji: '🏁' },
    { type: 'ambient', label: 'Ambiente', emoji: '🌟' }
  ];

  return (
    <div className="flex items-center space-x-3 p-3 racing-card rounded-lg">
      {/* Control principal */}
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => isPlaying ? stopEngine() : playEngine('idle')}
          className="text-racing-silver hover:text-racing-red transition-colors"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <div className="hidden sm:block text-xs text-racing-silver">
          Audio Motor
        </div>
      </div>

      {/* Selector de motor */}
      <div className="hidden md:flex items-center space-x-1">
        {engineOptions.map(({ type, label, emoji }) => (
          <Button
            key={type}
            variant="ghost"
            size="sm"
            onClick={() => playEngine(type)}
            className={`text-xs px-2 py-1 transition-all duration-200 ${
              currentEngine === type
                ? 'bg-racing-red/20 text-racing-red'
                : 'text-racing-silver hover:text-white hover:bg-racing-black-light'
            }`}
            title={label}
          >
            <span className="mr-1">{emoji}</span>
            <span className="hidden lg:inline">{label}</span>
          </Button>
        ))}
      </div>

      {/* Control de volumen */}
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => adjustVolume(volume > 0 ? 0 : 0.3)}
          className="text-racing-silver hover:text-racing-gold transition-colors"
        >
          {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
        
        <div className="hidden sm:block w-16">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => adjustVolume(Number(e.target.value))}
            className="w-full h-1 bg-racing-black-light rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${volume * 100}%, #333 ${volume * 100}%, #333 100%)`
            }}
          />
        </div>
      </div>

      {/* Indicador de estado */}
      {isPlaying && (
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-racing-red rounded-full animate-pulse"></div>
          <span className="text-xs text-racing-red font-semibold hidden lg:inline">
            En vivo
          </span>
        </div>
      )}
    </div>
  );
});

EngineAudioControls.displayName = 'EngineAudioControls';

export default EngineAudioControls;
