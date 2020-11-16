var nums=6;
var color=generate_random_color(nums);
var new_game=document.querySelector("#new_game");
var square=document.querySelectorAll(".square");
var picked_color=random_color();
var color_display=document.querySelector("#display");
var message=document.querySelector("#message");
var btnEasy=document.querySelector("#easy");
var btnHard=document.querySelector("#hard");
var h1=document.querySelector("h1");

btnHard.classList.add("sometonew");
btnEasy.addEventListener("click",function()
{
	 this.classList.add("sometonew");
	 btnHard.classList.remove("sometonew");
	 nums=3;
	 color=generate_random_color(nums);
	 picked_color=random_color();
	 color_display.textContent=picked_color;
	 for(var i=0;i<square.length;i++)
	 {
	 	if(color[i])
	 	{
	 		square[i].style.background=color[i];
	 	}
	 	else
	 	{
	 		square[i].style.display="none";
	 	}
	 }
	 h1.style.background="steelblue";
	 message.textContent="";
	 new_game.textContent="New game!!";

});

btnEasy.addEventListener("mouseover",function()
{
	btnEasy.classList.add("sometonew");
	btnHard.classList.remove("sometonew");
	new_game.classList.remove("sometonew");
});

btnHard.addEventListener("mouseover",function()
{
	btnEasy.classList.remove("sometonew");
	new_game.classList.remove("sometonew");
	btnHard.classList.add("sometonew");
});

new_game.addEventListener("mouseover",function()
{
	btnEasy.classList.remove("sometonew");
	btnHard.classList.remove("sometonew");
	this.classList.add("sometonew");
});

btnHard.addEventListener("click",function()
{
	 new_game.textContent="New game!!";
	 this.classList.add("sometonew");
	 btnEasy.classList.remove("sometonew");
	 nums=6;
	 color=generate_random_color(nums);
	 picked_color=random_color();
	 color_display.textContent=picked_color;
	 for(var i=0;i<square.length;i++)
	 {
	 	if(color[i])
	 	{
	 		square[i].style.display="block";
	 		square[i].style.background=color[i];
	 	}
	 	else
	 	{
	 		square[i].style.display="none";
	 	}
	 }
	 h1.style.background="steelblue";
	 message.textContent="";
});

new_game.addEventListener("click",function()
{
	// this.classList.add("sometonew");
	new_game.textContent="New game!!";
	color=generate_random_color(nums);
	picked_color=random_color();
	color_display.textContent=picked_color;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=color[i];
	}
	h1.style.background="steelblue";
	message.textContent="";

});


		
for(var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];
	color_display.textContent=picked_color;
	square[i].addEventListener("click",function()
	{
		var clicked_color=this.style.background;
		if(clicked_color==picked_color)
		{

			message.textContent="Correct!";
			change_color(picked_color);
			h1.style.background=picked_color;
			new_game.textContent="Play Again";	
		}
		else
		{
			this.style.background="#232323";
			message.textContent="Try Again!";
		}
	});
}

function change_color(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=color;
	}
}
function random_color()
{
	var New=Math.floor(Math.random()*color.length);
	return color[New];
}
function generate_random_color(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
// get random color and push into arr
arr.push(newcolor());

}
return arr;
}

function newcolor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green +", " +blue +")";
}
