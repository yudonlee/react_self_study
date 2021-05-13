// chap 3.4.1.1 state 객체 안에 여러값이 있을떄 
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }; 


    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}
export default Counter;

// //chap 3.4.1 class형 컴포넌트의 state
// import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 0
//         };
//     }; 


//     render() {
//         const { number } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                     onClick = {() => {
//                         this.setState({number: number + 1});
//                     }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }
// export default Counter;