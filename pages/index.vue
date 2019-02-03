<style scoped>

.fullPad {
  padding: 10px;
  border: 5px grey solid;
}

.custom-container {
  width: 90%;
  margin: 0 auto;
}

.header.row .col {
  text-align: center;
}

ul {
  list-style: none;
}

.btn {
  color: white !important;
}

.btn-default {
  color: black !important;
  border: 1px solid grey;
}

.fullPad{
  padding: 10px;
  border: 5px grey solid;
}
.center{
  text-align: center;
}
.centerBtn{
  margin: 0 auto;
}
</style>

<template>
  <div class="custom-container mb-5">
    <h1 class="title row mb-2">
      Janet-Client
    </h1>

    <h3 class="mb-3 collection"> Collections </h3>

    <div class="table-responseive fullPad">
      <div class="header row pb-3 mb-3">
        <div class="col">Link</div>
        <div class="col">Name</div>
        <div class="col">Aliases</div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div v-for="(collection, i) in collections">
        <div class="row">
          <div class="col center">
            <nuxt-link :to="'/collection/' + collection.name">{{ collection.name }}</nuxt-link>
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="collection.name" />
          </div>
          <div class="col">
            <ul class="aliases">
              <li v-for="alias in collection.aliases" class="mb-2">
                <input type="text" class="form-control" v-model="alias.value" placeholder="alias" />
              </li>
              <li @click="addAlias(i)" class="btn btn-default">Add Alias</li>
            </ul>
          </div>
          <div class="col">
            <a @click="deleteCollection(i, collection.name)" class="btn btn-danger"> Delete </a>
          </div>
          <div class="col">
            <a @click="updateCollection(i)" class="save btn btn-primary"> Save </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    let collections = (await axios.get('http://54.188.72.217/api/collections')).data
    console.log(collections)
    return {
      collections: collections
    }
  },
  methods: {
    deleteCollection: async function(i, name) {
      await axios.delete('http://54.188.72.217/api/collection/' + name)
      this.collections.splice(i, 1)
    },
    updateCollection: async function(i) {
      axios.put('http://54.188.72.217/api/collection', this.collections[i], (err, data) => {
        if (err) console.log(err)
        else console.log("Successfully updated")
      })
    },
    addAlias: function(i) {
      this.collections[i].aliases.push({ value: "" })
    }
  }
}
</script>
