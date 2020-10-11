class Car {
    // Write code under this line
    static getSpecs(car){
      return (`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);        
   }     
    constructor(set,speed=0,isOn=false,distance=0){
      this.speed = speed;
      this._price = set.price;
      this.maxSpeed = set.maxSpeed;
      this.isOn = isOn;
      this.distance = distance;
   }     
   get price() {
      return this._price;
   }
   set price(value) {
       return this._price = value;
   }
   turnOn() {
      this.isOn = true;
   }
   turnOff() {
       this.isOn = false;
       if(!this.isOn) {
          this.speed =0;
       }         
   }
   accelerate(value) {
      let resSpeed = this.speed+value
      if(this.maxSpeed<resSpeed){
          this.speed=this.maxSpeed
       }else{
         this.speed=resSpeed;
       }
   }
   decelerate(value) {
       let newSpeed =this.speed-value
      if (newSpeed>=0){
          this.speed=newSpeed
      } else {
        this.speed=0
      }
   }
   drive(hours) {
       if (this.isOn){
          this.distance += hours*this.speed
       }      
   }
   }
   
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000
   