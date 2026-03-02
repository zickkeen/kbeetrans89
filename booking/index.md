---
layout: default
title: "Booking"
---

<section class="py-12">
  <div class="container">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Booking Paket</h1>
        <p class="text-gray-600">
          Isi form di bawah ini untuk booking paket tour atau rent car. Tim kami akan segera menghubungi Anda.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form id="booking-form" class="space-y-6">
          <!-- Paket -->
          <div>
            <label for="tour" class="block text-sm font-medium text-gray-700 mb-2">Pilih Paket</label>
            <select name="tour" id="tour" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
              <option value="">-- Pilih Paket --</option>
              <optgroup label="Paket Tour">
                {% for tour in site.tours %}
                <option value="{{ tour.slug }}" {% if page.tour == tour.slug %}selected{% endif %}>{{ tour.title }} - {{ tour.duration }}</option>
                {% endfor %}
              </optgroup>
              <optgroup label="Rent Car">
                {% assign sorted_rent_cars = site.rent_cars | sort: 'order' %}
                {% for car in sorted_rent_cars %}
                <option value="{{ car.slug }}" {% if page.tour == car.slug %}selected{% endif %}>{{ car.title }} - {{ car.regular_price }}</option>
                {% endfor %}
              </optgroup>
              <optgroup label="Shuttle">
                <option value="shuttle-malang-juanda-avanza" {% if page.tour == 'shuttle-malang-juanda-avanza' %}selected{% endif %}>Carter Drop Malang Kota ↔ Juanda (Avanza, max 6) - IDR 450.000</option>
                <option value="shuttle-malang-juanda-innova" {% if page.tour == 'shuttle-malang-juanda-innova' %}selected{% endif %}>Carter Drop Malang Kota ↔ Juanda (Innova Reborn, max 6) - IDR 550.000</option>
                <option value="shuttle-malang-juanda-hiace" {% if page.tour == 'shuttle-malang-juanda-hiace' %}selected{% endif %}>Carter Drop Malang Kota ↔ Juanda (Hiace, max 15) - IDR 1.200.000</option>
                <option value="shuttle-malang-juanda-elf-short" {% if page.tour == 'shuttle-malang-juanda-elf-short' %}selected{% endif %}>Carter Drop Malang Kota ↔ Juanda (Elf Short, max 15) - IDR 1.000.000</option>
                <option value="shuttle-malang-juanda-elf-long" {% if page.tour == 'shuttle-malang-juanda-elf-long' %}selected{% endif %}>Carter Drop Malang Kota ↔ Juanda (Elf Long, max 19) - IDR 1.200.000</option>

                <option value="shuttle-batu-kepanjen-juanda-avanza" {% if page.tour == 'shuttle-batu-kepanjen-juanda-avanza' %}selected{% endif %}>Carter Drop Batu/Kepanjen ↔ Juanda (Avanza, max 6) - IDR 500.000</option>
                <option value="shuttle-batu-kepanjen-juanda-innova" {% if page.tour == 'shuttle-batu-kepanjen-juanda-innova' %}selected{% endif %}>Carter Drop Batu/Kepanjen ↔ Juanda (Innova Reborn, max 6) - IDR 600.000</option>
                <option value="shuttle-batu-kepanjen-juanda-hiace" {% if page.tour == 'shuttle-batu-kepanjen-juanda-hiace' %}selected{% endif %}>Carter Drop Batu/Kepanjen ↔ Juanda (Hiace, max 15) - IDR 1.300.000</option>
                <option value="shuttle-batu-kepanjen-juanda-elf-short" {% if page.tour == 'shuttle-batu-kepanjen-juanda-elf-short' %}selected{% endif %}>Carter Drop Batu/Kepanjen ↔ Juanda (Elf Short, max 15) - IDR 1.100.000</option>
                <option value="shuttle-batu-kepanjen-juanda-elf-long" {% if page.tour == 'shuttle-batu-kepanjen-juanda-elf-long' %}selected{% endif %}>Carter Drop Batu/Kepanjen ↔ Juanda (Elf Long, max 19) - IDR 1.300.000</option>

                <option value="shuttle-reguler-malang-juanda" {% if page.tour == 'shuttle-reguler-malang-juanda' %}selected{% endif %}>Reguler Malang ↔ Juanda - IDR 150.000</option>
                <option value="shuttle-reguler-malang-surabaya" {% if page.tour == 'shuttle-reguler-malang-surabaya' %}selected{% endif %}>Reguler Malang ↔ Surabaya - IDR 160.000</option>
                <option value="shuttle-reguler-malang-tanjung-perak" {% if page.tour == 'shuttle-reguler-malang-tanjung-perak' %}selected{% endif %}>Reguler Malang ↔ Tanjung Perak - IDR 170.000</option>
                <option value="shuttle-reguler-batu-juanda" {% if page.tour == 'shuttle-reguler-batu-juanda' %}selected{% endif %}>Reguler Batu ↔ Juanda - IDR 160.000</option>
                <option value="shuttle-reguler-batu-surabaya" {% if page.tour == 'shuttle-reguler-batu-surabaya' %}selected{% endif %}>Reguler Batu ↔ Surabaya - IDR 170.000</option>
                <option value="shuttle-reguler-batu-tanjung-perak" {% if page.tour == 'shuttle-reguler-batu-tanjung-perak' %}selected{% endif %}>Reguler Batu ↔ Tanjung Perak - IDR 180.000</option>
                <option value="shuttle-reguler-kepanjen-juanda" {% if page.tour == 'shuttle-reguler-kepanjen-juanda' %}selected{% endif %}>Reguler Kepanjen ↔ Juanda - IDR 160.000</option>
                <option value="shuttle-reguler-kepanjen-surabaya" {% if page.tour == 'shuttle-reguler-kepanjen-surabaya' %}selected{% endif %}>Reguler Kepanjen ↔ Surabaya - IDR 170.000</option>
                <option value="shuttle-reguler-kepanjen-tanjung-perak" {% if page.tour == 'shuttle-reguler-kepanjen-tanjung-perak' %}selected{% endif %}>Reguler Kepanjen ↔ Tanjung Perak - IDR 180.000</option>
              </optgroup>
              <option value="Custom">Custom (Hubungi untuk detail)</option>
            </select>
          </div>

          <!-- Informasi Pribadi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
              <input type="text" name="name" id="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">No. WhatsApp *</label>
              <input type="tel" name="phone" id="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" name="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
          </div>

          <!-- Detail Booking -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="participants" class="block text-sm font-medium text-gray-700 mb-2">Jumlah Peserta *</label>
              <input type="number" name="participants" id="participants" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
            </div>
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700 mb-2">Tanggal Keberangkatan</label>
              <input type="date" name="date" id="date" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
            </div>
          </div>

          <!-- Lokasi Penjemputan -->
          <div>
            <label for="pickup" class="block text-sm font-medium text-gray-700 mb-2">Lokasi Penjemputan</label>
            <select name="pickup" id="pickup" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
              <option value="Surabaya">Surabaya</option>
              <option value="Malang" selected>Malang</option>
              <option value="Bandara Juanda">Bandara Juanda</option>
              <option value="Stasiun">Stasiun</option>
              <option value="Lainnya">Lainnya (sebutkan di pesan)</option>
            </select>
          </div>

          <!-- Pesan Tambahan -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Pesan/Keterangan Tambahan</label>
            <textarea name="message" id="message" rows="4" placeholder="Jika ada permintaan khusus, kebutuhan diet, dll." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"></textarea>
          </div>

          <!-- Google reCAPTCHA -->
          <div class="text-center mb-6">
            <div class="g-recaptcha" data-sitekey="6Ldcm5cUAAAAAMtta5WarfrkP6xT64flizYfRxvh"></div>
          </div>

          <!-- Submit -->
          <div class="text-center">
            <button type="submit" id="submit-btn" class="bg-[#ff5722] text-white px-8 py-3 rounded-lg hover:bg-[#e64a19] transition duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
              <i class="fas fa-paper-plane mr-2"></i>Kirim Booking
            </button>
          </div>
        </form>

        <div class="mt-6 text-center text-sm text-gray-600">
          <p>* Wajib diisi</p>
          <p>Tim kami akan menghubungi Anda dalam 1x24 jam setelah form dikirim.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
