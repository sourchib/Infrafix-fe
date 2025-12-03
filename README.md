# Dashboard LaporinYuk

## Gambaran Umum
README ini menyediakan gambaran umum tentang dashboard LaporinYuk, sebuah sistem yang dirancang untuk mengelola dan melacak berbagai tugas dan laporan. Dashboard ini menawarkan tampilan yang jelas dan ringkas mengenai metrik dan kemajuan utama.

## Prototype Tampilan Dashboard

Berikut adalah tampilan prototype dari dashboard LaporinYuk:
<img width="1365" height="667" alt="image" src="https://github.com/user-attachments/assets/87fcbabe-1aa6-4ae6-8ed3-600a1b051643" />
<img width="570" height="315" alt="Page 1" src="https://github.com/user-attachments/assets/ee77fb81-0fb0-4f95-965b-e61633052f32" />
<img width="570" height="315" alt="Page 2" src="https://github.com/user-attachments/assets/b23249b9-0fab-4bf2-b219-a62566f1f076" />
<img width="570" height="315" alt="Page 3" src="https://github.com/user-attachments/assets/3743b47c-c253-43d3-911d-f25b9b5483a8" />
<img width="570" height="315" alt="Page 4" src="https://github.com/user-attachments/assets/f7fe0532-a52c-4962-ba5e-395c26391ff9" />
<img width="570" height="315" alt="Page 5" src="https://github.com/user-attachments/assets/1eb8f611-675c-4d12-a6dc-a929d9493d14" />
<img width="570" height="315" alt="Page 6" src="https://github.com/user-attachments/assets/1f6a517b-775d-419e-a5fd-f1e3e5526742" />
<img width="570" height="315" alt="Page 7" src="https://github.com/user-attachments/assets/1f157360-7b1b-43cf-ac3c-02d893cab8b5" />

## Fitur

### Navigasi
Sidebar menyediakan akses mudah ke berbagai bagian aplikasi:
*   **Beranda:** Tampilan dashboard utama.
*   **Tugas:** Mengelola dan melihat tugas yang diberikan.
*   **Kategori:** Mengatur tugas ke dalam berbagai kategori.
*   **Audit:** Meninjau log dan aktivitas audit.
*   **Notifikasi:** Mengakses notifikasi sistem.
*   **Progres:** Melacak kemajuan keseluruhan tugas.
*   **Penilaian:** Melihat dan mengelola penilaian.
*   **Laporan:** Membuat dan melihat berbagai laporan.

### Metrik Dashboard
Dashboard utama menampilkan statistik penting melalui kartu interaktif:
*   **Dalam Proses:** Saat ini ada 15 item dalam proses.
*   **Ditanggapi:** 30 item telah ditanggapi.
*   **Selesai:** 50 item telah diselesaikan.
*   **Ditolak:** 5 item telah ditolak.
Setiap kartu menyertakan tautan "Detail Lebih Lanjut" untuk informasi lebih lanjut.

### Representasi Grafis
Bagian "GRAFIK" menyediakan ringkasan visual status item, biasanya menunjukkan:
*   Item "Dalam Proses"
*   Item "Ditanggapi"
*   Item "Ditolak"
Bagan batang ini membantu dalam memahami dengan cepat distribusi tugas berdasarkan statusnya saat ini.

### Fitur Tambahan
*   **Unggah Gambar:** Kemampuan untuk mengunggah dan menampilkan gambar terkait laporan atau tugas.
*   **Ekspor PDF:** Fungsionalitas untuk mengekspor laporan atau data tertentu ke format PDF.

## Profil Pengguna
Sudut kanan atas menampilkan nama dan peran pengguna yang masuk (misalnya, "LAMINE YAMAL - Admin"), bersama dengan akses cepat ke profil pengguna dan pengaturan.

## Cara Menjalankan Proyek

Untuk menjalankan proyek Infrafix React.js ini, ikuti langkah-langkah berikut:

1.  **Instal Dependensi:**
    Pastikan Anda memiliki Node.js dan npm (atau Yarn) terinstal. Kemudian, instal semua dependensi proyek dengan menjalankan perintah berikut di terminal:
    ```bash
    npm install
    # atau jika menggunakan yarn
    # yarn install
    ```

2.  **Jalankan Mode Pengembangan:**
    Untuk memulai server pengembangan lokal, jalankan perintah:
    ```bash
    npm run dev
    # atau jika menggunakan yarn
    # yarn dev
    ```
    Aplikasi akan tersedia di `http://localhost:5173` (atau port lain yang ditentukan oleh Vite).

3.  **Membangun untuk Produksi:**
    Untuk membuat versi produksi aplikasi, jalankan:
    ```bash
    npm run build
    # atau jika menggunakan yarn
    # yarn build
    ```
    Ini akan mengkompilasi kode Anda ke dalam folder `dist/`.

4.  **Melayani Versi Produksi:**
    Setelah membangun proyek, Anda dapat melayani versi produksi secara lokal untuk pratinjau:
    ```bash
    npm run serve
    # atau jika menggunakan yarn
    # yarn serve
    ```
    Aplikasi akan tersedia di `http://localhost:3000`.

## Struktur Folder Proyek

Berikut adalah gambaran umum struktur folder utama proyek:

```
.
├── public/
├── src/
│   ├── assets/                 # Berkas aset seperti gambar, ikon, dll.
│   │   └── landingpage/        # Aset khusus untuk halaman landing.
│   ├── components/             # Komponen React yang dapat digunakan kembali.
│   │   └── LandingPage/        # Komponen khusus untuk halaman landing.
│   ├── App.css                 # Gaya CSS global untuk aplikasi.
│   ├── App.tsx                 # Komponen utama aplikasi.
│   ├── index.css               # Gaya CSS utama.
│   ├── main.tsx                # Titik masuk aplikasi React.
│   └── ...                     # Berkas sumber lainnya.
├── __tests__/                  # Berkas untuk pengujian unit dan integrasi.
├── .gitignore                  # Berkas yang diabaikan oleh Git.
├── package.json                # Metadata proyek dan daftar dependensi.
├── README.md                   # Berkas informasi proyek ini.
├── tailwind.config.cjs         # Konfigurasi Tailwind CSS.
├── tsconfig.json               # Konfigurasi TypeScript.
├── vite.config.ts              # Konfigurasi Vite.
└── ...                         # Berkas konfigurasi lainnya.
```
