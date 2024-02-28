document.addEventListener('DOMContentLoaded', function() {
    const wordElement = document.getElementById('word');
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');

    const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    let currentWordIndex = 0;
    let currentWord = words[currentWordIndex];
    let timeLeft = 10; // in seconds

    function displayWord() {
        wordElement.textContent = currentWord;
    }

    function nextWord() {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWord = words[currentWordIndex];
        displayWord();
        resetTimer();
    }

    function startTimer() {
        const timerInterval = setInterval(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                messageElement.textContent = 'Time is up! Next word.';
                setTimeout(function() {
                    messageElement.textContent = '';
                    nextWord();
                }, 1000);
            }
        }, 1000);
    }

    function resetTimer() {
        timeLeft = 10;
        startTimer();
    }

    submitButton.addEventListener('click', function() {
        const guess = guessInput.value.trim().toLowerCase();
        if (guess === currentWord) {
            messageElement.textContent = 'Correct! Next word.';
            setTimeout(function() {
                messageElement.textContent = '';
                nextWord();
            }, 1000);
        } else {
            messageElement.textContent = 'Incorrect! Try again.';
        }
        guessInput.value = '';
    });

    displayWord();
    startTimer();
});
