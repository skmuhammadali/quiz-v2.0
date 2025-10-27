# Technical Quiz Competition - Complete Documentation

## 🎯 Overview
This is a modern, professional quiz competition application built with React and TypeScript. It features a navy blue and black theme with Poppins font, designed for educational institutions and corporate competitions.

## 🏗️ Application Structure

### Core Components
- **App.tsx** - Main application wrapper with game state management
- **GameContext.tsx** - Central state management for all game data
- **TeamSetup.tsx** - Initial setup page for teams and competition details
- **Header.tsx** - Professional header with logo and competition info
- **Timer.tsx** - Circular countdown timer with visual indicators
- **QuestionDisplay.tsx** - Main question presentation area
- **TeamScoreboard.tsx** - Live leaderboard with team status
- **AnswerBoard.tsx** - Answer reveal and game control overlay
- **AdminControls.tsx** - Administrative game management panel
- **GameFinished.tsx** - Final results and rankings display

## 🎮 Game Flow & Phases

### Phase 1: Setup (`gamePhase: 'setup'`)
**Purpose**: Configure competition details and register teams

**Features**:
- Competition name customization
- Logo upload and management
- Team registration (2-12 teams)
- Team name customization
- Validation before game start

**Navigation**: Automatically moves to Phase 2 when "Start Competition" is clicked

### Phase 2: Playing (`gamePhase: 'playing'`)
**Purpose**: Main quiz gameplay with questions and answers

**Features**:
- Question display with category information
- 25-second countdown timer per question
- Team turn management (clockwise rotation)
- Clue system (one per team for entire game)
- Real-time scoring and leaderboard
- Admin controls for game management

**Navigation**: Moves to Phase 3 when answer is provided or time expires

### Phase 3: Answer Board (`gamePhase: 'answer-board'`)
**Purpose**: Display correct answer and manage game progression

**Features**:
- Correct answer display
- Winner announcement (if applicable)
- Game continuation controls
- Automatic progression to next question

**Navigation**: Returns to Phase 2 for next question or moves to Phase 4 if game complete

### Phase 4: Finished (`gamePhase: 'finished'`)
**Purpose**: Display final results and rankings

**Features**:
- Complete leaderboard with rankings
- Medal system (🥇🥈🥉)
- Game reset functionality
- Final score preservation

## 🎛️ Button Functions & Rules

### Team Setup Page Buttons

#### "Add Team" Button
- **Function**: Adds new team to competition
- **Rules**: 
  - Requires non-empty team name
  - Maximum 12 teams allowed
  - Minimum 2 teams required to start
- **Validation**: Disabled when team name is empty or max teams reached

#### "Upload Logo" Button
- **Function**: Allows admin to upload competition logo
- **Rules**: 
  - Accepts image files only
  - Logo displays in header during game
  - Optional feature
- **File Types**: .jpg, .png, .gif, .svg

#### "Remove Team" (Trash Icon)
- **Function**: Removes team from competition
- **Rules**: 
  - Can remove any team during setup
  - Updates team numbering automatically
- **Location**: Next to each team name

#### "Start [Competition Name]" Button
- **Function**: Begins the quiz competition
- **Rules**: 
  - Requires minimum 2 teams
  - Disabled until requirement met
  - Irreversible action (starts timer)

### Game Page Buttons

#### Header Controls

##### "Show/Hide Header" Button
- **Function**: Toggles header visibility
- **Rules**: 
  - Available during gameplay only
  - Preserves screen space
  - Shows floating "Show Header" button when hidden

#### Question Area Buttons

##### "💡 Reveal Clue" Button
- **Function**: Shows hint for current question
- **Rules**: 
  - One clue per team for ENTIRE game
  - Once used, permanently disabled for that team
  - Changes to "Clue Already Used" after activation
  - Only available during team's turn

#### Timer Controls (Admin Only)

##### Timer Display
- **Function**: Shows remaining time (25 seconds default)
- **Visual Indicators**:
  - Green: >10 seconds remaining
  - Yellow: 5-10 seconds remaining
  - Red: <5 seconds remaining (pulsing animation)

#### Team Scoreboard Features

##### Team Status Indicators
- **Current Turn**: Blue glow and "⚡ Current turn" indicator
- **Question Completed**: Green glow with "✅ Completed" indicator
- **Team Rankings**: Numbered badges (🥇🥈🥉 for top 3)

### Admin Controls (Admin Mode Only)

#### "✅ Correct" Button
- **Function**: Awards points for correct answer
- **Rules**: 
  - Adds 10 points to current team
  - Stops timer immediately
  - Shows answer board with celebration
  - Advances to next question
  - Next team gets first turn on new question

#### "❌ Wrong" Button
- **Function**: Handles incorrect answer
- **Rules**: 
  - No point deduction
  - Marks team as completed for current question
  - Passes turn to next team
  - If all teams completed, shows answer board

#### "⏭ Next Question" Button
- **Function**: Force advance to next question
- **Rules**: 
  - Admin override function
  - Skips current question entirely
  - Advances team turn clockwise
  - Resets timer to 25 seconds

#### "⏸ Pause/Resume Timer" Button
- **Function**: Controls timer state
- **Rules**: 
  - Toggles between pause and resume
  - Button text changes dynamically
  - Useful for technical issues or discussions

#### "🔄 Reset Timer" Button
- **Function**: Resets timer to 25 seconds
- **Rules**: 
  - Automatically starts timer after reset
  - Useful for technical issues
  - Doesn't change current team or question

