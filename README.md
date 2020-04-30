# React MicroFrontend Container

This project is a template to create a **main-container** that could manage all micro frontend sections
that you would create.

## Dependencies

| Dependency    | Version   |
|---------------|-----------|
| React         | 16\.13\.1 |
| React DOM     | 16\.13\.1 |
| React Scripts | 3\.4\.1   |
| TypeScript    | 3\.7\.2   |
| RxJS          | 6\.5\.5   |


## Project Structure

````
├── App.tsx
├── index.tsx
├── microfrontend
│   └── MicroFrontend.tsx
├── react-app-env.d.ts
├── serviceWorker.ts
└── setupTests.ts
````

## Usage

Looking inside <code>App.tsx</code> file we can see a Component called <code>MicroFrontend</code>

```tsx
import React from 'react';
import MicroFrontend from './microfrontend/MicroFrontend';

function App() {
  return (
    <div>
      <h2>Load Section</h2>
      <MicroFrontend name="MicroSection" host="http://127.0.0.1:7000" renderMethodName="renderMFSection"/>
    </div>
  );
}

export default App;
```

This component expect 3 paramaters:

* **name:** it will represent the section in the DOM, also this name **MUST** match with the name given in the micro-section.

* **host:** this will be the base url to get the <code>asset-manifes.json</code> file in the micro-section.

* **renderMethodName:** Every micro-section has a renderMethod, makes sure that renderName is nor repeated in other sections. Using this method the container can manage the render of the section without requesting again to the section server.


## Considerations

The use of this Container is only tested between another ReactJS application

The communication between sections (container & micro-sections) it's across **http** that means you must allow <code>cors</code>

## Future Work

* Support Environment Files
* Add React Router and manage sections
* Add Redux to manage states
* Use <code>Tailwindcss</code> as Css Framework
* Support Another WebApp entries, like <code>Angular</code> & <code>Vue</code>

## License 

### MIT

Copyright 2020, Carlos Montes \<Kaito>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.