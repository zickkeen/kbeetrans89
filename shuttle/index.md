---
layout: default
title: "Shuttle"
description: "Layanan shuttle terpercaya K-Bee Trans 89 untuk rute Malang, Batu, Kepanjen, Juanda, dan Surabaya."
---

<section class="py-12">
  <div class="container">
    <div class="mb-12">
      <img
        src="{{ site.url }}{{ site.baseurl }}/assets/img/shuttle/malang-juanda.jpg"
        alt="Shuttle Malang Juanda"
        class="w-full h-[320px] md:h-[420px] object-cover rounded-3xl shadow-lg"
      />
    </div>

    <div class="text-center mb-12">
      <p class="color-accent font-semibold tracking-wider uppercase mb-2">Shuttle</p>
      <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Travel Terpercaya</h1>
      <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Kepercayaan tidak dibangun semalam, K-BeeTrans89 sudah eksis dari tahun 2012 membuktikan bahwa kami mampu menjaga komitmen dengan konsumen,
        terus berinovasi, memiliki pengalaman operasional yang matang sehingga mampu menghadirkan layanan nyaman dan aman.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Garansi Tiket Pesawat</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Kami memberikan layanan ganti rugi tiket pesawat secara penuh jika terjadi keterlambatan sampai bandara yang menyebabkan tiket hangus,
          dengan syarat kesalahan memang dari pihak manajemen atau driver kami.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Armada Terbaik</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Armada terbaik kami telah melalui perawatan rutin dengan kondisi terbaik, terdiri dari Avanza, Innova Reborn, Calya, Hiace,
          Elf, medium bus dan big bus.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Layanan Terbaik</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Customer service maupun driver kami ramah, informatif, solutif, dan responsif.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Pengemudi Berpengalaman</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Driver kami telah berpengalaman di jalurnya, sehingga mengutamakan kenyamanan dan keselamatan di setiap perjalanan.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6 md:col-span-2 lg:col-span-2">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Penjemputan Door to Door</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Layanan penjemputan kami door to door, artinya customer akan dijemput atau diantar sampai depan rumah.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="md:col-span-2 lg:col-span-3 mb-2">
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A2B48]">Carter Drop</h2>
      </div>
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-bold text-[#1A2B48] mb-1">Malang Kota <-> Juanda</h2>
          <p class="text-gray-500 text-sm mb-4">Carter Drop Malang Kota ke Juanda atau sebaliknya</p>
          <p class="text-sm text-gray-500 uppercase tracking-wider">Harga mulai</p>
          <p class="text-2xl font-extrabold color-accent mb-4">IDR 450.000</p>

          <details>
            <summary class="cursor-pointer font-semibold text-[#1A2B48]">Selengkapnya</summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p class="font-semibold">Tarif Carter Drop Kota Malang ke Juanda</p>
              <p>Avanza (max pnp: 6 orang) = IDR 450.000</p>
              <p>Innova Reborn (max pnp: 6 orang) = IDR 550.000</p>
              <p>Hiace (max pnp: 15 orang) = IDR 1.200.000</p>
              <p>Elf Short (max pnp: 15 orang) = IDR 1.000.000</p>
              <p>Elf Long (max pnp: 19 orang) = IDR 1.200.000</p>
            </div>
          </details>

          <div class="mt-5">
            <label for="shuttle-malang-juanda-select" class="block text-sm font-medium text-gray-700 mb-2">Pilih Armada</label>
            <select id="shuttle-malang-juanda-select" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5722]">
              <option value="shuttle-malang-juanda-avanza">Avanza (max 6) - IDR 450.000</option>
              <option value="shuttle-malang-juanda-innova">Innova Reborn (max 6) - IDR 550.000</option>
              <option value="shuttle-malang-juanda-hiace">Hiace (max 15) - IDR 1.200.000</option>
              <option value="shuttle-malang-juanda-elf-short">Elf Short (max 15) - IDR 1.000.000</option>
              <option value="shuttle-malang-juanda-elf-long">Elf Long (max 19) - IDR 1.200.000</option>
            </select>
          </div>

          <a id="shuttle-malang-juanda-booking" href="{{ '/booking/?tour=shuttle-malang-juanda-avanza' | relative_url }}" class="inline-block mt-3 bg-[#ff5722] text-white py-2 px-4 rounded-lg hover:bg-[#e64a19] transition duration-300">
            Booking
          </a>
        </div>
      </div>

      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-bold text-[#1A2B48] mb-1">Batu/Kepanjen <-> Juanda</h2>
          <p class="text-gray-500 text-sm mb-4">Carter Drop Batu / Kepanjen ke Juanda atau sebaliknya</p>
          <p class="text-sm text-gray-500 uppercase tracking-wider">Harga mulai</p>
          <p class="text-2xl font-extrabold color-accent mb-4">IDR 550.000</p>

          <details>
            <summary class="cursor-pointer font-semibold text-[#1A2B48]">Selengkapnya</summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p class="font-semibold">Tarif Carter Drop Kota Batu / Kepanjen ke Juanda</p>
              <p>Avanza (max pnp: 6 orang) = IDR 500.000</p>
              <p>Innova Reborn (max pnp: 6 orang) = IDR 600.000</p>
              <p>Hiace (max pnp: 15 orang) = IDR 1.300.000</p>
              <p>Elf Short (max pnp: 15 orang) = IDR 1.100.000</p>
              <p>Elf Long (max pnp: 19 orang) = IDR 1.300.000</p>
            </div>
          </details>

          <div class="mt-5">
            <label for="shuttle-batu-juanda-select" class="block text-sm font-medium text-gray-700 mb-2">Pilih Armada</label>
            <select id="shuttle-batu-juanda-select" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5722]">
              <option value="shuttle-batu-kepanjen-juanda-avanza">Avanza (max 6) - IDR 500.000</option>
              <option value="shuttle-batu-kepanjen-juanda-innova">Innova Reborn (max 6) - IDR 600.000</option>
              <option value="shuttle-batu-kepanjen-juanda-hiace">Hiace (max 15) - IDR 1.300.000</option>
              <option value="shuttle-batu-kepanjen-juanda-elf-short">Elf Short (max 15) - IDR 1.100.000</option>
              <option value="shuttle-batu-kepanjen-juanda-elf-long">Elf Long (max 19) - IDR 1.300.000</option>
            </select>
          </div>

          <a id="shuttle-batu-juanda-booking" href="{{ '/booking/?tour=shuttle-batu-kepanjen-juanda-avanza' | relative_url }}" class="inline-block mt-3 bg-[#ff5722] text-white py-2 px-4 rounded-lg hover:bg-[#e64a19] transition duration-300">
            Booking
          </a>
        </div>
      </div>

      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-bold text-[#1A2B48] mb-1">Personal Shuttle Reguler</h2>
          <p class="text-gray-500 text-sm mb-4">Surabaya/Juanda/Tanjung Perak ke Malang Raya atau sebaliknya</p>
          <p class="text-sm text-gray-500 uppercase tracking-wider">Harga mulai</p>
          <p class="text-2xl font-extrabold color-accent mb-4">IDR 150.000</p>

          <details>
            <summary class="cursor-pointer font-semibold text-[#1A2B48]">Selengkapnya</summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p class="font-semibold">Tarif Reguler</p>
              <p>Malang – Juanda = IDR 150.000</p>
              <p>Malang – Surabaya = IDR 160.000</p>
              <p>Malang – Tanjung Perak = IDR 170.000</p>
              <p>Batu – Juanda = IDR 160.000</p>
              <p>Batu – Surabaya = IDR 170.000</p>
              <p>Batu – Tanjung Perak = IDR 180.000</p>
              <p>Kepanjen – Juanda = IDR 160.000</p>
              <p>Kepanjen – Surabaya = IDR 170.000</p>
              <p>Kepanjen – Tanjung Perak = IDR 180.000</p>
            </div>
          </details>

          <div class="mt-5">
            <label for="shuttle-reguler-select" class="block text-sm font-medium text-gray-700 mb-2">Pilih Rute Reguler</label>
            <select id="shuttle-reguler-select" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5722]">
              <option value="shuttle-reguler-malang-juanda">Malang ↔ Juanda - IDR 150.000</option>
              <option value="shuttle-reguler-malang-surabaya">Malang ↔ Surabaya - IDR 160.000</option>
              <option value="shuttle-reguler-malang-tanjung-perak">Malang ↔ Tanjung Perak - IDR 170.000</option>
              <option value="shuttle-reguler-batu-juanda">Batu ↔ Juanda - IDR 160.000</option>
              <option value="shuttle-reguler-batu-surabaya">Batu ↔ Surabaya - IDR 170.000</option>
              <option value="shuttle-reguler-batu-tanjung-perak">Batu ↔ Tanjung Perak - IDR 180.000</option>
              <option value="shuttle-reguler-kepanjen-juanda">Kepanjen ↔ Juanda - IDR 160.000</option>
              <option value="shuttle-reguler-kepanjen-surabaya">Kepanjen ↔ Surabaya - IDR 170.000</option>
              <option value="shuttle-reguler-kepanjen-tanjung-perak">Kepanjen ↔ Tanjung Perak - IDR 180.000</option>
            </select>
          </div>

          <a id="shuttle-reguler-booking" href="{{ '/booking/?tour=shuttle-reguler-malang-juanda' | relative_url }}" class="inline-block mt-3 bg-[#ff5722] text-white py-2 px-4 rounded-lg hover:bg-[#e64a19] transition duration-300">
            Booking
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  function bindSelection(selectId, bookingId) {
    const select = document.getElementById(selectId);
    const bookingLink = document.getElementById(bookingId);
    if (!select || !bookingLink) return;

    select.addEventListener('change', function () {
      bookingLink.href = "{{ '/booking/?tour=' | relative_url }}" + this.value;
    });
  }

  bindSelection('shuttle-malang-juanda-select', 'shuttle-malang-juanda-booking');
  bindSelection('shuttle-batu-juanda-select', 'shuttle-batu-juanda-booking');
  bindSelection('shuttle-reguler-select', 'shuttle-reguler-booking');
});
</script>
