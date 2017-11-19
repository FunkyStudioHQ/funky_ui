---
title: Buttons
slug: "buttons"
draft: false
weight: 4
variables:
  $button-font-family:     "$base-font-family"
  $button-font-size:       "$base-font-size"
  $button-font-weight:     "600"
  $button-line-heigth:     "1"
  $button-cursor:          "pointer"
  $button-border:          "0"
  $button-border-radius:   "$base-border-radius"
  $button-text-transform:  "none"
  $button-text-align:      "center"
  $button-padding:         "$small-spacing $base-spacing"
  $button-color:           "$base-action-color"
  $button-bg:              "$base-action-bg"
  $button-hover-color:     "$base-action-hover-color"
  $button-hover-bg:        "$base-action-hover-bg"
  $button-active-color:    "$base-action-active-color"
  $button-active-bg:       "$base-action-active-bg"
---


<section>
  <h3>All Colors</h3>

  <h5>Grey scale</h5>
  <table class="table">
    <thead>
      <tr>
        <th class="t--small">black</th>
        <th class="t--small">dark</th>
        <th class="t--small">darken-grey</th>
        <th class="t--small">dark-grey</th>
        <th class="t--small">grey</th>
        <th class="t--small">light-grey</th>
        <th class="t--small">lighten-grey</th>
        <th class="t--small">white</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="black"><a class="button--black">Button</a></td>
        <td data-title="dark"><a class="button--dark">Button</a></td>
        <td data-title="darken"><a class="button--darken-grey">Button</a></td>
        <td data-title="dark"><a class="button--dark-grey">Button</a></td>
        <td data-title="grey"><a class="button--grey">Button</a></td>
        <td data-title="light"><a class="button--light-grey">Button</a></td>
        <td data-title="lighten"><a class="button--lighten-grey">Button</a></td>
        <td data-title="white"><a class="button--white">Button</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h5>Other colors</h5>
  <table class="table">
    <thead>
      <tr>
        <th class="t--small">red</th>
        <th class="t--small">orange</th>
        <th class="t--small">yellow</th>
        <th class="t--small">green</th>
        <th class="t--small">turquoise</th>
        <th class="t--small">blue</th>
        <th class="t--small">purple</th>
        <th class="t--small">brown</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="red"><a class="button--red">Button</a></td>
        <td data-title="orange"><a class="button--orange">Button</a></td>
        <td data-title="yellow"><a class="button--yellow">Button</a></td>
        <td data-title="green"><a class="button--green">Button</a></td>
        <td data-title="turquoise"><a class="button--turquoise">Button</a></td>
        <td data-title="blue"><a class="button--blue">Button</a></td>
        <td data-title="purple"><a class="button--purple">Button</a></td>
        <td data-title="brown"><a class="button--brown">Button</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h3>dropdown</h3>
  <div class="dropdown">
    <a class="dropdown__item--active button button--black">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--dark">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--darken-grey">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--dark-grey">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--grey">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--light-grey">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--lighten-grey">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--white">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <br />
  <br />
  <div class="dropdown">
    <a class="dropdown__item--active button button--red">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--orange">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--yellow">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--green">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--turquoise">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--blue">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--purple">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
  <div class="dropdown">
    <a class="dropdown__item--active button button--brown">Button</a>
    <div class="dropdown__menu">
      <a class="dropdown__menu-item">Overview</a>
      <a class="dropdown__menu-item">Elements</a>
      <a class="dropdown__menu-item">Components</a>
      <hr class="dropdown__menu__divider">
      <a class="dropdown__menu-item">Version 0.6.0</a>
    </div>
  </div>
</section>

<a class="button">
  <span class="icon">
    <i class="fa fa-github"></i>
  </span>
  <span>GitHub</span>
</a>

<section>
  <h3>Dimension modifier</h3>
  <a class="button--red button--small">Button</a>
  <a class="button--orange">Button</a>
  <a class="button--yellow button--medium">Button</a>
  <a class="button--green button--large">Button</a>
</p>
</section>
