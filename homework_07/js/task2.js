var isPlayAgain = true, isContinueGame = false; 

while (isPlayAgain) {

    if (isContinueGame) {
        maxNumberRange += 5, tryCount = 3;
        attempts[0] = attempts[0] * 3;
        attempts[1] = attempts[0] / 2;
        attempts[2] = Math.floor(attempts[1] / 2);

    } else {
        var maxNumberRange = 5, tryCount = 3, attempts = [10, 5, 2], totalPrize = 0;
    }
    
    var isStartGame = confirm(`Do you want to play a game?`);
    
    if (isStartGame == true) {
        var randNumber = Math.floor(Math.random() * (maxNumberRange - 0 + 1) + 0);
    
        console.log(randNumber);
        
        for(var i = 0; i < tryCount; i++) {
            var inputValue = prompt(`Enter a number from 0 to ${maxNumberRange}\nAttempts left: ${tryCount - i}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${attempts[i]}$\n`);
            if (!isNaN(parseInt(inputValue)) && isFinite(inputValue) && Math.sign(inputValue) == 1 && parseInt(inputValue) == randNumber) {
                totalPrize += attempts[i];
                i = 3;
                isContinueGame = confirm(`Your prize is: ${totalPrize}$. Maby you wants to continue a game?`);
                if (isContinueGame) {
                    isPlayAgain = true;
                } else {
                    isPlayAgain = false;
                }
                 
            }
            if (i == 2) {
               isPlayAgain = confirm(`Thank you for a game. Your prize is: ${totalPrize}$. Maby you wants to play again?`);
               isContinueGame = false;
            }
        }
    
    } else {
        console.log(`You did not become a millionaire`);
        isPlayAgain = false;
    }
}



