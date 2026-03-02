---
layout: default
title: "Rent Car"
---

<section class="py-12">
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Daftar Harga Rent Car</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Pilih armada terbaik untuk perjalanan Anda bersama K-Bee Trans 89
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {% assign sorted_rent_cars = site.rent_cars | sort: 'order' %}
      {% for car in sorted_rent_cars %}
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden p-5 hover:shadow-xl transition duration-300">
        <img class="w-full h-48 object-cover rounded-2xl mb-4" src="{{ site.url }}{{ site.baseurl }}{{ car.image | default: '/assets/img/placeholder.jpg' }}" alt="{{ car.title }}" />
        <h3 class="text-xl font-bold text-[#1A2B48] mb-2">{{ car.title }}</h3>

        <div class="mb-4">
          <h4 class="font-semibold text-[#1A2B48] mb-1">Paket Reguler</h4>
          <p class="font-semibold color-accent mb-2">{{ car.regular_price }}</p>
          <ol class="list-decimal ml-5 text-sm text-gray-600 space-y-1">
            {% for item in car.regular_details %}
            <li>{{ item }}</li>
            {% endfor %}
          </ol>
        </div>

        <div>
          <h4 class="font-semibold text-[#1A2B48] mb-1">{{ car.all_in_title | default: 'Paket All In' }}</h4>
          <p class="font-semibold color-accent mb-2">{{ car.all_in_price }}</p>
          <ol class="list-decimal ml-5 text-sm text-gray-600 space-y-1">
            {% for item in car.all_in_details %}
            <li>{{ item }}</li>
            {% endfor %}
          </ol>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
