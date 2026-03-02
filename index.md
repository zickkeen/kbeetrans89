---
layout: default
title: Home
---

<!-- Konten Utama -->
<!-- Hero Section -->
<section id="home">
  <div class="hero-content">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">Jelajahi Malang Bersama <span>KBeeTrans89</span></h1>
    <p>Partner Perjalanan Wisata Anda yang Profesional dan Terpercaya</p>
    <a class="cta-button" href="https://wa.me/6282146252589"
      >Hubungi Kami Sekarang</a
    >
  </div>
</section>
<!-- Fitur Section -->
<section id="kategori" class="text-center mb-20 py-12">
  <div class="container">
    <p class="color-accent font-semibold tracking-wider uppercase mb-2">
      CATEGORY
    </p>
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">
      We Offer Best Services
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Card 1: Explorer JATIM -->
      <a
        href="{{ '/tours/' | relative_url }}"
        class="service-card block bg-white p-6 rounded-3xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          class="service-icon-base mx-auto bg-green-100 text-green-600"
        >
          <i class="fas fa-compass"></i>
        </div>
        <h4 class="text-xl font-bold text-[#1A2B48] mb-2">
          Explorer JATIM
        </h4>
        <p class="text-gray-500 text-sm">
          Jelajahi JATIM dengan berbagai destinasi wisata yang menarik.
        </p>
      </a>

      <!-- Card 2: Shuttle Service -->
      <a
        href="{{ '/shuttle/' | relative_url }}"
        class="service-card block bg-white p-6 rounded-3xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl relative"
      >
        <div class="service-icon-base mx-auto bg-blue-100 text-blue-600">
          <i class="fas fa-plane-departure"></i>
        </div>
        <h4 class="text-xl font-bold text-[#1A2B48] mb-2">
          SHUTTLE SERVICE 
        </h4>
        <p class="text-gray-500 text-sm">
          Layanan antar-jemput cepat dan tepat waktu ke bandara dan pelabuhan.
        </p>
        <div class="absolute top-0 right-0 p-3">
          <div
            class="w-4 h-4 rounded-full bg-yellow-400 opacity-70"
          ></div>
        </div>
      </a>

      <!-- Card 3: Rent Car -->
      <a
        href="{{ '/rent-cars/' | relative_url }}"
        class="service-card block bg-white p-6 rounded-3xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          class="service-icon-base mx-auto bg-yellow-100 text-yellow-600"
        >
          <i class="fas fa-car"></i>
        </div>
        <h4 class="text-xl font-bold text-[#1A2B48] mb-2">
          Rent Car
        </h4>
        <p class="text-gray-500 text-sm">
          Sewa mobil dengan harga terjangkau dan layanan terbaik.
        </p>
      </a>

      <!-- Card 4: Tour Travel -->
      <a
        href="{{ '/tour-travel/' | relative_url }}"
        class="service-card block bg-white p-6 rounded-3xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          class="service-icon-base mx-auto bg-purple-100 text-purple-600"
        >
          <i class="fas fa-map-marked-alt"></i>
        </div>
        <h4 class="text-xl font-bold text-[#1A2B48] mb-2">
          Tour Travel
        </h4>
        <p class="text-gray-500 text-sm">
          Nikmati perjalanan wisata yang tak terlupakan dengan tim kami.
        </p>
      </a>
    </div>
  </div>
</section>

