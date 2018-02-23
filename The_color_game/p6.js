
var colors = generateRandomColors(6);
//note : while defininfg such colors leave a gap between the ',' and the number - this is how they are used
//note: while compairing use the style.backgroundColor property since writing only background returns all properties of background
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy_btn = document.querySelector("#easy_btn");
var hard_btn = document.querySelector("#hard_btn");

var mode="hard";

colorDisplay.textContent=pickedColor;

easy_btn.addEventListener("click",function(){
	this.classList.add("selected")
	hard_btn.classList.remove("selected");// thios will reomve the class that make a selected button from hard_btn if it had that
	mode="easy";

	//creating new colors array os size 3
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])//is not null
			squares[i].style.background = colors[i];
		else
			squares[i].style.display="none";	//to hide the bottom 3 squares
			//to unhide the display we can set it to style.dosplay="block"
	}
})

hard_btn.addEventListener("click",function(){
	this.classList.add("selected");
	easy_btn.classList.remove("selected");
	mode="hard";

	//creating new squares
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
		squares[i].style.background=colors[i];
})

resetButton.addEventListener("click",function(){
	colors = (mode==="hard")?generateRandomColors(6) : generateRandomColors(3); //get the new set of colors
	pickedColor = pickColor();// pick a new color
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	messageDisplay.textContent="";
	this.textContent="New Colors";
})

for(var i=0;i<squares.length;i++)
{
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of picked color
		var clickedColor = this.style.backgroundColor;

		if(pickedColor === clickedColor)
		{
			//making the colors of all squares to the correct color
			messageDisplay.textContent="Correct!";
			resetButton.textContent = "Play Again?"
			for(var j=0;j<squares.length;j++)
			{
				squares[j].style.background = pickedColor;
			}
			h1.style.background=clickedColor;
			h1.style.color="White";

		}
		else
		{
			this.style.background = "#232323";//making the color same as background
			messageDisplay.textContent="Try Again";
		}
	});
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);// floor function is used since the random function denerated a decimal number therefore to get a whole number
	return colors[random];
}

function generateRandomColors(n)
{
	var arr=[];

	for(var i=0;i<n;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	//pick rgb(0-255,0-255,0-255)
	var r = Math.floor(Math.random()*256);//generate from 0 to 255
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256); 
	var rgb="rgb("+r+", "+g+", "+b+")";
	return rgb;
}