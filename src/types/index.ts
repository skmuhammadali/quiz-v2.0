export interface Team {
  id: string;
  name: string;
  score: number;
  usedClue: boolean;
  hasAnsweredCurrentQuestion: boolean;
}

export interface Question {
  id: string;
  text: string;
  clue: string;
  answer: string;
  category: string;
}

export interface GameState {
  teams: Team[];
  questions: Question[];
  currentQuestionIndex: number;
  currentTeamIndex: number;
  timeLeft: number;
  isTimerRunning: boolean;
  isGameStarted: boolean;
  isAnswerBoardVisible: boolean;
  currentAnswer: string;
  winningTeam: string | null;
  gamePhase: 'setup' | 'playing' | 'answer-board' | 'finished';
  competitionLogo: string | null;
  competitionName: string;
  isHeaderVisible: boolean;
}

export interface GameContextType {
  gameState: GameState;
  updateGameState: (updates: Partial<GameState>) => void;
  addTeam: (name: string) => void;
  removeTeam: (id: string) => void;
  startGame: () => void;
  resetGame: () => void;
  nextQuestion: () => void;
  handleCorrectAnswer: () => void;
  handleWrongAnswer: () => void;
  handleTimeUp: () => void;
  showAnswerBoard: (answer: string, winner?: string) => void;
  continueGame: () => void;
  setCompetitionLogo: (logo: string | null) => void;
  setCompetitionName: (name: string) => void;
  toggleHeader: () => void;
}