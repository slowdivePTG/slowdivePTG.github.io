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


<div class="album">
  <figure>
    <img src="{{ "../assets/SantaCruz.jpeg" | absolute_url }}" />
    <figcaption>Beach, sunset, herd of birds in Santa Cruz, CA</figcaption>
  </figure>
  
  <figure>
    <img src="{{ "../assets/Manhattan.jpeg" | absolute_url }}" />
    <figcaption>Sunset on Manhattan Beach, CA</figcaption>
  </figure>
  
  <figure>
    <img src="{{ "../assets/GriffithObservatory.jpeg" | absolute_url }}" />
    <figcaption>Downtown Los Angeles from Griffith Observatory, CA</figcaption>
  </figure>

	<figure>
    <img src="{{ "../assets/Caltech.jpeg" | absolute_url }}" />
    <figcaption>The Athenaeum of Caltech, Pasadena, CA</figcaption>
  </figure>
  
  <figure>
    <img src="{{ "../assets/JingShan.jpeg" | absolute_url }}" />
    <figcaption>Splendid dusk from Jingshan Park, Beijing</figcaption>
  </figure>
  
  <figure>
    <img src="{{ "../assets/WestLake.jpeg" | absolute_url }}" />
    <figcaption>Yang Causeway in the fog, West Lake, Hangzhou, Zhejiang</figcaption>
  </figure>
</div>