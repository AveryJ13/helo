import React from 'react';
import routes from './routes'
import Nav from './Components/Nav'
import BaseNav from './Components/BaseNav'

function App(props) {
  return (
    <div>
      {props.location.pathname === '/' ? (
        <>
          <BaseNav />
        </>
      ) : (
          <>
            <Nav />
            {routes}
          </>
        )}



    </div>
  );
}

export default App;
