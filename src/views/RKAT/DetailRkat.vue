/* eslint-disable */
<template>

<div class="card" v-if="vrenstra">
  <data-vue :source="dataRKAT" :per-page="5" pagination="dropdown">
      <template #detail>
        <h2 class="mt-7 ms-5">Details Data RKAT</h2>
        <display class="mt-3 ms-7">Details RKAT Tahun <b>2023</b></display>

      </template>      
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>          
          <th><b>Baseline</b> </th>
          <th><b>Nama Program </b> </th>
          <th><b>Penjab</b> </th>
          <th><b>Waktu Pelaksanaan</b> </th>
          <th><b>Plotingan Dana</b> </th>
          <th><b>Nama Kegiatan</b> </th>
          <th class="pe-3" style="width:9%"><b>action</b> </th>

          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(rkat, index) in records" :key="rkat.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ rkat.baseline }}</td>
          <td>{{ rkat.nama_program }}</td>
          <td>{{ rkat.Penjab }}</td>
          <td>{{ rkat.waktuPelaksanaan }}</td>
          <td>{{ rkat.plotinganDana }}</td>
          <td>{{ rkat.namaKegiatan }}</td>
          <td >
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
            tags :["nama","nama2"],
            capaian : 2022,
            vrenstra : true,
            dataRKAT:[
                {
                id : 1,
                tahun : 2023,
                baseline : "Baseline Baseline",
                nama_program : "Program Kerja",
                Penjab : "penanggung Jawab",
                waktuPelaksanaan: "12/10/2023",
                plotinganDana : "Rp.120.000.000",
                namaKegiatan : "nama Kegiatan Nama Kegiatan"
            },
                {
                id : 2,
                tahun : 2024,
                baseline : "Baseline Baseline",
                nama_program : "Program Kerja",
                Penjab : "penanggung Jawab",
                waktuPelaksanaan: "12/10/2023",
                plotinganDana : "Rp.120.000.000",
                namaKegiatan : "nama Kegiatan Nama Kegiatan"
            },
                {
                id : 3,
                tahun : 2025,
                baseline : "Baseline Baseline",
                nama_program : "Program Kerja",
                Penjab : "penanggung Jawab",
                waktuPelaksanaan: "12/10/2023",
                plotinganDana : "Rp.120.000.000",
                namaKegiatan : "nama Kegiatan Nama Kegiatan"
            },
                {
                id : 4,
                tahun : 2026,
                baseline : "Baseline Baseline",
                nama_program : "Program Kerja",
                Penjab : "penanggung Jawab",
                waktuPelaksanaan: "12/10/2023",
                plotinganDana : "Rp.120.000.000",
                namaKegiatan : "nama Kegiatan Nama Kegiatan"
            },
                {
                id : 5,
                tahun : 2027,
                baseline : "Baseline Baseline",
                nama_program : "Program Kerja",
                Penjab : "penanggung Jawab",
                waktuPelaksanaan: "12/10/2023",
                plotinganDana : "Rp.120.000.000",
                namaKegiatan : "nama Kegiatan Nama Kegiatan"
            },
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