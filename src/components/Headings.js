import React from 'react';

const Header1 = (props) => {
    return <h1 {...props}>{props.children}</h1>;
};

const Header2 = (props) => {
    return <h2 {...props}>{props.children}</h2>;
};

const Header3 = (props) => {
    return <h3 {...props}>{props.children}</h3>;
};

export { Header1, Header2, Header3 };
