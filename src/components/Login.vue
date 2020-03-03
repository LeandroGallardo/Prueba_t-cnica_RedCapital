<template>
  <div class="container d-flex justify-content-center align-items-center flex-column">
    <div class="row justify-content-center w-100">
      <img alt="Red Capital" src="../assets/logo-redcapital.jpg" />
    </div>
    <div class="row py-4 w-100">
      <div class="col-lg-6 col-sm-12 col-md-10 m-auto">
        <form action="">
          <div class="form-group">
            <label for="nombre" class="h5">Nombre</label>
            <input type="text" class="form-control" id="nombre" v-model="msg" />
          </div>
          <div class="form-group">
            <label for="nombre" class="h5">Contraseña</label>
            <input type="password" class="form-control" v-model="pass" />
          </div>
          <button type="submit" class="btn btn-primary mb-2 w-100 ">
            <span class="h5">Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  date() {
    return {
      name: "Login",
      props: {
        msg: String,
        pass: String,
      }
    }
  },
  mounted() {
    axios
      .post('https://crm.redcapital.cl/api/login',{
        "rut": "16460269-9",
        "password": "123qwe",
        "remember_me": 1
      })
      .then(response => {
        console.log(response);
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100vh;
}

</style>
