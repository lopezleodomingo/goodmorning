let letters = ["A", "B", "C", "D", "E", "F", 
	"G", "H", "I", "J", "K", "L", "M", "N", 
	"O", "P", "Q", "R", "S", "T", "U", "V", 
	"W", "X", "Y", "Z"];

letters.forEach( function(letter) {
	lettersDiv.innerHTML += `
		<div class="letter choice">
			${letter}
		</div>
	`;
});

let wrongGuess = 0;

letterBtns = document.querySelectorAll(".choice");
function letterBtnClick(e) {
	let letterClick = e.target.innerHTML.trim();
	let showAnswer = document.querySelectorAll(".letter"+letterClick);
	if(showAnswer.length == 0) {
		wrongGuess++;
		document.querySelector("#mistakeCounter").innerHTML += `
			<div class="ekis">X</div>
			`;
		if(wrongGuess == 4) {
			alert("Game Over  (╯°□°)╯︵ ┻━┻");
			location.reload(true)

		}
	} else {
		showAnswer.forEach( function(answerDiv) {
			answerDiv.innerHTML = letterClick;
		});
	}
	e.target.className = "disabledDiv";

	e.target.removeEventListener("click", letterBtnClick);
}

letterBtns.forEach( function(letterBtn) {
	letterBtn.addEventListener("click", letterBtnClick);
});

let phrase = "GOOD MORNING BEB I LOVE YOU MWAH";

for(let i=0; i<phrase.length; i++) {
	if(phrase[i] != " ") {
		answerDiv.innerHTML += `
			<div class="letter letter${phrase[i]}"></div>
		`;
	} else {
		answerDiv.innerHTML += `
			<div class="space"></div>
		`;
	}
	// console.log(phrase[i]);
}