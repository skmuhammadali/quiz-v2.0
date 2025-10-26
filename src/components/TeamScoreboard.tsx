import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy, Zap, CheckCircle } from 'lucide-react';

export const TeamScoreboard: React.FC = () => {
  const { gameState } = useGame();

  const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-navy-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold text-white font-poppins">Leaderboard</h3>
      </div>

      <div className="space-y-3">
        {sortedTeams.map((team, index) => {
          const isCurrentTeam = gameState.teams[gameState.currentTeamIndex]?.id === team.id;
          const hasAnswered = team.hasAnsweredCurrentQuestion;
          
          return (
            <div
              key={team.id}
              className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                isCurrentTeam 
                  ? 'bg-blue-500/20 border border-blue-400 shadow-lg shadow-blue-500/20' 
                  : 'bg-navy-800/30 border border-gray-600'
              } ${
                hasAnswered ? 'ring-2 ring-green-400 shadow-green-400/20 animate-pulse' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-poppins ${
                  index === 0 ? 'bg-yellow-400 text-black' :
                  index === 1 ? 'bg-gray-400 text-black' :
                  index === 2 ? 'bg-orange-500 text-white' :
                  'bg-navy-600 text-white'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <div className={`font-semibold font-poppins ${isCurrentTeam ? 'text-white' : 'text-gray-200'}`}>
                    {team.name}
                  </div>
                  {isCurrentTeam && (
                    <div className="text-xs text-blue-300 flex items-center gap-1 font-poppins">
                      <Zap className="w-3 h-3" />
                      Current turn
                    </div>
                  )}
                  {hasAnswered && (
                    <div className="text-xs text-green-300 flex items-center gap-1 font-poppins">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold font-poppins ${isCurrentTeam ? 'text-white' : 'text-gray-200'}`}>
                  {team.score}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};