<template>
  <footer class="footer px-4 mx-2">
    <b-row align-v="center" class="justify-content-lg-between">
      
      <b-col lg="6">
        <b-nav class="nav-footer justify-content-center justify-content-lg-end">

          <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
           About Us
          </b-nav-item>

        </b-nav>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>
<style></style>
