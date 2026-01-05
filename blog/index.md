---
layout: default
title: "Blog"
---

<section class="py-12">
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-[#1A2B48] mb-4">Blog K-Bee Trans 89</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Tips traveling, informasi destinasi wisata, dan berita terbaru dari dunia pariwisata Malang
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {% for post in site.posts %}
      <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        {% if post.image %}
        <img src="{{ site.url }}{{ site.baseurl }}{{ post.image }}" alt="{{ post.title }}" class="w-full h-48 object-cover">
        {% else %}
        <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
          <i class="fas fa-image text-gray-400 text-4xl"></i>
        </div>
        {% endif %}
        <div class="p-6">
          <h3 class="text-xl font-bold text-[#1A2B48] mb-2">
            <a href="{{ post.url | relative_url }}" class="hover:text-[#ff5722]">{{ post.title }}</a>
          </h3>
          <p class="text-gray-600 text-sm mb-4">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%d %b %Y" }}</time>
            {% if post.author %}
            <span>{{ post.author }}</span>
            {% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>

    {% if site.posts.size == 0 %}
    <div class="text-center py-12">
      <i class="fas fa-newspaper text-gray-300 text-6xl mb-4"></i>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">Belum ada artikel</h3>
      <p class="text-gray-500">Artikel blog akan segera ditambahkan.</p>
    </div>
    {% endif %}
  </div>
</section>