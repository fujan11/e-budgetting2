/* eslint-disable */
<template>

    <!-- <div v-if="vrenstra">
        <h1 style="margin-bottom: 30px; margin-top: -10px;">Bidang Renstra</h1>
        <div class="head-table my-3">
            <div class="search">
                <input type="text" class="form-control form-control-sm" placeholder="search">
            </div>
            <div class="add-button">
                <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_1">Tambah</a>
            </div>
        </div>

        <div class="py-5" style="text-align: center;">
            
  <table class="table table-row-dashed table-row-gray-300 gy-7 gx-10">
    <thead>
      <tr class="fw-bolder fs-5 text-gray-800">
        <th>No</th>
        <th>Bidang Renstra</th>
        <th>Status</th>
        <th>
             Actions    
        </th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(renstra,index) in tahunRenstra" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ renstra.tahunRenstra }}</td>
            <td>{{ renstra.status }}</td>
            <td>
                <a href="#" class="btn btn-icon btn-bg-light btn-outline-dark btn-active-color-success btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="2" d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-warning btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
                <a href="" class="btn btn-icon btn-bg-light btn-active-color-danger">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
            </td>
            <td>
                
            </td>
        </tr>
    </tbody>
  </table>
</div>
    </div>

<div class="modal fade" tabindex="-1" id="kt_modal_1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Entry Bidang Renstra</h5>


        <div
          class="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span class="svg-icon svg-icon-2x"></span>
        </div>

      </div>

      <div class="modal-body">
        <div class="row">
            <div class="col-md-12 fv-row my-5">
                <label class="required fs-5 fw-bold mb-2">Bidang Renstra</label>
                <input type="text" class="form-control form-control-solid" placeholder="" name="lastName"/>
            </div>
        </div>
      </div>

      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-light"
          data-bs-dismiss="modal"
        >
          Exit
        </button>
        <button type="button" class="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  </div>
</div> -->
<div class="container mb-5">
  <div class="card">
    <div class="card-header">
     <h2 class="mt-7"> Input Tahun Renstra</h2>
    </div>
    <div class="card-footer">
      <div class="row">
            <div class="col-md-12 fv-row my-5">
                <label class="required fs-5 fw-bold mb-2">Tahun Renstra</label>
                <input type="text" class="form-control form-control-sm" placeholder="Tahun Renstra" name="lastName"/>
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

<div class="container">
  <data-vue source="http://localhost:3030/TahunRenstra" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-7">Data Tahun  Renstra</h2>
      </template>
      <template #actionbar="{ checkedItems }">
        <!-- <button
          class="btn btn-danger"
          :disabled="!checkedItems.size"
          @click="deleteSelected(checkedItems)"
        >
          Delete Selected
        </button> -->
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <!-- <th widht="20">
            <input type="checkbox" @change="checkAll" :checked="isCheckedAll" />
          </th> -->
          <th scope="col" :class="sortable('tahunRenstra')" @click="sort('tahunRenstra')"><b> Tahun Renstra</b></th>
          <th scope="col" :class="sortable('status')" @click="sort('status')">
            <b>Status</b>
          </th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <!-- <td>
            <input
              type="checkbox"
              :checked="isChecked(renstra)"
              @change="checkItem(renstra)"
            />
          </td> -->
          <td>{{ renstra.tahunRenstra }}</td>
          <td>{{ renstra.status }}</td>
          <td>
            <a href="#" class="btn btn-icon btn-bg-light btn-outline-dark btn-active-color-success btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="2" d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
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
</template>

<script>
import DataVue from "@/components/datavue/Datavue.vue";

export default{
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            tahunRenstra:[
            //     {
            //     id : 1,
            //     tahunRenstra : "2023-2027",
            //     status: "aktif",
                
            // },
            // {
            //     id : 2,
            //     tahunRenstra : "2028-2032",
            //     status: "aktif",
            // },
            // {
            //     id : 3,
            //     tahunRenstra : "2033-2037",
            //     status: "aktif",
            // },
            // {
            //     id : 4,
            //     tahunRenstra : "2038-2042",
            //     status: "aktif",
            // },
            // {
            //     id : 5,
            //     tahunRenstra : "2043=2047",
            //     status: "aktif",
            // },
            // {
            //     id : 6,
            //     tahunRenstra : "2048-2052",
            //     status: "aktif",
            // },           
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
          const index = this.tahunRenstra.findIndex(
            (renstra) => renstra.id === item.id
          );
          this.tahunRenstra.splice(index, 1);
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