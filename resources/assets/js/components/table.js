'use strict'

module.exports = class Table{

  constructor(canvas,table){

    this.canvas = canvas;

    this.rect = new fabric.Rect(
        {
           
          originX: 'center', 
          originY: 'center',
          width: 150,
          height:150,
          fill: table.color
      });



    this.text = new fabric.Text(
      'table',
      {
        originX: 'center', 
        originY: 'center',
        fill : 'white', 
        fontFamily: 'Verdana',
        fontSize: 18,
      }
    )

    var group = new fabric.Group([this.rect,this.text],{left:100,top:100});
    group.name='table';
    this.canvas.add(group)

  }
}
