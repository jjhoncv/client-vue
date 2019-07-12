<template>
  <div>
    <StyledTitle>My title styled</StyledTitle>
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 4!</h3>
  </div>
</template>
<script>
import { StyledTitle } from "./styled";
export default {
  components: { StyledTitle },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
