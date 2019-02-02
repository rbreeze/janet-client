<template>
  <section class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        Janet-Client
      </h1>
      <h2 class="subtitle">
        Client for JANET
      </h2>
      <div>
        <h3 class="collection">
          Collections:
        </h3>
      </div>
      <!-- Create Table to create collections and items -->
      <div>
        <div v-for="(collection, i) in collections">
          <div class="header row">
            <div class="col">Name</div>
            <div class="col">Value</div>
            <div class="col">Used</div>
            <div class="col">Delete</div>
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

        <b-table striped hover :items="items"></b-table>

      </div>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>

      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'


// export default {
//   components: {
//     Logo
//   }
// }

// export default {
//   data () {
//     let data = [{
//       name: "Collection A",
//       items: [
//         { name: "foo", value: "bar", used: false },
//         { name: "bla", value: "daf", used: true }
//       ]
//     }, {
//       name: "Collection B",
//       items: [{ name: "baz", value: "qux", used: true }]
//     }]
//     return {
//       collections: data
//     }
//   },
//   methods: {
//     deleteItem: function(i, j) {
//       collections[i].splice(j, 1)
//     }
//   }
// }

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  {
    isActive: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    _rowVariant: 'danger'
  },
  {
    isActive: true,
    age: 40,
    first_name: 'Thor',
    last_name: 'Macdonald',
    _cellVariants: { isActive: 'success', age: 'info', first_name: 'warning' }
  },
  { isActive: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.collection {
  font-weight: 300;
  font-size: 42px;
  color: #f02d99;
  word-spacing: 5px;
  padding-bottom: 15px;
  align-content: flex-start;
}

.links {
  padding-top: 15px;
}
</style>
