<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/welcome.jpg">
    <HelloWorld msg="Bienvenue sur mon projet vue app 2"/>
    <HelloWorld msg="Cliquer sur l'onglet carte de France pour accéder à celle-ci"/>
    <HelloWorld msg="Avant cela si vous voulez une explication sur le fonctionnement"/>
    <router-link to="/help">Informations</router-link>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
