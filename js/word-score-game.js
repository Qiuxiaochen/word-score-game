var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;

function startGame() {
	addNumbersFromBag();
	displayHand();
	
};



function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	for(i=YOUR_HAND.length; i < 7; i++){
		YOUR_HAND[i] = getAvailableLetter();
	}
	
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		
		
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}



function getAvailableLetter(){
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
	console.log(randomLetter[0]);
	return randomLetter[0];
}


function findWordToUse(){
 //TODO Your job starts here.
 	function getInput() {

 		let ret = [];
 		for (let i=0; i < 20; i++) {

 			let letter = $(`#letter-${i}`).text().trim();
 			let points = $(`#points-${i}`).text().trim();
 		
 			if (letter.length > 0 && points.length > 0 && points > 0) {
 				ret.push({letter:letter, points: points})
 			}
 		}
 		return ret;
 	}

 	function writeOutput(word) {
 		$('#human-word-input').val(word)
 		$('#human-find-word-button').click()
 	}

 	function retireTheHand() {
 		$('#retire-hand-button').click()
 	}

 	function combine(index, rawString, usedChar){
 		if (index == usedChar.length){
 			lowercaseString = rawString.toLowerCase()
 			console.log("Combination: "+lowercaseString)
 			if(Word_List.isInList(lowercaseString)){
 				candidate.push(rawString)
 				console.log("Bingo")
 			}
 			return
 		}
 		for (let i = 0; i <= rawString.length; i++){
 			newString = rawString.substring(0,i) + usedChar[index] + rawString.substring(i,rawString.length)
 			combine(index+1, newString, usedChar)
 		}

 	}

 	function findCandidate(usedChar, remainChar) {

 		console.log("RemainChar: "+remainChar)

 		if (remainChar.length == 0){
 			return
 		}

 		for (let i = 0; i < remainChar.length; i++){
 			char = remainChar[i]
 			usedChar.push(char)
 			combine(0, "", usedChar)

 			tempRemainChar = remainChar
 			tempRemainChar.splice(i, 1)
 			findCandidate(usedChar, tempRemainChar)
 			usedChar.pop()
 		}
 	}

 	counter = 0
 	while (input = getInput()){
	 	input = getInput()
	 	var candidate = []
	 	let charList = []
	 	for (let i=0; i < input.length; i++){
	 		charList.push(input[i]["letter"])
	 	}

	 	findCandidate([], charList)

	 	result = ""
	 	maxScore = 0
	 	for (let index = 0; index < candidate.length; index++){
	 		score = 0
	 		item = candidate[index]
	 		for (let sindex=0; sindex < item.length; sindex++){
	 			for (let iindex = 0; iindex < input.length; iindex++){
	 				if (input[iindex]["letter"] == item[sindex]){
	 					score += parseInt(input[iindex]["points"])
	 					break;
	 				}
	 			}
	 		}
 			if (score > maxScore){
 				result = item
 			}
	 	}

	 	if(result == ""){
	 		retireTheHand()
	 	}else{
	 		writeOutput(item)
	 	}
 	}
}
function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});