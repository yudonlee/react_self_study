// chap 3.3.3 defaultProps setting and 3.3.4 children showing contens between tag
import React from 'react';

const MyComponent = props => {
    return <div>
        hello, my name is {props.name} <br />
        children value {props.children}
        .. it is default!
        </div>

};


MyComponent.defaultProps = {
    name: 'yudon lee'
};
export default MyComponent;

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
