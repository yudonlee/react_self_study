import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Added from './Added';

const App = () => {
  return (
    <div>
      {/* exact true가 있기 때문에, locahost:3000/about에서 홈페이지에 있던 내용이 나타나지 않는다. 하지만 
      About은 exact true를 통해서 설정하지 않았기 때문에 /about/added시 Added 컴포넌트 뿐만 아니라 About component도 함께 뜬다. */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/about/added" component={Added} />
    </div>
  );
};

export default App;
