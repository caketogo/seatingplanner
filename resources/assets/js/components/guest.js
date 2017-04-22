'use strict'

module.exports = class Guest{
  

  constructor(canvas,guest){
    this.canvas = canvas;

    this.circle = new fabric.Circle(
        {
           
          originX: 'center', 
          originY: 'center',
          radius: 40,
          fill: guest.color,
    

      })


    this.text = new fabric.Text(
      guest.name,
      {
        originX: 'center', 
        originY: 'center',
        fill : 'black', 
        fontFamily: 'Verdana',
        fontSize: 13,
      }
    )

    var group = new fabric.Group([this.circle,this.text],{left:200,top:100});
    this.canvas.add(group)

  }
}