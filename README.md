## FunkyUI
An SCSS Framework based on Bourbon

#### installation
Add package to your package.json with: ```yarn add funky_ui```


#### Use
Put into css:
```scss
@import "funky_ui";
```

Put into js:
```js
import { CloseNotification, InputUpload } from 'funky_ui'

```



##### Override variable values
below a complete list of variables used by framework:

###### Color Palette:
```scss
// Palette
$black:        #263238 !default;
$dark:         #2E3C43 !default;
$darken-grey:  #314549 !default;
$dark-grey:    #546E7A !default;
$grey:         #d3e2e8 !default;
$light-grey:   #dee9ee !default;
$lighten-grey: #f4f8f9 !default;
$white:        #FFFFFF !default;
$red:          #E74C3C !default;
$orange:       #E67E22 !default;
$yellow:       #FFCB6B !default;
$green:        #C3E88D !default;
$turquoise:    #89DDFF !default;
$blue:         #3498DB !default;
$purple:       #9B59B6 !default;
$brown:        #be643c !default;

// Palette inverse
$black-inverse:        $white !default;
$dark-inverse:         $lighten-grey !default;
$darken-grey-inverse:  $light-grey !default;
$dark-grey-inverse:    $grey !default;
$grey-inverse:         $black !default;
$light-grey-inverse:   $dark-grey !default;
$lighten-grey-inverse: $darken-grey !default;
$white-inverse:        $black !default;
$red-inverse:          $white !default;
$orange-inverse:       $white !default;
$yellow-inverse:       darken($yellow, 50 )!default;
$green-inverse:        darken($green, 45 )!default;
$turquoise-inverse:    darken($turquoise, 50 )!default;
$blue-inverse:         $white !default;
$purple-inverse:       $white !default;
$brown-inverse:        $white !default;

// Custom Colors
$danger:      $red !default;
$info:        $blue !default;
$warning:     $yellow !default;
$success:     $green !default;
```

###### Breakpoints:
```scss
$breakpoints-gap: 32px !default;
$tablet:          769px !default;
$desktop:         960px + (2 * $breakpoints-gap) !default;
$widescreen:      1152px + (2 * $breakpoints-gap) !default;
$fullhd:          1344px + (2 * $breakpoints-gap) !default;
```

###### Base variables:
```scss
// Text & Font
$base-font-family:  $sans-serif !default;
$base-font-size:    16px !default;
$base-font-color:   $black !default;
$base-font-weight:  600 !default;

$small-font-size:   12px !default;
$medium-font-size:  19px !default;
$large-font-size:   23px !default;

$base-line-height:  1.5;
$action-color:      $darken-grey;

// Links
$base-links-color:       inherit !default;
$base-links-hover-color: inherit !default;

//Spacing & z-index
$base-spacing:       1em !default;
$small-spacing:      $base-spacing / 2 !default;
$base-z-index:       0 !default;

// Border
$base-border-radius: 3px !default;
$base-border-color: $light-grey !default;
$base-border: 1px solid shade($base-border-color, 10%) !default;

// Background Colors
$base-background-color: $white !default;
$secondary-background-color: tint($base-border-color, 75%) !default;

// Focus
$base-focus-outline-color: transparentize($action-color, 0.4) !default;
$base-focus-outline-width: 1px !default;
$base-focus-outline: $base-focus-outline-width solid $base-focus-outline-color !default;
$base-focus-outline-offset: 2px !default;

// Animations
$base-duration: 150ms !default;
$base-timing: ease !default;
```
###### Layout:
```scss
$layout-body-margin:                0  !default;
$layout-conatainer-width:           960px !default;
$layout-mobile-conatainer-width:    100% !default;
$layout-mobile-conatainer-padding:  0 20px !default;
```

###### Typography:
```scss
$typography-font-family:            $base-font-family !default;
$typography-line-height:            $base-line-height !default;
$typography-color:                  $base-font-color !default;
$typography-headings-font-family:   $base-font-family !default;
$typography-headings-font-weight:   600 !default;
$typography-headings-line-height:   1.2 !default;
$typography-headings-transform:     capitalize !default;
$typography-link-color:             $base-links-color !default;
$typography-link-hover-color:       shade($action-color, 25%) !default;
$typography-link-font-weight:       bolder !default;
$typography-link-decoration:        none !default;
```

###### Buttons:
```scss
$buttons-font-family:     $base-font-family !default;
$buttons-font-size:       $base-font-size !default;
$buttons-font-weight:     600 !default;
$buttons-line-heigth:     1 !default;
$buttons-cursor:          pointer !default;
$buttons-border:          0 !default;
$buttons-border-radius:   $base-border-radius !default;
$buttons-text-transform:  none !default;
$buttons-text-align:      center !default;
$buttons-padding:         $small-spacing $base-spacing !default;
$buttons-bg:              $action-color !default;
$buttons-hover-bg:        shade($buttons-bg, 20%) !default;
$buttons-color:           contrast-switch($buttons-bg) !default;
$buttons-hover-color:     $buttons-color !default;
```
