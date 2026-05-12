---
layout: layout.njk
title: 我的导航站
---

## 最新文章
<ul>
{% for post in collections.blog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> - {{ post.date | dateFilter }}
  </li>
{% endfor %}
</ul>