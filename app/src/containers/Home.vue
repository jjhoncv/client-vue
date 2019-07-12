<template>
  <div>
    <img :src="logo" />
    <Welcome name="World" />
  </div>
</template>

<script>
import Welcome from "./../components/welcome";
import logo from "./../../src/assets/imgs/dockervue.jpg";

export default {
  data() {
    return {
      logo
    };
  },
  components: {
    Welcome
  }
};
</script>