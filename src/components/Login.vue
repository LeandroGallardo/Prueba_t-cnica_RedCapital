<template>
  <div
    class="container d-flex justify-content-center align-items-center flex-column"
  >
    <div class="row justify-content-center w-100">
      <img alt="Red Capital" src="../assets/logo-redcapital.jpg" />
    </div>
    <div class="row py-4 w-100">
      <div class="col-lg-6 col-sm-12 col-md-10 m-auto">
        <form action="">
          <div class="form-group">
            <label for="nombre" class="h5">Rut</label>
            <input type="text" class="form-control" id="nombre" v-model="msg" />
          </div>
          <div class="form-group">
            <label for="nombre" class="h5">Contraseña</label>
            <input type="password" class="form-control" v-model="pass" />
          </div>
          <button
            type="button"
            class="btn btn-primary mb-2 w-100"
            v-on:click="saludar"
          >
            <span class="h5">Enviar</span>
          </button>
          <div>
            <h5 class="h5 loading" id="loading" v-if="loading"><i class="fas fa-circle-notch fa-spin"></i> Cargando... </h5>
          </div>
          <h5 class="h5 user" id="userlogin" v-if="userlogin">{{ userlogin }}</h5>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'md5';
import router from "../router";
export default {
  data() {
    return {
      name: "Login",
      props: {
        msg: String,
        pass: String
      },
      loading: false,
      userlogin: null
    }
  },
  mounted() {
  },
  methods: {
    saludar: async function(event) {
      event.preventDefault();
      this.loading= true;
      try{ 
       await axios
        .post('https://crm.redcapital.cl/api/login',{
          "rut": this.msg,
          "password": this.pass,
          "remember_me": 1
        })
        .then(response => {
          if(response.data.message === 'success login'){
            window.localStorage.clear();
            window.localStorage.setItem('rut',this.msg);
            window.localStorage.setItem('pass',md5(this.pass));
            this.userlogin= response.data.message;
              router.push({ name: 'post', params: {id: this.msg, pass: this.pass}})
            } else {
            this.userlogin= response.data[0];
          }
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
            this.loading = false;
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
}

</style>
