
var keys = { left: false, right: false, up: false, space: false };

var keyUpHandler = function(e)
{
  if (e.key == "ArrowLeft") keys.left = false;
  if (e.key == "ArrowRight") keys.right = false;
  if (e.key == "ArrowUp") keys.up = false;
  if (e.key == "Space") keys.space = false;
};

var keyDownHandler = function(e)
{
  if (e.key == "ArrowLeft") keys.left = true;
  if (e.key == "ArrowRight") keys.right = true;
  if (e.key == "ArrowUp") keys.up = true;
  if (e.key == "Space") keys.space = true;
};

var movement = function()
{
  if (keys.left) move[0] = -player.runSpeed;
  if (keys.right) move[0] = player.runSpeed;
  if (keys.up) move[1] = -14;
  
  if (keys.left == false && keys.right == false) move[0] = 0;
  if (keys.up == false) move[1] = 0;
};