// Word database with hints and additional clues
const wordDatabase = [
    {
        word: 'SERENITY',
        hint: 'A state of peaceful calm and tranquility',
        clues: ['Opposite of chaos', 'Meditation target', 'Zen-like feeling']
    },
    {
        word: 'MELODY',
        hint: 'A sequence of musical notes that form a tune',
        clues: ['What you hum in the shower', 'Part of a song', 'Catchy tune']
    },
    {
        word: 'TWILIGHT',
        hint: 'The soft light from the sun at sunrise or sunset',
        clues: ['Time between day and night', 'Golden hour', 'Vampire book series']
    },
    {
        word: 'WHISPER',
        hint: 'To speak very softly, almost inaudibly',
        clues: ['Secret conversation', 'Library voice', 'Barely audible']
    },
    {
        word: 'GENTLE',
        hint: 'Mild, kind, and tender in nature or behavior',
        clues: ['Not aggressive', 'With tender feelings', 'Easy on the eyes']
    },
    {
        word: 'DREAM',
        hint: 'A series of images and thoughts during sleep',
        clues: ['Night visions', 'Goal or aspiration', 'REM stage']
    },
    {
        word: 'STARLIGHT',
        hint: 'The light that comes from distant stars',
        clues: ['Twinkling above', 'Ancient light', 'Night sky beacon']
    },
    {
        word: 'PATIENCE',
        hint: 'The capacity to accept delay without frustration',
        clues: ['Virtue in Buddhism', 'Standing in line', 'Test of the soul']
    },
    {
        word: 'EMBRACE',
        hint: 'To hold someone close in your arms',
        clues: ['Warm greeting', 'Comforting gesture', 'Accept willingly']
    },
    {
        word: 'HARMONY',
        hint: 'The combination of elements that work well together',
        clues: ['Orchestrated balance', 'No conflict', 'Barbershop quartet']
    },
    {
        word: 'NURTURE',
        hint: 'To care for and help something grow',
        clues: ['Raise with affection', 'Feed and develop', 'Parental act']
    },
    {
        word: 'BEACON',
        hint: 'A light or signal that guides or warns people',
        clues: ['Lighthouse tower', 'Signal of hope', 'Navigation aid']
    },
    {
        word: 'CRADLE',
        hint: 'A small bed for a baby, or to hold gently',
        clues: ['Infant\'s bed', 'Rock back and forth', 'iPhone product']
    },
    {
        word: 'SLUMBER',
        hint: 'A deep, peaceful sleep',
        clues: ['Snooze time', 'Pleasant naps', 'Party game']
    },
    {
        word: 'SOOTHE',
        hint: 'To calm or comfort someone who is upset',
        clues: ['Make peaceful', 'Alleviate pain', 'Ease tension']
    },
    {
        word: 'BLISS',
        hint: 'Perfect happiness or joy',
        clues: ['Ultimate contentment', 'Cloud nine feeling', 'State of peace']
    },
    {
        word: 'LULLABY',
        hint: 'A gentle song sung to help someone sleep',
        clues: ['Twinkle twinkle little star', 'Mothers\' tool', 'Soft melody for rest']
    },
    {
        word: 'GLOW',
        hint: 'To shine with a soft, steady light',
        clues: ['Luminescence', 'Radiant brilliance', 'After workout appearance']
    },
    {
        word: 'WARMTH',
        hint: 'The quality of being pleasantly warm or affectionate',
        clues: ['Cozy comfort', 'Friendly feeling', 'Heat embracing']
    },
    {
        word: 'PEACEFUL',
        hint: 'Free from disturbance or conflict',
        clues: ['Serene and quiet', 'No war or violence', 'Tranquil state']
    },
    {
        word: 'ADVENTURE',
        hint: 'An exciting or unusual experience',
        clues: ['Thrilling journey', 'Seek the unknown', 'Bold expedition']
    },
    {
        word: 'WONDER',
        hint: 'A feeling of amazement or the desire to know something',
        clues: ['Curiosity spark', 'Awe and amazement', 'Question mark feeling']
    },
    {
        word: 'KINSHIP',
        hint: 'Family relationship or a sense of connection',
        clues: ['Bond with relatives', 'Sense of belonging', 'Family ties']
    },
    {
        word: 'WISDOM',
        hint: 'Deep knowledge and good judgment',
        clues: ['Lesson from experience', 'Understanding truth', 'Ancient sage quality']
    },
    {
        word: 'COURAGE',
        hint: 'The ability to face difficulty without fear',
        clues: ['Brave heart action', 'Facing the unknown', 'Lion quality']
    },
    {
        word: 'TRIUMPH',
        hint: 'A great victory or achievement',
        clues: ['Victory celebration', 'Success feeling', 'Roman show of power']
    },
    {
        word: 'JUBILEE',
        hint: 'A special anniversary or celebration of rejoicing',
        clues: ['Celebration year', 'Diamond milestone', 'Party occasion']
    },
    {
        word: 'SOLITUDE',
        hint: 'The state of being alone in a peaceful way',
        clues: ['Alone but comfortable', 'Personal retreat', 'Hermit\'s condition']
    },
    {
        word: 'LEGACY',
        hint: 'Something passed down from previous generations',
        clues: ['Inheritance gift', 'Historical impact', 'Family heritage']
    },
    {
        word: 'TREASURE',
        hint: 'Something precious and valuable',
        clues: ['Hidden riches', 'Pirates seek this', 'Chest of gold']
    },
    {
        word: 'MYSTERY',
        hint: 'Something difficult to understand or explain',
        clues: ['Unsolved puzzle', 'Detective\'s work', 'Unknown secret']
    },
    {
        word: 'ENCHANT',
        hint: 'To delight or charm someone',
        clues: ['Cast a spell', 'Mesmerize completely', 'Magical appeal']
    },
    {
        word: 'BLOSSOM',
        hint: 'To flower and develop or flourish',
        clues: ['Spring flower opening', 'Personal growth', 'Cherry tree blooms']
    },
    {
        word: 'FLOURISH',
        hint: 'To grow and develop successfully',
        clues: ['Thrive and prosper', 'Reach potential', 'Decorative mark']
    },
    {
        word: 'RADIANT',
        hint: 'Shining brightly with light or joy',
        clues: ['Glowing beauty', 'Happy face', 'Energy bursting']
    },
    {
        word: 'JUBILANT',
        hint: 'Filled with joy and excitement',
        clues: ['Extremely happy', 'Celebration mood', 'Exultant feeling']
    },
    {
        word: 'SERENE',
        hint: 'Calm, peaceful, and untroubled',
        clues: ['Zen garden feeling', 'Meditative state', 'Undisturbed mind']
    },
    {
        word: 'ELEGANT',
        hint: 'Graceful and stylish in appearance',
        clues: ['High fashion', 'Refined taste', 'Sophisticated style']
    },
    {
        word: 'ENCHANTMENT',
        hint: 'The state of being delightfully charmed',
        clues: ['Magical spell effect', 'Bewitched feeling', 'Fascination state']
    },
    {
        word: 'LUMINOUS',
        hint: 'Full of light or glowing brightly',
        clues: ['Bright and shining', 'Glowing in dark', 'Light emitting']
    },
    {
        word: 'SERAPHIM',
        hint: 'Celestial beings in religious traditions',
        clues: ['Heavenly angels', 'Divine beings', 'Sky dwellers']
    }
];

