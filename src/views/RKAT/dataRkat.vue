/* eslint-disable */
<template>

  <div class="card mb-5 mt-0">
    <div class="card-header">
     <h2 class="mt-7"> Input Data RKAT</h2>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Tahun Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="" name="lastName">
                        <option>Tahun Renstra</option>
                        <option value="1">2019-2024</option>
                        <option value="2">2025-2031</option>
                        <option value="3">2032-2037</option>
                    </select>
                </div>
                <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Bidang Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="" name="lastName">
                        <option>Bidang Renstra</option>
                        <option value="1">Program Renstra</option>
                        <option value="2">Program Renstra</option>
                        <option value="3">Program Renstra</option>
                        
                    </select>
                </div>
                <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Program Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="" name="lastName">
                        <option>Program Renstra</option>
                        <option value="1">Program Renstra</option>
                        <option value="2">Program Renstra</option>
                        <option value="3">Program Renstra</option>
                    </select>
                </div>
                <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2  ">Tahun RKAT</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Tahun RKAT" name="lastName"/>
                </div>
                <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Baseline</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Baseline" name="lastName"/>
                </div>
                <div class="col-md-4 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Capaian</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Capaian" name="lastName"/>
                </div>
      <div class="row">
            <div class="col-md-12 fv-row my-3 justify-content-end">
                <button class="btn btn-primary btn-sm">Save</button>
            </div>
        </div>
    </div>
  </div>
  </div>


    <!-- view -->
<div v-if="vrenstra">
    <data-vue source="http://localhost:3030/DataRKAT" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-7">Data RKAT</h2>
      </template>
      <template #search>
      </template>
      <template #add>
        <button @click="addRenstra" class="btn btn-primary btn-sm ms-10">Add Data</button>
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <th><b>Tahun Renstra</b></th>
          <th><b>Bidang Renstra</b></th>
          <th><b>Program Renstra</b></th>
          <th><b>Tahun RKAT</b></th>
          <th><b>Baseline</b></th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(rkat, index) in records" :key="rkat.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ rkat.tahunRenstra }}</td>
          <td>{{ rkat.bidangRenstra }}</td>
          <td>{{ rkat.programRenstra }}</td>
          <td>{{ rkat.tahunRkat }}</td>
          <td>{{ rkat.baseline }}</td>
          <td>
                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-warning btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
                <a href="" class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
          </td>
        </tr>
      </tbody>
      </template>
    </data-vue>    
</div>
    <!-- entry data -->

    <div class="card" v-if="!vrenstra">
        <div class="card-header">
            <h3 class="card-title">
                Entry Data RKAT
            </h3>
        </div>
        <div class="card-body">
            <div class="row ">
                <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Tahun Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="" name="lastName">
                        <option>Tahun Renstra</option>
                        <option value="1">2019-2024</option>
                        <option value="2">2025-2031</option>
                        <option value="3">2032-2037</option>
                    </select>
                </div>
                <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Program Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="" name="lastName">
                        <option>Program Renstra</option>
                        <option value="1">Program Renstra</option>
                        <option value="2">Program Renstra</option>
                        <option value="3">Program Renstra</option>
                        
                    </select>
                </div>
                <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2  ">Tahun RKAT</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Tahun RKAT" name="lastName"/>
                </div>
                <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Baseline</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Baseline" name="lastName"/>
                </div>
                
                <div class="actions">
                    <a  @click="addRenstra" class="btn btn-dark btn-sm mx-3">Back</a>
                    <a  @click="addRenstra" class="btn btn-primary btn-sm mx-3">Save</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DataVue from "@/components/datavue/Datavue.vue";
    export default{
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            dataRKAT:[
            //     {
            //     id : 1,
            //     tahunRenstra : 2023,
            //     programRenstra : "Program Renstra",
            //     tahunRkat : "2021",
            //     baseline : "Baseline Baseline",  
            // },
            //     {
            //     id : 2,
            //     tahunRenstra : 2023,
            //     programRenstra : "Program Renstra",
            //     tahunRkat : "2019",
            //     baseline : "Baseline Baseline",  
            // },
            //     {
            //     id : 3,
            //     tahunRenstra : 2023,
            //     programRenstra : "Program Renstra",
            //     tahunRkat : "2020",
            //     baseline : "Baseline Baseline",  
            // },
            //     {
            //     id : 4,
            //     tahunRenstra : 2023,
            //     programRenstra : "Program Renstra",
            //     tahunRkat : "2022",
            //     baseline : "Baseline Baseline",  
            // },
            //     {
            //     id : 5,
            //     tahunRenstra : 2023,
            //     programRenstra : "Program Renstra",
            //     tahunRkat : "2023",
            //     baseline : "Baseline Baseline",  
            // },
        ]
        }
    },
    components:{
    DataVue
    },
    methods:{
        addRenstra(){
            this.vrenstra = !this.vrenstra
        },

        addCapaian(){
            if (this.capaian< 2027){
                this.capaian++
            }
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