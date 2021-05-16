// // chap3.4.1.3 this.setState에 객체 대신 함수 인자 전달. 
// import React, { Component } from 'react'

// class Counter extends Component {
//     state = {
//         number: 0,
//         fixedNumber: 0
//     };

//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     onClick={() => {
//                         //화살표 함수에서 객체 대신에 함수를 인자로 넣어주는 것. 이렇게 함으로써 두번 더하는것이 가능
                    
                        
//                         this.setState(prevState => {
//                             return {
//                             number: prevState.number + 1
//                             };
//                         });
//                         this.setState(prevState =>({
//                             number: prevState.number + 1
//                         }));

//                     }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }
// export default Counter;
// chap 3.4.1.1 state 객체 안에 여러값이 있을떄 
import React, { Component } from 'react'

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }; 


    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({
                            number: number + 1
                        },
                        () => {
                            console.log('방금 setState가 호출되었습니다.'); // chap3.4.1.4 끝난 후 특정 작업 실행하기
                            console.log(this.state);
                        }
                        );
                        //chap3.4.1.3 this.setState에 객체대신 함수 인자 전달.
                        this.setState({ number: this.state.number + 1 });

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