---
title: Breadcrumbs
slug: "breadcrumbs"
draft: false
weight: 7
variables:
  $breadcrumb-item-color:           "$base-link-color"
  $breadcrumb-item-hover-color:     "$base-link-hover-color"
  $breadcrumb-item-active-color:    "$base-color"
  $breadcrumb-item-separator-color: "$base-color"
---

<div class="breadcrumb">
  <ul>
    <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
    <li class="breadcrumb__item"><a href="#">Components</a></li>
    <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
  </ul>
</div>

```html
<div class="breadcrumb">
  <ul>
    <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
    <li class="breadcrumb__item"><a href="#">Components</a></li>
    <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
  </ul>
</div>
```

<section>
  <h4>Position modifier</h4>
  <div class="breadcrumb--centered">
    <ul>
      <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
      <li class="breadcrumb__item"><a href="#">Components</a></li>
      <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
    </ul>
  </div>
  <div class="breadcrumb--right">
    <ul>
      <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
      <li class="breadcrumb__item"><a href="#">Components</a></li>
      <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
    </ul>
  </div>
</section>

<section>
  <h4>Dimension Modifier</h4>
  <div class="breadcrumb--small">
    <ul>
      <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
      <li class="breadcrumb__item"><a href="#">Components</a></li>
      <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
    </ul>
  </div>
  <div class="breadcrumb--medium">
    <ul>
      <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
      <li class="breadcrumb__item"><a href="#">Components</a></li>
      <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
    </ul>
  </div>
  <div class="breadcrumb--large">
    <ul>
      <li class="breadcrumb__item"><a href="#">FunkyUI</a></li>
      <li class="breadcrumb__item"><a href="#">Components</a></li>
      <li class="breadcrumb__item breadcrumb__item--active"><a href="#">Breadcrumbs</a></li>
    </ul>
  </div>
</section>
