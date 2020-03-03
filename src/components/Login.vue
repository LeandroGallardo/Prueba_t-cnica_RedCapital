<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form action="">
          <div class="form-group">
            <label for="nombre" class="h5">Nombre</label>
            <input type="text"
              class="form-control"
              id="nombre"
             />
          </div>
          <div class="form-group">
            <label for="nombre" class="h5">Contraseña</label>
            <input type="password"
                  class="form-control" 
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