<section id="shuttle-info" class="py-12">
  <div class="container">
    <p class="color-accent font-semibold tracking-wider uppercase mb-2 text-center">
      SHUTTLE
    </p>
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-6 text-center">
      Informasi Layanan Shuttle
    </h2>
    <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-10">
      K-BeeTrans89 telah melayani sejak 2012 dengan layanan shuttle yang nyaman, aman, dan tepat waktu untuk rute Malang Raya, Batu,
      Kepanjen, Juanda, Surabaya, hingga Tanjung Perak.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Garansi Tiket Pesawat</h3>
        <p class="text-gray-600 text-sm">Ada ganti rugi tiket jika keterlambatan terjadi karena kesalahan manajemen/driver kami.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Armada Terbaik</h3>
        <p class="text-gray-600 text-sm">Armada terawat rutin: Avanza, Innova Reborn, Calya, Hiace, Elf, medium bus, dan big bus.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-lg font-bold text-[#1A2B48] mb-2">Door to Door</h3>
        <p class="text-gray-600 text-sm">Penjemputan langsung ke lokasi customer demi kenyamanan perjalanan.</p>
      </div>
    </div>

    <div class="mt-10 text-center">
      <a href="{{ '/shuttle/' | relative_url }}" class="inline-block bg-[#ff5722] text-white py-3 px-6 rounded-lg hover:bg-[#e64a19] transition duration-300">
        Lihat Detail Shuttle
      </a>
    </div>
  </div>
</section>

<section id="destinations" class="text-center py-12">
  <div class="container">
    <p class="color-accent font-semibold tracking-wider uppercase mb-2">
      Top Selling
    </p>
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">
      Top Destinations
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {% assign sorted_highlights = site.tours | sort: 'days' | where: 'highlight', true %}
      {% for tour in sorted_highlights %}
        <a
          href="{{ tour.url | relative_url }}"
          class="group block destination-card bg-white rounded-3xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
        >
          <img
            class="w-full h-80 object-cover"
            src="{{ site.url }}{{ site.baseurl }}{{ tour.image | default: '/assets/img/placeholder.jpg' }}"
            alt="{{ tour.title }}"
          />
          <div class="p-5 text-left">
            <div class="flex justify-between items-center mb-3">
              <h3
                class="text-lg font-semibold text-gray-700 group-hover:text-gray-900"
              >
                {{ tour.title }}
              </h3>
              <span class="color-accent font-bold text-xl">{{ tour.price | default: '$***' }}</span>
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <i class="fas fa-paper-plane mr-2 color-accent"></i>
              <span>{{ tour.duration | default: '1 Day Trip' }}</span>
            </div>
          </div>
        </a>
      {% endfor %}
    </div>

    <div class="mt-10">
      <a href="{{ '/tours/' | relative_url }}" class="inline-block bg-[#ff5722] text-white py-3 px-6 rounded-lg hover:bg-[#e64a19] transition duration-300">
        Lihat Paket Lainnya
      </a>
    </div>
  </div>
</section>

<section id="rent-car" class="text-center py-12">
  <div class="container">
    <p class="color-accent font-semibold tracking-wider uppercase mb-2">
      RENT CAR
    </p>
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">
      Highlight Mobil Pilihan
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
      {% assign sorted_rent_cars = site.rent_cars | sort: 'order' %}
      {% for car in sorted_rent_cars limit: 4 %}
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden p-5">
        <img class="w-full h-48 object-cover rounded-2xl mb-4" src="{{ site.url }}{{ site.baseurl }}{{ car.image | default: '/assets/img/placeholder.jpg' }}" alt="{{ car.title }}" />
        <h3 class="text-xl font-bold text-[#1A2B48] mb-2">{{ car.title }}</h3>
        <p class="font-semibold color-accent mb-4">{{ car.regular_price }}</p>
        <a href="{{ '/booking/?tour=' | append: car.slug | relative_url }}" class="inline-block bg-[#ff5722] text-white py-2 px-4 rounded-lg hover:bg-[#e64a19] transition duration-300">
          Booking
        </a>
      </div>
      {% endfor %}
    </div>

    <div class="mt-10">
      <a href="{{ '/rent-cars/' | relative_url }}" class="inline-block bg-[#ff5722] text-white py-3 px-6 rounded-lg hover:bg-[#e64a19] transition duration-300">
        Lihat Semua Harga Rent Car
      </a>
    </div>
  </div>
</section>
       
<!-- Testimonial Section -->
<section id="testimonials">
  <div class="container">
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">Testimonial Pelanggan</h2>
    <div class="testimonial-slider-container">
      <div class="testimonial-track">
        {% assign sorted_testimonials = site.testimonials | sort: 'title' %}
        {% for testi in sorted_testimonials %}
        <div class="testimonial-card">
          <div class="rating">
            {% assign r = testi.rating | default: 5 %}
            {% for i in (1..r) %}
            <span>&#9733;</span>
            {% endfor %}
          </div>
          <p>
            {{ testi.content | markdownify }}
          </p>
          <span class="author">- {{ testi.author }}</span>
        </div>
        {% endfor %}
      </div>
      <!-- Tombol Navigasi Slider -->
      <button class="slider-btn" id="prevBtn">&#10094;</button>
      <button class="slider-btn" id="nextBtn">&#10095;</button>
    </div>
  </div>
</section>

<!-- Tentang Kami Section -->
<section id="about">
  <div class="container">
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">Tentang K-Bee Trans 89</h2>
    <div class="about-content">
      <div class="about-text">
        <h3 class="color-accent font-semibold tracking-wider uppercase mb-2">Solusi Transportasi Wisata Terbaik di Malang</h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;K-Bee Trans 89 adalah perusahaan penyedia jasa transportasi dan
          pariwisata yang berlokasi di jantung kota Malang. Kami
          berkomitmen untuk memberikan pengalaman perjalanan yang tak
          terlupakan bagi setiap pelanggan.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Dengan didukung oleh armada yang terawat (Innova, Hiace, Elf,
          dll.), kru yang profesional dan ramah, serta pengetahuan
          mendalam tentang destinasi wisata di Jawa Timur, kami adalah
          pilihan ideal untuk liburan keluarga, perjalanan bisnis, maupun
          study tour sekolah Anda.
        </p>
        <p>
          <strong>Visi Kami:</strong> Menjadi agen travel pariwisata
          terdepan di Malang yang dikenal karena kualitas layanan,
          keamanan, dan kepuasan pelanggan.
        </p>
      </div>
      <div class="about-image">
        <img
          alt="Tim K-Bee Trans 89 Malang"
          src="/assets/img/kbeetrans89-team.webp"
          title="Tim Profesional K-Bee Trans 89"
        />
      </div>
    </div>
  </div>
</section>
<!-- Kontak Section -->
<section id="contact">
  <div class="container">
    <h2 class="text-4xl sm:text-5xl font-extrabold text-[#1A2B48] mb-12">Hubungi Kami</h2>
    <div class="contact-content">
      <div class="contact-info">
        <p>
          <strong>Dapatkan Penawaran Terbaik</strong><br />
          Jangan ragu untuk menghubungi kami. Tim kami siap 24/7 untuk
          menjawab pertanyaan Anda dan membantu merencanakan perjalanan
          Anda.
        </p>
        <p>
          <strong>Telepon/WhatsApp:</strong><br />
          <a href="https://wa.me/6282146252589" target="_blank"
            >+62821-4625-2589</a
          >
        </p>
        <p>
          <strong>Email:</strong><br />
          <a href="mailto:info@kbeetrans89.co.id"
            >info@kbeetrans89.co.id</a
          >
        </p>
        <p>
          <strong>Alamat:</strong><br />
          Jl. Pesantren 27 RT 22 RW 04 Selobekiti, Plandi, Kec. Wonosari,
          Kabupaten Malang, Jawa Timur 65164
        </p>
      </div>
      <!-- Peta -->
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4577.2843796500165!2d112.52453787563084!3d-8.118133491911259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789fcd4432bca9%3A0x9363dd8616ab3f63!2sKbeetrans89!5e1!3m2!1sid!2sid!4v1767619910742!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>