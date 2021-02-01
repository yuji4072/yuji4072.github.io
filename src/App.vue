<template>
  <v-app>
      <home></home>
      <history></history>
      <langage></langage>
      <writer></writer>
      <hobby></hobby>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import Hobby from './views/Hobby.vue';
import History from './views/History.vue';
import Writer from './views/Writer.vue';
import Langage from './views/Langage.vue';

export default {
  name: 'App',

  components: {
    Home,
    Hobby,
    History,
    Writer,
    Langage,
  },

  data: () => ({
  }),
};
</script>

