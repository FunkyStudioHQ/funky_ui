---
title: Forms
slug: "forms"
draft: false
weight: 5
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
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
  <div>
    <label class="radio">
      <input type="radio" name="question"> Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"> No
    </label>
  </div>
</section>

<section>
  <h4>Inputs with size modifiers</h4>
  <ul>
    <li><input type="text" class="t--small" placeholder="input" /></li>
    <li><input type="text" class="input" placeholder="input" /></li>
    <li><input type="text" class="t--medium" placeholder="input" /></li>
    <li><input type="text" class="t--large" placeholder="input" /></li>    
  </ul>
</section>

<section>
  <h4>Upload input</h4>
  <input type="file" name="file_upload" data-show="upload"/>
</section>

<section>
  <h4>Chained fields</h4>
  <div class="chained-fields">
    <div>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <a class="button">Search</a>
    </div>
  </div>
  <div class="chained-fields">
    <div>
      <a class="button">Search</a>
    </div>
    <div>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
  </div>
  <div class="chained-fields">
    <div>
      <a class="button">Search</a>
    </div>
    <div>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <a class="button">Search</a>
    </div>
  </div>
</section>

<section>
  <h4>Grouped fields</h4>
  <div class="grouped-fields">
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
  </div>

  <div class="grouped-fields--fullwidth">
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
  </div>

  <div class="grouped-fields--fullwidth">
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
    <div>
      <label>Message</label>
      <input class="input" type="text" placeholder="Find a repository">
    </div>
  </div>
</section>
