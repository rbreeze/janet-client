<style lang="less" scoped>

@import '~assets/less/colors.less';

.item {
  border: 1px solid #D6D6D6;
  border-radius: 5px;
  margin-bottom: 15px;
}

.fa-list {
  font-size: 18px;
}

ul {
  margin: 0 auto;
  text-align: center;
}

.item-label {
  text-transform: uppercase;
  font-size: 15px;
  color: @grey; 
}

.custom-container {
  width: 90%;
  margin: 0 auto;
}

</style>
<template>
<div class="container-responsive px-5 pt-4"> 

  <div class="row">

    <h3 class="col-12 mb-3"> 
      <fa icon="list"></fa>
      {{ collectionName }}
    </h3>

    <div v-for="(item, i) in items" class="container-responsive col-6 p-3">

      <h4 class="item-label"> {{ item.name }} </h4>
      <div class="item p-3">
        <div class="row mb-3">
          <div class="col">
            <label>Name <fa icon="signature"> </fa> </label>
            <input v-model="item.name" class="form-control" placeholder="Name" />
          </div>
          <div class="col">
            <label>Value</label>
            <input v-model="item.value" class="form-control" placeholder="Value" />
          </div>
        </div>

        <div class="row mb-3"> 
          <div class="col">
            <AliasList :aliases="item.aliases" />
          </div>
        </div>

        <div class="actions row mr-1">
          <div class="col row checkbox align-items-center">
            <div class="col">
              <label>Used</label>
              <input v-model="item.used" type="checkbox"/>
            </div>
          </div>
          <div class="col row justify-content-end">
            <div class="btn btn-danger" @click="deleteItem(i)">
              Delete <fa icon="trash-alt"></fa>
            </div>
            <div class="btn btn-primary ml-2" @click="updateItem(i)">
              Save <fa icon="save"></fa>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>
</template>

<script>
import axios from 'axios'
let AliasList = () => import('~/components/AliasList')
export default {
  components: {
    AliasList
  },
  head () {
    return {
      title: 'Janet - ' + this.collectionName
    } 
  },
  async asyncData ({ params }) {
    let items = (await axios.get('http://54.188.72.217/api/collection/' + params.collection + '/items')).data
    let collectionName = params.collection.charAt(0).toUpperCase() + params.collection.slice(1)
    return {
      collectionName: collectionName,
      items: items 
    }
  }, 
  methods: {
    deleteItem: async function(i) {
      await axios.delete('http://54.188.72.217/api/item/' + this.collectionName + '/' + this.items[i].name)
      this.items.splice(i, 1)
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