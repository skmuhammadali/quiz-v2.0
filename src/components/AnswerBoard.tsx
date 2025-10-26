import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Check, X, Play } from 'lucide-react';

export const AnswerBoard: React.FC = () => {
  const { gameState, continueGame } = useGame();

  if (!gameState.isAnswerBoardVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6">
      <div className="bg-navy-900/95 border border-gray-600 rounded-2xl p-8 max-w-2xl w-full text-center shadow-2xl backdrop-blur-sm">
        <div className="mb-8">
          {gameState.winningTeam ? (
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-poppins">Correct Answer!</h2>
              <p className="text-lg text-white font-poppins">
                🎉 <span className="font-semibold">{gameState.winningTeam}</span> got it right!
              </p>
            </div>
          ) : (
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/30">
                <X className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-red-400 mb-2 font-poppins">No Correct Answer</h2>
              <p className="text-lg text-gray-300 font-poppins">All teams have attempted this question</p>
            </div>
          )}
        </div>

        <div className="bg-black/50 border border-gray-600 rounded-xl p-6 mb-8 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold text-gray-300 mb-3 font-poppins">Correct Answer:</h3>
          <p className="text-xl font-bold text-white font-poppins">{gameState.currentAnswer}</p>
        </div>

        <button
          onClick={continueGame}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg font-poppins"
        >
          <Play className="w-5 h-5" />
          {gameState.currentQuestionIndex + 1 < gameState.questions.length ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
};