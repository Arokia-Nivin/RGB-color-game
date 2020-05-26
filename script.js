noSquares=6;
var colorArray;
var pickedColor;

var message=document.querySelector("#message");
var squares=document.querySelectorAll(".square");
var color=document.querySelector("#color");
var resetbutton=document.querySelector("#mainbutton");
var header=document.querySelector("h1");
var mode=document.querySelectorAll(".level");

gamestart();
function gamestart()
{
	setmode();
	reset();
	checksquares();
}
alert("Welcome. RGB Stands for (Red Green Blue). Test your RGB skills by playing this game. Have fun!!");

resetbutton.addEventListener("click",reset);

function setmode()
{
	for (var i=0;i<3;i++)
	{
		mode[i].addEventListener("click",function()
		{

			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			mode[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="EASY"? noSquares=3: this.textContent==="MEDIUM"? noSquares=6:noSquares=9;
			reset();
		});
	}
}


function checksquares()
{
	for (var i=0;i<noSquares;i++)
	{
		squares[i].addEventListener("click",function()
		{
			if (this.style.backgroundColor===pickedColor)
			{
				header.style.backgroundColor=pickedColor;
				resetbutton.textContent="PLAY AGAIN?";
				message.textContent="CORRECT";
				for (var i=0;i<noSquares;i++)
				{
					squares[i].style.backgroundColor=pickedColor;
				}

			}
			else
			{
				message.textContent="TRY AGAIN";
				this.style.backgroundColor="#232323";
			}

	});
}

}



function reset()
{
	header.style.backgroundColor="steelblue";
	message.textContent="";
	colorArray=generateColors(noSquares);
	pickedColor=colorArray[Math.floor(Math.random()*noSquares)];
	color.textContent=pickedColor;
	resetbutton.textContent="NEW COLORS";
	for (i=0;i<9;i++)
	{
		if (colorArray[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colorArray[i];
		}
		else
		{
			squares[i].style.display="none";
		}

	}
	checksquares();

}

function generateColors(num)
{
	var arr=[];
	for (var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")" ;
}