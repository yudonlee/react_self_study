// chap3.3.6.1 isRequired를 사용하여 필수 propTypes 설정
import React from 'react';
import Proptypes from 'prop-types'

const MyComponent = ({name, favoriteNumber, children}) => {
    return(
      <div>
          안녕하세요, 제 이름은 {name}입니다. <br></br>
          children 값은 {children}
          입니다.
          <br />
          제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>  
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name : Proptypes.string,
    favoriteNumber: Proptypes.number.isRequired
};

export default MyComponent;


// // chap 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출 + 3.3.6 propTypes 통한 props 검증
// import React from 'react';
// import Proptypes from 'prop-types'
// // const MyComponent = props => {
// //     const { name, children} = props;
// //     return(
// //         <div>
// //             안녕하세요, 제 이름은 {name} 입니다. <br />
// //             children 값은 {children} 
// //             입니다.
// //         </div>
// //     );
// // }; 더 코드 간단하게 하기

// const MyComponent = ({name, children}) => {
//     return(
//       <div>
//           안녕하세요, 제 이름은 {name}입니다. <br></br>
//           children 값은 {children}
//           입니다.
//       </div>  
//     );
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.prototype = {
//     name : Proptypes.string
// };

// export default MyComponent;
// // chap 3.3.3 defaultProps setting and 3.3.4 children showing contens between tag
// import React from 'react';

// const MyComponent = props => {
//     return <div>
//         hello, my name is {props.name} <br />
//         children value {props.children}
//         .. it is default!
//         </div>

// };


// MyComponent.defaultProps = {
//     name: 'yudon lee'
// };
// export default MyComponent;

// import React from 'react';


// // chap 3.2.3 module import and export (if using rsc ,more easier to make!)
// const MyComponent = () => {
//     return (
//         <div>
//         my cool and new component
//         </div>
//     );
// };

// export default MyComponent;
