import React from 'react';
import MicroFrontend from './microfrontend/MicroFrontend';

function App() {
  return (
    <div>
      <h2>Load Section</h2>
      <MicroFrontend name="MicroSection" host="http://192.168.0.239:7000" renderMethodName="renderMFSection"/>
    </div>
  );
}

export default App;
