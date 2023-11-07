function selectUserOption(move) {
    let randomAiMove = Math.floor(Math.random * 3 + 1);
    // Results: [-2, -1, 0, 1] = [Error, AI Win, Tie, User Win]
    let turnResult = rpsLogic(move, randomAiMove);

    toggleUserInput();
    stepAI(0, randomAiMove);

}

function stepAI(aiOption, move) {
    let aiButtons = document.getElementsByClassName('aiOption');
    let aiWait = document.getElementById('aiWaiting');

    for (let i = 0; i < aiButtons.length; i++) {
        aiButtons[i].classList.toggle('hidden');
    }
    aiWait.classList.toggle('hidden');

    if (aiOption === 1) {
        let aiMove = document.getElementById('ai' + move.toString());
        aiMove.disabled.toggle;
    }
}

function toggleUserInput() {
    let userButtons = document.getElementsByClassName('userOption');
    for (let i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled.toggle;
    }
}

function rpsLogic(userMove, aiMove) {
    // [1, 2, 3] = [Rock, Paper, Scissors]
    // Return values: [-1, 0, 1] = [AI, Tie, User]
    switch (userMove) {
        case 1:
            if (aiMove === 1) {
                return 0;
            } else if (aiMove === 2) {
                return -1;
            } else {
                return 1;
            }

        case 2:
            if (aiMove === 1) {
                return 1;
            } else if (aiMove === 2) {
                return 0;
            } else {
                return -1;
            }

        case 3:
            if (aiMove === 1) {
                return -1;
            } else if (aiMove === 2) {
                return 1;
            } else {
                return 0;
            }
        default:
            console.log("Error: Invalid option found");
            return -2;
    }
}