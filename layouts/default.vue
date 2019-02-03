<style lang="less"> 

@import '~assets/less/colors.less';

html, body {
  max-width: 100%;
  padding: 0; margin: 0;
  font-family: 'Sarabun';
}

a, a:hover {
  color: inherit;
}

ul {
  list-style: none;
  padding-left: 0;
}

input[type="checkbox"] {
  text-align: center;
}

.btn-outline-primary {
  color: @blue;
  border-color: @blue;
  background: white;
  &:hover {
    background: @blue;
  }
}

.btn-primary {
  color: white !important;
  background: @blue;
  border-color: @blue;
}

.btn-outline-danger {
  color: @orange;
  border-color: @orange;
  background: white;
  &:hover {
    background: @orange;
  }
}

.btn-danger {
  color: white !important;
  background: @orange;
  border-color: @orange;

  &:hover {
    background: @orange - #111;
  }
}

</style>

<template>
  <div>
    <navbar/>
    <nuxt />
  </div>
</template>

<script> 
let Navbar = () => import('../components/Navbar')
export default {
  components: {
    Navbar
  }
}
</script>
