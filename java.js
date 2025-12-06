// JavaScript Sederhana untuk Landing Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Pesan di konsol untuk memastikan JS terhubung
    console.log("Script.js berhasil dimuat. Landing Page Smartwatch siap.");

    // Anda bisa menambahkan logika JS di sini, misalnya:
    // 1. Countdown timer untuk promo
    // 2. Validasi form (jika Anda menambahkan form)
    // 3. Efek animasi/scroll yang lebih canggih
    
    // Contoh sederhana: Mengambil harga akhir dari HTML (meskipun saat ini sudah statis)
    const finalPriceElement = document.getElementById('final-price');
    if (finalPriceElement) {
        console.log("Harga spesial hari ini: " + finalPriceElement.textContent);
    }
});