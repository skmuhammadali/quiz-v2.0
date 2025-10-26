import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy, Medal, RotateCcw } from 'lucide-react';

export const GameFinished: React.FC = () => {
  const { gameState, resetGame } = useGame();

  const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-black to-navy-800 text-white flex items-center justify-center p-6 font-poppins">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6 shadow-lg shadow-yellow-400/30">
            <Trophy className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-4 font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {gameState.competitionName} Complete!
          </h1>
          <p className="text-gray-400 text-lg font-poppins">Congratulations to all teams for participating</p>
        </div>

        <div className="bg-navy-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Final Rankings</h2>
          
          <div className="space-y-4">
            {sortedTeams.map((team, index) => (
              <div
                key={team.id}
                className={`flex items-center justify-between p-6 rounded-xl shadow-lg ${
                  index === 0 ? 'bg-yellow-400/20 border border-yellow-400/50' :
                  index === 1 ? 'bg-gray-400/20 border border-gray-400/50' :
                  index === 2 ? 'bg-orange-500/20 border border-orange-500/50' :
                  'bg-navy-700/20 border border-navy-600/50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-poppins ${
                    index === 0 ? 'bg-yellow-400 text-black' :
                    index === 1 ? 'bg-gray-400 text-black' :
                    index === 2 ? 'bg-orange-500 text-white' :
                    'bg-navy-600 text-white'
                  }`}>
                    {index === 0 ? '🥇' :
                     index === 1 ? '🥈' :
                     index === 2 ? '🥉' :
                     index + 1}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold font-poppins">{team.name}</div>
                    <div className="text-gray-400 flex items-center gap-2 font-poppins">
                      <Medal className="w-4 h-4" />
                      {index === 0 ? 'Champion' :
                       index === 1 ? 'Runner-up' :
                       index === 2 ? 'Third Place' :
                       `${index + 1}${index + 1 === 4 ? 'th' : index + 1 === 5 ? 'th' : 'th'} Place`}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold font-poppins">{team.score}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={resetGame}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg font-poppins"
        >
          <RotateCcw className="w-5 h-5" />
          Start New Game
        </button>
      </div>
    </div>
  );
};