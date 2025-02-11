document.addEventListener("DOMContentLoaded", function () {
    let points = localStorage.getItem("points") || 0;
    document.getElementById("points").innerText = points;
});

function checkAnswer() {
    let answer = document.getElementById("answer").value;
    let correctAnswer = (2 * 4) - (3 * 1); // Determinant calculation
    
    if (parseInt(answer) === correctAnswer) {
        let points = parseInt(localStorage.getItem("points")) || 0;
        points += 10;
        localStorage.setItem("points", points);
        document.getElementById("points").innerText = points;
        document.getElementById("result").innerText = "Correct! +10 points";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
    }
}
