/* eslint-disable */
<template>

<div class="card" v-if="vrenstra">
  <data-vue :source="dataRenstra" :per-page="5" pagination="dropdown">
      <template #detail>
        <h2 class="mt-7 ms-5">Details Data Renstra</h2>
        <display class="mt-3 ms-7">Renstra Bidang <b>Pendidikan</b> tahun <b>2023</b> </display>

      </template>      
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>          
          <th><b>Program</b> </th>
          <th><b>Indikator</b> </th>
          <th><b>Tujuan</b> </th>
          <th><b>Kondisi</b> </th>
          <th><b>Baseline</b> </th>
          <th><b>Sasaran</b> </th>
          <th><b>Standart</b> </th>
          <th><b>File</b> </th>
          <th class="pe-3" style="width:9%"><b>action</b> </th>

          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ renstra.program }}</td>
          <td>{{ renstra.indikator }}</td>
          <td>{{ renstra.tujuan }}</td>
          <td>{{ renstra.kondisi }}</td>
          <td>{{ renstra.baseLine }}</td>
          <td>{{ renstra.sasaran }}</td>
          <td>{{ renstra.standar }}</td>
          <td>{{ renstra.file }}</td>
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
            dataRenstra:[
                {
                id : 1,
                bidangRenstra : "Pendidikan",
                program: "Kajian Keilmuan",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quasi est obcaecati labore ad explicabo suscipit atque. Nihil, ea eius, possimus exercitationem facilis minus libero soluta cum magni eos quos! Dicta, laborum aliquid magni harum doloribus itaque at aperiam magnam, iste amet facilis! Quisquam harum eius laudantium commodi perspiciatis error iusto modi inventore eaque, minima soluta consectetur aliquam aperiam vitAtque perferendis labore nobis optio assumenda similique eligendi cumque nesciunt illum possimus cum vel iste nemo ducimus ipsam pariatur commodi neque reprehenderit temporibus, ipsum, sequi quisquam? Minima, consequatur itaque. Itaque.",
                sasaran : "Masyarakat",
                standar :"tinggi",
                file :"file.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
            },
                {
                id : 2,
                bidangRenstra : "Keagamaan",
                program: "Pengajian",
                tahun : "2023",
                indikator :"keterserapan Materi Pembelajaran",
                tujuan : "Sukses Usia Dini",
                kondisi : "layak pakai",
                baseLine : "______",
                sasaran : "Komunitas",
                standar :"smd",
                file :"file1.pdf"
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