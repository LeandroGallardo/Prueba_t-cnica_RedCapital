<template>
    <div class="container">
        <div class="row">
          <div class="col-md-4">
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import md5 from 'md5';
import axios from 'axios';
export default {
  props: ['id','pass'],
  methods:{
    
  },
  mounted(){
    var localid = window.localStorage.getItem('rut');
    var localpass = window.localStorage.getItem('pass');


    if((localid === this.id) && (localpass=== md5(this.pass))){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    
    
    }else{
      console.log('no entra aqui');
    }
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
