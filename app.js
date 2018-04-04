function Airplane(model, seatingCapacity, maxSpeed) {
            this.model = model;
            this.seatingCapacity = seatingCapacity;
            this.maxSpeed = maxSpeed;
            this.print = function print() {
                console.log("Model : " + this.model);
                console.log("Seating Capacity : " + this.seatingCapacity);
                console.log("Maximum Speed : " + this.maxSpeed);
            }
        }

        var x = new Airplane('Jet 1', 450, 600);
        console.log(x.print());
        var y = new Airplane('Jet 2', 180, 1300);
        console.log(y.print());
        var z = new Airplane('Jet 3', 600, 1000);
        console.log(z.print());

        x.seatingCapacity += 10; //increasing the seating capacity by 10
       console.log(x.print());
        y.seatingCapacity += 10;
        console.log(y.print());
        z.seatingCapacity += 10;
       console.log(z.print());
        
        
        

        delete x.maxSpeed; //using delete keyword to delete the given max speed
        console.log(x);
        delete y.maxSpeed;
        console.log(y);
        delete z.maxSpeed; 
        console.log(z);

       x.avgSpeed = 300;   //adding avd speed 
        y.avgSpeed = 300;
        z.avgSpeed = 300;

        console.log(x);
        console.log(y);
        console.log(z);
