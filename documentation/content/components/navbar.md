---
title: Navbar
slug: "navbar"
draft: false
weight: 1
---

<section>
  <header role="navbar" class="navbar--light-grey">
    <div class="container">
      <div class="navbar__brand">
        <a class="navbar__item">[Your Logo]</a>
        <div class="navbar__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav class="navbar__menu">
        <div class="navbar__menu--left">
          <div class="navbar__item dropdown">
            <a class="dropdown__item">Dropdown</a>
            <div class="dropdown__menu">
              <a class="dropdown__menu-item">One</a>
              <a class="dropdown__menu-item">Two</a>
              <a class="dropdown__menu-item">Three</a>
              <hr class="dropdown__menu__divider">
              <a class="dropdown__menu-item">Separated</a>
            </div>
          </div>
        </div>
        <div class="navbar__menu--right">
          <div class="navbar__item dropdown">
            <a class="dropdown__item">Dropdown</a>
            <div class="dropdown__menu">
              <a class="dropdown__menu-item">One</a>
              <a class="dropdown__menu-item">Two</a>
              <a class="dropdown__menu-item">Three</a>
              <hr class="dropdown__menu__divider">
              <a class="dropdown__menu-item">Separated</a>
            </div>
          </div>
          <a class="navbar__item" target="_blank" href="https://github.com/FunkyStudioHQ/funky_ui">
            <span class="icon--large t--black">
              <i class="fa fa-github"></i>
            </span>
          </a>

        </div>
      </nav>
    </div>
  </header>
</section>

{{< highlight html >}}
<section>
  <header role="navbar" class="navbar">
    <div class="container">
      <div class="navbar__brand">
        <a class="navbar__item">[Your Logo]</a>
        <div class="navbar__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav class="navbar__menu">
        <div class="navbar__menu--right">
          <a class="navbar__item" target="_blank" href="https://github.com/FunkyStudioHQ/funky_ui">
            <span class="icon--large t--black">
              <i class="fa fa-github"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</section>
{{< /highlight >}}

<section>
  <h4 class="t--center">Color Modifiers</h4>
  {{< colors class="navbar">}}
</section>
