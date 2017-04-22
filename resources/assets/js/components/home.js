


Vue.component('home', {
    props: ['user'],

    data() {
        return {
            floorplan:null,
            guests: [
              {
                name:'simon',
                color:'#ccc',
                object:null

              },
              {
                name:'sophie',
                color:'#ccc',
                object:null
              }],
            table:{name:'guest table',color:'#345678'},

        };
    },
       

    mounted() {

        var floorplan = new Floorplan();
        floorplan.register();

      
        this.floorplan = floorplan;
        canvas = this.floorplan.canvas;

        canvas.on('object:moving',function(){
          console.log('something is moving on my canvas');
        });
        
        this.floorplan.on('mouse:over',function(){
               console.log('mouse over my floorplan');
        });
        floorplan.addTable(this.table);
      
        

        //put the guests in place
        this.guests.forEach(function(guest){
              floorplan.addGuest(guest);
        });
  
      
        /*
        var guest = new fabric.Circle(
        {
          radius: 20,
          left: 200,
          top: 200,
          fill: '#555'
        });
    */
        //canvas.add(guest);
    },

});
