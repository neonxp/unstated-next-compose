import { createElement } from 'react';

const Compose = ({ providers = [], children }) => {
    if (providers.length < 0) {
        return children;
    }
    return providers.reduce((acc, cur) => createElement(cur, [], acc), children);
}

export default Compose;