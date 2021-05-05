import './App.css';
import React, { Fragment } from 'react';
function App() {
  // 2.5.2 prettier
  const name = 'react';
  return (
    <div>
      <div className="react">{name}</div>
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>입니다</p>
    </div>
  );

  // // 2.4.9 Remark
  // const name = 'react';
  // return (
  //   <>
  //     {/* 주석은 이렇게 작성합니당 */}
  //     <div
  //       className="react" // 시작 태그를 여러 줄로 작성하면 여기에 주석을 작성하는 것도 가능
  //     >
  //       {name}
  //     </div>
  //     // 하지만 이런 주속이나 //
  //     /* 이런 주석은 페이지에 그대로 나타나게 됩니다.*/
  //     <input/>
  //   </>
  // );

  // 2.4.8 must close tag in html
  // const name = 'react';
  // return (
  //   <>
  //     <div className="react">{name}</div>
  //     {/* tag open and close */}
  //     {/* <input>
  //     </input> */}

  //     {/* self closing */}
  //     <input/>

  //   </>
  // );

  // //2.4.6 inline styling
  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',
  //   fontWeight: 'normal',
  //   padding: 16
  //   };
  // return <div style={style}>name</div>

  // //

  //2.4.5 no rendering for undefined
  // const name = undefined;

  // return <div>{name || 'react'}</div>;
  // return <div>{name}</div>;
  // return name || 'value is undefined';
  //error return name;
  //2.4.5

  //2.4.4
  // const name = 'rendering';
  // return <div>{name === 'rendering' ? <h1>there is react</h1> : null}</div>
  // // // conditional rendering using and operator
  // return <div>{name === 'rendering' && <h1>there is React</h1>}</div>
  //2.4.4

  //2.4.3
  // const name = 'react';
  // return (
  //   <div>
  //     {name === 'react' ?(
  //       <h1>there is react.</h1>
  //     ) : (
  //       <h2>there is not react</h2>
  //     )}
  //   </div>
  // )
  //2.4.3

  // 2.4.2
  // let compare = 'REACT';
  // compare = 'react';
  // const name = 'react';
  // // name = 'REACT';
  // //const는 same block에서 변경 불가능, let은 가능, 둘다 하위 블록에서 선언한 것이 영향을 주지 못함
  // return(
  //   <>
  //     <h1>{name} hello</h1>
  //     <h2>{compare} well done?</h2>
  //   </>
  // )
  // 2.4.2

  // 2.4.1
  // return (
  //   <div>
  //   <h1> hello react</h1>
  //   <h2> well work</h2>
  //   </div>
  // )
  // //unreachable code
  // return (
  //   <Fragment>
  //   <h1> frag hello react</h1>
  //   <h2> well work</h2>
  //   </Fragment>
  // ) 2.4.1

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
