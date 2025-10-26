import React from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { Header } from './components/Header';
import { TeamSetup } from './components/TeamSetup';
import { Timer } from './components/Timer';
import { QuestionDisplay } from './components/QuestionDisplay';
import { TeamScoreboard } from './components/TeamScoreboard';
import { AnswerBoard } from './components/AnswerBoard';
import { AdminControls } from './components/AdminControls';
import { GameFinished } from './components/GameFinished';

const GameContent: React.FC = () => {
  const { gameState } = useGame();

  if (gameState.gamePhase === 'setup') {
    return <TeamSetup />;
  }

  if (gameState.gamePhase === 'finished') {
    return <GameFinished />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-black to-navy-800 text-white font-poppins">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2 font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {gameState.competitionName}
              </h1>
              <p className="text-gray-400 font-poppins">Round 2 - Test your knowledge!</p>
            </div>

            <div className="flex justify-center">
              <Timer />
            </div>

            <QuestionDisplay />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <TeamScoreboard />
            
            <div className="bg-navy-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 font-poppins">Game Progress</h3>
              <div className="space-y-3 text-sm font-poppins">
                <div className="flex justify-between">
                  <span className="text-gray-400">Questions:</span>
                  <span>{gameState.currentQuestionIndex + 1} / {gameState.questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams:</span>
                  <span>{gameState.teams.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Left:</span>
                  <span>{gameState.timeLeft}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnswerBoard />
      <AdminControls />
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;