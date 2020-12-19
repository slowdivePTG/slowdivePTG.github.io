---
layout:    page
permalink: "/Gallery"
author:    Chang
weight:    5
cover:     /assets/Islands.jpg
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

<!--
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="container-all">
  <div class="container">
    <img src="../assets/PKUEastGate.jpeg" alt="">
     <span class="pic_title">PKU East Gate</span>
    <span class="text">Haidian, Beijing, China</span>
  </div>
  <div class="container">
    <img src="../assets/WestLake.jpeg" alt="">
     <span class="pic_title">West Lake</span>
    <span class="text">Hangzhou, Zhejiang, China</span>
  </div>
  <div class="container">
    <img src="../assets/Caltech.jpeg" alt="">
     <span class="pic_title">Caltech</span>
    <span class="text">Pasadena, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/Manhattan.jpeg" alt="">
    <span class="pic_title">Manhattan Beach</span>
    <span class="text">Manhattan Beach, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/GriffithObservatory.jpeg" alt="">
     <span class="pic_title">Griffith Observatory</span>
    <span class="text">Los Angeles, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/SantaCruz.jpeg" alt="">
     <span class="pic_title">Santa Cruz Boardwalk</span>
    <span class="text">Santa Cruz, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/UCSCFarm1.jpeg" alt="">
     <span class="pic_title">UCSC Farm</span>
    <span class="text">Santa Cruz, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/UCSCFarm3.jpeg" alt="">
     <span class="pic_title">UCSC Farm</span>
    <span class="text">Santa Cruz, CA, US</span>
  </div>
  <div class="container">
    <img src="../assets/UCSCFarm2.jpeg" alt="">
     <span class="pic_title">UCSC Sunset</span>
    <span class="text">Santa Cruz, CA, US</span>
  </div>
  </div>
-->