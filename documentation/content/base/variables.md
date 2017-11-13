---
title: Variables
slug: "variables"
draft: false
weight: 1
---
<p>FunkyUI permits to simply change your site apparence only modifing <i>base</i> or <i>special</i> variables.<br />
In you want to change some of this values you can define your variables before include <i>funky_ui</i> library like follow code:</p>

{{< highlight css >}}
$base-action-active-bg: purple;
$base-action-active-color: white;
[...]
@import "funky_ui/all";
[...]
{{< /highlight >}}

<section>
  <h4>Base variables</h4>
  <table class="table--striped table--bordered">
  <legend class="t--center">Typography</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
    <tr><td class="t--red">$base-font-family</td><td class="t--purple">$sans-serif</td></tr>
    <tr><td class="t--red">$base-font-size</td><td class="t--purple">16px</td></tr>
    <tr><td class="t--red">$base-color</td><td class="t--purple">$black</td></tr>
    <tr><td class="t--red">$base-font-weight</td><td class="t--purple">600</td></tr>
    <tr><td class="t--red">$small-font-size</td><td class="t--purple">12px</td></tr>
    <tr><td class="t--red">$medium-font-size</td><td class="t--purple">19px</td></tr>
    <tr><td class="t--red">$large-font-size</td><td class="t--purple">23px</td></tr>
    <tr><td class="t--red">$base-line-height</td><td class="t--purple">1.5;</td></tr>
    <tr><td class="t--red">$base-bg</td><td class="t--purple">$white</td></tr>
    <tr><td class="t--red">$secondary-bg</td><td class="t--purple">tint($white, 75%)</td></tr>
    <tr><td class="t--red">$base-action-color</td><td class="t--purple">$grey-inverse</td></tr>
    <tr><td class="t--red">$base-action-bg</td><td class="t--purple">$grey</td></tr>
    <tr><td class="t--red">$base-action-hover-bg</td><td class="t--purple">$light-grey</td></tr>
    <tr><td class="t--red">$base-action-hover-color</td><td class="t--purple">$light-grey-inverse</td></tr>
    <tr><td class="t--red">$base-action-active-color</td><td class="t--purple">$blue-inverse</td></tr>
    <tr><td class="t--red">$base-action-active-bg</td><td class="t--purple">$blue</td></tr>
  </tbody>
  </table>

  <table class="table--striped table--bordered">
  <legend class="t--center">Links</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
    <tr><td class="t--red">$base-font-family</td><td class="t--purple">$sans-serif</td></tr>
    <tr><td class="t--red">$base-font-size</td><td class="t--purple">16px</td></tr>
    <tr><td class="t--red">$base-color</td><td class="t--purple">$black</td></tr>
    <tr><td class="t--red">$base-font-weight</td><td class="t--purple">600</td></tr>
    <tr><td class="t--red">$small-font-size</td><td class="t--purple">12px</td></tr>
    <tr><td class="t--red">$medium-font-size</td><td class="t--purple">19px</td></tr>
    <tr><td class="t--red">$large-font-size</td><td class="t--purple">23px</td></tr>
    <tr><td class="t--red">$base-line-height</td><td class="t--purple">1.5;</td></tr>
    <tr><td class="t--red">$base-bg</td><td class="t--purple">$white</td></tr>
    <tr><td class="t--red">$secondary-bg</td><td class="t--purple">tint($white, 75%)</td></tr>
    <tr><td class="t--red">$base-action-color</td><td class="t--purple">$grey-inverse</td></tr>
    <tr><td class="t--red">$base-action-bg</td><td class="t--purple">$grey</td></tr>
    <tr><td class="t--red">$base-action-hover-bg</td><td class="t--purple">$light-grey</td></tr>
    <tr><td class="t--red">$base-action-hover-color</td><td class="t--purple">$light-grey-inverse</td></tr>
    <tr><td class="t--red">$base-action-active-color</td><td class="t--purple">$blue-inverse</td></tr>
    <tr><td class="t--red">$base-action-active-bg</td><td class="t--purple">$blue</td>
  </tbody>
  </table>


  <table class="table--striped table--bordered">
  <legend class="t--center">Links</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-link-color</td><td class="t--purple">$base-color</td></tr>
  <tr><td class="t--red">$base-link-font-weight</td><td class="t--purple">bolder</td></tr>
  <tr><td class="t--red">$base-link-decoration</td><td class="t--purple">none</td></tr>
  <tr><td class="t--red">$base-link-hover-color</td><td class="t--purple">shade($base-link-color, 25%)</td></tr>
  <tr><td class="t--red">$base-link-hover-font-weight</td><td class="t--purple">bolder</td></tr>
  <tr><td class="t--red">$base-link-hover-decoration</td><td class="t--purple">none</td></tr>
  <tr><td class="t--red">$base-link-hover-bg</td><td class="t--purple">shade($base-bg, 25%)</td></tr>
  <tr><td class="t--red">$base-link-active-color</td><td class="t--purple">$base-link-color</td></tr>
  <tr><td class="t--red">$base-link-active-font-weight</td><td class="t--purple">bolder</td></tr>
  <tr><td class="t--red">$base-link-active-decoration</td><td class="t--purple">none</td></tr>
  <tr><td class="t--red">$base-link-active-bg</td><td class="t--purple">shade($base-link-color, 20%)</td></tr>
  </tbody>
  </table>

  <table class="table--striped table--bordered">
  <legend class="t--center">Spacing</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-spacing</td><td class="t--purple">1em</td></tr>
  <tr><td class="t--red">$small-spacing</td><td class="t--purple">$base-spacing / 2</td></tr>
  <tr><td class="t--red">$base-z-index</td><td class="t--purple">0</td></tr>
  </tbody>
  </table>


  <table class="table--striped table--bordered">
  <legend class="t--center">Border</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-border-color</td><td class="t--purple">$grey</td></tr>
  <tr><td class="t--red">$base-border</td><td class="t--purple">1px solid shade($base-border-color, 10%)</td></tr>
  <tr><td class="t--red">$base-border-radius</td><td class="t--purple">3px</td></tr>
  </tbody>
  </table>


  <table class="table--striped table--bordered">
  <legend class="t--center">Focus</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-focus-outline-color</td><td class="t--purple">transparentize($base-action-color, 0.4)</td></tr>
  <tr><td class="t--red">$base-focus-outline-width</td><td class="t--purple">0px</td></tr>
  <tr><td class="t--red">$base-focus-outline</td><td class="t--purple">$base-focus-outline-width solid $base-focus-outline-color</td></tr>
  <tr><td class="t--red">$base-focus-outline-offset</td><td class="t--purple">2px</td></tr>
  </tbody>
  </table>


  <table class="table--striped table--bordered">
  <legend class="t--center">Animations</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-duration</td><td class="t--purple">150ms</td></tr>
  <tr><td class="t--red">$base-timing</td><td class="t--purple">ease</td></tr>
  </tbody>
  </table>

  <table class="table--striped table--bordered">
  <legend class="t--center">Layouts</legend>
  <thead>
  <tr>
    <th>VARIABLE</th>
    <th>DEFAULT VALUE</th>
  </tr>
  </thead>
  <tbody>
  <tr><td class="t--red">$base-body-margin</td><td class="t--purple">0 </td></tr>
  <tr><td class="t--red">$base-container-width</td><td class="t--purple">960px</td></tr>
  <tr><td class="t--red">$base-mobile-container-width</td><td class="t--purple">100%</td></tr>
  <tr><td class="t--red">$base-mobile-container-padding</td><td class="t--purple">0 20px</td></tr>
  </tbody>
  </table>

</section>
