<template lang="">
    <div class="container">
      <table class="table table-fixed">
        <thead>
          <tr>
            <th v-for="header in props.tableHeader">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in props.tableData.data">
            <td>{{ data.name }}</td>
            <td>{{ data.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
  props: {
    tableData: Object,
    tableHeader: Array
  },
  setup(props){


    return {
      props
    }
  }
}
</script>
<style lang="scss" scoped>
.table-fixed{
  width: 90%;

  margin: auto;
  thead {
    tr{
      th{
       background-color: #f39c12;
       border-color:#e67e22;
       color: white;
      }
    }
  }
  tbody{
    text-align: center;
    tr:nth-of-type(odd){
      background: #f6ff90;
    }
  }
  th, td{
    padding: 10px;
  }
}

</style>