# fontawesome-svg-loader

[![npm](https://flat.badgen.net/npm/license/@floatwork/fontawesome-svg-loader)](https://www.npmjs.org/package/@floatwork/fontawesome-svg-loader)
[![npm](https://flat.badgen.net/npm/v/@floatwork/fontawesome-svg-loader)](https://www.npmjs.org/package/@floatwork/fontawesome-svg-loader)
[![CircleCI](https://flat.badgen.net/circleci/github/fltwrk/fontawesome-svg-loader)](https://circleci.com/gh/fltwrk/fontawesome-svg-loader)

Loads Font Awesome SVG icons and inlines them in place of the default markup

[*Demo Time*](https://codepen.io/floatwork711/full/NWWQBoj) 🙌

## Installation

`npm install @floatwork/fontawesome-svg-loader -S`

## Usage

Include the script on your website

```html
<!-- Loader script -->
<script src="https://cdn.jsdelivr.net/npm/@floatwork/fontawesome-svg-loader@latest/dist/fontawesome-svg-loader.js" defer></script>

<!-- Fallback when JavaScript is not available -->
<noscript>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css" />
</noscript>
```

Use the Font Awesome markup like you usually would, the library will take care of the rest

```html
<i class="fas fa-paper-plane"></i>
```

## Authors

- [Jan T. Sott](https://github.com/idleberg/)
- [floatwork_](https://github.com/fltwrk/)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
