# compose

Simple provider compose for new [React useContext Api](https://reactjs.org/docs/hooks-reference.html#usecontext), [unstated-next](https://github.com/jamiebuilds/unstated-next) or same.

## Usage

unstated-next:

```
import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

import { Compose } from 'provider-compose'; // <---

const useProvider1 = () => {
  const [a, setA] = useState(0);
  return { a, setA }
}

const Provider1 = createContainer(useProvider1);

const ComponentA = (props) => {
  const { a, setA } = Provider1.useContainer()
  return <button onClick={() => setA(a + 1)}>A={a}</button>
}
const useProvider2 = () => {
  const [b, setB] = useState(0);
  return { b, setB }
}

const Provider2 = createContainer(useProvider2);

const ComponentB = (props) => {
  const { b, setB } = Provider2.useContainer()
  return <button onClick={() => setB(b + 1)}>B={b}</button>
}

const store = [Provider1.Provider, Provider2.Provider];  // <---

export default () => (
  <Compose providers={store}>  // <---
    <ComponentA />
    <ComponentB />
  </Compose>
)
```