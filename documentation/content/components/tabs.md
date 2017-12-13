---
title: Tabs
slug: "tabs"
draft: false
weight: 5
variables:
  $tabs-border-bottom-color:                    "$base-border"
  $tabs-border-bottom-style:                    "solid"
  $tabs-border-bottom-width:                    "1px"
  $tabs-link-color:                             "$base-color"
  $tabs-link-hover-border-bottom-color:         "$black"
  $tabs-link-hover-color:                       "$base-color"
  $tabs-link-active-border-bottom-color:        "$base-color"
  $tabs-link-active-color:                      "$base-bg"
  $tabs-link-padding:                           "0.5em 1em"
  $tabs-boxed-link-radius:                      "$base-border-radius"
  $tabs-boxed-link-hover-background-color:      "$base-bg"
  $tabs-boxed-link-hover-border-bottom-color:   "$base-color"
  $tabs-boxed-link-active-background-color:     "$white"
  $tabs-boxed-link-active-border-color:         "$base-border"
  $tabs-boxed-link-active-border-bottom-color:  "transparent"
  $tabs-toggle-link-border-color:               "$base-border-color"
  $tabs-toggle-link-border-style:               "solid"
  $tabs-toggle-link-border-width:               "1px"
  $tabs-toggle-link-hover-background-color:     "$base-bg"
  $tabs-toggle-link-hover-border-color:         "$base-border-color"
  $tabs-toggle-link-radius:                     "$base-border-radius"
  $tabs-toggle-link-active-background-color:    "$base-action-active-bg"
  $tabs-toggle-link-active-border-color:        "$base-action-active-color"
  $tabs-toggle-link-active-color:               "$base-bg"
---


<section>
<h4>Simple</h4>
<div class="tabs" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
</section>

```html
<div class="tabs" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
```

<section>
<h4>Boxed</h4>
<div class="tabs tabs--boxed" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
</section>

```html
<div class="tabs tabs--boxed" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
```

<section>
<h4>Bar</h4>
<div class="tabs tabs--bar" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
</section>

```html
<div class="tabs tabs--bar" role="tabs">
  <ul class="tabs__list">
    <li class="tabs__list__item tabs__list__item--active"><a>Pictures</a></li>
    <li class="tabs__list__item"><a>Music</a></li>
    <li class="tabs__list__item"><a>Videos</a></li>
    <li class="tabs__list__item"><a>Documents</a></li>
  </ul>

  <div class="tabs__content">
    <div class="tabs__content__item tabs__content__item--active">Pictures</div>
    <div class="tabs__content__item">Music</div>
    <div class="tabs__content__item">Videos</div>
    <div class="tabs__content__item">Documents</div>
  </div>
</div>
```
