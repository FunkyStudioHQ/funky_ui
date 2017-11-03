---
title: Forms
slug: "forms"
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
    <div class="chained-fields">
      <div>
        <label class="button">
          Sfoglia…
          <input data-fieldrel="#rel_file_name" id="input_upload" name="x" style="display:none;" type="file">
        </label>
      </div>
      <div>
        <input id="rel_file_name" class="input" type="text" value="" placeholder="choose a file" disabled>
      </div>
    </div>

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
