import React, { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';

export const Timer: React.FC = () => {
  const { gameState, updateGameState, handleTimeUp } = useGame();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (gameState.isTimerRunning && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        updateGameState({ timeLeft: gameState.timeLeft - 1 });
      }, 1000);
    } else if (gameState.timeLeft === 0 && gameState.isTimerRunning) {
      handleTimeUp();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState.isTimerRunning, gameState.timeLeft, updateGameState, handleTimeUp]);

  const progress = (gameState.timeLeft / 25) * 100;
  const isWarning = gameState.timeLeft <= 5;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-navy-700 flex items-center justify-center relative overflow-hidden shadow-2xl bg-navy-900/30 backdrop-blur-sm">
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              isWarning ? 'bg-red-500/20' : 'bg-blue-500/20'
            }`}
            style={{
              background: `conic-gradient(${isWarning ? '#ef4444' : '#3b82f6'} ${progress * 3.6}deg, transparent 0deg)`
            }}
          />
          <div className="relative z-10 text-center">
            <div className={`text-3xl font-bold font-poppins ${isWarning ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {gameState.timeLeft}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider font-poppins">seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};