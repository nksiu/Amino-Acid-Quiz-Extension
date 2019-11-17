var acids = ["alanine.png",  
			 "arginine.png", 
			 "asparagine.png", 
			 "aspartate.png",
			 "cysteine.png", 
			 "glutamate.png", 
			 "glutamine.png", 
			 "glycine.png", 
			 "histidine.png", 
			 "isoleucine.png", 
			 "leucine.png", 
			 "lysine.png", 
			 "methionine.png", 
			 "phenylalanine.png", 
			 "proline.png", 
			 "serine.png", 
			 "threonine.png", 
			 "tryptophan.png",
			 "tyrosine.png",
			 "valine.png"];
var acid = acids[Math.floor(Math.random()*acids.length)];

var myImg = document.createElement("img");
myImg.src = `images/${acid}`;
document.getElementById("chosen_amino").appendChild(myImg);

document.addEventListener('DOMContentLoaded', function() {
	var submitButton = document.getElementById("enter_button");
	submitButton.addEventListener('click', function(){
		var submittedAnswer = document.getElementById("input_text").value;
		var answer = cleanName(acid);

		if (submittedAnswer === answer){
			document.getElementById("amino_name").innerHTML = `Good job, the answer is indeed ${answer}`;
		}else {
			document.getElementById("amino_name").innerHTML = `Incorrect, the answer was ${answer}`;
		}

		document.getElementById("input_text").value = "";
	}, false);
}, true);

function cleanName(str) {
	for (var i = 0; i < str.length; i++){
		if (str[i] == "."){
			return str.substring(0, i);
		}
	}
}
