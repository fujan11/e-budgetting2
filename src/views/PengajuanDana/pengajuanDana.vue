/* eslint-disable */
<template>
    <div class="card" v-if="!vrenstra">
        <div class="card-header">
            <h3 class="card-title">
                Entry Data Program Kerja
            </h3>
        </div>
        <div class="card-body">
            <div class="row ">
                
                <div class="col-md-12 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2" for="sasaran">Penjab</label>
                    <input type="text" class="form-control form-control-sm" placeholder="" id="sasaran"/>
                </div>
                <div class="col-md-6 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Program Kerja</label>
                    <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <div class="col-md-6 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Nama Kegiatan</label>
                    <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-6 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2" for="pelaksanaan">Waktu Pelaksanaan</label>
                    <input type="date" class="form-control form-control-sm" placeholder="" id="pelaksanaan"/>
                </div>
                <div class="col-md-6 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2" for="dana">Plotingan Dana</label>
                    <input type="number" class="form-control form-control-sm" placeholder="" id="dana"/>
                </div>
                <div class="actions">
                    <a  @click="addproker" class="btn btn-dark btn-sm mx-3">Back</a>
                    <a  @click="addproker" class="btn btn-primary btn-sm mx-3">Save</a>
                </div>


   
            </div>
        </div>
    </div>
    <div v-if="vrenstra">
    <data-vue source="http://localhost:3030/ProgramKerja" :per-page="5" pagination="dropdown">
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
          <th><b>Tahun RKAT</b></th>
          <th><b>Nama Proker</b></th>
          <th><b>Penjab</b></th>
          <th><b>Waktu Pelaksanaan</b></th>
          <th><b>Plotingan Dana</b></th>
          <th><b>Nama Kegiatan</b></th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(proker, index) in records" :key="proker.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ proker.tahunRkat }}</td>
          <td>{{ proker.programKerja }}</td>
          <td>{{ proker.penjab }}</td>
          <td>{{ proker.waktuPelaksanaan }}</td>
          <td>{{ proker.plotinganDana }}</td>
          <td>{{ proker.namaKegiatan }}</td>
          <td><button style="font-size: x-small;" class="btn btn-primary btn-clipboard btn-sm">Ajukan</button></td>
        </tr>
      </tbody>
      </template>
    </data-vue>
</div>
</template>

<script>
import axios from "axios"
import DataVue from "@/components/datavue/Datavue.vue";
export default{
    components:{
        DataVue
    },
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            programKerjas:[],
        }
    },
    mounted(){
        // this.fetchProker();
    },
    methods:{
        // async fetchProker(){
        //  await axios.get("http://localhost:3030/ProgramKerja")
        //   .then(res => {
        //     console.log(res)
        //   })
        //   .catch(err => {
        //     console.error(err); 
        //   })
           
        // },
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