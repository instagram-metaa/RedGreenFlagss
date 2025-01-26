 
 
 // Ambil data dari localStorage
 const userName = localStorage.getItem('userName');
 const userBirthDate = localStorage.getItem('userBirthDate');

 // Fungsi untuk menentukan zodiak berdasarkan tanggal lahir
 function getZodiac(day, month) {
     const zodiacs = [
         { name: 'Capricorn', start: { day: 22, month: 12 }, end: { day: 19, month: 1 } },
         { name: 'Aquarius', start: { day: 20, month: 1 }, end: { day: 18, month: 2 } },
         { name: 'Pisces', start: { day: 19, month: 2 }, end: { day: 20, month: 3 } },
         { name: 'Aries', start: { day: 21, month: 3 }, end: { day: 19, month: 4 } },
         { name: 'Taurus', start: { day: 20, month: 4 }, end: { day: 20, month: 5 } },
         { name: 'Gemini', start: { day: 21, month: 5 }, end: { day: 20, month: 6 } },
         { name: 'Cancer', start: { day: 21, month: 6 }, end: { day: 22, month: 7 } },
         { name: 'Leo', start: { day: 23, month: 7 }, end: { day: 22, month: 8 } },
         { name: 'Virgo', start: { day: 23, month: 8 }, end: { day: 22, month: 9 } },
         { name: 'Libra', start: { day: 23, month: 9 }, end: { day: 22, month: 10 } },
         { name: 'Scorpio', start: { day: 23, month: 10 }, end: { day: 21, month: 11 } },
         { name: 'Sagittarius', start: { day: 22, month: 11 }, end: { day: 21, month: 12 } }
     ];

     for (const zodiac of zodiacs) {
         if (
             (month === zodiac.start.month && day >= zodiac.start.day) ||
             (month === zodiac.end.month && day <= zodiac.end.day)
         ) {
             return zodiac.name;
         }
     }
     return 'Capricorn'; // Default to Capricorn if no match
 }

// Pastikan data tersedia
if (userName && userBirthDate) {
    // Mengubah format tanggal lahir
    const birthDate = new Date(userBirthDate);
    const day = birthDate.getDate().toString().padStart(2, '0'); // Mengambil hari
    const month = (birthDate.getMonth() + 1).toString().padStart(2, '0'); // Mengambil bulan (ditambah 1 karena bulan dimulai dari 0)
    const year = birthDate.getFullYear(); // Mengambil tahun

    // Format tanggal menjadi dd-mm-yyyy
    const formattedBirthDate = `${day}-${month}-${year}`;

    // Dapatkan zodiak berdasarkan tanggal lahir
    const zodiac = getZodiac(birthDate.getDate(), birthDate.getMonth() + 1);

    // Tambahkan elemen untuk menampilkan nama, tanggal lahir, dan zodiak di halaman
    const userInfoContainer = document.getElementById('userInfoContainer');
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.innerHTML = `
        <p class="label">Nama:</p>
        <p><strong>${userName}</strong></p>
        <br>
        <p class="label">Zodiak:</p>
        <p><strong>${zodiac}</strong></p>
    `;

    // Sisipkan elemen sebelum konten quiz
    userInfoContainer.appendChild(userInfo);
} else {
    // Jika data tidak ada, arahkan kembali ke halaman index.html
    window.location.href = 'index.html';
}


