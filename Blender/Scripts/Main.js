function Load(Id){
	if(Id == "OpA"){
		e = document.getElementById(Id);
		e.style.color = "blue";
		console.log("OpA clicked!");
		location.replace("https://markthorne159.github.io/AniMark/index.html");
	}
	else {
		console.log("Different option.");
	}
}

//Change the colour of the element back to normal when mouse is released.
function MainColour(Id){
	e = document.getElementById(Id);
		e.style.color = "white";
}

function Focus(Id){
	Target = document.getElementById(Id);
	Text = Target.innerHTML;
	console.log(Text);
	Title = document.getElementById(Text);
    Title.scrollIntoView();
}
