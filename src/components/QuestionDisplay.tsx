import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Lightbulb } from 'lucide-react';

export const QuestionDisplay: React.FC = () => {
  const { gameState, updateGameState } = useGame();
  const [showClue, setShowClue] = useState(false);

  const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
  const currentTeam = gameState.teams[gameState.currentTeamIndex];

  const handleRevealClue = () => {
    if (!currentTeam.usedClue) {
      setShowClue(true);
      // Mark team as having used their clue
      const updatedTeams = gameState.teams.map(team =>
        team.id === currentTeam.id ? { ...team, usedClue: true } : team
      );
      updateGameState({ teams: updatedTeams });
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="bg-navy-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center shadow-2xl">
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2 font-poppins">
          Question {gameState.currentQuestionIndex + 1} of {gameState.questions.length}
        </div>
        <div className="text-sm text-gray-500 mb-4 bg-navy-800/50 px-3 py-1 rounded-full inline-block font-poppins">
          Category: {currentQuestion.category}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-poppins">
          {currentQuestion.text}
        </h2>
      </div>

      <div className="mb-8">
        <p className="text-gray-400 mb-6 font-poppins">
          Current turn: <span className="text-blue-300 font-semibold">{currentTeam.name}</span>
        </p>
        <p className="text-gray-400 text-sm font-poppins">
          Think carefully and signal when ready to answer!
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleRevealClue}
          disabled={currentTeam.usedClue || showClue}
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black px-6 py-3 rounded-lg font-medium transition-all shadow-lg font-poppins"
        >
          <Lightbulb className="w-4 h-4" />
          {currentTeam.usedClue ? 'Clue Already Used' : showClue ? 'Clue Revealed' : 'Reveal Clue'}
        </button>

        {showClue && (
          <div className="bg-yellow-500/20 border border-yellow-400/50 rounded-lg p-4 max-w-2xl backdrop-blur-sm shadow-lg">
            <p className="text-yellow-300 font-medium font-poppins">
              💡 Clue: {currentQuestion.clue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};