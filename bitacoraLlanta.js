const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const swal = window.swal

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight




function Tire(tireId,axisId,x,y,width,height,numberTire,brand){
    this.tireId = tireId
    this.axisId = axisId
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.numberTire = numberTire
    this.brand = brand

}

function Axis(axisId,x,y,width,height){
    this.axisId = axisId
    this.x = x 
    this.y = y 
    this.width = width
    this.height = height
}

function Truck(truckId, axisNumber,tireNumber,x,y,width,height, axles = [], tires = []){
    this.truckId = truckId
    this.axisNumber = axisNumber
    this.tireNumber = tireNumber
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
    this.axles = axles 
    this.tires = tires 
    //console.log(axles.length)
    //console.log(tires.length)
    if (this.axisNumber > 0){
        for (i=1; i<= this.axisNumber; i ++){
            var xi = i
            var xx = this.x
            var xwidth = this.width
            var xheight = this.height
            var xy = this.y
            if(i === 1) {
                
            }
            if (i === 2){
                xy = xy + (this.height * 0.6)
            }
            if (i === 3){
                xy = xy + this.height
            }

            var axis = new Axis(xi,xx,xy,xwidth,xy)
            axles.push(axis)

            //tire axis one
            if (i === 1){
                //console.log(i+'tire axis')
                if (this.tireNumber > 0){
                    for (j = 1; j <= 2; j++){
                        //console.log(j + 'j')
                        if(j === 1) {
                            var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234561,'Hankook')
                        }
                        if(j === 2){
                            var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234562,'Firestone')
                        }
                        this.tires.push(tire)
                    }
                }
            }

            //tire axis two
            if(i === 2 ){
                if (this.tireNumber > 0){
                    for (j = 3; j <= 6; j++){
                        //console.log(j + 'j')
                        if(j === 3) {
                            var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 4)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234563,'Yokohama')
                        }
                        if(j === 4){
                            //dont change
                            var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234564,'Firestone')
                            //var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 5) {
                            //dont change
                            var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234565,'Brigstone')
                            //var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 6){
                            var tire = new Tire(j,xi,(xx + xwidth) + 20 + ((xwidth/10) * 2) ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234566,'Hankook')
                        }
                        this.tires.push(tire)
                    }
                }
            }

            //tire axis tree
            if(i === 3 ){
                if (this.tireNumber > 0){
                    for (j = 7; j <= 10; j++){
                        //console.log(j + 'j')
                        if(j === 7) {
                            var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 4)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234567,'Hankook')
                        }
                        if(j === 8){
                            //dont change
                            var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234568,'Birgstone')
                            //var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 9) {
                            //dont change
                            var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234569,'Pirelli')
                            //var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 10){
                            var tire = new Tire(j,xi,(xx + xwidth) + 20 + ((xwidth/10) * 2) ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2,1234510,'Hankook')
                        }
                        this.tires.push(tire)
                    }
                }
            }
        }
    }


    
}

Tire.prototype.draw = function() {
    ctx.beginPath()
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'gray';
    ctx.strokeRect(this.x,this.y,this.width,this.height)
    ctx.font = '20px serif';
    ctx.fillText(this.tireId, this.x + (this.width/2), this.y - 3);
}

// Tire.prototype.canvas.addEventListener = function() {
//     swal('click')
// }

Axis.prototype.draw = function() {
    
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    //console.log(this.x + this.width)
    ctx.moveTo(this.x - 20, this.y);
    ctx.lineTo(this.x + this.width + 20, this.y );
    ctx.stroke();
}

Truck.prototype.draw = function() {
    ctx.lineWidth = 1;
    //make chasis
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x+10, this.y - 10, this.width-20, this.height+20);
    //make axis
    //console.log(this.axisNumber)
    for(var i = 0; i < this.axles.length; i ++){
        this.axles[i].draw()
    }
    //make tires
    //console.log('array tires' + this.tires.length)
    for(var i=0; i< this.tires.length; i++){
        this.tires[i].draw()
    }
}

canvas.addEventListener('click', function(e) {
    // console.log('x=' + e.x)
    // console.log('y=' + e.y)
   
    // window.alert(truck1.tires[0].x +'-'+ truck1.tires[0].width + '\n' + (truck1.tires[0].y+20) +
    // '\nx='+ e.x +'-'+ 'y=' + e.y )
    
    

    for(i = 0; i<truck1.tires.length; i++){
        if(e.x > truck1.tires[i].x && e.x < (truck1.tires[i].x + truck1.tires[i].width)){
            if(e.y > truck1.tires[i].y+60 && e.y < (truck1.tires[i].y+60 + truck1.tires[i].height)){
                //window.alert('Llanta seleccionada ' + truck1.tires[i].tireId)
                swal('Posición Llanta: ' + truck1.tires[i].tireId,
                      'Marca:' + truck1.tires[i].brand + '\nId Llanta:' + truck1.tires[i].numberTire )
            }
            
            //window.alert('Llanta seleccionada ' + truck1.tire[i].tireId);
        }
    }

  })

var truck1 = new Truck(1,3,10,300,100,200,400)
truck1.draw()