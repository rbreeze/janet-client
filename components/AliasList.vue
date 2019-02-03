<style lang="less" scoped>
h3 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
}
.aliases {
  overflow-x: scroll;
  white-space: nowrap;
}

.input-group {
  width: 120px;
}
</style>
<template> 
<div class="aliases d-flex align-items-middle"> 
  <h3 class="align-self-center mb-0 mr-3"> Aliases </h3>
  <div class="alias d-inline-block ml-2" v-for="(alias, i) in aliases">
    <div class="input-group"> 
      <input type="text" class="form-control" v-model="alias.value" placeholder="alias" />
      <div class="input-group-append">
        <span class="btn btn-outline-danger">
          <fa icon="trash-alt" @click="deleteAlias(i)"></fa>
        </span>
      </div>
    </div>
  </div>
  <li @click="addAlias()" class="btn btn-outline-primary d-inline-block ml-2">
    Add <fa icon="plus"></fa>
  </li>
</div>
</template>

<script>
export default {
  props: ['aliases'], 
  methods: {
    addAlias: function() {
      this.aliases.push({})
    }, 
    deleteAlias: function(i) {
      this.aliases.splice(i, 1)
    }
  }
}
</script>