const penyakitData = {
    "Flu": {
        gejala: ["Demam", "Batuk kering", "Pilek", "Sakit tenggorokan", "Kelelahan"],
        solusi: "Istirahat yang cukup, banyak minum air, konsumsi obat penurun demam, dan konsultasi dengan dokter jika gejala semakin parah."
    },
    "Demam Berdarah": {
        gejala: ["Demam", "Sakit kepala berat", "Nyeri otot dan sendi", "Muncul ruam pada kulit"],
        solusi: "Banyak minum cairan, istirahat total, segera pergi ke rumah sakit jika gejala parah."
    },
    "Tipes": {
        gejala: ["Demam", "Nyeri perut", "Mual dan muntah", "Kehilangan nafsu makan"],
        solusi: "Istirahat, pemberian antibiotik, dan cuci tangan secara rutin."
    },
    "Asma": {
        gejala: ["Sesak napas", "Batuk kering atau berdahak", "Napas berbunyi"],
        solusi: "Gunakan inhaler, hindari pemicu asma, dan selalu membawa inhaler."
    },
    "Gastritis": {
        gejala: ["Nyeri perut atas", "Mual", "Perut kembung", "Muntah"],
        solusi: "Makan dalam porsi kecil, konsumsi obat antasid, dan hindari alkohol serta rokok."
    },
    "Diabetes Tipe 2": {
        gejala: ["Sering haus", "Sering buang air kecil", "Lemas", "Pandangan kabur"],
        solusi: "Mengatur pola makan, berolahraga, dan menggunakan obat sesuai anjuran dokter."
    },
    "Hipertensi": {
        gejala: ["Sakit kepala berat", "Pusing", "Nyeri dada", "Penglihatan kabur"],
        solusi: "Menghindari makanan tinggi garam, menjaga berat badan ideal, dan minum obat antihipertensi."
    },
    "Penyakit Jantung Koroner": {
        gejala: ["Nyeri dada", "Sesak napas", "Pusing"],
        solusi: "Segera konsultasi dengan dokter dan menjalani pemeriksaan lebih lanjut."
    },
    "Penyakit Ginjal Kronis": {
        gejala: ["Pembengkakan kaki", "Sering lelah", "Mual", "Penurunan nafsu makan"],
        solusi: "Batasi konsumsi garam dan protein, periksa fungsi ginjal secara rutin."
    },
    "Penyakit Kulit": {
        gejala: ["Gatal-gatal", "Kemerahan", "Kulit kering dan bersisik"],
        solusi: "Gunakan salep anti-gatal, hindari pemicu iritasi, dan gunakan pelembap."
    }
};

function diagnosa() {
    const gejalaInput = document.getElementById("gejala").value.toLowerCase();
    const output = document.getElementById("output");
    let hasilDiagnosa = "";

    if (gejalaInput === "") {
        output.style.display = "none";
        alert("Silakan masukkan gejala terlebih dahulu!");
        return;
    }

    for (const penyakit in penyakitData) {
        const penyakitGejala = penyakitData[penyakit].gejala.map(g => g.toLowerCase());
        if (penyakitGejala.some(g => gejalaInput.includes(g))) {
            hasilDiagnosa += `<h3>${penyakit}</h3><p><strong>Gejala:</strong> ${penyakitData[penyakit].gejala.join(", ")}</p><p><strong>Solusi:</strong> ${penyakitData[penyakit].solusi}</p><hr>`;
        }
    }

    if (hasilDiagnosa === "") {
        hasilDiagnosa = "<p>Tidak ada penyakit yang terdeteksi berdasarkan gejala yang dimasukkan. Cobalah gejala lain.</p>";
    }

    output.style.display = "block";
    output.innerHTML = hasilDiagnosa;
}
