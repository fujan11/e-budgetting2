/* eslint-disable */
<template>
 <div class="card mb-1" style="margin-top: -30px;">
  <div class="card">
    <div class="card-header">
     <h2 class="mt-7"> Input PAGU Anggaran</h2>
    </div>
    <div class="card-body">
      <div class="row">
            <div class="col-md-6 fv-row my-5">
                <label class="required fs-5 fw-bold mb-2">Tahun</label>
                <input type="text" class="form-control form-control-sm" placeholder="Tahun" name="lastName"/>
            </div>
            <div class="col-md-6 fv-row my-5">
                <label class="required fs-5 fw-bold mb-2">Jumlah Dana</label>
                <input type="number" class="form-control form-control-sm" placeholder="Tahun"/>
            </div>
        </div>
        
            <div class="row">
            <div class="col-md-12 fv-row my-3 justify-content-end">
                <button class="btn btn-primary btn-sm">Save</button>
            </div>
        </div>
    </div>
  </div>
</div>
    <div v-if="vrenstra">
    <data-vue :source="capaian" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-7">Data Pengajuan Dana</h2>
      </template>
      <template #search>
      </template>
      <template #actionbar="{ checkedItems }">
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <th><b>Tahun</b></th>
          <th><b>Jumlah Dana</b></th>
          <th><b>{{ this.info }}</b></th>
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(pagu, index) in records" :key="pagu.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ pagu.tahun }}</td>
          <td>{{ pagu.jumlah }}</td>
          <td>{{ pagu.status }}</td>
        </tr>
      </tbody>
      </template>
    </data-vue>
</div>
</template>

<script>
import DataVue from "@/components/datavue/Datavue.vue";
import axios from "axios"; 
export default{
    components:{
        DataVue
    },
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            programKerjas:[],
            info : null
        }
    },
    mounted(){
        this.fetchData()
    },
    methods:{
        fetchData() {
            axios.get("http://localhost:8080/api/bidang_renstra")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
    },
        addCapaian(){
            
            if (this.capaian < 2027) {
                this.capaian + 1
            }
        },
        addproker(){
            this.vrenstra = !this.vrenstra
        }
        
    },
}

</script>
<style>
.head-table{
    display: flex;
    width: 100%;
}
.add-button{
    flex: 5;
    text-align: right;
}
</style>