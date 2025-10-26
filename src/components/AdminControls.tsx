import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Settings, Check, X, SkipForward, Pause, Play, RotateCcw } from 'lucide-react';

export const AdminControls: React.FC = () => {
  const { gameState, handleCorrectAnswer, handleWrongAnswer, updateGameState, resetGame } = useGame();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTimer = () => {
    updateGameState({ isTimerRunning: !gameState.isTimerRunning });
  };

  const resetTimer = () => {
    updateGameState({ timeLeft: 25, isTimerRunning: true });
  };

  if (gameState.gamePhase !== 'playing') return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className={`bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all shadow-2xl ${
        isExpanded ? 'p-6' : 'p-4'
      }`}>
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-poppins"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Admin Controls</span>
          </button>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white font-poppins">Admin Controls</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCorrectAnswer}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
              >
                <Check className="w-4 h-4" />
                Correct
              </button>

              <button
                onClick={handleWrongAnswer}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
              >
                <X className="w-4 h-4" />
                Wrong
              </button>

              <button
                onClick={toggleTimer}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
              >
                {gameState.isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {gameState.isTimerRunning ? 'Pause' : 'Resume'}
              </button>

              <button
                onClick={resetTimer}
                className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            <button
              onClick={resetGame}
              className="w-full flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};