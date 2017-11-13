---
title: Notifications
slug: "notifications"
draft: false
weight: 3
variables:
  $notifications-border-radius: "$base-border-radius"
  $notifications-margin:        "0 0 $small-spacing"
  $notifications-padding:       "1.25rem 2.5rem 1.25rem 1.5rem"
  $notifications-bg:            "$grey"
  $notifications-color:         "black"
---

<div class="notification">
  <button class="notification__close"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>

<div class="notification notification--warning">
  <button class="notification__close"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>
<div class="notification notification--danger">
  <button class="notification__close"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>
<div class="notification notification--success">
  <button class="notification__close"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>

```html
<div class="notification">
  <button class="notification__close"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
  tempus quis placerat ut, porta nec nulla.
  Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
  <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</div>
```

<section>
<h4>Color Modifiers</h4>
{{< colors class="notification" >}}
</section>
