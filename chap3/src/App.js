//chap 3.3.6propTypes를 통한 props 검증
import React from 'react';
import MyComponent from './MyComponent'
const App = () => {
    return <MyComponent name="React" favoriteNumber={1}>react</MyComponent>
};

export default App;
// // chap 3.3.4 children showing contents between tag
// import React from 'react';
// import MyComponent from './MyComponent'
// const App = () => {
//     return <MyComponent>react</MyComponent>
// };

// export default App;

// // chap 3.3.2 passing props value using component
// import React from 'react';
// import MyComponent from './MyComponent'
// const App = () => {
//     return <MyComponent name = "React" />;
// };

// export default App;

// chap 3.2 module export and import
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent />;
// };

// export default App;

// class App extends Component {
// import React, { Component } from 'react'

// // chap3.1 Classtype component
//   render() {
//     const name = 'react'
//     return <div className="react">{name}</div>;
//   }
// }
// export default App;
