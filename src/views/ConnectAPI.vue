
<template>
  <loading :isLoading="isLoading"/>
  <Table :tableData="tableData" :tableHeader="tableHeader"/>
</template>

<script>
import { apiGetMember } from "@/assets/api/api"
import Table from "@/components/Table.vue";
import Loading from "@/components/Loading.vue";
import { reactive, ref } from 'vue';

export default {
  components: {
    Table,
    Loading
  },
  setup(){
    const tableData = reactive({data: []})
    const tableHeader = [ '姓名', '居住地']
    const isLoading = ref(true)
    apiGetMember().then(res => {
      tableData.data = res.data
    }).then(_ => {
      isLoading.value = false
    }).catch(err => {
      alert(err.message)
    })

    return{
      tableData,
      tableHeader,
      isLoading
    }
  }
}
</script>
