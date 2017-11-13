---
title: Tables
slug: "tables"
draft: false
weight: 4
variables:
  $tables-width:                  "100%"
  $tables-layout:                 "fixed"
  $tables-border-collapse:        "collapse"
  $tables-border-spacing:         "0"
  $tables-margin:                 "0 0 $small-spacing"
  $tables-cells-padding:          "0.5em 0.75em"
  $tables-bg:                     "$base-bg"
  $tables-cells-border:           "1px solid $base-border-color"
  $tables-cells-border-width:     "0 0 1px 0"
  $tables-cells-text-align:       "left"
  $tables-th-font-family:         "$base-font-family"
  $tables-th-font-weight:         "$base-font-weight"
  $tables-th-font-variant:        "small-caps"
  $tables-th-text-transform:      "uppercase"
  $tables-actions-text-align:     "right"
  $tables-striped-bg:             "$lighten-grey"
  $tables-cells-border-width:     "0 0"
  $tables-mobile-th-color:        "$base-color"
  $tables-mobile-th-font-size:    "10pt"
  $tables-mobile-border:          "1px solid $base-border-color"
  $tables-mobile-bottom-margin:   "$small-spacing"
---

<section>
  <h4>Normal</h4>
  <table class="table">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button">Edit</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h4>Striped</h4>
  <table class="table table--striped">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button button--small">Small</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pipposssss</td>
        <td data-title=""><a class="button--success button--medium">Medium</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--info button--large">Large</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h4>Bordered</h4>
  <table class="table table--bordered">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--success">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--warning">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--danger">Edit</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h4>Bordered + Striped</h4>
  <table class="table table--bordered table--striped">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--success">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--warning">Edit</a></td>
      </tr>
      <tr>
        <td data-title="#ID">1</td>
        <td data-title="Name">Pippo</td>
        <td data-title=""><a class="button--danger">Edit</a></td>
      </tr>
    </tbody>
  </table>
</section>
