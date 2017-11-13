---
title: Typography
slug: "typography"
draft: false
weight: 2
variables:
  $typography-font-family:            "$base-font-family"
  $typography-line-height:            "$base-line-height"
  $typography-bg:                     "$base-bg"
  $typography-color:                  "$base-color"
  $typography-headings-font-family:   "$base-font-family"
  $typography-headings-font-weight:   "600"
  $typography-headings-line-height:   "1.2"
  $typography-headings-transform:     "none"
  $typography-link-color:             "$base-link-color"
  $typography-link-hover-color:       "$base-link-hover-color"
  $typography-link-font-weight:       "$base-link-font-weight"
  $typography-link-decoration:        "$base-link-decoration"
---
<section>
  <h4>Headings</h1>
  <p>In funkyUI you don't need to add classes to your heading tag;<br />Just use normal tag!</p>
  <section>
    <nav class="row--mobile">
      <div class="row__item">
        <div class="t--center">
          <h1>h1</h1>
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          <h2>h2</h2>
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
            <h3>h3</h3>
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          <h4>h4</h4>
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          <h5>h5</h5>
        </div>
      </div>
    </nav>

    <p>You can also obtain the same result using typography classes for headings as follow:</p>
    <nav class="row--mobile">
      <div class="row__item">
        <div class="t--center">
          h--1
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          h--2
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
            h--3
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          h--4
        </div>
      </div>
      <div class="row__item">
        <div class="t--center">
          h--5
        </div>
      </div>
    </nav>
  </section>
</section>

```html
<h1>Lorem ipsum</h1>
<h2>Lorem ipsum</h2>
<h3>Lorem ipsum</h3>
<h4>Lorem ipsum</h4>
<h5>Lorem ipsum</h5>
<!-- Is te same: -->
<p class="h--1">Lorem ipsum</p>
<p class="t--2">Lorem ipsum</p>
<p class="t--3">Lorem ipsum</p>
<p class="t--4">Lorem ipsum</p>
<p class="t--5">Lorem ipsum</p>


```

<section>
  <h4 class="t--center">Dimension Modifiers</h4>
  <nav class="row--mobile">
    <div class="row__item">
      <div class="t--center">
        t--small
      </div>
    </div>
    <div class="row__item">
      <div class="t--center">
          t--medium
      </div>
    </div>
    <div class="row__item">
      <div class="t--center">
        t--large
      </div>
    </div>
  </nav>
  Small:
  <p class="t--small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  Medium:
  <p class="t--medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  Large:
  <p class="t--large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p></section>

```html
<p class="t--small">Lorem ipsum dolor sit amet</p>
<p class="t--medium">Lorem ipsum dolor sit amet</p>
<p class="t--large">Lorem ipsum dolor sit amet</p>
```
