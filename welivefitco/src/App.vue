<template>
  <v-app>
      <br>
      <br>
      <h1 class="text-center">
        <v-icon large color="primary">
          mdi-account
        </v-icon> WeLiveFitCo Coach Matching
      </h1>
      <br>
      <br>

      <v-main>
        <Form/>
      </v-main>
    
  </v-app>
</template>

<script>
import Form from './components/Form';
//import Output from './components/Output';

export default {
  name: 'App',

  components: {
    Form,
    //Output,
  },

  data: () => ({
    //
  }),
};
</script>
