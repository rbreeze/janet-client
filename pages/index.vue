<template>
  <section class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        Janet-Client
      </h1>
      <!-- <h2 class="subtitle">
        Javascript Application for iNterfacing EveryThing(JANET)
      </h2> -->
      <div>
        <h3 class="collection">
          Collections:
        </h3>
      </div>
      <div>

  <b-table hover striped :items="items" :fields="fields" caption-top>
    <template slot="table-caption">
      This is a table caption at the top.
    </template>
    <template slot="delete" slot-scope="row">
      <b-button size="sm" @change="row.removeElement" class="mr-2">
        {{ row.removeElement }} Delete
      </b-button>
    </template>
  </b-table>

        <!-- <b-table striped hover :items="items" ></b-table> -->
      <!-- <b-table striped hover :items="items" :fields="fields">
        <template slot="delete" slot-scope="row">
          <b-button size="sm" @change="row.removeElement" class="mr-2">
            {{ row.removeElement }} Delete
          </b-button>
        </template>
      </b-table> -->


      </div>

    </div>
  </section>
</template>

http://54.188.72.217

<script>
import Logo from '~/components/Logo.vue'


// export default {
//   data () {
//     return {
//       fields: [ 'first_name', 'last_name', 'show_details', 'delete' ],
//       items: [
//         { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
//         { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
//         { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', _showDetails: true },
//         { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
//       ]
//     }
//   },
//   methods: {
//     // deleteItem: function(i, j) {
//     //   collections[i].splice(j, 1)
//     // }
//     removeElement: function (index) {
//     this.items.splice(index, 1);
//     }
//   }
// }

export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [ 'first_name', 'last_name', 'age', 'delete' ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  methods: {
    // deleteItem: function(i, j) {
    //   collections[i].splice(j, 1)
    // }
    removeElement: function (index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style>
</style>
