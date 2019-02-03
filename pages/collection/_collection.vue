<template>
<div> 
  <h3> {{ collectionName }}</h3>
  <div class="header row">
    <div class="col">Name</div>
    <div class="col">Value</div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="row" v-for="(item, i) in items">
    <div class="col">
      <input v-model="item.name" placeholder="Name" />
    </div>
    <div class="col">
      <input v-model="item.value" placeholder="Value" />
    </div>
    <div class="col">
      <div class="btn btn-danger" @click="deleteItem(i)">Delete</div>
    </div>
    <div class="col">
      <div class="btn btn-primary" @click="updateItem(i)">Save</div>
    </div>
  </div>
  <div class="row">
    <div class="col"> 
      <div class="btn btn-primary" @click="addItem(i)"> Add Item </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    let items = (await axios.get('http://54.188.72.217/api/collection/' + params.collection + '/items')).data
    return {
      collectionName: params.collection,
      items: items 
    }
  }, 
  methods: {
    deleteItem: async function(i) {
      this.items[i].splice(i, 1)
      await axios.delete('http://54.188.72.217/api/item/' + this.collectionName + '/' + this.items[i].name)
    }, 
    updateItem: function(i) {
      axios.post('http://54.188.72.217/api/' + this.collectionName + '/item', this.items[i], (err, data) => {
        if (err) console.log(err)
        else console.log(data)
      })
    }, 
    addItem: function () {
      this.items.push({})
    }
  }
}
</script>