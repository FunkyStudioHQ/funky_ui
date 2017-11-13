---
title: Pagination
slug: "pagination"
draft: false
weight: 3
variables:
  $pagination-hide-until:           "$tablet"
  $pagination-border-color:         "$base-border-color"
  $pagination-border-radius:        "$base-border-radius"
  $pagination-links-color:          "$base-link-color"
  $pagination-links-hover-color:    "$base-link-hover-color"
  $pagination-links-bg:             "$base-link-hover-bg"
  $pagination-links-active-bg:      "$base-action-active-bg"
  $pagination-links-active-color:   "$base-action-active-color"
---

<section>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a href="#" class="pagination__link pagination__link--previous">previous</a>
    <a href="#" class="pagination__link pagination__link--next">next</a>
    <ul class="pagination__list">
      <li><a href="#" class="pagination__link">first</a></li>
      <li><a href="#" class="pagination__link">1</a></li>
      <li><a href="#" class="pagination__link pagination__link--active">2</a></li>
      <li><a href="#" class="pagination__link">3</a></li>
      <li><a href="#" class="pagination__link">4</a></li>
      <li><a href="#" class="pagination__link">last</a></li>
    </ul>
  </nav>
</section>


```html
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a href="#" class="pagination__link pagination__link--previous">previous</a>
    <a href="#" class="pagination__link pagination__link--next">next</a>
    <ul class="pagination__list">
      <li><a href="#" class="pagination__link">first</a></li>
      <li><a href="#" class="pagination__link">1</a></li>
      <li><a href="#" class="pagination__link pagination__link--active">2</a></li>
      <li><a href="#" class="pagination__link">3</a></li>
      <li><a href="#" class="pagination__link">4</a></li>
      <li><a href="#" class="pagination__link">last</a></li>
    </ul>
  </nav>
```
<section>
<h4>Dimensions Modifiers</h4>
  <p>You can also obtain the same result using typography classes for headings as follow:</p>
  <hr />
  <nav class="row">
    <div class="row__item">
      <div class="t--center">
        pagination--small
      </div>
    </div>
    <div class="row__item">
      <div class="t--center">
        pagination--medium
      </div>
    </div>
    <div class="row__item">
      <div class="t--center">
          pagination--large
      </div>
    </div>
  </nav>
</section>
<hr />
<nav class="pagination pagination--small" role="navigation" aria-label="pagination">
  <a href="#" class="pagination__link pagination__link--previous">previous</a>
  <a href="#" class="pagination__link pagination__link--next">next</a>
  <ul class="pagination__list">
    <li><a href="#" class="pagination__link">first</a></li>
    <li><a href="#" class="pagination__link">1</a></li>
    <li><a href="#" class="pagination__link pagination__link--active">2</a></li>
    <li><a href="#" class="pagination__link">3</a></li>
    <li><a href="#" class="pagination__link">4</a></li>
    <li><a href="#" class="pagination__link">last</a></li>
  </ul>
</nav>
<br />
<nav class="pagination pagination--medium" role="navigation" aria-label="pagination">
  <a href="#" class="pagination__link pagination__link--previous">previous</a>
  <a href="#" class="pagination__link pagination__link--next">next</a>
  <ul class="pagination__list">
    <li><a href="#" class="pagination__link">first</a></li>
    <li><a href="#" class="pagination__link">1</a></li>
    <li><a href="#" class="pagination__link pagination__link--active">2</a></li>
    <li><a href="#" class="pagination__link">3</a></li>
    <li><a href="#" class="pagination__link">4</a></li>
    <li><a href="#" class="pagination__link">last</a></li>
  </ul>
</nav>
<br />
<nav class="pagination pagination--large" role="navigation" aria-label="pagination">
  <a href="#" class="pagination__link pagination__link--previous">previous</a>
  <a href="#" class="pagination__link pagination__link--next">next</a>
  <ul class="pagination__list">
    <li><a href="#" class="pagination__link">first</a></li>
    <li><a href="#" class="pagination__link">1</a></li>
    <li><a href="#" class="pagination__link pagination__link--active">2</a></li>
    <li><a href="#" class="pagination__link">3</a></li>
    <li><a href="#" class="pagination__link">4</a></li>
    <li><a href="#" class="pagination__link">last</a></li>
  </ul>
</nav>
