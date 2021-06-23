class Mouse{
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;
  }
  sound(text){
    alert(this.name + "" + text);
  }

}
