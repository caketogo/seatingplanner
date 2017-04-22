'use strict'




class Droppable{

  constructor(object,params=[]){
    console.log(params);
  }

}


module.exports = class Floorplan{




  constructor(canvas,floorplan){

    this.canvas =  new window.Fabric.fabric.Canvas('canvas');

    //this.registerEvents(canvas);
    this.droppables = [];
    this.tables = [];
    this.guests = [];
    this.objects =[];
    this.moving = null;

    //return canvas;

  }

  addTable(table)
  {
    var table = new Table(this.canvas,table);
    this.droppables.push(new Droppable(table,{
      allowed: 'guest',

    }))
    this.tables.push(table);
  }

  addGuest(guest)
  {

    this.guests.push(new Guest(this.canvas,guest));
  }


  checkDroppables()
  {
    console.log('check dropping');

  }

  register()
  {
    var self = this;
    this.canvas.on('object:moving',function(e){
          this.fire('mouse:over', { target: null, e: e });

    });
  }





}
