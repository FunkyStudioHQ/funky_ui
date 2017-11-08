---
title: Forms
slug: "forms"
draft: false
weight: 4
---


<form>
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
    <div class="select">
      <label class="label">Subject</label>
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <div>
      <label>Message</label>
      <textarea placeholder="Textarea"></textarea>
    </div>
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

    <hr />
    <h4>Upload input</h4>
    <input type="file" name="file_upload" data-show="upload"/>

    <hr />
    <h4>Chained fields</h4>
    <div class="chained-fields">
      <div>
        <input class="input" type="text" placeholder="Find a repository">
      </div>
      <div>
        <a class="button--success">Search</a>
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
    <hr />
    <div>
      <button class="button">Submit</button>
      <button class="button">Cancel</button>
    </div>
  </fieldset>
</form>
