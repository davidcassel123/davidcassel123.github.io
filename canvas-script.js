// JavaScript Document
window.onload=function(){
	var canvas = document.getElementsById('flappy-monster-game')
	// Game Object
  var flappyMonster = new FlappyMonster(canvas);
  flappyMonster.start();

}