// Game state
let gameState = {
    currentWord: null,
    attempts: 0,
    maxAttempts: 6,
    score: 0,
    streak: 0,
    hintsUsed: 0,
    maxHints: 2,
    gameActive: false,
    usedIndices: new Set()
};

// DOM Elements
const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const skipBtn = document.getElementById('skipBtn');
const newGameBtn = document.getElementById('newGameBtn');
const hintElement = document.getElementById('hint');
const wordPattern = document.getElementById('wordPattern');
const feedback = document.getElementById('feedback');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const streakDisplay = document.getElementById('streak');
const hintsLeft = document.getElementById('hintsLeft');

// Initialize game
function initGame() {
    gameState.attempts = 0;
    gameState.hintsUsed = 0;
    gameState.maxHints = 2;
    gameState.gameActive = true;
    gameState.currentWord = getRandomWord();

    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.focus();
    feedback.textContent = '';
    feedback.className = 'feedback';
    message.textContent = '';
    message.className = 'message';
    hintBtn.disabled = false;
    submitBtn.disabled = false;
    skipBtn.disabled = false;

    updateHintsDisplay();
    updateWordPattern();
}

// Get a random word that hasn't been used recently
function getRandomWord() {
    let index;
    do {
        index = Math.floor(Math.random() * wordDatabase.length);
    } while (gameState.usedIndices.has(index) && gameState.usedIndices.size < wordDatabase.length);

    gameState.usedIndices.add(index);

    // Keep only last 5 used indices to allow some repetition
    if (gameState.usedIndices.size > 5) {
        const arr = Array.from(gameState.usedIndices);
        gameState.usedIndices.delete(arr[0]);
    }

    return wordDatabase[index];
}

