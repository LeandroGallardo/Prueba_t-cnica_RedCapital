<template>
<div  v-if="usuario">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <img alt="Red Capital" src="../assets/logo-redcapital.jpg" />
          </a>
        </li>
      </ul>
      <button class="btn btn-primary my-2 my-sm-0" type="button" v-on:click="cerrar">Cerrar Sesión</button>
    </div>
  </nav>
  <div class="container">
      <div class="row">
        <div class="col-md-4 py-5"  v-for="todo in todos" :key="todo.id" >
          <div class="card h-100" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">{{todo.title}}</h5>
              <p class="card-text">{{todo.body}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
<div v-else>
  <div class="container seccion-iniciar-sesion">
      <div class="row justify-content-center align-items-center h-100">
         
         <div class="w-100">
           <h5>Debe iniciar sesión</h5>
          <router-link to="/" class="btn btn-primary"><span class="h5">ir a página principal</span></router-link>
         </div>
      </div>
  </div>
</div>
</template>
<script>
import md5 from 'md5';
import axios from 'axios';
export default {
  data() {
    return {
      todos:null,
      usuario:false
    }
  },
  props: ['id','pass'],
  mounted(){
    var localid = window.localStorage.getItem('rut');
    var localpass = window.localStorage.getItem('pass');
    if((localid === this.id) && (localpass=== md5(this.pass))){
       this.traerDatos();
       this.usuario=true;
    }else{
      this.usuario = false;
    }
  },
  methods:{
    traerDatos() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => console.log(error));
    },
    cerrar: function() {
      window.localStorage.clear();
      this.usuario = false;
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 9;
}
.container {
  padding-top: 87px;
}
.seccion-iniciar-sesion{
  height: 100vh;
  padding: 0px;
}
</style>
