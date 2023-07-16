import axios from 'axios';

// Membuat instance Axios dengan konfigurasi khusus
const instance = axios.create({
  baseURL: 'http://localhost:8080/api/bidang_renstra', // URL dasar API
  timeout: 5000, // Batas waktu (dalam milidetik) untuk permintaan
  headers: {
    'Content-Type': 'application/json', // Tipe konten yang dikirim dalam permintaan
    Authorization: 'Bearer ' + localStorage.getItem('token'), // Contoh header otorisasi
  },
});

export default instance;