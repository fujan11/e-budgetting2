/* eslint-disable */
<template>

  <div class="card mb-1">
    <div class="card-header">
     <h2 class="mt-7"> Input Data Sebaran Renstra</h2>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2  ">Unit Kerja</label>
                    <select type="text" class="form-select form-select-sm " placeholder="Unit Kerja" name="lastName">
                        <option>Unit Kerja</option>
                        <option value="1">FAI</option>
                        <option value="2">FT</option>
                        <option value="3">FKES</option>
                    </select>
                </div>
        <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2  ">Bidang Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="Program Kerja" name="lastName">
                        <option>Bidang Renstra</option>
                        <option value="1">pendidikan</option>
                        <option value="2">bidang renstra</option>
                        <option value="3">bidang renstra</option>
                    </select>
                </div>
        <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2  ">Program Renstra</label>
                    <select type="text" class="form-select form-select-sm " placeholder="Program Kerja" name="lastName">
                        <option>Program Renstra</option>
                        <option value="1">PMB</option>
                        <option value="2">Mahasiswa Prestasi Tingkat Nasional</option>
                        <option value="3">Sosial</option>
                    </select>
                </div>
                <div class="col-md-3 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">Baseline</label>
                    <input type="text" class="form-control form-control-sm" placeholder="Baseline" name="lastName"/>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <h4>Tahun Sebaran</h4>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">2023</label>
                    <input type="text" class="form-control form-control-sm" placeholder="2023" name="lastName"/>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">2024</label>
                    <input type="text" class="form-control form-control-sm" placeholder="2024" name="lastName"/>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">2025</label>
                    <input type="text" class="form-control form-control-sm" placeholder="2025" name="lastName"/>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">2026</label>
                    <input type="text" class="form-control form-control-sm" placeholder="2026" name="lastName"/>
                </div>
                <div class="col-md-2 fv-row my-5">
                    <label class="required fs-5 fw-bold mb-2">2027</label>
                    <input type="text" class="form-control form-control-sm" placeholder="2027" name="lastName"/>
                </div>
                
        </div>
        
      <div class="row">
            <div class="col-md-12 fv-row my-3 justify-content-end">
                <button class="btn btn-primary btn-sm">Save</button>
            </div>
        </div>
    </div>
  </div>
<div class="card">
  <data-vue source="http://localhost:3030/SebaranResntra" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-7">Data Sebaran Renstra</h2>
      </template>
      <template #search>
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <!-- <th widht="20">
            <input type="checkbox" @change="checkAll" :checked="isCheckedAll" />
          </th> -->
          <th ><b> Nama Unit Kerja</b></th>
          <th>
            <b>Tahun</b>
          </th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ renstra.UnitKerja }}</td>
          <td>{{ renstra.Tahun }}</td>
          <td>
            <a href="#/detailSebaranRenstra" class="btn btn-icon btn-bg-light btn-outline-dark btn-active-color-success btn-sm ">
              <span class="svg-icon svg-icon-3">
                  <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black"></path>
                      <path xmlns="http://www.w3.org/2000/svg" opacity="2" d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
                  </svg>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
      </template>
    </data-vue>
  </div>

</template>

<script>
import DataVue from "@/components/datavue/Datavue.vue";

export default{
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            dataRenstra:[
                {
                id : 1,
                bidangRenstra : "Pendidikan",
                status: "aktif",
                
            },
            {
                id : 2,
                bidangRenstra : "Keagamaan",
                status: "aktif",
            },
            {
                id : 3,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
            {
                id : 4,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
            {
                id : 5,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
            {
                id : 6,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
            {
                id : 7,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
            {
                id : 8,
                bidangRenstra : "Sosial",
                status: "aktif",
            },
           
        ]
        }
    },
  components:{
    DataVue
  },
  methods:{
        addCapaian(){
            
            if (this.capaian < 2027) {
                this.capaian + 1
            }
        },
        deleteSelected(items) {
      if (confirm("Are you sure?")) {
        Array.from(items).forEach((item) => {
          const index = this.dataRenstra.findIndex(
            (renstra) => renstra.id === item.id
          );
          this.dataRenstra.splice(index, 1);
        });
        items.clear();
      }
    },
        
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
.card-header {
  background: #000000;
  padding-top: 16px;
  padding-bottom: 10px;
}

.cardFooter {
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.01);
  margin-left: 12px;
  margin-right: 12px;
}

.table,
.pagination {
  margin-bottom: 0;
}

.sort-control {
  cursor: pointer;
}
.ascending:after {
  content: "\25b2";
}
.descending:after {
  content: "\25bc";
}


</style>