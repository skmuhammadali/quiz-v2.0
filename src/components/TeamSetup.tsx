import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Users, Plus, Trash2, Play, Upload, X, Building2 } from 'lucide-react';

export const TeamSetup: React.FC = () => {
  const { gameState, addTeam, removeTeam, startGame, setCompetitionLogo, setCompetitionName } = useGame();
  const [teamName, setTeamName] = useState('');
  const [competitionName, setCompetitionNameLocal] = useState(gameState.competitionName);
  const [logoPreview, setLogoPreview] = useState<string | null>(gameState.competitionLogo);

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamName.trim() && gameState.teams.length < 12) {
      addTeam(teamName.trim());
      setTeamName('');
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setLogoPreview(result);
        setCompetitionLogo(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoPreview(null);
    setCompetitionLogo(null);
  };

  const handleCompetitionNameChange = (name: string) => {
    setCompetitionNameLocal(name);
    setCompetitionName(name);
  };

  const handleStartGame = () => {
    if (gameState.teams.length >= 2) {
      startGame();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-black to-navy-800 text-white flex items-center justify-center p-6 font-poppins">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-800/50 backdrop-blur-sm border border-gray-700 rounded-full mb-6 shadow-xl">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {gameState.competitionName}
          </h1>
          <p className="text-gray-400 text-lg">Setup teams and customize competition details before starting</p>
        </div>

        <div className="bg-navy-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
          {/* Competition Setup */}
          <div className="mb-8 pb-8 border-b border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 font-poppins">
              <Building2 className="w-6 h-6 text-blue-400" />
              Competition Setup
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competition Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
                  Competition Name
                </label>
                <input
                  type="text"
                  value={competitionName}
                  onChange={(e) => handleCompetitionNameChange(e.target.value)}
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm font-poppins"
                  placeholder="Enter competition name..."
                />
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
                  Competition Logo
                </label>
                <div className="flex items-center gap-4">
                  {logoPreview ? (
                    <div className="relative">
                      <img 
                        src={logoPreview} 
                        alt="Logo Preview" 
                        className="h-16 w-16 object-contain bg-white rounded-lg p-2 shadow-lg"
                      />
                      <button
                        onClick={removeLogo}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors shadow-lg"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-16 w-16 bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Upload className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                  
                  <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg font-poppins">
                    <Upload className="w-4 h-4" />
                    Upload Logo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Team Management */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 font-poppins">Add Teams</h2>
            <form onSubmit={handleAddTeam} className="flex gap-4">
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name..."
                className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm font-poppins"
                maxLength={20}
              />
              <button
                type="submit"
                disabled={!teamName.trim() || gameState.teams.length >= 12}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg font-poppins"
              >
                <Plus className="w-4 h-4" />
                Add Team
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-2 font-poppins">
              {gameState.teams.length}/12 teams • Minimum 2 teams required to start
            </p>
          </div>

          {gameState.teams.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 font-poppins">Teams ({gameState.teams.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gameState.teams.map((team, index) => (
                  <div
                    key={team.id}
                    className="bg-navy-800/30 border border-gray-600 rounded-lg p-4 flex items-center justify-between hover:border-blue-500 transition-colors backdrop-blur-sm shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-medium text-white shadow-lg">
                        {index + 1}
                      </div>
                      <span className="font-medium font-poppins">{team.name}</span>
                    </div>
                    <button
                      onClick={() => removeTeam(team.id)}
                      className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleStartGame}
              disabled={gameState.teams.length < 2}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl font-poppins"
            >
              <Play className="w-5 h-5" />
              Start {gameState.competitionName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};