// Update word pattern display (show blanks)
function updateWordPattern() {
    const word = gameState.currentWord.word;
    const blanks = word.split('').map(() => '_').join(' ');
    wordPattern.textContent = blanks;
    hintElement.textContent = gameState.currentWord.hint;
}

// Update hints display
function updateHintsDisplay() {
    hintsLeft.textContent = gameState.maxHints - gameState.hintsUsed;
}

// Show hint
function showHint() {
    if (gameState.hintsUsed < gameState.maxHints) {
        gameState.hintsUsed++;
        const clues = gameState.currentWord.clues;
        const clueIndex = gameState.hintsUsed - 1;
        if (clueIndex < clues.length) {
            feedback.textContent = `💡 Hint: ${clues[clueIndex]}`;
            feedback.className = 'feedback neutral';
        }
        updateHintsDisplay();

        if (gameState.hintsUsed >= gameState.maxHints) {
            hintBtn.disabled = true;
        }
    }
}

// Handle guess submission
function handleGuess() {
    const guess = guessInput.value.trim().toUpperCase();

    if (!guess) {
        feedback.textContent = 'Please enter a word!';
        feedback.className = 'feedback neutral';
        return;
    }

    if (!gameState.gameActive) {
        return;
    }

    gameState.attempts++;

    if (guess === gameState.currentWord.word) {
        // Correct guess!
        gameState.score += calculatePoints();
        gameState.streak++;
        gameState.gameActive = false;

        wordPattern.textContent = gameState.currentWord.word;
        feedback.textContent = '✓ Correct!';
        feedback.className = 'feedback correct';
        message.textContent = `🎉 Great job! You got it in ${gameState.attempts} ${gameState.attempts === 1 ? 'attempt' : 'attempts'}!`;
        message.className = 'message success';

        guessInput.disabled = true;
        submitBtn.disabled = true;
        hintBtn.disabled = true;
        skipBtn.disabled = true;

        updateScoreDisplay();

        setTimeout(() => {
            if (confirm('Ready for the next word? Click OK to continue!')) {
                initGame();
            }
        }, 2000);
    } else if (gameState.attempts >= gameState.maxAttempts) {
        // Out of attempts
        gameState.streak = 0;
        gameState.gameActive = false;

        wordPattern.textContent = gameState.currentWord.word;
        feedback.textContent = '✗ Out of attempts!';
        feedback.className = 'feedback incorrect';
        message.textContent = `The word was: ${gameState.currentWord.word}`;
        message.className = 'message failure';

        guessInput.disabled = true;
        submitBtn.disabled = true;
        hintBtn.disabled = true;
        skipBtn.disabled = true;

        updateScoreDisplay();

        setTimeout(() => {
            if (confirm('Game Over! Ready to try again? Click OK to continue!')) {
                initGame();
            }
        }, 2000);
    } else {
        // Incorrect guess, but attempts remaining
        const remaining = gameState.maxAttempts - gameState.attempts;
        feedback.textContent = `✗ Not quite! ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`;
        feedback.className = 'feedback incorrect';
    }

    guessInput.value = '';
    guessInput.focus();
}

// Skip current word
function skipWord() {
    gameState.streak = 0;
    wordPattern.textContent = gameState.currentWord.word;
    message.textContent = `The word was: ${gameState.currentWord.word}`;
    message.className = 'message failure';
    gameState.gameActive = false;

    updateScoreDisplay();

    setTimeout(() => {
        initGame();
    }, 1500);
}

// Calculate points based on attempts and hints used
function calculatePoints() {
    let points = 100;
    points -= (gameState.attempts - 1) * 10; // Deduct points for each attempt
    points -= gameState.hintsUsed * 15;       // Deduct points for hints used
    return Math.max(10, points);              // Minimum 10 points
}

// Update score display
function updateScoreDisplay() {
    scoreDisplay.textContent = gameState.score;
    streakDisplay.textContent = gameState.streak;
}

// Event listeners
submitBtn.addEventListener('click', handleGuess);
hintBtn.addEventListener('click', showHint);
skipBtn.addEventListener('click', skipWord);
newGameBtn.addEventListener('click', () => {
    gameState.score = 0;
    gameState.streak = 0;
    updateScoreDisplay();
    initGame();
});

// Allow Enter key to submit guess
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});

// Start the game
initGame();
updateScoreDisplay();
