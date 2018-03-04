<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<title>JS연습</title>
<link href="css/defult.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/abc2.js"></script>
 
 


<body>
<div class="wrap">
 <h1>Yellow things in the beach!</h1>
 <p>taking a picture in the exciting moment </p>
 
 <div id="w_gall1">
 
  <div class="mas1">
    <div id="gall_1"><img src="images/gall1.png" alt="1"></div>
    <div id="gall_2"><img src="images/gall2.png" alt="2"></div>
    <div id="gall_3"><img src="images/gall3.jpg" alt="3"></div>
  </div>
   
   <div class="gall1_button">
    <ul class="nav">
     <li><a href="#" id="n1" onmouseover="j=1; sn(); targetX1=targetX2=targetX3=0-500*0"></a></li>
     <li><a href="#" id="n2" onmouseover="j=2; sn(); targetX1=targetX2=targetX3=0-500*1"> </a></li>
     <li><a href="#" id="n3" onmouseover="j=3; sn(); targetX1=targetX2=targetX3=0-500*2"> </a></li>
    </ul>
   </div>
  
 </div>
 
 
 
 <div id="w_gall2">
    
    <div class="mas2">
         <div id="mas_gall2">
          <ul class="gall2_set">
              <li><img src="images/gall2_1.jpg" alt="1"></li>
              <li><img src="images/gall2_2.jpg" alt="2"></li>
              <li><img src="images/gall2_3.jpg" alt="3"></li>
              <li><img src="images/gall2_4.jpg" alt="4"></li>
          </ul>
         </div>
    </div> 
     
     <div class="gall2_button">
      <ul>
       <li><a href="#" id="2n1"  onmouseover="q=1; sn2(); targetY=0-900*0"></a></li>
       <li><a href="#" id="2n2"  onmouseover="q=2; sn2(); targetY=0-900*1"></a></li>
       <li><a href="#" id="2n3"  onmouseover="q=3; sn2(); targetY=0-900*2"></a></li>
       <li><a href="#" id="2n4"  onmouseover="q=4; sn2(); targetY=0-900*3"></a></li>
      </ul>
     </div>
     
     <div class="prev"><a href="#" class="ion-chevron-left" onclick="smPrev();"></a> </div>
     <div class="next"><a href="#" class="ion-chevron-right" onclick="smNext();"></a>
     </div>

 
 </div>
 
</body>
