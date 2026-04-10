import type { PortfolioData } from '../src/types';

// ─────────────────────────────────────────────
// All personal data is isolated here.
// Edit this file to update your portfolio content.
// ─────────────────────────────────────────────

import profileImage from './porto profil.jpeg';
import hmtiImage from './hmti.png';

const portfolioData: PortfolioData = {
    personal: {
        name: 'Sutan Arlie Johan',
        firstName: 'Sutan Arlie',
        lastName: 'Johan',
        title: 'Software & Back-End Engineer',
        tagline: 'Crafting elegant digital experiences with precision and purpose.',
        bio: `I am a proactive Information Technology student and researcher at Universitas Bina Sarana Informatika (UBSI), Depok. My work spans software engineering, academic research, and community empowerment. As a researcher and app developer, I co-developed SALI (Sadar dan Lindungi) — a gamified mobile application designed to educate and prevent child sexual abuse (CSA) for early childhood. I am a published academic contributor, with work featured in Jurnal Ilmu Pengetahuan dan Teknologi Komputer (JITK) on user experience evaluation of educational applications. I actively engage in community service, including facilitating community-based Digital Marketing training to help individuals create compelling visual content. I am also a registered inventor and copyright holder under Indonesia's Directorate General of Intellectual Property (HKI) for technological innovations — including co-leading "Trash Point," a smart waste management app that earned 2nd place at the UBSI Jawa Barat IT Bootcamp. I bridge technical engineering with real-world impact, with expertise in modern web frameworks (React, Laravel, TypeScript) and networking (MikroTik MTCNA, Cisco).`,
        shortBio: 'Developer. Engineer. Creator.',
        email: 'sutanarliejohan@gmail.com',
        location: 'Bogor, Indonesia',
        availableForWork: true,
        profileImage,
    },

    socials: [
        {
            id: 'github',
            label: 'GitHub',
            url: 'https://github.com/sutanarlie',
            icon: 'github',
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/sutanarlie',
            icon: 'linkedin',
        },
        {
            id: 'instagram',
            label: 'Instagram',
            url: 'https://instagram.com/sutanarlie',
            icon: 'instagram',
        },
        {
            id: 'email',
            label: 'Email',
            url: 'mailto:sutanarlie@example.com',
            icon: 'mail',
        },
    ],

    skills: [
        { id: 's1', name: 'React', category: 'frontend', proficiency: 85 },
        { id: 's2', name: 'TypeScript', category: 'frontend', proficiency: 80 },
        { id: 's3', name: 'Tailwind CSS', category: 'frontend', proficiency: 90 },
        { id: 's4', name: 'HTML/CSS', category: 'frontend', proficiency: 95 },
        { id: 's5', name: 'JavaScript', category: 'frontend', proficiency: 88 },
        { id: 's6', name: 'Laravel', category: 'backend', proficiency: 82 },
        { id: 's7', name: 'PHP', category: 'backend', proficiency: 80 },
        { id: 's8', name: 'Node.js', category: 'backend', proficiency: 70 },
        { id: 's9', name: 'MySQL', category: 'database', proficiency: 78 },
        { id: 's10', name: 'MikroTik', category: 'networking', proficiency: 85 },
        { id: 's11', name: 'Cisco', category: 'networking', proficiency: 75 },
        { id: 's12', name: 'Git', category: 'tools', proficiency: 85 },
        { id: 's13', name: 'Figma', category: 'tools', proficiency: 70 },
        { id: 's14', name: 'Linux', category: 'tools', proficiency: 75 },
    ],

    projects: [
        {
            id: 'p1',
            title: 'Trash Point',
            description:
                'Inovasi sistem pengelolaan sampah cerdas yang dikembangkan pada bootcamp. Meraih Juara 2 se-UBSI Jawa Barat, dengan fitur pelacakan lokasi titik sampah, dashboard analitik, dan sistem reward berbasis poin.',
            longDescription: `
                <div class="space-y-4">
                    <h4 class="text-xl font-semibold text-white">Latar Belakang</h4>
                    <p>Pengelolaan sampah seringkali menjadi masalah krusial di lingkungan urban. Kurangnya fasilitas yang terhubung dan kesadaran masyarakat menyebabkan banyak wilayah yang membuang sampah sembarangan. <strong>Trash Point</strong> diinisiasi sebagai solusi digital yang proaktif, menghubungkan masyarakat dengan manajemen sampah secara real-time.</p>
                    <h4 class="text-xl font-semibold text-white mt-6">Solusi & Fitur Utama</h4>
                    <p>Aplikasi web ini menghadirkan sistem pelacakan titik sampah terdekat dengan peta interaktif. Kami menerapkan model insentif berbasis poin di mana setiap pelaporan atau pembuangan sampah pada tempatnya dapat dikonversi menjadi hadiah.</p>
                    <ul class="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Dashboard Analitik:</strong> Memudahkan admin untuk memantau tren penumpukan sampah di berbagai distrik.</li>
                        <li><strong>Reward System:</strong> Menggunakan struktur poin agar masyarakat memiliki motivasi lebih tinggi dalam menjaga kebersihan lingkungan.</li>
                        <li><strong>Pelaporan Real-time:</strong> Pelaporan cepat lokasi yang darurat membutuhkan penanganan kebersihan.</li>
                    </ul>
                    <h4 class="text-xl font-semibold text-white mt-6">Dampak & Prestasi</h4>
                    <p>Proyek ini tidak hanya sekadar prototipe fungsional; dengan koordinasi tim yang solid, dedikasi, serta validasi kelayakan bisnis, proyek <strong>Trash Point</strong> sukses menempati posisi <strong>Juara 2 dalam ajang IT Bootcamp se-Universitas Bina Sarana Informatika Jawa Barat</strong>. Lebih lanjut, karya inovatif ini telah resmi menerima <strong>Sertifikat Hak Kekayaan Intelektual (HKI)</strong>.</p>
                </div>
            `,
            techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
            imageUrl: '/sosial/HKI.jpeg',
            featured: true,
            category: 'Web App',
            award: '🏆 Juara 2 — UBSI Jawa Barat',
        },
        {
            id: 'p2',
            title: 'E-Commerce Platform for Fresh Fish Transactions',
            description:
                'Platform e-commerce khusus transaksi ikan segar, lengkap dengan manajemen produk, sistem keranjang belanja, payment gateway, dan dashboard admin untuk memantau penjualan secara real-time.',
            longDescription: `
                <div class="space-y-4">
                    <h4 class="text-xl font-semibold text-white">Tinjauan Proyek</h4>
                    <p>Pasar perikanan lokal kerap kali menghadapi kendala distribusi yang memakan waktu sehingga kesegaran hasil tangkapan menurun saat mencapai konsumen akhir. E-Commerce Platform khusus transaksi ikan segar ini dirancang dari nol bekerja sama dengan dosen universitas untuk memotong perantara (middle-men), memberdayakan nelayan lokal, dan menghadirkan ikan kualitas premium langsung ke tangan pelanggan secara efisien.</p>
                    <h4 class="text-xl font-semibold text-white mt-6">Arsitektur & Pengembangan</h4>
                    <p>Secara teknis, platform ini dibangun menggunakan <strong>Laravel & PHP</strong> sebagai fondasi *backend* yang melayani manajemen pengelolaan produk, stok inventaris, serta autentikasi berbasis *role* (pengguna vs admin). UI/UX di sisi publik dan area dashboard diformulasikan dengan <strong>Tailwind CSS</strong> agar sepenuhnya responsif pada segala ukuran perangkat seluler dan desktop.</p>
                    <ul class="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Modul Manajemen Inventaris:</strong> Monitoring level stok Ikan Nila & Ikan Mas Premium secara akurat.</li>
                        <li><strong>Gateway Pembayaran:</strong> Integrasi API transaksi digital guna memberikan kemudahan belanja dan tingkat keamanan yang sesuai standar industri.</li>
                        <li><strong>Admin Dashboard:</strong> Visualisasi grafik data untuk analitik pesanan dan pantauan pendapatan secara real-time.</li>
                    </ul>
                    <h4 class="text-xl font-semibold text-white mt-6">Hasil Akhir</h4>
                    <p>Aplikasi ini sukses mendemonstrasikan sistem tata kelola bisnis berbasis *Full-Stack* yang solid dengan arsitektur database relasional (MySQL) dengan pengelolaan *state* keranjang belanja yang persisten dan alur *checkout* transaksi yang ramah pengguna.</p>
                </div>
            `,
            techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
            imageUrl: '/sosial/fish market.png',
            repoUrl: 'https://github.com/Sutannn13/E-commerce-platform-for-fresh-fish-transactions.git',
            featured: true,
            category: 'Web App',
        },
        {
            id: 'p3',
            title: 'Website HMTI BSI Margonda',
            description:
                'Website resmi Himpunan Mahasiswa Teknologi Informasi (HMTI) Universitas Bina Sarana Informatika kampus Margonda — platform digital organisasi untuk informasi kegiatan, pengumuman, dan profil kepengurusan.',
            longDescription: `
                <div class="space-y-4">
                    <h4 class="text-xl font-semibold text-white">Tentang Proyek</h4>
                    <p><strong>HMTI BSI Margonda</strong> adalah organisasi kemahasiswaan di bawah Program Studi Teknologi Informasi, Universitas Bina Sarana Informatika. Website ini dikembangkan sebagai platform digital resmi HMTI untuk menampilkan informasi organisasi, agenda kegiatan, pengumuman, dan galeri dokumentasi kemahasiswaan.</p>
                    <h4 class="text-xl font-semibold text-white mt-6">Fitur & Arsitektur</h4>
                    <p>Dibangun menggunakan <strong>Laravel</strong> dengan arsitektur MVC yang terstruktur rapi. Blade templating digunakan di sisi frontend untuk rendering tampilan yang dinamis dan responsif di berbagai perangkat.</p>
                    <ul class="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Halaman Profil Organisasi:</strong> Menampilkan visi-misi, struktur kepengurusan, dan identitas HMTI secara profesional.</li>
                        <li><strong>Manajemen Konten Dinamis:</strong> Sistem backend untuk mengelola berita, agenda kegiatan, dan pengumuman secara real-time.</li>
                        <li><strong>Desain Responsif:</strong> Tampilan optimal di semua ukuran layar menggunakan Tailwind CSS dan Vite sebagai build tool modern.</li>
                    </ul>
                    <h4 class="text-xl font-semibold text-white mt-6">Konteks Pengembangan</h4>
                    <p>Proyek ini merupakan kontribusi nyata dalam ekosistem kampus UBSI, mendukung digitalisasi kegiatan kemahasiswaan dan memperkuat identitas digital HMTI di tingkat universitas.</p>
                </div>
            `,
            techStack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS', 'Vite'],
            imageUrl: hmtiImage,
            repoUrl: 'https://github.com/Sutannn13/HMTI-Margonda.git',
            featured: true,
            category: 'Organization Website',
        },
    ],

    experiences: [
        {
            id: 'e0',
            role: 'Backend Engineer Intern',
            company: 'Connextion',
            location: 'Indonesia (Remote)',
            startDate: 'Mar 2026',
            endDate: 'Present',
            description:
                'Currently working as a Backend Engineer Intern at Connextion (connextion.tech), helping aspiring founders build market-ready products by developing scalable backend architectures and API integrations.',
            highlights: [
                'Set up and configured Firebase and Google Authentication for secure user access.',
                "Designed and implemented the database schema for the platform's questionnaire responses.",
                'Developed and integrated REST APIs connecting the frontend questionnaire forms with the backend system.',
            ],
        },
        {
            id: 'e1',
            role: 'Peneliti & Pengembang Aplikasi',
            company: 'Universitas Bina Sarana Informatika, Project Base',
            location: 'Depok, Indonesia',
            startDate: 'Sept 2025',
            endDate: 'Jan 2026',
            description:
                'Co-developed SALI (Sadar dan Lindungi), a gamified mobile application for educating early childhood about preventing child sexual abuse (CSA). Contributed to academic publication on UX evaluation and facilitated community-based Digital Marketing training.',
            highlights: [
                'Co-developed SALI — a gamified mobile education app for child sexual abuse (CSA) prevention targeting early childhood users.',
                'Conducted User Acceptance Testing (UAT) by collecting qualitative feedback from teachers and parents for application feasibility analysis.',
                'Co-authored a research paper published in Jurnal Ilmu Pengetahuan dan Teknologi Komputer (JITK) on user experience evaluation of educational applications.',
                'Facilitated community-based Digital Marketing training to help participants develop visual content creation skills.',
                'Registered as inventor/copyright holder under Direktorat Jenderal Kekayaan Intelektual (HKI Indonesia) for the SALI application.',
            ],
        },
        {
            id: 'e2',
            role: 'Project Manager & Lead Developer',
            company: 'IT Bootcamp — Universitas Bina Sarana Informatika',
            location: 'Depok, Indonesia',
            startDate: '2024',
            endDate: '2025',
            description:
                'Led a 9-person team in a fullstack web development bootcamp, building "Trash Point" — a web-based education and waste management app.',
            highlights: [
                'Coordinated full project lifecycle: ideation, design, task delegation, and final jury presentation',
                'Achieved 2nd place out of dozens of competing teams at UBSI Jawa Barat',
                'Project registered and awarded HKI Intellectual Property Certificate',
                'Built with Laravel, MySQL, Tailwind CSS, and JavaScript',
            ],
        },
        {
            id: 'e3',
            role: 'Full-Stack Developer',
            company: 'Universitas Bina Sarana Informatika (University Project)',
            location: 'Depok, Indonesia',
            startDate: '2023',
            endDate: '2024',
            description:
                'Collaborated with a university lecturer to build an E-Commerce Platform for Fresh Fish Transactions from the ground up.',
            highlights: [
                'Developed a specialized e-commerce system including product management, shopping cart, and checkout flow',
                'Integrated a payment gateway and implemented an admin dashboard for real-time sales monitoring',
                'Utilized Laravel, PHP, MySQL, and Tailwind CSS to ensure a robust and responsive user experience',
            ],
        },
    ],

    certificates: [
        {
            id: 'c1',
            title: 'MTCNA — MikroTik Certified Network Associate',
            issuer: 'MikroTik',
            date: '2024',
            imageUrl: '/sosial/Sutan-Arlie-MTCNA_page-0001.jpg',
        },
        {
            id: 'c2',
            title: 'Cisco Networking Certificate',
            issuer: 'Cisco',
            date: '2024',
            imageUrl: '/sosial/Sertifikat-Cisco_page-0001.jpg',
        },
        {
            id: 'c3',
            title: 'Bootcamp Fullstack Web Development',
            issuer: 'UBSI — Bina Sarana Informatika',
            date: '2025',
            imageUrl: '/sosial/Sertifikat-Bootcamp-Sutan-Arlie_page-0001.jpg',
        },
        {
            id: 'c4',
            title: 'HKI — Intellectual Property Certificate',
            issuer: 'HKI Indonesia',
            date: '2025',
            imageUrl: '/sosial/HKI.jpeg',
        },
    ],

    blogPosts: [
        {
            id: 'blog-1',
            slug: 'tugas-perorangan-1-iot',
            title: 'Rangkuman Materi IoT Pertemuan 1 s/d 3: Dari M2M ke Arsitektur Referensi',
            subtitle: 'Tugas Perorangan #1. Pembahasan materi Pertemuan 1 s/d 3 beserta sumber referensi.',
            date: '2026-03-31',
            author: 'Sutan Arlie Johan',
            course: 'Internet of Things (IoT), Kode MK 0246',
            assignment: 'Tugas Perorangan #1',
            coverIcon: '🌐',
            tags: ['IoT', 'M2M', 'Arsitektur IoT', 'ITU-T Y.2060', 'Sensor', 'Edge Computing'],
            tableOfContents: [
                'Pendahuluan',
                'Pertemuan 1: Dasar Machine to Machine',
                'Pertemuan 2: Perspektif dan Struktur IoT',
                'Pertemuan 3: Arsitektur Referensi IoT',
                'Kesimpulan',
            ],
            sections: [
                {
                    id: 's-intro',
                    heading: 'Pendahuluan',
                    body: 'Tulisan ini dibuat untuk memenuhi Tugas Perorangan #1 mata kuliah Internet of Things. Fokus pembahasannya adalah materi Pertemuan 1 sampai 3 yang membentuk fondasi pemahaman IoT. Link artikel ini juga disiapkan untuk dikirim ke dosen sebagai komponen penilaian UTS.\n\nPembahasan dimulai dari konsep Machine to Machine sebagai akar komunikasi antar perangkat, lalu berlanjut ke perspektif dan struktur IoT, kemudian ditutup dengan arsitektur referensi yang umum dipakai dalam implementasi. Semua bagian dirangkum dengan bahasa yang ringkas agar alur materinya mudah dipahami.',
                },
                {
                    id: 's-m2m',
                    heading: 'Pertemuan 1: Dasar Machine to Machine',
                    body: 'Machine to Machine atau M2M adalah pola komunikasi ketika perangkat bertukar data secara otomatis tanpa campur tangan manusia secara langsung. Pada tahap ini, komunikasi biasanya masih fokus pada kebutuhan tertentu dan jalur koneksi yang relatif terbatas.\n\nM2M penting karena menjadi dasar munculnya IoT modern. Melalui M2M, perangkat bisa mengirim status, menerima perintah, dan merespons kondisi lapangan dengan lebih cepat dibanding proses manual.',
                    bullets: [
                        'Transportasi: pelacakan posisi kendaraan dan pemantauan kondisi armada secara berkala.',
                        'Keamanan: sensor alarm dan kamera yang mengirim notifikasi saat ada anomali.',
                        'Kesehatan: pemantauan parameter pasien dari perangkat medis jarak jauh.',
                        'Otomotif: pembacaan data mesin untuk deteksi dini potensi gangguan kendaraan.',
                    ],
                },
                {
                    id: 's-structure',
                    heading: 'Pertemuan 2: Perspektif dan Struktur IoT',
                    body: 'Pada pertemuan kedua, IoT dibahas sebagai ekosistem yang lebih luas dibanding M2M. Jika M2M cenderung satu layanan untuk satu kebutuhan, IoT menghubungkan banyak perangkat, banyak data, dan banyak layanan dalam satu alur terintegrasi.\n\nMateri ini menekankan bahwa keberhasilan IoT tidak hanya bergantung pada perangkat, tetapi juga pada konektivitas, pengelolaan data, serta integrasi aplikasi yang dipakai pengguna.',
                    bullets: [
                        'Smart connectivity: koneksi antar perangkat bergerak dan layanan digital.',
                        'Intelligent building: otomasi gedung untuk efisiensi energi dan keamanan.',
                        'Smart city: pemantauan lalu lintas, utilitas, dan layanan publik berbasis data.',
                        'Agricultural IoT: pemantauan kondisi lahan dan ternak untuk keputusan cepat.',
                    ],
                },
                {
                    id: 's-architecture',
                    heading: 'Pertemuan 3: Arsitektur Referensi IoT',
                    body: 'Pertemuan ketiga membahas arsitektur IoT berdasarkan kerangka referensi, salah satunya ITU-T Y.2060. Arsitektur ini membantu perancang sistem memahami fungsi setiap lapisan agar implementasi tidak berhenti di prototipe, tetapi siap digunakan dalam skala nyata.\n\nDengan arsitektur berlapis, data dapat mengalir dari perangkat lapangan menuju layanan aplikasi secara lebih tertata. Pendekatan ini juga membantu proses pemeliharaan, pengembangan, dan pengamanan sistem dalam jangka panjang.',
                    bullets: [
                        'Device layer: sensor dan aktuator yang berinteraksi langsung dengan objek fisik.',
                        'Network layer: pengiriman data melalui jaringan dan gateway.',
                        'Processing layer: pengolahan data di edge atau cloud sebelum menjadi informasi.',
                        'Application layer: layanan yang dipakai pengguna untuk monitoring dan kontrol.',
                    ],
                },
                {
                    id: 's-conclusion',
                    heading: 'Kesimpulan',
                    body: 'Materi Pertemuan 1 sampai 3 menunjukkan alur yang saling berhubungan. M2M memberi pondasi komunikasi antar perangkat, kemudian IoT memperluasnya menjadi ekosistem terintegrasi, dan arsitektur referensi memastikan sistem dapat dibangun secara terstruktur.\n\nDari sudut pandang pembelajaran, tiga materi awal ini penting sebagai bekal sebelum masuk ke bahasan perangkat, standar lintas organisasi, serta model keamanan pada pertemuan selanjutnya.',
                },
            ],
            references: [
                {
                    text: 'ITU-T Recommendation Y.2060, Overview of the Internet of Things.',
                    url: 'https://www.itu.int/rec/T-REC-Y.2060-201206-I/en',
                    proof: 'standar',
                },
                {
                    text: 'Holler, J., Tsiatsis, V., Mulligan, C., Karnouskos, S., Avesand, S., Boyle, D. From Machine-to-Machine to the Internet of Things.',
                    url: 'https://www.elsevier.com/books/from-machine-to-machine-to-the-internet-of-things/holler/978-0-12-407684-6',
                    proof: 'buku',
                },
                {
                    text: 'McEwen, A., Cassimally, H. Designing the Internet of Things.',
                    url: 'https://www.wiley.com/en-us/Designing+the+Internet+of+Things-p-9781118430620',
                    proof: 'buku',
                },
                {
                    text: 'Empowering Strawberry Cultivation: Harnessing the Potential of IoT-Based Technology in Smart Farming (JITK).',
                    url: 'https://ejournal.nusamandiri.ac.id/index.php/jitk/article/view/4162',
                    proof: 'jurnal',
                },
                {
                    text: 'A Comparative Study of HTTP and MQTT for IoT Applications in Hydroponics (Jurnal RESTI).',
                    url: 'https://jurnal.iaii.or.id/index.php/RESTI/article/view/5561',
                    proof: 'jurnal',
                },
            ],
        },
        {
            id: 'blog-2',
            slug: 'tugas-perorangan-2-iot',
            title: 'Rangkuman Materi IoT Pertemuan 4 s/d 6: Perangkat, Standar, dan Model Referensi',
            subtitle: 'Tugas Perorangan #2. Pembahasan materi Pertemuan 4 s/d 6 dengan fokus minimal dua materi inti dan referensinya.',
            date: '2026-04-02',
            author: 'Sutan Arlie Johan',
            course: 'Internet of Things (IoT), Kode MK 0246',
            assignment: 'Tugas Perorangan #2',
            coverIcon: '🛰️',
            tags: ['IoT Hardware', 'Gateway', 'ETSI', 'ITU-T', 'IETF', 'ISO/IEC 30141', 'IoT Security'],
            tableOfContents: [
                'Pendahuluan',
                'Pertemuan 4: Perangkat dan Alur Data IoT',
                'Pertemuan 5: ETSI, ITU-T, dan IETF',
                'Pertemuan 6: Model Referensi dan Keamanan',
                'Analisis Implementasi',
                'Kesimpulan',
            ],
            sections: [
                {
                    id: 's2-intro',
                    heading: 'Pendahuluan',
                    body: 'Tulisan ini merupakan pemenuhan Tugas Perorangan #2 untuk materi Pertemuan 4 sampai 6 mata kuliah IoT. Sesuai arahan tugas, bahasan difokuskan pada materi inti yang paling relevan untuk implementasi sistem, kemudian didukung dengan referensi akademik dan standar resmi.\n\nLink artikel ini disiapkan untuk dikirim ke dosen sebagai bagian penilaian UTS. Tujuan utamanya adalah menunjukkan pemahaman konsep, bukan sekadar merangkum slide perkuliahan.',
                },
                {
                    id: 's2-p4',
                    heading: 'Pertemuan 4: Perangkat dan Alur Data IoT',
                    body: 'Pertemuan 4 membahas komponen fisik dan alur data dari lapangan ke layanan aplikasi. Sensor membaca kondisi lingkungan, aktuator mengeksekusi perintah, lalu gateway meneruskan data ke sistem pemrosesan.\n\nMateri ini penting karena kualitas sistem IoT sangat ditentukan oleh kualitas aliran data. Data harus terkumpul dengan benar, diproses tepat waktu, dan disajikan kembali ke pengguna dalam bentuk informasi yang bisa ditindaklanjuti.',
                    bullets: [
                        'Things: perangkat fisik yang menghasilkan data dan merespons perintah.',
                        'Gateway: penghubung perangkat lapangan dengan layanan jaringan yang lebih luas.',
                        'Cloud gateway: kontrol keamanan akses dan penyesuaian protokol komunikasi.',
                        'Data processing: penyaringan, agregasi, dan analisis data sebelum dipakai aplikasi.',
                        'User application: tampilan monitoring dan kontrol berbasis kebutuhan pengguna.',
                    ],
                },
                {
                    id: 's2-p5',
                    heading: 'Pertemuan 5: ETSI, ITU-T, dan IETF',
                    body: 'Pertemuan ini menjelaskan peran standar lintas organisasi agar perangkat dari vendor berbeda tetap bisa berkomunikasi. ETSI banyak membahas fondasi jaringan dan virtualisasi fungsi jaringan. ITU-T memberi kerangka arsitektur dan terminologi yang konsisten. IETF berfokus pada protokol internet yang dipakai dalam komunikasi data IoT.\n\nDengan memahami tiga organisasi ini, desain sistem menjadi lebih siap untuk interoperabilitas dan pengembangan jangka panjang.',
                    bullets: [
                        'ETSI: mendorong standar infrastruktur dan virtualisasi jaringan.',
                        'ITU-T: menyediakan rekomendasi arsitektur serta konsep layanan IoT.',
                        'IETF: menyusun standar protokol komunikasi internet untuk pertukaran data.',
                    ],
                },
                {
                    id: 's2-p6',
                    heading: 'Pertemuan 6: Model Referensi dan Keamanan',
                    body: 'Pertemuan 6 menekankan bahwa IoT perlu dibangun dengan model referensi yang jelas agar setiap komponen memiliki peran terukur. Model ini mencakup domain, informasi, fungsi, komunikasi, serta keamanan.\n\nSaat lima aspek ini dirancang dari awal, sistem lebih mudah diaudit, dipelihara, dan ditingkatkan. Hal ini sangat penting ketika solusi IoT dipakai di lingkungan publik atau industri yang membutuhkan keandalan tinggi.',
                    bullets: [
                        'Model domain: relasi antara entitas fisik, perangkat, dan representasi digital.',
                        'Model informasi: struktur data, metadata, dan konteks pertukaran data.',
                        'Model fungsional: pembagian peran antar komponen layanan.',
                        'Model komunikasi: mekanisme pengiriman data yang andal dan efisien.',
                        'Model keamanan: autentikasi, otorisasi, kerahasiaan, dan integritas data.',
                    ],
                },
                {
                    id: 's2-analysis',
                    heading: 'Analisis Implementasi',
                    body: 'Jika diterapkan pada skenario smart home, materi Pertemuan 4 menjelaskan komponen perangkat dan alur data dasarnya. Materi Pertemuan 5 membantu memilih standar komunikasi agar perangkat tetap kompatibel. Materi Pertemuan 6 memastikan sistem memiliki model keamanan dan tata kelola yang jelas.\n\nKombinasi ketiga materi tersebut membuat solusi IoT lebih stabil, aman, dan siap dikembangkan ketika jumlah perangkat bertambah.',
                },
                {
                    id: 's2-conclusion',
                    heading: 'Kesimpulan',
                    body: 'Materi Pertemuan 4 sampai 6 menegaskan bahwa IoT tidak cukup dibangun dari sensor dan koneksi internet saja. Sistem yang baik harus ditopang oleh alur data yang rapi, standar yang tepat, dan model referensi yang aman.\n\nPemahaman ini menjadi bekal penting untuk menyusun solusi IoT yang bisa dipakai pada kebutuhan nyata, baik untuk skala kampus, industri, maupun layanan publik.',
                },
            ],
            references: [
                {
                    text: 'ITU-T Recommendation Y.2060, Overview of the Internet of Things.',
                    url: 'https://www.itu.int/rec/T-REC-Y.2060-201206-I/en',
                    proof: 'standar',
                },
                {
                    text: 'ISO/IEC 30141 Internet of Things Reference Architecture.',
                    url: 'https://www.iso.org/standard/65695.html',
                    proof: 'standar',
                },
                {
                    text: 'ETSI Network Functions Virtualisation (NFV) overview.',
                    url: 'https://www.etsi.org/technologies/nfv',
                    proof: 'standar',
                },
                {
                    text: 'IETF RFC 7252, The Constrained Application Protocol (CoAP).',
                    url: 'https://www.rfc-editor.org/rfc/rfc7252',
                    proof: 'standar',
                },
                {
                    text: 'Deep Learning dengan Teknik Early Stopping untuk Mendeteksi Malware pada Perangkat IoT (JTIIK).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/8267',
                    proof: 'jurnal',
                },
                {
                    text: 'Implementation of IoT-Based Presence Applications in Junior High Schools to Support Smart Schools (JITK).',
                    url: 'https://ejournal.nusamandiri.ac.id/index.php/jitk/article/view/4119',
                    proof: 'jurnal',
                },
            ],
        },
    ],

    navigation: [
        { id: 'nav-home', label: 'Home', href: '#home' },
        { id: 'nav-about', label: 'About', href: '#about' },
        { id: 'nav-experience', label: 'Experience', href: '#experience' },
        { id: 'nav-projects', label: 'Projects', href: '#projects' },
        { id: 'nav-skills', label: 'Skills', href: '#skills' },
        { id: 'nav-certificates', label: 'Certificates', href: '#certificates' },
        { id: 'nav-blog', label: 'Blog', href: '#blog' },
        { id: 'nav-github', label: 'GitHub', href: '#github' },
        { id: 'nav-contact', label: 'Contact', href: '#contact' },
    ],
};

export default portfolioData;
