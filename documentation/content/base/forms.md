---
title: Forms
slug: "forms"
draft: false
weight: 5
variables:
  $forms-font-family:         "$base-font-family"
  $forms-font-weigth:         "600"
  $forms-font-size:           "$base-font-size"
  $forms-border-radius:       "$base-border-radius"
  $forms-border-color:        "$base-border-color"
  $forms-border-size:         "1px"
  $forms-border-style:        "solid"
  $forms-box-shadow:          "inset 0 0 1px $light-grey, 0 2px 4px darken($white, 10%)"
  $forms-disabled-bg:         "shade($base-bg, 5%)"
  $forms-inputs-bg:           "$white"
  $forms-textarea-min-height: "120px"
  $forms-textarea-max-height: "600px"
---


<section>
  <h4>Fieldset and legend</h4>
  <fieldset>
    <legend>Fieldset</legend>
    <div>
      <label>Name</label>
      <input type="text" placeholder="Text input">
    </div>
    <div>
      <label class="label">Username</label>
      <input type="text" placeholder="Text input">
    </div>
    <div>
      <button class="button">Submit</button>
      <button class="button">Cancel</button>
    </div>
  </fieldset>
</section>

<section>
  <h4>Select option</h4>
  <div class="select">
    <label class="label">Subject</label>
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</section>

<section>
  <h4>Checkboxes and radio buttons</h4>
  <div>
    <label class="checkbox">
      <input type="checkbox">label example</label>
  </div>
  <div>
    <label class="radio">
      <input type="radio" name="question">Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"> No
    </label>
  </div>
</section>

<section>
  <h4>Inputs with size modifiers</h4>
  <p>To use this modifiers add class <i>t--small</i>, <i>t--medium</i> or <i>t--large</i> to your input</p>
  <ul>
    <li><input type="text" class="t--small" placeholder="input" /></li>
    <li><input type="text" class="input" placeholder="input" /></li>
    <li><input type="text" class="t--medium" placeholder="input" /></li>
    <li><input type="text" class="t--large" placeholder="input" /></li>    
  </ul>
</section>

```html
<input type="text" class="t--small" />
<input type="text" />
<input type="text" class="t--medium" />
<input type="text" class="t--large" />
```

<section>
  <h4>Upload input</h4>
  <input type="file" name="file_upload" data-show="upload"/>
</section>

<section>
  <h4>Chained fields</h4>
  <div class="chained-fields">
    <div>
      <input class="input" type="text">
    </div>
    <div>
      <a class="button">Search</a>
    </div>
  </div>
  <div class="chained-fields">
    <div>
      <a class="button">button</a>
    </div>
    <div>
      <input class="input" type="text">
    </div>
  </div>
  <div class="chained-fields">
    <div>
      <a class="button">button</a>
    </div>
    <div>
      <input class="input" type="text">
    </div>
    <div>
      <a class="button">button</a>
    </div>
  </div>
</section>

<section>
  <h4>Grouped fields</h4>
  <div class="grouped-fields">
    <div>
      <label>text 1</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 2</label>
      <input class="input" type="text">
    </div>
  </div>

  <div class="grouped-fields--fullwidth">
    <div>
      <label>text 1</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 2</label>
      <input class="input" type="text">
    </div>
  </div>

  <div class="grouped-fields--fullwidth">
    <div>
      <label>text 1</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 2</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 3</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 4</label>
      <input class="input" type="text">
    </div>
    <div>
      <label>text 5</label>
      <input class="input" type="text">
    </div>
  </div>
</section>
