class Cat{
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  }
  sound(text){
    alert(this.name + text);
  }
  touchMouse(mouse){
    if (this.speed > mouse.speed){
      alert(this.name + " da bat duoc chuot  " +mouse.name);
    }
  }
  eatMouse(mouse){
    if(mouse.status){
      this.weight += mouse.weight;
      mouse.status = false;
      alert(this.name + " da an thit " +mouse.name);
    }
  }
}
