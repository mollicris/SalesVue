<template>
  <v-app>
    <div id="login">
      <h1>Inicio de Sesión</h1>

      <v-text-field v-model="username" name="username"> </v-text-field>
      <v-text-field v-model="password" name="contraseña"> </v-text-field>
      <v-btn primary large block v-on:click="login">Login</v-btn>
      <br />
      <h3 v-show="errored" class="hideElement">
        El usuario y/o la contraseña es incorrecto. Intente nuevamente.
      </h3>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errored: false,
    };
  },
  methods: {
    login: function () {
      console.log("Este es un click");
    },
  },
};
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #cccccc;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>