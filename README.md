# Day Two

I want to go from simple to complex. This is day two, so I made it as simple as I could. This React app consists of an app.js file with less than ten lines of code.

```javascript
const title = React.createElement(
    'h1',
    { id: 'title'},
    "The most basic React element"
);
ReactDOM.render(
    title,
    document.getElementById('root')
);
```

All the work is done by the CDN links in index.html:

```html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

The connections between app.js and index.html are in these tags:

```html
<div id="root"></div>
...
<script src="app.js"></script>
```
