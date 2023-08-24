//4.write a class to calculate uber price.
class Uber {
    constructor(BaseFare=15,CostPerKms=2,CostPerMinute=1,BookingFee=10){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerKms;
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    
    }
    totalPrice(time, kms){
      this.time =time*this.CostPerMinute;
      this.kms = kms*this.CostPerMile
      
        console.log(this.BaseFare+this.BookingFee+
        this.time+this.kms)
    }
}
let bike = new Uber();
bike.totalPrice(60,200); 
bike.totalPrice(15,20);
