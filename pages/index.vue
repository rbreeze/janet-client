<template>
  <section class="container">
    <div>
      <h1 class="title">
        Janet-Client
      </h1>

      <div>
        <h3 class="collection">
          Collections:
        </h3>
      </div>

      <div>
        <b-table hover striped :todos="todos" :fields="fields" caption-top>
          <template slot="table-caption">
            This is a table caption at the top.
          </template>
          <template slot="delete" slot-scope="row">
            <b-button size="sm" @change="row.removeElement" class="mr-2">
              {{ row.removeElement }} Delete
            </b-button>
          </template>
        </b-table>
    </div>

    </div>
  </section>
</template>

<script>
// import collections from 'http://54.188.72.217/api/collections'

// export default {
//   data () {
//     return {
//       // Note 'isActive' is left out and will not appear in the rendered table
//       // fields: [ 'first_name', 'last_name', 'age', 'delete' ],
//       // items: [
//       //   { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
//       //   { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
//       //   { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
//       //   { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
//       // ],
//       mounted(){
//         axios
//           .get('http://54.188.72.217/api/collections')
//           .then(response => (this.todos = response.data))
//         setInterval(function (){
//           axios
//           .get('http://54.188.72.217/api/collections')
//           .then(response => (this.todos = response.data))
//           // console.log(this.todos);
//         },
//       }
//     }
//   },
//
//   methods: {
//     removeElement: function (index) {
//       this.items.splice(index, 1);
//     }
//   },
// }
</script>

<style>
</style>
