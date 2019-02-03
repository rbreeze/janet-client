<style lang="less" scoped>

@import '~assets/less/colors.less';

h1 {
  font-size: 40px;
  margin-left: 0;
  margin-top: 20px;
}

h3 {
  font-size: 27px;
  font-weight: 400;
  color: black;
}

.fa-boxes {
  font-size: 18px;
}

.custom-container {
  width: 90%;
  margin: 0 auto;
}

.container-responsive {
  border-collapse: collapse;
}

.link.col {
  text-transform: uppercase;
  font-size: 21px;
  color: @blue;
}

.header.row .col {
  text-align: center;
}

.col {
  white-space: nowrap;
}

label {
  text-align: right;
}

.header.row {
  border-bottom: 1px solid grey;
  max-width: 100%;
  padding-top: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 auto;
}

.aliases-container {
  border-top: 1px solid @grey;
  background: @beige; 
}

.collection {
  border-bottom: 1px solid @grey;
}

.collections {
  border-radius: 5px;
  border: 1px solid @grey;
}

</style>

<template>
  <div class="container-responsive px-5">

    <div class="row">

      <h3 class="col-12 mb-2 mt-4"> <fa icon="boxes"></fa> Collections </h3>
        
      <div class="container-responsive mt-3 mb-5 col-12 collections px-0">

        <div v-for="(collection, i) in collections" class="collection px-3 pt-3">
          <div class="row col-12 pr-0 d-flex">
            <div class="link col row mr-auto">
              <nuxt-link 
                class="align-self-center"
                :to="'/collection/' + collection.name"
              >
                {{ collection.name }} <fa icon="link"></fa>
              </nuxt-link>
            </div>
            <div class="col d-flex justify-content-end pr-0 ml-auto align-items-center">
              <label class="mb-0"> Name <fa icon="signature"></fa></label>
              <input type="text" class="form-control ml-3" v-model="collection.name" />
              <a @click="deleteCollection(i, collection.name)" class="btn btn-danger ml-3"> 
                Delete <fa icon="trash-alt"></fa>
              </a>
              <a @click="updateCollection(i)" class="save btn btn-primary ml-2"> Save <fa icon="save"></fa> </a>
            </div>
          </div>
          <div class="row mt-3"> 
            <div class="aliases-container col py-2">
              <AliasList :aliases="collection.aliases" />
            </div>
          </div>
        </div>

      </div>
    </div>

  </div> 
</template>

<script>
// import axios from 'axios'
let AliasList = () => import('~/components/AliasList')

export default {
  components: {
    AliasList
  },
  async asyncData ({ $axios }) {
    let collections = await $axios.$get('http://54.188.72.217/api/collections')
    console.log(collections)
    return {
      collections: collections
    }
  },
  methods: {
    deleteCollection: async function(i, name) {
      await this.$axios.$delete('http://54.188.72.217/api/collection/' + name)
      this.collections.splice(i, 1)
    },
    updateCollection: async function(i) {
      this.$axios.$put('http://54.188.72.217/api/collection', this.collections[i], (err, data) => {
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
