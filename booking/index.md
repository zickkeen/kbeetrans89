---
layout: default
title: "Booking Tour"
---

<section class="py-12">
  <div class="container">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Booking Paket Tour</h1>
        <p class="text-gray-600">
          Isi form di bawah ini untuk memesan paket tour impian Anda. Tim kami akan segera menghubungi Anda.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form action="https://formspree.io/f/xpznqrya" method="POST" class="space-y-6">
          <!-- Paket Tour -->
          <div>
            <label for="tour" class="block text-sm font-medium text-gray-700 mb-2">Pilih Paket Tour</label>
            <select name="tour" id="tour" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
              <option value="">-- Pilih Paket Tour --</option>
              {% for tour in site.tours %}
              <option value="{{ tour.slug }}" {% if page.tour == tour.slug %}selected{% endif %}>{{ tour.title }} - {{ tour.duration }}</option>
              {% endfor %}
              <option value="Custom">Custom Tour (Hubungi untuk detail)</option>
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
            <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
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
  const form = document.querySelector('form');

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
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      e.preventDefault();
      alert('Silakan lengkapi reCAPTCHA terlebih dahulu.');
      return false;
    }
  });
});
</script>