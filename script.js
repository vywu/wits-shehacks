function chColor(color) {
   document.body.style.background = color;
   document.getElementsByClassName("masthead")[0].style.background = color;
   document.getElementsByClassName("site-wrapper")[0].style.background = color;
}

function chBorderColor(color, id) {
	console.log(document.getElementById(id).style.color);
	document.getElementById(id).style.border = "1px";
	document.getElementById(id).style.color = color;
}

document.addEventListener('DOMContentLoaded',function(event){
/*balleffects*/
// Some random colors
  // console.log("here!");
const colors = ["#292e4f", "#ce6767", "white", "#f3b5b5", "#262d50","#FABC3C"];

const numBalls = 70;
const balls = [];

for (var i = 0; i < numBalls; i++) {
  var ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${2.5*Math.random()}em`;
  ball.style.height = ball.style.width;
  ball.style.transform=""
  
  balls.push(ball);
  document.getElementById("landing").append(ball);
}

// Keyframes

// function updateTransition() {
//   var el = document.querySelector("div.box");
   
//   if (el) {
//     el.className = "box1";
//   } else {
//     el = document.querySelector("div.box1");
//     el.className = "box";
//   }
   
//   return el;
// }

// var intervalID = window.setInterval(updateTransition, 7000);
function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }
 // console.log(get_browser());
 if(get_browser().name=="Chrome")
 {
  balls.forEach(function(el, i, ra){
  var to = {
    x: Math.random() * (i % 2 === 0 ? -20 : 20),
    y: Math.random() * 20
  };

  var anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
}
else
{
  setTimeout(function(){
    balls.forEach(function(ball){
    var to = {
    x: Math.random() * (i % 2 === 0 ? -20 : 20),
    y: Math.random() * 20
    };
      console.log("HERE");
      ball.style.transform="translate(0,0)";
      ball.style.webkitTransform="translate(0,0)";
      console.log("AFTER");
      ball.style.transform=`translate(${to.x}rem, ${to.y}rem)`;
      ball.style.webkitTransform=`translate(${to.x}rem, ${to.y}rem)`;
    }
        
  )},(Math.random()+1)*2000);
}

//safari ur a waste lol
// setTimeout(function(){
//   for (var ball of balls) {
//    var to = {
//     x: Math.random() * (i % 2 === 0 ? -20 : 20),
//     y: Math.random() * 20,
//     z: (Math.random()+1)*2000
//   };
//   ball.style.setProperty("-webkit-transform",`translate(${to.x}rem, ${to.y}rem)`);
//   ball.style.setProperty("transform",`translate(${to.x}rem, ${to.y}rem)`);
//   ball.style.setProperty("-webkit-transition",` -webkit-transform ${to.z}s ease-in-out;`);
//   ball.style.setProperty("transition",`transform ${to.z}s ease-in-out;`);
  // var anim = ball.animate(
  //   [
  //     { transform: "translate(0, 0)" },
  //     { transform: `translate(${to.x}rem, ${to.y}rem)` }
  //   ],
  //   {
  //     duration: (Math.random() + 1) * 2000, // random duration
  //     direction: "alternate",
  //     fill: "both",
  //     iterations: Infinity,
  //     easing: "ease-in-out"
  //   });
// }},3000);
//update the balls after user clicked the enter button
/*ballefect*/

  // array with texts to type in typewriter
  var dataText = [ "WOMAN","MUSTANG","CODER", "DESIGNER",  "NEWBIE","ENGINEER","EXPLORER"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback,2000);

      
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (i>=dataText.length){
        setTimeout(function() {
          //start from the beginning
          StartTextAnimation(0);
        }, 600);
     }
     // check if dataText[i] exists
   else {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }

  function fnCallback(){
    console.log("called");
    
  }
  // start the text animation
  StartTextAnimation(0);
});

function hideLanding(){
  console.log("lol");
  document.querySelector("#landing").remove();
  document.querySelector(".mainPage").style.display="inline";

}