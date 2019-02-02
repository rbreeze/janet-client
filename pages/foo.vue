<template> 
<div> 
  <div v-for="(collection, i) in collections"> 
    <div class="header row"> 
      <div class="col">Name</div>
      <div class="col">Value</div>
      <div class="col">Used</div>
      <div class="col"></div>
    </div>
    <div class="row" v-for="(item, j) in collection">
      <div class="col">
        <input type="text" v-model="item.name" /> 
      </div>
      <div class="col">
        <input type="text" v-model="item.value" /> 
      </div>
      <div class="col">
        {{ item.used }}
      </div>
      <div class="col">
        <fa icon="trash-alt" @click="deleteItem(i, j)"> </fa>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    let data = [{
      name: "Collection A",
      items: [
        { name: "foo", value: "bar", used: false }, 
        { name: "bla", value: "daf", used: true }
      ]
    }, {
      name: "Collection B",
      items: [{ name: "baz", value: "qux", used: true }]
    }]
    return {
      collections: data
    }
  },
  methods: {
    deleteItem: function(i, j) {
      collections[i].splice(j, 1)
    }
  }
}
</script>