<template>
  <div class="table-container">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <th>d'</th>
        <th>S03</th>
        <th>Cl-</th>
        <th>Compr. Str. 28d</th>
        <th>CO2</th>
        <th>TiO2</th>
      </tr>

      <tr
        :class="{ highlight: index < 4 && currentPage === 1 }"
        :key="cement['sample-id']"
        v-for="(cement, index) in paginatedData"
      >
        <td>{{ cement["d'"] }}</td>
        <td>{{ cement.SO3 }}</td>
        <td>{{ cement["Cl-"] }}</td>
        <td>{{ cement["comp. str. 28d"] }}</td>
        <td>{{ cement.CO2 }}</td>
        <td>{{ cement.TiO2 }}</td>
      </tr>
    </table>
    <div class="pagination-controls">
      <v-button @click="prevPage" :text="'Previous'"></v-button>
      <v-button @click="nextPage" :text="'Next'"></v-button>
      <p>Page {{ currentPage }} of {{ Math.ceil(data.length / pageSize) }}</p>
    </div>
  </div>
</template>

<script>
  import VButton from "@/components/VButton.vue";

  export default {
    name: "cement-table",
    components: { VButton },
    props: ["data"],
    data() {
      return {
        pageSize: 10,
        currentPage: 1,
      };
    },
    watch: {
      data: function () {
        this.currentPage = 1; // resets to the first page when change dataset
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage * this.pageSize < this.data.length)
          this.currentPage++;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
    },
    computed: {
      paginatedData: function () {
        return this.data.filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
      },
    },
  };
</script>

<style scoped>
  table {
    width: 100%;
  }

  td {
    text-align: center;
  }

  tr:nth-child(1) {
    height: 2rem;
    background-color: #333;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f1f1f1;
  }

  tr.highlight {
    background-color: #fdc314;
  }

  .pagination-controls {
    margin-top: 1rem;
  }

  .pagination-controls p {
    margin: 0.4rem 0;
  }
</style>
