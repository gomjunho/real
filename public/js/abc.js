  
  var x1=0;
  var targetX1=0;
  var x2=0;
  var targetX2=0;
  var x3=0;
  var targetX3=0;

var y=0;
var targetY=0;
var count=0;
  
  function smoothMove(){
   
   x1=x1+0.01*(targetX1-x1);
   document.getElementById("gall_1").style.left=x1+"px";
   
   x2=x2+0.02*(targetX2-x2);
   document.getElementById("gall_2").style.left=x2+"px";
   
   x3=x3+0.03*(targetX3-x3);
   document.getElementById("gall_3").style.left=x3+"px";
   
   y=y+0.1*(targetY-y);
   document.getElementById("mas_gall2").style.left=y+"px";
  }

  window.onload=function(){
      setInterval("smoothMove()",10);
   
    var temp = document.getElementsByClassName('gall2_set').cloneNode(true);
	document.getElementById('mas_gall2').appendChild(temp);
  }
 
  /*번호*/
  var j=1;
  function sn(){
    for(k=1;k<=3;k++){
          document.getElementById("n"+k).style.backgroundColor="hotpink";
    }
   
   document.getElementById("n"+j).style.backgroundColor="gray";
   
   
  }

var q=1;
function sn2(){
  for(p=1;p<=4;p++){
    document.getElementById("2n"+p).style.backgroundColor="skyblue";
  
 }
 
 document.getElementById("2n"+q).style.backgroundColor="gray";
}


/*버튼*/
function smPrev(){
	targetY = targetY +900;
	if ( targetY > 0) { 
	    x= -900*4; 
	    targetX= -900*3; 
	}

	q--;
	if (q <1) { q=4; };
	sn2();
}
function smNext(){
	targeY = targetY -900;
	if ( targetX < -900*7) { 
	    x= -600*2; 
	    targetX= -600*3; 
	}
	
	q++;
	if (q >3) { q=1; };
	sn2();
}
