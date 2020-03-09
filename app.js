const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title' },
    "The most basic React element"
);

const desc = React.createElement(
    'p',
    null,
    'This is just the CDN and React.createElement()'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);