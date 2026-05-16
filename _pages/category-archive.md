---
layout: archive
title: "Категории"
permalink: /categories/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="page__content categories-page">
  <div class="posts-list">
    {% for category in site.data.categories %}
      {% assign cat_name = category.name %}
      {% assign cat_page = category.page %}
      {% assign posts_in_cat = site.posts | where: "categories", cat_name %}
      
      <div class="post-item">
        <div class="post-item__content">
          <h2 class="post-item__title">
            <a href="/categories/{{ cat_page | slugify }}/">{{ cat_name }}</a>
          </h2>
          
          {% if category.description %}
            <p class="post-item__tagline">{{ category.description }}</p>
          {% endif %}

          <span class="category-count">Статей: {{ posts_in_cat.size }}</span>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
