<style scoped>
.table {
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 5px;
}
th {
  text-align: center;
}
ul {
  list-style: none;
}
.btn-default {
  color: black !important;
  border: 1px solid grey;
}
</style>
<template>
<div> 
  <h3> {{ collectionName }}</h3>
  <table class="table table-responsive">
    <thead>
      <tr> 
        <th>Name</th>
        <th>Value</th>
        <th>Used</th>
        <th>Aliases</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items">
        <td>
          <input v-model="item.name" class="form-control" placeholder="Name" />
        </td>
        <td>
          <input v-model="item.value" class="form-control" placeholder="Value" />
        </td>
        <td>
          <input v-model="item.used" class="form-control" type="checkbox"/>
        </td>
        <td>
          <ul class="aliases"> 
            <li v-for="alias in item.aliases" class="mb-2"> 
              <input type="text" class="form-control" v-model="alias.value" placeholder="alias" />
            </li>
            <li @click="addAlias(i)" class="btn btn-default">Add Alias</li>
          </ul>
        </td>
        <td>
          <div class="btn btn-danger" @click="deleteItem(i)">Delete</div>
        </td>
        <td>
          <div class="btn btn-primary" @click="updateItem(i)">Save</div>
        </td>
      </tr>
      <tr>
        <td> 
          <div class="btn btn-primary" @click="addItem(i)"> Add Item </div>
        </td>
      </tr>
    </tbody>
  </table>
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
    },
    addAlias: function(i) {
      this.items[i].aliases.push({ value: "" })
    }
  }
}
</script>