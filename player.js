
class entity
{
  constructor(position, velocity, acceleration, runSpeed)
  {
    this.position = [200, 400];
    this.velocity = [0, 0];
    this.acceleration = [0, 0];
    this.runSpeed = 1;
  }
}

var gunPosition = null;

var gunPositionCheck = function()
{
  if (keys.left) gunPosition = "Left";
  if (keys.right) gunPosition = "Right";
};