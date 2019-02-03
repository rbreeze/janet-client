<style lang="less" scoped> 
.navbar {
  color: #F1EDE2;
  background: #029566;
  max-width: 100%;
  margin: 0 auto;

  .brand {
    font-size: 23px;
  }
}
</style>

<template> 

<div class="navbar row py-3"> 
  <div class="brand align-self-start">
    <nuxt-link to="/"> Janet </nuxt-link>
  </div>
  <div class="flex links align-items-end align-self-end mb-1">
    <nuxt-link class="align-self-end" to="/about">About</nuxt-link>
  </div>
</div>

</template>