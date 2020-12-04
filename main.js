document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var player = new entity([200, 350], [0, 0], [0, 0], 2);

var progress = 1000/60;

var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var update = function()
{
  physics();
  movement();
};

var render = function()
{
  // Background -----
  context.fillStyle = "#00BFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Player -----
  context.fillStyle = "#FF0000";
  context.fillRect(player.position[0], player.position[1], 50, 50);
  
  // Player's Gun -----
  gunPositionCheck();
  
  if (gunPosition == "Left")
  {
    context.fillStyle = "#3D3D3D";
    context.fillRect(player.position[0] + 1, player.position[1] + 15, 35, 15);
    context.fillRect(player.position[0] + 21, player.position[1] + 30, 15, 15);
    context.fillRect(player.position[0] + 10, player.position[1] + 30, 3, 5);
    context.fillRect(player.position[0] + 13, player.position[1] + 32, 8, 3);
    context.fillRect(player.position[0] + 17, player.position[1] + 30, 2, 1.7);
    context.fillRect(player.position[0] + 2, player.position[1] + 14.5, 2, 1.5);
    context.fillRect(player.position[0] + 34, player.position[1] + 14.5, 2, 1.5);
  }
  if (gunPosition == "Right")
  {
    context.fillStyle = "#3D3D3D";
    context.fillRect(player.position[0] + 14, player.position[1] + 15, 35, 15);
    context.fillRect(player.position[0] + 14, player.position[1] + 30, 15, 15);
    context.fillRect(player.position[0] + 36, player.position[1] + 30, 3, 5);
    context.fillRect(player.position[0] + 29, player.position[1] + 32, 8, 3);
    context.fillRect(player.position[0] + 31, player.position[1] + 30, 2, 1.7);
    context.fillRect(player.position[0] + 15, player.position[1] + 14.5, 2, 1.5);
    context.fillRect(player.position[0] + 47, player.position[1] + 14.5, 2, 1.5);
  }
  
  // Debug Info -----
  context.fillStyle = "#000000";
  context.font = "10px Verdana";
  context.fillText("Player Position: " + player.position[0] + ", " + player.position[1], 10, 20);
  context.fillText("Player Velocity: " + player.velocity[0] + ", " + player.velocity[1], 10, 30);
  context.fillText("Player Acceleration: " + player.acceleration[0] + ", " + player.acceleration[1], 10, 40);
  context.fillText("Keys Pressed: Left: " + keys.left + " Right: " + keys.right + " Up: " + keys.up, 10, 50);
};

var main = function()
{
  update();
  render();
};

setInterval(main, progress);