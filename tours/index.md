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
      <div class="mb-6 flex items-center justify-end w-full">
        <label for="durationFilter" class="mr-3 text-sm text-gray-600">Filter durasi:</label>
        <select id="durationFilter" class="px-3 py-2 border rounded-md text-sm">
          <option value="all">Semua</option>
          <option value="1">1 Day</option>
          <option value="2">2 Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {% assign sorted_tours = site.tours | sort: 'days' %}
      {% for tour in sorted_tours %}
      <div class="tour-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300" data-days="{{ tour.days | default: 1 }}">
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
    <script>
      document.addEventListener('DOMContentLoaded', function(){
        var filter = document.getElementById('durationFilter');
        if(!filter) return;
        filter.addEventListener('change', function(){
          var val = this.value;
          var cards = document.querySelectorAll('.tour-card');
          cards.forEach(function(card){
            if(val === 'all' || card.dataset.days === val){
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    </script>
  </div>
</section>