const quizData = [
        {
            "question": "Jika kamu merasa bosan dengan pasanganmu, apa yang kamu lakukan?",
            "options": ["Membicarakan perasaanmu dan mencoba mencari solusi bersama", "Menghindari komunikasi dan berharap itu akan membaik dengan waktu", "Mencari hiburan di luar hubungan", "Menyalahkan pasangan karena perasaan bosanmu"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },
        {
            "question": "Jika pasanganmu marah karena sesuatu yang kamu lakukan, apa yang kamu lakukan?",
            "options": ["Meminta maaf dan mencoba memahami perasaan mereka", "Menunggu hingga mereka tenang dan tidak berbicara", "Menghindari percakapan tentang masalah tersebut", "Membalas dengan marah karena merasa tidak bersalah"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
        {
            "question": "Jika pasanganmu tidak pernah meminta maaf setelah bertengkar, bagaimana kamu menyikapinya?",
            "options": ["Membicarakan pentingnya saling memaafkan", "Menunggu mereka meminta maaf terlebih dahulu", "Mengabaikan dan melanjutkan hubungan seperti biasa", "Menerima karena merasa itu tidak masalah"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },
        {
            "question": "Jika pasanganmu selalu mendukung pilihan hidupmu, bagaimana kamu merespon?",
            "options": ["Menghargai dan menunjukkan dukungan yang sama", "Merasa bahagia karena mereka mendukung", "Menerima dukungan tanpa memberikan respon balik", "Mengabaikan dukungan mereka karena merasa tidak perlu"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
        {
            "question": "Jika pasanganmu tidak menghargai waktu yang kamu berikan, apa yang kamu lakukan?",
            "options": ["Berbicara tentang pentingnya saling menghargai waktu", "Menerima tanpa banyak protes", "Mengabaikan dan melanjutkan hubungan tanpa perubahan", "Meninggalkan mereka untuk beberapa waktu untuk menunjukkan rasa tidak dihargai"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },
        {
            "question": "Jika kamu merasa cemas tentang sesuatu, bagaimana pasanganmu menyikapinya?",
            "options": ["Memberikan dukungan dan mencoba menenangkan kamu", "Mengabaikan perasaanmu karena merasa itu tidak penting", "Menyalahkan kamu karena merasa cemas", "Tidak mengetahui bagaimana cara merespons"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
        {
            "question": "Jika kamu merasa tidak puas dengan hubungan, apa yang kamu lakukan?",
            "options": ["Membicarakan masalah tersebut dan mencari solusi bersama", "Mengabaikan dan berharap itu akan berubah dengan waktu", "Mencari kebahagiaan di luar hubungan", "Mengakhiri hubungan tanpa berbicara lebih lanjut"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },

        {
            "question": "Jika pasanganmu mengungkapkan ketidaknyamanan mereka tentang sesuatu yang kamu lakukan, apa yang kamu lakukan?",
            "options": ["Mendengarkan dan berusaha memperbaiki perilakumu", "Menyalahkan pasangan karena tidak menyukai perbuatanmu", "Mengabaikan perasaan mereka dan terus melakukan hal yang sama", "Menerima dan tidak berubah karena merasa tidak masalah"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
        {
            "question": "Jika pasanganmu sering terlambat atau tidak menghargai janji, bagaimana kamu menyikapinya?",
            "options": ["Berbicara tentang pentingnya saling menghormati janji", "Menerima tanpa banyak protes", "Mengabaikan dan melanjutkan hubungan tanpa perubahan", "Menghindari janji-janjian dengan mereka lagi"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },
        {
            "question": "Jika pasanganmu selalu mengutamakan kebahagiaanmu, bagaimana kamu merespon?",
            "options": ["Mengutamakan kebahagiaan mereka juga", "Merasa terharu dan berterima kasih", "Menganggapnya biasa saja", "Merasa canggung dan tidak tahu bagaimana membalasnya"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
        {
            "question": "Jika pasanganmu merasa cemburu setiap kali kamu berinteraksi dengan orang lain, bagaimana kamu menyikapinya?",
            "options": ["Berbicara tentang pentingnya kepercayaan dalam hubungan", "Menghindari berinteraksi dengan orang lain", "Menerima dan membiarkan mereka merasa cemburu", "Menghadapi mereka dengan marah karena merasa tidak nyaman"],
            "weights": [1, 2, 3, 4],  // Red flag weights
            "type": "redflag"
        },
        {
            "question": "Jika pasanganmu selalu menghargai ruang pribadimu, bagaimana kamu merespon?",
            "options": ["Menghargai ruang pribadi mereka juga", "Merasa nyaman dan tidak terganggu", "Menganggapnya biasa saja", "Merasa cemas karena tidak cukup dekat"],
            "weights": [4, 3, 2, 1],  // Green flag weights
            "type": "greenflag"
        },
    

    // Add more questions here...
    {
        "question": "Jika pasanganmu selalu terlambat memberikan perhatian atau mendukungmu, bagaimana kamu akan menghadapinya?",
        "options": ["Membicarakan perasaanmu secara langsung", "Mengabaikannya dan tetap melanjutkan hubungan", "Mencari perhatian di tempat lain", "Menjauhkan diri untuk memberi pelajaran"],
        "weights": [1, 2, 3, 4],  // Red flag weights
        "type": "redflag"
    },
    {
        "question": "Jika pasanganmu membuat keputusan besar tanpa melibatkanmu dan kamu merasa tidak dihargai, apa yang akan kamu lakukan?",
        "options": ["Mengajak diskusi dan menjelaskan perasaanmu", "Menerima saja karena itu keputusan mereka", "Menuntut agar pasangan selalu melibatkanmu", "Menghindar dan tidak membahasnya lagi"],
        "weights": [4, 3, 2, 1],  // Green flag weights
        "type": "greenflag"
    },
    {
        "question": "Jika pasanganmu merasa sangat cemburu dan mulai membatasi kebebasanmu, apa yang akan kamu lakukan?",
        "options": ["Mencari cara untuk berbicara dan menjelaskan perasaanmu", "Menerima saja karena mereka sayang", "Melakukan apa yang mereka inginkan untuk menghindari konflik", "Menjauh dan mengakhiri hubungan"],
        "weights": [1, 2, 3, 4],  // Red flag weights
        "type": "redflag"
    },
    {
        "question": "Jika pasanganmu selalu mengkritik dan tidak memberikan solusi atas masalah yang ada, bagaimana kamu merespon?",
        "options": ["Membicarakan dengan jujur tentang dampak kritik tersebut", "Mengabaikan kritik dan mencoba memperbaiki sendiri", "Menuntut mereka untuk berhenti mengkritik", "Mencari cara untuk mendapatkan dukungan dari orang lain"],
        "weights": [4, 3, 2, 1],  // Green flag weights
        "type": "greenflag"
    },

    {
        "question": "Jika pasanganmu sering kali mengabaikan waktu yang kamu rencanakan bersama, bagaimana kamu menghadapinya?",
        "options": ["Berbicara langsung dan menyampaikan perasaanmu", "Menerima dan menunggu kesempatan berikutnya", "Mencari kegiatan lain agar tidak merasa kecewa", "Mengakhiri hubungan karena merasa tidak dihargai"],
        "weights": [1, 2, 3, 4],  // Red flag weights
        "type": "redflag"
    },

    {
        "question": "Jika pasanganmu menghadapi kesulitan emosional dan membutuhkan dukungan, bagaimana kamu menunjukkan dukunganmu?",
        "options": ["Memberi perhatian lebih dan menawarkan bantuan yang mereka butuhkan", "Menunggu mereka untuk meminta bantuan terlebih dahulu", "Menyarankan mereka untuk mengatasi masalah sendiri", "Mengabaikan karena merasa itu bukan masalahmu"],
        "weights": [4, 3, 2, 1],  // Green flag weights
        "type": "greenflag"
    },

    {
        "question": "Jika pasanganmu memiliki kebiasaan tidak jujur, bagaimana kamu menyikapinya?",
        "options": ["Berbicara terbuka tentang pentingnya kejujuran dalam hubungan", "Mengabaikan dan berharap mereka berubah dengan waktu", "Melakukan hal yang sama dan berbohong juga", "Mengakhiri hubungan karena tidak bisa mempercayai lagi"],
        "weights": [1, 2, 3, 4],  // Red flag weights
        "type": "redflag"
    },
    
    {
        "question": "Jika pasanganmu ingin mengejar impian yang besar, namun kamu merasa khawatir, apa yang akan kamu lakukan?",
        "options": ["Memberikan dukungan penuh dan berbicara tentang kekhawatiranmu", "Menghalangi dan mencoba membuat mereka merasa lebih aman", "Mengabaikan kekhawatiranmu dan membiarkan mereka mengikuti impian", "Mendukung secara pasif tanpa berkomentar"],
        "weights": [4, 3, 2, 1],  // Green flag weights
        "type": "greenflag"
    }
];

const redFlagTypes = [
    {
        name: "The Ghoster 👻",
        subtitle: "Master Menghilang",
        description: `${userName || 'The Communicator'}, kamu tipe yang suka menghilang tanpa kabar. Komunikasimu butuh perbaikan serius! Cobalah untuk lebih terbuka dan responsif terhadap pasangan agar hubunganmu lebih sehat.`,
        image: "images/sifat/ghoster.png",
        score: [5, 10]
    },
    {
        name: "The Manipulator 🎭",
        subtitle: "Ahli Permainan Perasaan",
        description: `${userName}, Kamu cenderung bermain dengan perasaan orang lain. Ini bisa merusak hubungan. Berlatihlah untuk lebih jujur dan terbuka, serta hindari manipulasi perasaan.`,
        image: "images/sifat/manipulator.png",
        score: [11, 15]
    },
    {
        name: "The Jealous Type 😡",
        subtitle: "Juara Kecemburuan",
        description: `${userName}, Rasa cemburumu kamu tinggi banget! Percaya diri adalah kunci hubungan sehat. Cobalah untuk mengelola kecemburuanmu dan percayalah pada pasanganmu.`,
        image: "images/sifat/Jealous.png",
        score: [16, 20]
    },
    {
        name: "The Controlling Partner 🔒",
        subtitle: "Si Pengontrol",
        description: `${userName}, Kamu merasa perlu mengontrol pasanganmu dalam banyak hal. Ini bisa merusak kebebasan dan kepercayaan. Cobalah untuk memberi ruang lebih dan mempercayai pasangan.`,
        image: "images/sifat/Controlling.png",
        score: [21, 25]
    },
    {
        name: "The Gaslighter 💥",
        subtitle: "Si Pembuat Kebingungan",
        description: `${userName}, Kamu sering mengubah kenyataan dan memanipulasi perasaan pasangan. Ini bisa sangat merusak hubungan. Mulailah untuk lebih jujur dan bertanggung jawab atas tindakanmu.`,
        image: "images/sifat/Gaslighter.png",
        score: [26, 100]
    }
];

const greenFlagTypes = [
    {
        name: "The Communicator 💬",
        subtitle: "Ahli Komunikasi",
        description: `${userName}, Kamu sangat terbuka dan sering menjaga komunikasi yang baik dengan pasangan. Pastikan untuk terus menjaga keterbukaan dalam segala hal, ini akan memperkuat ikatan antara kalian berdua.`,
        image: "images/sifat/communicator.png",
        score: [-10, -5]
    },
    {
        name: "The Trustworthy 💎",
        subtitle: "Penyimpan Kepercayaan",
        description: `${userName}, kamu sangat dapat dipercaya, pasanganmu merasa nyaman dan aman bersamamu. Terus pertahankan kualitas ini dan selalu jaga kepercayaan yang telah dibangun.`,
        image: "images/sifat/trustworthy.png",
        score: [-4, -1]
    },
    {
        name: "The Supportive Partner 🤝",
        subtitle: "Si Pendukung Setia",
        description: `${userName}, Kamu selalu mendukung pasanganmu dalam setiap langkah dan pilihan hidup mereka. Ini adalah kualitas luar biasa! Terus berikan dukungan positif dan motivasi yang membangun.`,
        image: "images/sifat/supportive.png",
        score: [-15, -11]
    },
    {
        name: "The Empathizer 💖",
        subtitle: "Ahli Empati",
        description: `${userName}, Kamu dapat merasakan perasaan pasanganmu dan selalu ada untuk mereka saat dibutuhkan. Empati adalah kunci hubungan yang sehat, terus tingkatkan kemampuanmu untuk mendengarkan dan memahami.`,
        image: "images/sifat/empathizer.png",
        score: [-20, -16]
    },
    {
        name: "The Idealist 🌟",
        subtitle: "Penggagas Cinta Sejati",
        description: `${userName}, Kamu selalu berusaha menjalin hubungan yang sehat dan bahagia, serta percaya pada cinta sejati. Terus pertahankan pandangan positifmu dan selalu berusaha menjadi pasangan yang lebih baik.`,
        image: "images/sifat/idealist.png",
        score: [-100, -21]
    }
];


let currentQuestion = 0;
let totalScore = 0;

const quizElement = document.getElementById('quiz');
const resultElement = document.getElementById('result');
const questionText = document.getElementById('questionText');
const progressText = document.getElementById('progressText');
const resultImage = document.getElementById('resultImage');
const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const scoreElement = document.getElementById('score'); 
const resultDescription = document.getElementById('resultDescription');
const shareBtn = document.getElementById('shareBtn');
const retryBtn = document.getElementById('retryBtn');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;

    const optionsElement = document.querySelector('.options');
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.dataset.value = currentQuizData.weights[index];
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });

    progressText.innerText = `Pertanyaan ${currentQuestion + 1} dari ${quizData.length}`;
}

function selectOption(e) {
    const selectedValue = parseInt(e.target.dataset.value);
    const currentQuizData = quizData[currentQuestion];

    if (currentQuizData.type === "redflag") {
        totalScore += selectedValue; // Add score for redflag
    } else if (currentQuizData.type === "greenflag") {
        totalScore -= selectedValue; // Subtract score for greenflag
    }

    

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    e.target.classList.add('selected');

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 300);
}

function showResult() {
    quizElement.style.display = 'none';
    resultElement.style.display = 'block';
    console.log('Result element displayed:', resultElement.style.display);

    // Mencari tipe yang sesuai berdasarkan rentang skor
    let resultFlag = [...redFlagTypes, ...greenFlagTypes].find(type => 
        totalScore >= type.score[0] && totalScore <= type.score[1]
    );

    // Jika tidak ada tipe yang cocok berdasarkan rentang yang ada, lakukan fallback
    if (!resultFlag) {
        if (totalScore < -100) {
            resultFlag = greenFlagTypes[greenFlagTypes.length - 1]; // Ambil tipe idealist untuk nilai negatif rendah
        } else if (totalScore > 100) {
            resultFlag = redFlagTypes[redFlagTypes.length - 1]; // Ambil tipe gaslighter untuk nilai tinggi
        } else {
            // Jika totalScore berada di luar batas rentang yang diinginkan
            resultFlag = greenFlagTypes[0]; // Default ke idealist jika tidak ditemukan
        }
    }

    // Menampilkan hasil berdasarkan tipe yang ditemukan
    resultImage.src = resultFlag.image;
    resultTitle.innerHTML = resultFlag.name;
    resultSubtitle.innerHTML = resultFlag.subtitle;
    resultDescription.innerHTML = resultFlag.description;

    // resultDescription.innerHTML += `<br><br><strong>Skor Akhir:</strong> ${totalScore}`;


}

// Menangani tombol Download
document.getElementById('downloadBtn').addEventListener('click', () => {
    const resultElement = document.getElementById('result'); // Ambil elemen hasil

    // Pastikan #result ditampilkan (display: block)
    resultElement.style.display = 'block';

    // Gunakan html2canvas untuk menangkap elemen dan menghasilkan gambar
    html2canvas(resultElement, {
        backgroundColor: null,  // Agar latar belakang transparan
        logging: false,  // Nonaktifkan log jika tidak dibutuhkan
        useCORS: true,  // Untuk memuat gambar lintas domain jika ada
        scale: 2,  // Skala untuk meningkatkan resolusi
        scrollX: window.scrollX,
        scrollY: window.scrollY,
    }).then(canvas => {
        // Ambil URL dari gambar yang dihasilkan
        const imageUrl = canvas.toDataURL('image/png');
        
        // Membuat elemen <a> untuk mendownload gambar
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'hasil_quiz.png'; // Nama file yang akan diunduh
        
        // Klik elemen <a> untuk memulai download
        a.click();
    }).catch(error => {
        console.error('Gagal menangkap screenshot:', error);
    });
});





// shareBtn.addEventListener('click', () => {
//     alert('Hasil kamu sudah siap di-share!');
// });

retryBtn.addEventListener('click', () => {
    currentQuestion = 0;
    totalScore = 0;
    quizElement.style.display = 'block';
    resultElement.style.display = 'none';
    loadQuestion();
});

loadQuestion();