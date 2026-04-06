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
            title: 'Dari M2M Menuju Internet of Things: Evolusi, Struktur, dan Arsitektur Referensi ITU-T Y.2060',
            subtitle: 'Tugas Perorangan #1 — Membahas materi Pertemuan 1 s/d 3 mata kuliah Internet of Things (IoT)',
            date: '2026-03-31',
            author: 'Sutan Arlie Johan',
            course: 'Internet of Things (IoT) — Kode MK: 0246',
            assignment: 'Tugas Perorangan #1',
            coverIcon: '🌐',
            tags: ['IoT', 'M2M', 'ITU-T Y.2060', 'Arsitektur IoT', 'Sensor', 'AI', 'Edge Computing'],
            tableOfContents: [
                'Pendahuluan',
                'Pertemuan 1 — Machine-to-Machine (M2M) Communication',
                'Pertemuan 2 — Perspektif, Rantai, dan Struktur IoT',
                'Pertemuan 3 — Arsitektur, Prinsip, dan Fungsi IoT',
                'Kesimpulan dan Refleksi',
                'Referensi',
            ],
            sections: [
                {
                    id: 's-intro',
                    heading: 'Pendahuluan',
                    body: 'Internet of Things (IoT) merupakan sebuah paradigma teknologi yang memperluas manfaat konektivitas internet secara terus-menerus ke benda-benda fisik di dunia nyata. Konsep ini memungkinkan perangkat — mulai dari sensor mungil hingga mesin industri — untuk saling berkomunikasi, berbagi data, dan bahkan mengambil keputusan secara otonom melalui jaringan digital. Dalam dekade terakhir, IoT telah berevolusi dari sekadar komunikasi Machine-to-Machine (M2M) yang terbatas, menjadi sebuah ekosistem cerdas yang mencakup kecerdasan buatan, edge computing, dan arsitektur berlapis yang terstandarisasi oleh badan internasional seperti ITU-T.\n\nTulisan ini disusun sebagai pemenuhan Tugas Perorangan #1 mata kuliah Internet of Things (IoT), Universitas Bina Sarana Informatika. Materi yang dibahas mencakup tiga pertemuan awal: (1) definisi dan perkembangan M2M Communication, (2) perspektif, rantai, dan struktur IoT, serta (3) arsitektur, prinsip, dan fungsi IoT berdasarkan model referensi ITU-T Y.2060. Pembahasan dilakukan secara akademis, mengacu pada sumber referensi utama yang digunakan dalam perkuliahan.',
                },
                {
                    id: 's-m2m',
                    heading: 'Pertemuan 1 — Machine-to-Machine (M2M) Communication',
                    body: 'Machine-to-Machine (M2M) adalah teknologi yang memungkinkan perangkat saling berkomunikasi dan bertukar data secara otomatis tanpa intervensi manusia. Menurut Holler et al. (2014), M2M merupakan fondasi awal dari ekosistem IoT — di mana dua atau lebih mesin terhubung melalui jaringan IP, SMS, atau saluran komunikasi nirkabel lainnya untuk memberikan layanan dengan campur tangan manusia yang minimal.\n\nSecara teknis, M2M beroperasi melalui berbagai jenis koneksi: short-range (Wi-Fi, Zigbee, Ethernet), Powerline Communication (PLC), satellite, maupun fixed network (PSTN, ISDN, DSL, fiber, dan cable). Contoh klasik implementasi M2M adalah teknologi RFID, di mana sensor dapat berkomunikasi langsung dengan kendaraan yang memiliki transponder khusus — komunikasi terjadi secara instan saat kedua perangkat bertemu, tanpa adanya perintah manual dari manusia.',
                    bullets: [
                        'Transportasi — Pelacakan kendaraan dan aset secara real-time, komunikasi vehicle-to-infrastructure (V2I) untuk menentukan rute alternatif, serta navigasi kendaraan darurat seperti ambulans dan pemadam kebakaran.',
                        'Keamanan — Sistem pengawasan jarak jauh (remote surveillance) dan early warning system terhadap ancaman kriminalitas maupun kebakaran, baik di lingkungan residensial maupun industri.',
                        'Kesehatan — Remote patient monitoring yang memungkinkan pasien mendapat pengawasan medis kontinu dari rumah. Jika terjadi perubahan negatif pada kondisi tubuh, staf kesehatan dapat segera memberikan pertolongan tanpa pasien harus berada di rumah sakit.',
                        'Otomotif — Diagnosis kendaraan jarak jauh (remote vehicle diagnostics) yang memperingatkan pengendara terhadap potensi kerusakan mesin beserta solusi yang tersedia.',
                    ],
                },
                {
                    id: 's-m2m-to-iot',
                    heading: 'Evolusi M2M Menuju IoT',
                    body: 'Perbedaan fundamental antara M2M dan IoT terletak pada skala dan orientasinya. M2M berfokus pada komunikasi point-to-point antar dua mesin spesifik menggunakan saluran komunikasi yang terbatas, sementara IoT memperluas konsep ini ke skala jaringan internet global — menghubungkan miliaran perangkat heterogen ke dalam satu ekosistem yang terintegrasi.\n\nMenurut materi perkuliahan, M2M dan IoT sama-sama mendigitalisasikan proses kerja menggunakan teknologi yang menghubungkan perangkat melalui jaringan IP agar dapat dimonitor dan dikontrol secara efisien. Namun, IoT menambahkan dimensi interoperabilitas antar-perangkat yang lebih luas, pengolahan data berbasis cloud, serta kemampuan analitik dan kecerdasan buatan yang adaptif. Solusi layanan M2M/IoT untuk mendukung proses bisnis mencakup: Building & Infrastructure Automation (Smart Building, Smart Home, Smart Office, Smart Lighting, dan Smart Water), Custom IoT Solution, dan M2M/IoT Network Monitoring.',
                },
                {
                    id: 's-structure',
                    heading: 'Pertemuan 2 — Perspektif, Rantai, dan Struktur IoT',
                    body: 'IoT diprediksi menjadi bagian tak terpisahkan dari kehidupan manusia di masa mendatang. Berdasarkan materi perkuliahan, terdapat empat perspektif utama implementasi IoT secara garis besar:',
                    bullets: [
                        'Smart Connectivity — Koneksi terhadap perangkat dalam kondisi bergerak (mobile), khususnya hubungan antara smartphone dengan kendaraan, rumah sakit, perkantoran, atau perangkat lainnya.',
                        'Intelligent Building — Pengawasan dan kontrol terhadap gedung serta perumahan untuk efisiensi energi dan keamanan, misalnya kontrol jarak jauh terhadap AC, kulkas, dan lampu listrik.',
                        'Smart City — Pengaturan dan pengelolaan perkotaan seperti pengaturan trafik lalu lintas, sistem keamanan kota, dan pemantauan energi.',
                        'Agricultural IoT — Pemanfaatan IoT di sektor peternakan dan pertanian pada wilayah rural, seperti pemantauan kondisi hewan ternak dan pertumbuhan tanaman.',
                    ],
                },
                {
                    id: 's-elements',
                    heading: 'Unsur-Unsur Pembentuk IoT',
                    body: 'Menurut materi perkuliahan yang mengacu pada daCosta (2013) dan Holler et al. (2014), terdapat empat unsur pembentuk IoT yang mendasar:',
                    bullets: [
                        'Kecerdasan Buatan (Artificial Intelligence/AI) — IoT membuat hampir semua mesin menjadi "smart" melalui pengumpulan data, algoritma AI, dan jaringan yang tersedia. Contoh sederhana: kulkas cerdas yang mendeteksi stok bahan kebutuhan yang menipis dan secara otomatis membuat pesanan ke supermarket.',
                        'Konektivitas — IoT memungkinkan penciptaan jaringan baru yang tidak harus berskala besar dan mahal. Jaringan dapat tersedia pada skala kecil dan murah di antara perangkat-perangkat dalam sistem.',
                        'Sensor — Komponen pembeda yang membuat IoT unik. Sensor mengubah jaringan standar yang cenderung pasif menjadi sistem aktif yang mampu diintegrasikan ke dunia nyata, mendefinisikan instrumen pengumpulan data secara real-time.',
                        'Perangkat Berukuran Kecil — Seiring perkembangan teknologi, perangkat menjadi semakin kecil, murah, dan powerful. IoT memanfaatkan perangkat-perangkat mikro ini untuk menghasilkan ketepatan, skalabilitas, dan fleksibilitas yang optimal.',
                    ],
                },
                {
                    id: 's-iot-chain',
                    heading: 'Rantai M2M dan IoT',
                    body: 'Perkembangan teknologi koneksi data seluler telah mengubah lanskap penggunaan internet secara fundamental. Koneksi data tidak lagi terbatas untuk browsing, streaming video, atau komunikasi media sosial — tetapi kini mampu menghubungkan perangkat-perangkat yang sebelumnya terisolasi.\n\nDalam konsep smart home misalnya, perangkat keamanan, lampu, dan kulkas yang berada di rumah dapat dioperasikan dan dipantau melalui handphone dari lokasi yang terpisah. Keterlibatan aktif (Active Engagement) juga menjadi paradigma baru: berbeda dengan teknologi konvensional yang bersifat pasif, IoT mengenalkan konten aktif, produk aktif, dan keterlibatan layanan yang responsif terhadap kondisi real-time.',
                },
                {
                    id: 's-architecture',
                    heading: 'Pertemuan 3 — Arsitektur, Prinsip, dan Fungsi IoT',
                    body: 'Internet of Things (IoT) merupakan pengembangan terbaru dari revolusi komunikasi dan komputasi. IoT mengacu pada interkoneksi perangkat cerdas yang mencakup berbagai macam perkakas hingga sensor-sensor mungil, yang umumnya terhubung melalui sistem cloud. McKinsey Global Institute memperkirakan IoT memiliki dampak ekonomi potensial sebesar $3,9–11,1 triliun per tahun pada tahun 2025.\n\nTelecommunication Standardization Sector of the International Telecommunication Union (ITU-T) telah mempublikasikan Recommendation Y.2060 berjudul "Overview of the Internet of Things" yang menyediakan definisi dan cakupan IoT secara komprehensif. Dimensi baru yang diperkenalkan oleh IoT adalah komunikasi "any THING communication" — di mana komunikasi tidak lagi terbatas pada antar-manusia atau manusia-ke-mesin, tetapi juga mencakup komunikasi apa pun antar benda.',
                },
                {
                    id: 's-itu-t',
                    heading: 'Model Referensi ITU-T Y.2060 (4 Layer)',
                    body: 'Model referensi IoT yang didefinisikan dalam Recommendation Y.2060 menjelaskan komponen fisik pada ekosistem IoT secara detail. Aspek unik IoT adalah adanya perangkat dan benda-benda fisik dalam jumlah yang sangat besar, selain perangkat komputasi dan pemrosesan datanya. Model ini terdiri dari empat layer fungsional:',
                    bullets: [
                        'Layer 1 — Device Layer: Terdiri dari sensor, aktuator, dan perangkat fisik yang berinteraksi langsung dengan lingkungan. Sensor mengumpulkan data dari benda fisik, sementara aktuator melakukan aksi (menghidupkan/mematikan lampu, membuka/menutup pintu, dll). Data-capturing devices berinteraksi dengan benda fisik melalui data-carrying devices (label RFID aktif) atau data carriers (barkode, QR code). General devices memiliki kemampuan komunikasi dan pemrosesan data, misalnya mesin industri, perkakas listrik rumah, dan ponsel cerdas.',
                        'Layer 2 — Network Layer: Menyediakan konektivitas dan transportasi data antar perangkat. Gateway berfungsi sebagai penerjemah protokol antar-perangkat yang mendukung berbagai jenis teknologi transmisi kabel dan nirkabel. Gateway juga berfungsi sebagai agen IoT yang mendukung interaksi antar-aplikasi, manajemen jaringan, dan fungsi keamanan.',
                        'Layer 3 — Edge/Fog Computing Layer: Karakteristik pembeda IoT dengan teknologi lainnya. Istilah "fog" (kabut) terinspirasi dari fakta bahwa kabut melayang rendah mendekati tanah, sedangkan "cloud" (awan) berada tinggi di langit. Tujuan edge computing adalah mengubah aliran data mentah menjadi informasi yang cocok untuk disimpan dan diproses di tingkat yang lebih tinggi. Operasi edge computing meliputi: evaluasi data, reformatting, summarization, dan reduksi data. Contohnya: sebuah pesawat dapat menghasilkan lebih dari satu terabyte data per jam — memproses data sedekat mungkin dengan sensor lebih efisien daripada menyimpan seluruhnya secara permanen.',
                        'Layer 4 — Application/Service Layer: Lapisan teratas yang menyediakan layanan dan aplikasi IoT kepada pengguna. Layer ini mencakup data analytics, machine learning models, dan user applications yang memungkinkan monitoring dan kontrol terhadap perangkat-perangkat cerdas.',
                    ],
                },
                {
                    id: 's-design',
                    heading: 'Prinsip Desain IoT',
                    body: 'Berdasarkan konsep yang dipublikasikan dalam "Designing the Internet of Things" (McEwen & Cassimally, 2014), elemen-elemen IoT dapat diringkaskan dalam persamaan sederhana:\n\nPhysical Objects + Controllers, Sensors, Actuators + Internet = IoT\n\nPersamaan ini menegaskan bahwa IoT pada dasarnya adalah konvergensi tiga komponen fundamental: benda fisik yang ada di dunia nyata, perangkat kontrol dan sensor yang memberikan "indera" digital kepada benda-benda tersebut, serta konektivitas internet yang memungkinkan data mengalir dan keputusan diambil secara terdistribusi.\n\nTeknologi yang digunakan untuk interaksi antara data-capturing devices dan data-carrying devices meliputi frekuensi radio, inframerah, optikal, dan galvanic driving. Contoh galvanic driving: perangkat kesehatan yang diimplantasikan ke tubuh manusia berkomunikasi dengan memanfaatkan sifat konduktif tubuh ke elektroda pada kulit.',
                },
                {
                    id: 's-conclusion',
                    heading: 'Kesimpulan dan Refleksi',
                    body: 'Dari pembahasan tiga pertemuan awal mata kuliah IoT, dapat disimpulkan bahwa Internet of Things merupakan evolusi natural dari komunikasi Machine-to-Machine (M2M) yang telah ada sebelumnya. M2M menyediakan fondasi berupa koneksi point-to-point antar mesin, yang kemudian diperluas oleh IoT menjadi ekosistem global yang menghubungkan miliaran perangkat heterogen melalui internet.\n\nStruktur IoT ditopang oleh empat unsur fundamental: kecerdasan buatan (AI) yang memberikan kemampuan "berpikir" kepada mesin, konektivitas yang fleksibel dan terjangkau, sensor yang mengubah perangkat pasif menjadi sistem aktif, serta miniaturisasi perangkat yang memungkinkan deployment massal. Arsitektur IoT terstandarisasi melalui model referensi ITU-T Y.2060 yang terdiri dari empat layer fungsional: Device, Network, Edge/Fog Computing, dan Application/Service Layer.\n\nDi masa depan, sebagaimana perspektif yang disampaikan dalam perkuliahan, IoT akan menjadi bagian integral dari kehidupan manusia — dari smart home, intelligent building, smart city, hingga agricultural IoT. Pemahaman mendalam terhadap fondasi teknis ini menjadi prasyarat bagi setiap praktisi teknologi untuk berkontribusi dalam ekosistem IoT yang semakin berkembang.',
                },
            ],
            references: [
                {
                    text: 'Empowering Strawberry Cultivation: Harnessing the Potential of IoT-Based Technology in Smart Farming (JITK, terindeks SINTA & Google Scholar).',
                    url: 'https://ejournal.nusamandiri.ac.id/index.php/jitk/article/view/4162',
                    proof: 'jurnal',
                },
                {
                    text: 'Implementation of IoT-Based Presence Applications in Junior High Schools to Support Smart Schools (JITK, terindeks SINTA & Google Scholar).',
                    url: 'https://ejournal.nusamandiri.ac.id/index.php/jitk/article/view/4119',
                    proof: 'jurnal',
                },
                {
                    text: 'Deep Learning dengan Teknik Early Stopping untuk Mendeteksi Malware pada Perangkat IoT (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/8267',
                    proof: 'jurnal',
                },
                {
                    text: 'LSTM-IOT (LSTM-based IoT) untuk Mengatasi Kehilangan Data Akibat Kegagalan Koneksi (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/9157',
                    proof: 'jurnal',
                },
                {
                    text: 'Sistem Monitoring Budidaya Melon Melalui Greenhouse Berbasis Internet Of Things (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/9164',
                    proof: 'jurnal',
                },
                {
                    text: 'Pembuka Kunci Pintu Ruang Isolasi Mandiri Menggunakan Suhu Tubuh Dengan Notifikasi Foto Menggunakan Konsep IoT (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/8759',
                    proof: 'jurnal',
                },
                {
                    text: 'A Comparative Study of HTTP and MQTT for IoT Applications in Hydroponics (Jurnal RESTI, terindeks SINTA & Google Scholar).',
                    url: 'https://jurnal.iaii.or.id/index.php/RESTI/article/view/5561',
                    proof: 'jurnal',
                },
                {
                    text: 'Predicting Smart Office Electricity Consumption in Response to Weather Conditions Using Deep Learning (Jurnal RESTI, terindeks SINTA & Google Scholar).',
                    url: 'https://jurnal.iaii.or.id/index.php/RESTI/article/view/5530',
                    proof: 'jurnal',
                },
            ],
        },
        {
            id: 'blog-2',
            slug: 'tugas-perorangan-2-iot',
            title: 'Perangkat Keras IoT, Blok ETSI-ITU-T-IETF, dan Model Referensi IoT',
            subtitle: 'Tugas Perorangan #2 - Membahas materi Pertemuan 4 s/d 6 mata kuliah Internet of Things (IoT) beserta sumber referensi.',
            date: '2026-04-02',
            author: 'Sutan Arlie Johan',
            course: 'Internet of Things (IoT) — Kode MK: 0246',
            assignment: 'Tugas Perorangan #2',
            coverIcon: '🛰️',
            tags: ['IoT Hardware', 'Gateway', 'ETSI', 'ITU-T', 'IETF', 'ISO/IEC 30141', 'IoT Security'],
            tableOfContents: [
                'Pendahuluan',
                'Pertemuan 4 - Perangkat Keras, Gateway, dan Alur Data IoT',
                'Pertemuan 5 - Blok Sektor dan Arsitektur ETSI, ITU-T, dan IETF',
                'Pertemuan 6 - Model Referensi, Domain, Informasi, Fungsional, Komunikasi, dan Keamanan',
                'Analisis Implementasi',
                'Kesimpulan',
            ],
            sections: [
                {
                    id: 's2-intro',
                    heading: 'Pendahuluan',
                    body: 'Materi Internet of Things (IoT) pada pertemuan 4 sampai 6 membahas tahapan penting dalam membangun sistem IoT yang siap dipakai: dari komponen perangkat keras, standar arsitektur lintas organisasi, sampai model referensi yang aman dan dapat diandalkan. Pembahasan ini menegaskan bahwa IoT bukan sekadar sensor yang terhubung ke internet, tetapi sebuah ekosistem data, perangkat, protokol, dan tata kelola keamanan yang saling terkait.\n\nTulisan ini disusun untuk memenuhi Tugas Perorangan #2 dengan fokus pada tiga materi utama, yaitu perangkat keras dan proses bisnis IoT (Pertemuan 4), blok sektor ETSI-ITU-T-IETF (Pertemuan 5), serta model referensi IoT mencakup domain, informasi, fungsional, komunikasi, dan keamanan (Pertemuan 6).',
                },
                {
                    id: 's2-p4',
                    heading: 'Pertemuan 4 - Perangkat Keras, Gateway, dan Alur Data IoT',
                    body: 'Pada pertemuan ini dijelaskan rantai komponen IoT dari lapangan ke cloud. Things sebagai objek fisik bertugas menghasilkan data melalui sensor dan mengeksekusi aksi melalui aktuator. Data lalu bergerak melalui gateway dan cloud gateway untuk diproses lebih lanjut. Pendekatan ini penting karena data IoT bersifat besar, kontinu, dan berasal dari banyak sumber.\n\nMateri juga menekankan manajemen transmisi data: data mentah dikumpulkan di data lake, dipilah ke big data warehouse, dianalisis untuk menemukan pola, lalu dipakai oleh aplikasi pengguna untuk monitoring dan kontrol real-time.',
                    bullets: [
                        'Things — Objek fisik berisi sensor dan aktuator.',
                        'Gateway — Menghubungkan perangkat lapangan ke cloud sekaligus melakukan filtering data.',
                        'Cloud Gateway — Menjaga keamanan transmisi dan kompatibilitas protokol.',
                        'Streaming Data Processor — Menjaga aliran data tetap stabil dan minim kehilangan.',
                        'Data Lake dan Big Data Warehouse — Menyimpan data mentah dan data terstruktur untuk analitik.',
                        'Analytics, ML, dan User App — Mengubah data menjadi insight, model prediksi, dan aksi pengguna.',
                    ],
                },
                {
                    id: 's2-p5',
                    heading: 'Pertemuan 5 - Blok Sektor dan Arsitektur ETSI, ITU-T, dan IETF',
                    body: 'Pertemuan 5 membahas organisasi dan standar yang berperan dalam interoperabilitas IoT. ETSI menonjol pada inisiatif NFV untuk virtualisasi fungsi jaringan agar lebih fleksibel dan efisien. ITU-T menekankan model referensi IoT berlapis, termasuk kemampuan manajemen dan keamanan lintas lapisan. IETF berperan melalui protokol internet yang menjadi fondasi komunikasi mesin-ke-mesin di lingkungan IoT.\n\nKombinasi ketiga pendekatan ini menunjukkan bahwa arsitektur IoT yang baik harus dirancang interoperable by design, sehingga solusi dari banyak vendor tetap bisa saling berkomunikasi secara konsisten.',
                    bullets: [
                        'ETSI/NFV — Virtualisasi fungsi jaringan untuk elastisitas layanan.',
                        'ITU-T — Model referensi berlapis dengan fokus manajemen dan keamanan.',
                        'IETF — Standarisasi protokol komunikasi internet untuk ekosistem IoT.',
                    ],
                },
                {
                    id: 's2-p6',
                    heading: 'Pertemuan 6 - Model Referensi, Domain, Informasi, Fungsional, Komunikasi, dan Keamanan',
                    body: 'Pertemuan 6 menekankan pentingnya arsitektur referensi, termasuk ISO/IEC 30141, untuk memastikan sistem IoT lebih terstruktur, aman, dan dapat dikembangkan. Model domain memetakan hubungan entitas fisik dan representasi virtual. Model informasi mengatur struktur data serta konteks pertukaran data. Model fungsional menjelaskan interaksi komponen seperti sensing, processing, dan actuation.\n\nDi sisi operasional, model komunikasi memastikan data mengalir andal antar komponen, sedangkan model keamanan menjaga autentikasi, otorisasi, kerahasiaan, dan integritas data. Enam model ini menjadi fondasi agar solusi IoT tidak berhenti di prototipe, tetapi siap dipakai pada skala nyata.',
                    bullets: [
                        'Model Domain — Memetakan physical entity, virtual entity, dan device.',
                        'Model Informasi — Menstandarkan data, metadata, dan konteks.',
                        'Model Fungsional — Menentukan peran dan interaksi fungsi sistem.',
                        'Model Komunikasi — Menjaga pertukaran data tetap andal.',
                        'Model Keamanan — Menjamin trustworthiness sistem IoT.',
                    ],
                },
                {
                    id: 's2-analysis',
                    heading: 'Analisis Implementasi',
                    body: 'Ketiga pertemuan ini saling melengkapi: pertemuan 4 menjawab komponen teknis yang dibutuhkan, pertemuan 5 menjawab standar arsitektur yang harus dirujuk, dan pertemuan 6 menjawab model desain agar sistem konsisten serta aman. Dalam skenario smart home, sensor dan aktuator di rumah menjadi sumber data, gateway mengolah data awal, cloud menjalankan analitik, lalu aplikasi pengguna melakukan kontrol dari smartphone.\n\nAgar implementasi ini tidak rapuh, arsitektur harus mengikuti prinsip interoperabilitas dan keamanan sejak tahap desain. Pendekatan inilah yang membuat solusi IoT lebih siap untuk kebutuhan industri maupun layanan publik.',
                },
                {
                    id: 's2-conclusion',
                    heading: 'Kesimpulan',
                    body: 'Materi pertemuan 4 sampai 6 menunjukkan bahwa kekuatan IoT berada pada integrasi menyeluruh antara perangkat keras, alur data, standar arsitektur, dan model keamanan. Sistem IoT yang berhasil bukan hanya sistem yang dapat mengirim data, tetapi sistem yang mampu mengelola data secara efisien, mematuhi standar, dan tetap aman saat dioperasikan dalam jangka panjang.\n\nPemahaman terhadap perangkat, blok sektor ETSI-ITU-T-IETF, serta model referensi IoT menjadi dasar penting untuk merancang solusi yang scalable, interoperable, dan bermanfaat secara nyata.',
                },
            ],
            references: [
                {
                    text: 'A Comparative Study of HTTP and MQTT for IoT Applications in Hydroponics (Jurnal RESTI, terindeks SINTA & Google Scholar).',
                    url: 'https://jurnal.iaii.or.id/index.php/RESTI/article/view/5561',
                    proof: 'jurnal',
                },
                {
                    text: 'Deep Learning dengan Teknik Early Stopping untuk Mendeteksi Malware pada Perangkat IoT (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/8267',
                    proof: 'jurnal',
                },
                {
                    text: 'LSTM-IOT (LSTM-based IoT) untuk Mengatasi Kehilangan Data Akibat Kegagalan Koneksi (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/9157',
                    proof: 'jurnal',
                },
                {
                    text: 'Pembuka Kunci Pintu Ruang Isolasi Mandiri Menggunakan Suhu Tubuh Dengan Notifikasi Foto Menggunakan Konsep IoT (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/8759',
                    proof: 'jurnal',
                },
                {
                    text: 'Sistem Monitoring Budidaya Melon Melalui Greenhouse Berbasis Internet Of Things (JTIIK, terindeks SINTA & Google Scholar).',
                    url: 'https://jtiik.ub.ac.id/index.php/jtiik/article/view/9164',
                    proof: 'jurnal',
                },
                {
                    text: 'Empowering Strawberry Cultivation: Harnessing the Potential of IoT-Based Technology in Smart Farming (JITK, terindeks SINTA & Google Scholar).',
                    url: 'https://ejournal.nusamandiri.ac.id/index.php/jitk/article/view/4162',
                    proof: 'jurnal',
                },
                {
                    text: 'Implementation of IoT-Based Presence Applications in Junior High Schools to Support Smart Schools (JITK, terindeks SINTA & Google Scholar).',
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
