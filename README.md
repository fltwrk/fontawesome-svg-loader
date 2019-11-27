# fontawesome-svg-loader

[![npm](https://flat.badgen.net/npm/license/@floatwork/fontawesome-svg-loader)](https://www.npmjs.org/package/@floatwork/fontawesome-svg-loader)
[![npm](https://flat.badgen.net/npm/v/@floatwork/fontawesome-svg-loader)](https://www.npmjs.org/package/@floatwork/fontawesome-svg-loader)
[![CircleCI](https://flat.badgen.net/circleci/github/fltwrk/fontawesome-svg-loader)](https://circleci.com/gh/fltwrk/fontawesome-svg-loader)

Loads Font Awesome SVG icons and inlines them in place of the default markup

## Installation

`npm install @floatwork/fontawesome-svg-loader -S`

## Usage

Include script and stylesheet in your website

```html
<!-- Fallback when JavaScript is not available -->
<noscript>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css" />
</noscript>

<!-- Loader script -->
<script src="https://cdn.jsdelivr.net/npm/@floatwork/fontawesome-svg-loader@latest/dist/fontawesome-svg-loader.js" charset="utf-8" defer></script>
```

Next, you need to invoke the script

```js
document.addEventListener('DOMContentLoaded', function() {
  fasvgLoader();
});
```

Use the Font Awesome markup like you usually would, the library will take care of the rest

```html
<i class="fas fa-feather-alt"></i>
```

### Options

#### options.url

Type: `string`

Provide URL to the SVGs folder of Font Awesome v5. Defaults to [jsDelivr](https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/svgs/).

#### options.fetch

Type: `object`

Options for `fetch()`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) for details. Defaults to `{cache: 'force-cache'}`

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
