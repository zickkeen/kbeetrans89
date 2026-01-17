---
layout: default
title: "Paket Tour"
---

<section class="py-12">
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Paket Tour Wisata</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Pilih paket tour impian Anda dan jelajahi keindahan jatim bersama K-BeeTrans89
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {% assign sorted_tours = site.tours | sort: 'days' %}
      {% for tour in sorted_tours %}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        {% if tour.image %}
        <img src="{{ site.url }}{{ site.baseurl }}{{ tour.image }}" alt="{{ tour.title }}" class="w-full h-48 object-cover">
        {% endif %}
        <div class="p-6">
          <h3 class="text-xl font-bold text-[#1A2B48] mb-2">{{ tour.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ tour.description }}</p>
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-gray-500">
              <i class="fas fa-clock mr-1"></i>{{ tour.duration }}
            </span>
            <span class="text-lg font-bold color-accent">{{ tour.price }}</span>
          </div>
          <a href="{{ tour.url | relative_url }}" class="w-full bg-[#ff5722] text-white py-2 px-4 rounded-lg hover:bg-[#e64a19] transition duration-300 text-center block">
            Lihat Detail
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>