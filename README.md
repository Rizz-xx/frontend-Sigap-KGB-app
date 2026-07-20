<p align="center">
  <img src="public/logo.png" width="120" alt="SIGAP KGB Logo" />
</p>

<h1 align="center">SIGAP KGB</h1>

<p align="center">
  <strong>Sistem Informasi Gaji Berkala Pegawai</strong>
</p>

<p align="center">
Frontend Website menggunakan <b>Next.js 15</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, <b>Shadcn UI</b>, dan terintegrasi dengan <b>NestJS Backend</b>.
</p>

---

# 📖 Tentang Proyek

SIGAP KGB (Sistem Informasi Gaji Berkala Pegawai) merupakan aplikasi yang digunakan untuk membantu proses pengelolaan Kenaikan Gaji Berkala (KGB) pegawai secara digital.

Frontend dibangun menggunakan **Next.js App Router** dengan pendekatan **Component-Based Architecture** sehingga mudah dikembangkan, mudah dipelihara, dan siap digunakan pada skala production.

---

# 🎯 Fitur Utama

## Dashboard User

- Dashboard Informasi Pegawai
- Informasi KGB
- Riwayat KGB
- Pencarian Data Pegawai
- Statistik Pegawai

---

## Dashboard Admin

- Dashboard Statistik
- Manajemen Data Pegawai
- Manajemen KGB
- Manajemen Pengguna
- Laporan
- Pengaturan Sistem

---

# 🛠 Teknologi

| Technology   | Version |
| ------------ | ------- |
| Next.js      | 15      |
| React        | 19      |
| TypeScript   | Latest  |
| TailwindCSS  | Latest  |
| Shadcn UI    | Latest  |
| Zustand      | Latest  |
| React Query  | Latest  |
| Axios        | Latest  |
| Lucide React | Latest  |

---

# 📁 Struktur Project

```text
src
│
├── app
│   ├── admin
│   ├── dashboard
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── globals.css
│
├── components
│   ├── admin
│   ├── dashboard
│   ├── employee
│   ├── layout
│   ├── forms
│   ├── common
│   ├── notification
│   └── ui
│
├── data
│
├── hooks
│
├── services
│
├── store
│
├── types
│
├── utils
│
├── lib
│
└── providers
```

---

# 🏗 Arsitektur

Project menggunakan pendekatan:

- Component Based Architecture
- Feature Separation
- Reusable Components
- API Service Layer
- Global State Management
- Clean Folder Structure

---

# 📂 Penjelasan Folder

## app/

Berisi routing Next.js.

```text
app
│
├── admin
│
├── dashboard
│
├── layout.tsx
│
└── loading.tsx
```

---

## components/

Berisi seluruh komponen React.

```text
components
│
├── admin
├── dashboard
├── employee
├── layout
├── forms
├── common
└── ui
```

---

## services/

Tempat seluruh komunikasi dengan Backend NestJS.

Contoh:

```text
services
│
├── auth.service.ts
├── employee.service.ts
├── dashboard.service.ts
└── kgb.service.ts
```

---

## data/

Data Dummy.

Selama backend belum selesai seluruh data sementara berada di sini.

---

## store/

State Global menggunakan Zustand.

Contoh:

- Authentication
- Theme
- User Session

---

# 🔐 Role

Project memiliki dua jenis pengguna.

## User

Halaman publik.

```
/dashboard
```

Digunakan pegawai untuk melihat informasi KGB.

---

## Admin

Halaman administrator.

```
/admin/dashboard
```

Memiliki hak akses:

- CRUD Pegawai
- CRUD KGB
- CRUD User
- Laporan
- Pengaturan

---

# 🌐 Backend

Frontend akan terhubung dengan Backend menggunakan REST API dari NestJS.

Contoh Endpoint:

```text
GET /employees

POST /employees

PUT /employees/:id

DELETE /employees/:id
```

---

# ⚙ Environment

Salin file environment.

```bash
cp .env.example .env
```

Isi:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

# 🚀 Menjalankan Project

Install dependency

```bash
npm install
```

Menjalankan project

```bash
npm run dev
```

Build Production

```bash
npm run build
```

---

# 📌 Git Commit Convention

Gunakan Conventional Commit.

Contoh:

```bash
feat(admin): create dashboard layout

feat(employee): add employee table

feat(kgb): implement KGB management

fix(auth): resolve login validation

refactor(layout): reorganize project structure

chore: update dependencies
```

---

# 📋 Coding Guidelines

- Gunakan TypeScript.
- Gunakan Functional Component.
- Gunakan TailwindCSS.
- Hindari duplikasi kode.
- Pisahkan logic dan UI.
- Gunakan Service untuk API.
- Gunakan React Query untuk Fetching Data.
- Gunakan Zustand untuk Global State.

---

# 📦 Deployment

Project dapat dideploy menggunakan:

- Vercel
- Docker
- VPS
- Nginx

---

# 👨‍💻 Developer

Frontend Developer

**MUH. RIDZWAN Dkk**

Universitas Negeri Makassar

Program Studi Pendidikan Teknik Informatika dan Komputer

---

# 📄 License

Project ini dikembangkan untuk kebutuhan Sistem Informasi Gaji Berkala (SIGAP KGB).

© 2026 SIGAP KGB
