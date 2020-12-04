
var applyForce = function(force, x, y)
{
  player.acceleration[0] += force[0];
  player.acceleration[1] += force[1];
};

var airResistance = function(airdensity, area, velocity)
{
  this.airdensity = airdensity;
  this.area = area;
  this.velocity = velocity;
  
  return (((airdensity * area) / 2) * (Math.pow(velocity, 2))) * -1;
};

var collision = function(groundLevel)
{
  if (player.position[1] >= groundLevel)
  {
    player.position[1] = groundLevel;
    floor[1] = -9.81;
    
    player.velocity[1] = 0;
  }
  else
  {
    floor[1] = 0;
  }
  //
  if (player.position[0] >= canvas.width)
  {
    player.position[0] = -49;
  }
  if (player.position[0] <= -50)
  {
    player.position[0] = canvas.width;
  }
  //
};

var floor = [0, -9.81];
var gravity = [0, 9.81];
var wind = [0, 0];
var air = [airResistance(), 0];
var move = [0, 0];

var physics = function()
{
  //
  
  player.velocity[0] += player.acceleration[0];
  player.velocity[1] += player.acceleration[1];
  
  player.position[0] += player.velocity[0];
  player.position[1] += player.velocity[1];
  
  player.acceleration[0] = 0;
  player.acceleration[1] = 0;
  
  //
  
  player.acceleration[0] += floor[0];
  player.acceleration[1] += floor[1];
  
  player.acceleration[0] += gravity[0];
  player.acceleration[1] += gravity[1];
  
  player.acceleration[0] += wind[0];
  player.acceleration[1] += wind[1];
  
  player.acceleration[0] += move[0];
  player.acceleration[1] += move[1];
  
  player.acceleration[0] += air[0];
  player.acceleration[1] += air[1];
  
  collision(400);
};