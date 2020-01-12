---
layout:    page
permalink: "/Gallery"
author:    Chang
weight:    5
menutitle: Gallery
title:     Photography & Writings
---

I am always fascinated by anything allowing me to <i>speak to myself</i> - all those *pure* and *interesting* issues including **photography**, **classic & rock music** and **literature**. My new (non-academic and capricious) writings are posted below, including but not limited to travel journals and surrealistic thoughts.

  {% assign sorted_cats = site.categories | sort %}
  {% for category in sorted_cats %}
  {% assign sorted_posts = category[1] | reversed %}

  <h3 id="{{category[0] | uri_escape | downcase | slugify }}">{{category[0] | camelcase }}</h3>
  <ul class="category {{category[0] | uri_escape | downcase | slugify}}">
      {% for post in sorted_posts %}
      {% unless post.draft %}

      {% if post.menutitle %}
      {% assign title = post.menutitle %}
      {% else %}
      {% assign title = post.title %}
      {% endif %}

      <li>
          <div class="article">
              <article class="article" itemscope itemtype="http://schema.org/BlogPosting">
                  <header class="post-header">
                      <span class="title"><a itemprop="name" href="{{ post.url | absolute_url }}" title="{{ title }}">{{ title }}</a></span>
                      <time class="date" itemprop="datePublished" datetime="{{post.date | date: "%Y-%m-%d"}}">{{post.date | date: "%B %e, %Y"}}</time>
                  </header>
              </article>
          </div>
      </li>
      {% endunless %}
      {% endfor %}
  </ul>
  {% endfor %}

<div class="article">
<script src="../js/masonry.pkgd.js"></script>
<div class="grid">
  <div class="grid-item"><img src="../assets/SantaCruz.jpeg"></div>
  <div class="grid-item"><img src="../assets/Manhattan.jpeg"></div>
  <div class="grid-item"><img src="../assets/GriffithObservatory.jpeg"></div>
  <div class="grid-item"><img src="../assets/Caltech.jpeg"></div>
  <div class="grid-item"><img src="../assets/JingShan.jpeg"></div>
  <div class="grid-item"><img src="../assets/WestLake.jpeg"></div>
  <div class="grid-item"><img src="../assets/SantaCruz.jpeg"></div>
  <div class="grid-item"><img src="../assets/Manhattan.jpeg"></div>
  <div class="grid-item"><img src="../assets/GriffithObservatory.jpeg"></div>
  <div class="grid-item"><img src="../assets/Caltech.jpeg"></div>
  <div class="grid-item"><img src="../assets/JingShan.jpeg"></div>
  <div class="grid-item"><img src="../assets/WestLake.jpeg"></div>
  <div class="grid-item"><img src="../assets/SantaCruz.jpeg"></div>
  <div class="grid-item"><img src="../assets/Manhattan.jpeg"></div>
  <div class="grid-item"><img src="../assets/GriffithObservatory.jpeg"></div>
  <div class="grid-item"><img src="../assets/Caltech.jpeg"></div>
  <div class="grid-item"><img src="../assets/JingShan.jpeg"></div>
  <div class="grid-item"><img src="../assets/WestLake.jpeg"></div>
</div>
</div>
