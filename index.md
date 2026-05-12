---
layout: layout.njk
title: 首页 - WhatsApp资讯导航
---

<div class="main-container">
    <h1>最新文章动态</h1>
    <p>实时更新 WhatsApp 网页版官方资讯与使用技巧</p>
    
    <hr>

    <ul class="post-list">
    {% for post in collections.blog | reverse %}
      <li style="list-style: none; padding: 15px; border-bottom: 1px solid #eee;">
        <h2 style="margin: 0;">
          <a href="{{ post.url }}" style="text-decoration: none; color: #128C7E;">{{ post.data.title }}</a>
        </h2>
        <small style="color: #999;">更新于：{{ post.date }}</small>
      </li>
    {% endfor %}
    </ul>

    {% if collections.blog.length == 0 %}
    <p style="text-align: center; color: #ccc; margin-top: 50px;">暂无更新，请进入后台发布文章...</p>
    {% endif %}
</div>

<style>
    .main-container { max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif; }
    .post-list { padding: 0; }
    .post-list a:hover { color: #075E54 !important; text-decoration: underline !important; }
</style>