// Auto-select tour package from URL parameter
document.addEventListener('DOMContentLoaded', function() {
  const adminWhatsapp = '6282146252589';
  const urlParams = new URLSearchParams(window.location.search);
  const tourParam = urlParams.get('tour');

  if (tourParam) {
    const tourSelect = document.getElementById('tour');
    const options = tourSelect.options;

    // Find exact matching option by slug
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === tourParam) {
        tourSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Enable/disable submit button based on reCAPTCHA
  const submitBtn = document.getElementById('submit-btn');
  const form = document.getElementById('booking-form');

  // Initially disable submit button
  submitBtn.disabled = true;

  // Check reCAPTCHA status
  function checkRecaptcha() {
    const recaptchaResponse = grecaptcha.getResponse();
    submitBtn.disabled = recaptchaResponse.length === 0;
  }

  // Listen for reCAPTCHA changes
  window.recaptchaCallback = function() {
    checkRecaptcha();
  };

  // Check periodically (fallback)
  setInterval(checkRecaptcha, 1000);

  // Form validation
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert('Silakan lengkapi reCAPTCHA terlebih dahulu.');
      return false;
    }

    const selectedTourText = document.getElementById('tour').options[document.getElementById('tour').selectedIndex].text;
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim() || '-';
    const participants = document.getElementById('participants').value.trim();
    const date = document.getElementById('date').value || '-';
    const pickup = document.getElementById('pickup').value;
    const message = document.getElementById('message').value.trim() || '-';

    const whatsappMessage = [
      'Halo K-Bee Trans 89, saya ingin booking dengan detail berikut:',
      '',
      '*Paket:* ' + selectedTourText,
      '*Nama:* ' + name,
      '*No. WhatsApp:* ' + phone,
      '*Email:* ' + email,
      '*Jumlah Peserta:* ' + participants,
      '*Tanggal Keberangkatan:* ' + date,
      '*Lokasi Penjemputan:* ' + pickup,
      '*Pesan Tambahan:* ' + message
    ].join('\n');

    const whatsappUrl = 'https://wa.me/' + adminWhatsapp + '?text=' + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');
  });
});
</script>