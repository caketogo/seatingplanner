  
window.Fabric = require('fabric');


class Guest





Vue.component('home', {
    props: ['user'],

    
    mounted() {

    	var canvas = new window.Fabric.fabric.Canvas('canvas');

    	//make a table
        var table = new fabric.Circle(
        {
    		radius: 50, 
    		left: 275, 
    		top: 75, 
    		fill: '#aac'
    
  		});
        //make a guest
           var guest = new fabric.Circle(
        {
    	radius: 20, 
    	left: 200, 
    	top: 200, 
    	fill: '#555'
    
  		})


  		canvas.add(table);
  		canvas.add(guest);
  		 /* Bring active object to the front of the canvas */
        canvas.on('mouse:down', function (e) {
            if (!(typeof (e.target) === 'undefined')) {
                canvas.bringToFront(e.target);
            }
        });

        canvas.on('object:moving', function (e) {
        	
        });

        guest.on('mousedown',function(e){
        	console.log('down');
        });

         guest.on('mouseup',function(e){
        	console.log('up');
        });
        




  		canvas.on('drag:start', function(e) {


  console.log(e.target); // should contain info on the clicked object
});
    }
});