#### "🔄 Reset Game" Button
- **Function**: Completely restarts the game
- **Rules**: 
  - Returns to team setup phase
  - Preserves team names and competition settings
  - Resets all scores to zero
  - Confirmation required (destructive action)

### Answer Board Buttons

#### "▶️ Next Question" Button
- **Function**: Continues to next question after answer display
- **Rules**: 
  - Available after correct answer or all teams completed
  - Advances question counter
  - Resets timer and team status
  - Changes to "Finish Quiz" on last question

#### "🏁 Finish Quiz" Button
- **Function**: Ends the competition (appears on last question)
- **Rules**: 
  - Only appears on final question
  - Moves to final results phase
  - Calculates final rankings

### Final Results Buttons

#### "🔄 Start New Game" Button
- **Function**: Resets entire application
- **Rules**: 
  - Returns to team setup phase
  - Preserves competition name and logo
  - Resets all scores and progress
  - Keeps team list but resets scores

## 🎯 Scoring System

### Point Values
- **Correct Answer**: +10 points
- **Wrong Answer**: 0 points (no penalty)
- **Time Expired**: 0 points (treated as wrong)

### Ranking System
- Teams ranked by total points (highest first)
- Ties broken by team registration order
- Real-time leaderboard updates
- Medal system for top 3 positions

## ⚙️ Game Rules & Logic

### Team Turn Management
1. **Initial Turn**: First registered team starts
2. **Turn Rotation**: Clockwise after each question
3. **Question Completion**: Team marked as completed after attempt
4. **All Teams Completed**: Answer board shows, next question begins

### Timer Rules
1. **Duration**: 25 seconds per team turn
2. **Warning**: Visual warning at 5 seconds remaining
3. **Time Up**: Treated as wrong answer, turn passes
4. **Admin Control**: Can pause, resume, or reset timer

### Clue System Rules
1. **Availability**: One clue per team for entire game
2. **Usage**: Can only be used during team's turn
3. **Persistence**: Once used, permanently unavailable
4. **Display**: Shows until question changes or turn ends

### Question Progression
1. **Total Questions**: 40 questions across 4 categories
2. **Categories**: Computer Networks, DBMS, Software Engineering, Operating Systems
3. **Advancement**: Automatic after answer board or admin override
4. **Completion**: Game ends after all questions answered

## 🔧 Admin Features

### Admin Mode Toggle
- **Activation**: Click "🔒 Admin Mode: OFF" button
- **Visual Indicator**: Button changes to green "🔓 Admin Mode: ON"
- **Access**: Reveals admin control panel
- **Security**: No password protection (trust-based system)

### Admin Capabilities
- Manual answer marking (correct/wrong)
- Timer control (pause/resume/reset)
- Question skipping
- Team turn override
- Game reset functionality

## 🎨 Visual Design Elements

### Color Scheme
- **Primary**: Navy blue (#0c4a6e, #075985)
- **Secondary**: Black (#000000)
- **Accent**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Text**: White (#ffffff)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Hierarchy**: Clear heading and body text distinction

### Effects
- **Glassmorphism**: Backdrop blur with transparency
- **Glow Effects**: Team completion indicators
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Depth and elevation indicators

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adapted grid)
- **Desktop**: > 1024px (full three-column layout)

### Mobile Optimizations
- Touch-friendly button sizes
- Simplified navigation
- Condensed information display
- Optimized timer and scoreboard

## 🔄 State Management

### Game State Structure
```typescript
interface GameState {
  teams: Team[]                    // Team data and scores
  questions: Question[]            // Question database
  currentQuestionIndex: number     // Current question (0-based)
  currentTeamIndex: number         // Current team turn (0-based)
  timeLeft: number                 // Timer countdown
  isTimerRunning: boolean         // Timer state
  isGameStarted: boolean          // Game activation
  isAnswerBoardVisible: boolean   // Answer overlay
  currentAnswer: string           // Correct answer text
  winningTeam: string | null      // Winner of current question
  gamePhase: GamePhase           // Current game phase
  competitionLogo: string | null  // Uploaded logo
  competitionName: string         // Competition title
  isHeaderVisible: boolean        // Header display state
}
```

### State Updates
- **Immutable Updates**: All state changes create new objects
- **Context Provider**: Centralized state management
- **Real-time Updates**: Immediate UI reflection of state changes
- **Persistence**: Scores maintained throughout session

## 🚀 Deployment & Performance

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and building
- **Deployment**: Static hosting compatible

### Performance Features
- **Component Optimization**: Efficient re-rendering
- **Lazy Loading**: Components loaded as needed
- **Memory Management**: Proper cleanup of timers and events
- **Responsive Images**: Optimized logo display

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Features**: ES6+, CSS Grid, Flexbox support required

## 🔍 Troubleshooting

### Common Issues
1. **Timer Not Starting**: Check admin mode and game phase
2. **Teams Not Advancing**: Verify all teams have attempted question
3. **Logo Not Displaying**: Check file format and size
4. **Buttons Not Working**: Ensure proper game phase and admin mode

### Reset Procedures
1. **Soft Reset**: Use "Reset Timer" for timer issues
2. **Question Reset**: Use "Next Question" to skip problematic questions
3. **Game Reset**: Use "Reset Game" to restart completely
4. **Browser Reset**: Refresh page for complete reset

This documentation covers all aspects of the quiz application. The system is designed to be intuitive while providing comprehensive control over the competition flow.