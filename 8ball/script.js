const cevaplar = [
    "Kesinlikle.",
    "Bana öyle geliyor.",
    "Şüphesiz.",
    "Evet, kesinlikle.",
    "Gördüğüm kadarıyla evet.",
    "Büyük ihtimalle.",
    "İşaretler eveti gösteriyor.",
    "Evet.",
    "Cevabım hayır.",
    "Kaynaklarım hayır diyor.",
    "Görünüş pek iyi değil.",
    "Kesinlikle hayır.",
    "Daha sonra tekrar sor.",
    "Şimdi tahmin edemiyorum.",
    "Konsantre ol ve tekrar sor.",
    "Cevap belirsiz, tekrar deneyin.",
    "Belki.",
    "Büyük olasılıkla.",
    "Umutlu ol.",
    "Yakında öğreneceksin.",
    "Gelecek gizli.",
    "Gözlerini aç ve gör.",
    "Kalbinin sesini dinle.",
    "Hayallerine inan.",
    "Asla pes etme.",
    "Kendine güven.",
    "Şans seninle olsun.",
    "Her şey mümkün.",
    "İyi şeyler olacak.",
    "Sabırlı ol."
];

const renkler = [
    "#2ecc71", // Yeşil
    "#3498db", // Mavi
    "#9b59b6", // Mor
    "#e74c3c", // Kırmızı
    "#f39c12", // Turuncu
    "#1abc9c", // Turkuaz
    "#34495e", // Koyu Mavi
    "#e67e22", // Açık Turuncu
    "#95a5a6", // Gri
    "#d35400", // Balkabağı
    "#c0392b", // Koyu Kırmızı
    "#16a085", // Zümrüt
    "#2980b9", // Parlak Mavi
    "#8e44ad", // Koyu Mor
    "#27ae60", // Canlı Yeşil
    "#f1c40f", // Sarı
    "#ecf0f1", // Açık Gri
    "#95a5a6", // Gümüş
    "#7f8c8d", // Kurşuni Gri
    "#bdc3c7", // Açık Gümüş
    "#c0392b", // Koyu Kırmızı
    "#d35400", // Balkabağı
    "#f39c12", // Turuncu
    "#e67e22", // Açık Turuncu
    "#f1c40f", // Sarı
    "#27ae60", // Canlı Yeşil
    "#16a085", // Zümrüt
    "#2980b9", // Parlak Mavi
    "#8e44ad", // Koyu Mor
    "#34495e"  // Koyu Mavi
];

document.addEventListener("DOMContentLoaded", function () {
    const soruInput = document.getElementById("soru");
    const cevapButton = document.getElementById("cevapla");
    const cevapAlani = document.getElementById("cevap");
    const cevapContainer = document.getElementById("cevap-alanı");

    cevapButton.addEventListener("click", function () {
        const soru = soruInput.value.trim();
        if (soru === "") {
            cevapAlani.textContent = "Lütfen bir soru girin.";
            cevapContainer.style.backgroundColor = "#f1c40f";
            return;
        }

        const rastgeleIndex = Math.floor(Math.random() * cevaplar.length);
        const rastgeleCevap = cevaplar[rastgeleIndex];
        const rastgeleRenk = renkler[Math.floor(Math.random() * renkler.length)];

        localStorage.setItem("sonCevap", rastgeleCevap);
        localStorage.setItem("arkaPlanRenk", rastgeleRenk);
        window.location.href = "cevaplar.html";
    });

    soruInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            cevapButton.click();
        }
    });
});
