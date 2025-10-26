import React, { createContext, useContext, useState, useCallback } from 'react';
import { GameState, GameContextType, Team } from '../types';
import { questions } from '../data/questions';

const initialGameState: GameState = {
  teams: [],
  questions,
  currentQuestionIndex: 0,
  currentTeamIndex: 0,
  timeLeft: 25,
  isTimerRunning: false,
  isGameStarted: false,
  isAnswerBoardVisible: false,
  currentAnswer: '',
  winningTeam: null,
  gamePhase: 'setup',
  competitionLogo: null,
  competitionName: 'Technical Quiz Competition',
  isHeaderVisible: true
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const updateGameState = useCallback((updates: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...updates }));
  }, []);

  const addTeam = useCallback((name: string) => {
    const newTeam: Team = {
      id: `team-${Date.now()}-${Math.random()}`,
      name,
      score: 0,
      usedClue: false,
      hasAnsweredCurrentQuestion: false
    };
    setGameState(prev => ({
      ...prev,
      teams: [...prev.teams, newTeam]
    }));
  }, []);

  const removeTeam = useCallback((id: string) => {
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.filter(team => team.id !== id)
    }));
  }, []);

  const startGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isGameStarted: true,
      gamePhase: 'playing',
      isTimerRunning: true,
      teams: prev.teams.map(team => ({ ...team, hasAnsweredCurrentQuestion: false }))
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      ...initialGameState,
      competitionLogo: gameState.competitionLogo,
      competitionName: gameState.competitionName,
      teams: gameState.teams.map(team => ({ 
        ...team, 
        score: 0, 
        usedClue: false, 
        hasAnsweredCurrentQuestion: false 
      }))
    });
  }, [gameState.teams, gameState.competitionLogo, gameState.competitionName]);

  const nextQuestion = useCallback(() => {
    setGameState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      if (nextIndex >= prev.questions.length) {
        return {
          ...prev,
          gamePhase: 'finished',
          isTimerRunning: false
        };
      }

      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        currentTeamIndex: (prev.currentTeamIndex + 1) % prev.teams.length,
        timeLeft: 25,
        isTimerRunning: true,
        isAnswerBoardVisible: false,
        currentAnswer: '',
        winningTeam: null,
        gamePhase: 'playing',
        teams: prev.teams.map(team => ({ ...team, hasAnsweredCurrentQuestion: false }))
      };
    });
  }, []);

  const handleCorrectAnswer = useCallback(() => {
    const currentTeam = gameState.teams[gameState.currentTeamIndex];
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(team => 
        team.id === currentTeam.id 
          ? { ...team, score: team.score + 10, hasAnsweredCurrentQuestion: true }
          : team
      ),
      isTimerRunning: false,
      isAnswerBoardVisible: true,
      currentAnswer: currentQuestion.answer,
      winningTeam: currentTeam.name,
      gamePhase: 'answer-board'
    }));
  }, [gameState.teams, gameState.currentTeamIndex, gameState.questions, gameState.currentQuestionIndex]);

  const handleWrongAnswer = useCallback(() => {
    const currentTeam = gameState.teams[gameState.currentTeamIndex];
    
    setGameState(prev => {
      const updatedTeams = prev.teams.map(team => 
        team.id === currentTeam.id 
          ? { ...team, hasAnsweredCurrentQuestion: true }
          : team
      );

      // Check if all teams have answered
      const allTeamsAnswered = updatedTeams.every(team => team.hasAnsweredCurrentQuestion);
      
      if (allTeamsAnswered) {
        return {
          ...prev,
          teams: updatedTeams,
          isTimerRunning: false,
          isAnswerBoardVisible: true,
          currentAnswer: prev.questions[prev.currentQuestionIndex].answer,
          winningTeam: null,
          gamePhase: 'answer-board'
        };
      } else {
        // Move to next team who hasn't answered
        let nextTeamIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
        while (updatedTeams[nextTeamIndex].hasAnsweredCurrentQuestion) {
          nextTeamIndex = (nextTeamIndex + 1) % prev.teams.length;
        }

        return {
          ...prev,
          teams: updatedTeams,
          currentTeamIndex: nextTeamIndex,
          timeLeft: 25,
          isTimerRunning: true
        };
      }
    });
  }, [gameState.teams, gameState.currentTeamIndex]);

  const handleTimeUp = useCallback(() => {
    handleWrongAnswer();
  }, [handleWrongAnswer]);

  const showAnswerBoard = useCallback((answer: string, winner?: string) => {
    setGameState(prev => ({
      ...prev,
      isTimerRunning: false,
      isAnswerBoardVisible: true,
      currentAnswer: answer,
      winningTeam: winner || null,
      gamePhase: 'answer-board'
    }));
  }, []);

  const continueGame = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const setCompetitionLogo = useCallback((logo: string | null) => {
    setGameState(prev => ({ ...prev, competitionLogo: logo }));
  }, []);

  const setCompetitionName = useCallback((name: string) => {
    setGameState(prev => ({ ...prev, competitionName: name }));
  }, []);

  const toggleHeader = useCallback(() => {
    setGameState(prev => ({ ...prev, isHeaderVisible: !prev.isHeaderVisible }));
  }, []);

  const value: GameContextType = {
    gameState,
    updateGameState,
    addTeam,
    removeTeam,
    startGame,
    resetGame,
    nextQuestion,
    handleCorrectAnswer,
    handleWrongAnswer,
    handleTimeUp,
    showAnswerBoard,
    continueGame,
    setCompetitionLogo,
    setCompetitionName,
    toggleHeader
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};