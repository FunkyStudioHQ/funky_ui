# FunkyUI
An SCSS Framework based on Bourbon

## installation
Add package to your package.json with: ```yarn add funky_ui```


## Use
Put into css:
```scss
@import "funky_ui";
```

Put into js:
```js
import { CloseNotification, InputUpload } from 'funky_ui'

```



## Override variable values
You can override variables values before import **funky_ui**

es.
```scss

$base-color: purple;

@import "funky_ui";
```

below a complete list of variables used by framework:

### Color Palette:
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

### Breakpoints:
```scss
$breakpoints-gap: 32px !default;
$tablet:          769px !default;
$desktop:         960px + (2 * $breakpoints-gap) !default;
$widescreen:      1152px + (2 * $breakpoints-gap) !default;
$fullhd:          1344px + (2 * $breakpoints-gap) !default;
```

### Base variables:
```scss
// Text & Font
$base-font-family:  $sans-serif !default;
$base-font-size:    16px !default;
$base-color:   $black !default;
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
$base-bg: $white !default;
$secondary-bg: tint($base-border-color, 75%) !default;

// Focus
$base-focus-outline-color: transparentize($action-color, 0.4) !default;
$base-focus-outline-width: 1px !default;
$base-focus-outline: $base-focus-outline-width solid $base-focus-outline-color !default;
$base-focus-outline-offset: 2px !default;

// Animations
$base-duration: 150ms !default;
$base-timing: ease !default;
```
### Layout:
```scss
$layout-body-margin:                0  !default;
$layout-conatainer-width:           960px !default;
$layout-mobile-conatainer-width:    100% !default;
$layout-mobile-conatainer-padding:  0 20px !default;
```

### Typography:
```scss
$typography-font-family:            $base-font-family !default;
$typography-line-height:            $base-line-height !default;
$typography-color:                  $base-color !default;
$typography-headings-font-family:   $base-font-family !default;
$typography-headings-font-weight:   600 !default;
$typography-headings-line-height:   1.2 !default;
$typography-headings-transform:     capitalize !default;
$typography-link-color:             $base-links-color !default;
$typography-link-hover-color:       shade($action-color, 25%) !default;
$typography-link-font-weight:       bolder !default;
$typography-link-decoration:        none !default;
```

### Lists:
```scss
$lists-margin:          0 !default;
$lists-padding:         0 !default;
$list-style-type:       none !default;
$lists-dt-font-weight:  600 !default;
```

### Buttons:
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

### Forms:
```scss
$forms-font-family:         $base-font-family !default;
$forms-font-weigth:         600 !default;
$forms-font-size:           $base-font-size !default;
$forms-border-radius:       $base-border-radius !default;
$forms-border-color:        $base-border-color !default;
$forms-border-size:         1px !default;
$forms-border-style:        solid !default;
$forms-box-shadow:          inset 0 0 1px $light-grey, 0 2px 4px darken($white, 10%) !default;
$forms-disabled-bg:         shade($base-bg, 5%) !default;

$forms-inputs-bg:           $white !default;
$forms-textarea-min-height: 120px !default;
$forms-textarea-max-height: 600px !default;
```

### Notifications:
```scss
$notifications-border-radius: $base-border-radius !default;
$notifications-margin:        0 0 $small-spacing !default;
$notifications-padding:       1.25rem 2.5rem 1.25rem 1.5rem !default;
$notifications-bg:            $grey !default;
$notifications-color:         black !default;
```

### Tables:
```scss
$tables-width:                  100% !default;
$tables-layout:                 fixed !default;
$tables-border-collapse:        collapse !default;
$tables-border-spacing:         0 !default;
$tables-margin:                 0 0 $small-spacing !default;
$tables-cells-padding:          0.5em 0.75em !default;
$tables-bg:                     white !default;
$tables-cells-border:           0 0 1px 0 solid $base-border-color !default;

$tables-th-text-align:          left !default;
$tables-th-font-family:         $base-font-family !default;
$tables-th-font-weight:         $base-font-weight !default;
$tables-th-font-variant:        small-caps !default;
$tables-th-text-transform:      uppercase !default;

$tables-actions-text-align:     right !default;

$tables-striped-bg:             #fafafa !default;
$tables-bordered-border:        1px solid #dbdbdb !default;

$tables-mobile-th-color:        grey !default;
$tables-mobile-th-font-size:    10pt !default;
$tables-mobile-border:          1px solid $base-border-color !default;
$tables-mobile-bottom-margin:   $small-spacing !default;
```

## Components variables

### Flex Boxes:
```scss
$boxes-bg:     $white !default;
$boxes-color:           $dark-grey !default;
$boxes-box-border-color:     $light-grey !default;
$boxes-box-border:           1px solid $boxes-box-border-color !default;
$boxes-box-background:       $white !default;
$boxes-box-gutter:           0.4em !default;
$boxes-box-width:            18em !default;
$boxes-box-color:            transparentize($boxes-color, 0.3) !default;
$boxes-box-top-colors:       $red, $turquoise, $purple, $yellow, $grey, $orange !default;
```

### Breadcrumb:
```scss
$breadcrumb-item-color:           $base-links-color !default;
$breadcrumb-item-hover-color:     $base-links-hover-color !default;
$breadcrumb-item-active-color:    $base-color !default;
$breadcrumb-item-separator-color: $base-color !default;
```

### Dropdown:
```scss
$dropdown-content-bg: $base-bg !default;
$dropdown-content-arrow:            $base-color !default;
$dropdown-content-offset:           0.5rem !default;
$dropdown-content-radius:           $base-border-radius !default;
$dropdown-content-shadow:           0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;
$dropdown-content-z:                20 !default;

$dropdown-item-color:                   $dark-grey !default;
$dropdown-item-hover-color:             $black !default;
$dropdown-item-hover-bg:  darken($grey, 20) !default;
$dropdown-item-active-color:            darken($grey, 20) !default;
$dropdown-item-active-bg: $base-links-color !default;

$dropdown-divider-bg:     $buttons-hover-bg !default;
```

### Footer:
```scss
$footer-font-family:  $base-font-family !default;
$footer-font-size:    $base-font-size !default;
$footer-text-align:   center !default;
$footer-padding:      10px 0 5px !default;
$footer-bg:           $white !default;
$footer-color:        $black !default;
$footer-border-top:   1px solid #ddd !default;
```

### Navbar:
```scss
$navbar-bg:             white !default;
$navbar-height:         52px !default;
$navbar-margin-bottom:  1rem !default;
$navbar-border-bottom:  1px solid #ddd !default;
$navbar-items-color:    #4a4a4a !default;
$navbar-items-padding:  1rem !default;
```

### Pagination:
```scss
$pagination-hide-until:     $tablet !default;
$pagination-border-color:   #dbdbdb !default;
$pagination-border-radius:  $base-border-radius !default;

$pagination-links-color:          #fff !default;
$pagination-links-hover-color:    #363636 !default;
$pagination-links-bg:             $dark !default;
```
### Tooltip:
```scss
$tooltip-bg:  $dark-grey !default;
$tooltip-max-width:         24rem !default;
```
