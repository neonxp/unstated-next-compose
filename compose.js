import React from 'react';

const Compose = ({ providers = [], children }) => {
    if (providers.length < 0) {
        return children;
    }
    return providers.reduce((acc, cur) => React.createElement(cur, [], acc), children);
}

export default Compose;