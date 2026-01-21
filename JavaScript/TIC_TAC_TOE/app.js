let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".newGame");
let heading = document.querySelector(".heading");
let isOTurn = true;
let count = 0;

let winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (isOTurn) {
            box.innerText = "O";
            isOTurn = false;
            box.classList.add("red");
        } else {
            box.innerText = "X";
            isOTurn = true;
            box.classList.add("blue");
        }
        box.disabled = true;
        count++;
         
        checkWinner();
    })
});

const showWinner = (player) => {
    msg.innerText = `Winner is ${player}`;
    heading.classList.add("hide");
    msgContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    disableBoxes();
};

const draw = () => {
    msg.innerText = `DRAW!`;
    msgContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    heading.classList.add("hide");
    disableBoxes();
};

const resetGame = () => {
    isOTurn = true;
    count = 0;
    enableBoxes();
    heading.classList.remove("hide");
    msgContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("red");
        box.classList.remove("blue");
    }
};


const checkWinner = () => {
    for (let pattern of winCondition) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if(posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
                return
            }
        }
    }
    if (count === 9){
        draw();
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
