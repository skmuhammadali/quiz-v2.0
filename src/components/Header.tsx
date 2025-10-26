import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Eye, EyeOff, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  const { gameState, toggleHeader } = useGame();

  if (!gameState.isHeaderVisible) {
    return (
      <button
        onClick={toggleHeader}
        className="fixed top-4 right-4 z-50 bg-navy-900/90 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:bg-navy-800 flex items-center gap-2 shadow-lg"
      >
        <Eye className="w-4 h-4" />
        Show Header
      </button>
    );
  }

  return (
    <div className="bg-navy-900/95 backdrop-blur-sm border-b border-gray-800 p-4 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          {gameState.competitionLogo && (
            <div className="bg-white rounded-lg shadow-xl px-3 py-2 inline-flex items-center justify-center">
              <img 
                src={gameState.competitionLogo} 
                alt="Competition Logo" 
                className="h-12 w-auto object-contain drop-shadow-md"
              />
            </div>
          )}
          
          <div className="text-white">
            <h1 className="text-xl font-bold font-poppins">{gameState.competitionName}</h1>
            <p className="text-gray-400 text-sm">Round 2 - Technical Quiz</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-white text-sm bg-navy-800/50 px-3 py-2 rounded-lg backdrop-blur-sm">
            <span className="text-gray-400">Question:</span> {gameState.currentQuestionIndex + 1}/{gameState.questions.length}
          </div>
          
          <button
            onClick={toggleHeader}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 shadow-md"
          >
            <EyeOff className="w-4 h-4" />
            Hide Header
          </button>
        </div>
      </div>
    </div>
  );
};