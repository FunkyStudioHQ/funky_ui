---
title: Pagination
slug: "pagination"
draft: false
weight: 3
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

<section>
  <h4>Variables</h4>
  <table class="table--striped table--bordered">
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
    <tr><td class="t--red">$pagination-hide-until</td><td class="t--purple">$tablet</td></tr>
    <tr><td class="t--red">$pagination-border-color</td><td class="t--purple">$base-border-color</td></tr>
    <tr><td class="t--red">$pagination-border-radius</td><td class="t--purple">$base-border-radius</td></tr>
    <tr><td class="t--red">$pagination-links-color</td><td class="t--purple">$base-link-color</td></tr>
    <tr><td class="t--red">$pagination-links-hover-color</td><td class="t--purple">$base-link-hover-color</td></tr>
    <tr><td class="t--red">$pagination-links-bg</td><td class="t--purple">$base-link-hover-bg</td></tr>
    <tr><td class="t--red">$pagination-links-active-bg</td><td class="t--purple">$base-action-active-bg</td></tr>
    <tr><td class="t--red">$pagination-links-active-color</td><td class="t--purple">$base-action-active-color</td></tr>
  </tbody>
  </table>
</section>
