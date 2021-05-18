// chap4.2.5 onKeyPress 핸들링
import React, { Component } from 'react';
class EventPractice extends Component {
    state = {
        username:'',
        message:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} 
                    // 여기에 있느냐 없느냐에 따라 첫번쨰 parameter에서 enter칠지가 결정됨 나중에 웹서비스 할떄 유용할듯. 이름만 입력해서는 안되니까, 입력값은 password까지가 default로 작동해야하므로 password에만 이 enter값을 입력받으면 얼마나 좋을까요?

                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보시오"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick= {this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice;
// // chap4.2.4 input 여러개 다루기 
// import React, { Component } from 'react';
// class EventPractice extends Component {
//     state = {
//         username:'',
//         message:''
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }
//     render() {
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input 
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보시오"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick= {this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }
// export default EventPractice;
//chap4.2.3 임의 메서드 만들기
// // chap 4.2.3.1 기본 방식 + 4.2.3.2 방식
// import React, { Component } from 'react';
// class EventPractice extends Component {
//     state = {
//         message : ''
//     }
//     // chap 4.2.3.2 Property initializer sytnax 사용한 메서드 작성
//     handleChange = (e) => {
//         this.setState({
//             message: e.target.value
//         });
//     }
//     handleClick = () => {
//         alert(this.state.message);
//     this.setState({
//         message: ''
//     });
// }
// // constructor(props) {
// //     super(props);
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleClick = this.handleClick.bind(this);
// // }
// //     // // chap4.2.3.1 기본방식
//     // handleChange(e){
//     //     this.setState({
//     //         message: e.target.value
//     //     });
//     // }
//     // handleClick(e){
//     //     alert(this.state.message);
//     //     this.setState({
//     //         message:''
//     //     });
//     // }
//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"                    
//                     placeholder="암거나 누르세영"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 /><button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }
// export default EventPractice;
// //chap 4.2.2.2 state에 input값 담기
// import React, { Component } from 'react'
// class EventPractice extends Component {
//     state = {
//         message:''
//     }
//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input 
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={
//                         (e) => {
//                             this.setState({
//                                 message: e.target.value
//                             })
//                         }
//                     }
//                 />
//                 <button onClick={
//                     () =>{
//                         alert(this.state.message);
//                         this.setState({
//                             message:''
//                         });
//                     }
//                 }>확인</button>
//             </div>
//         );
//     }
// }
// export default EventPractice;
// // chap 4.2.2.1 onChange 이벤트 설정
// import React, { Component } from 'react'
// class EventPractice extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무거나 입력하세용"
//                     onChange={
//                         (e) => {
//                             console.log(e.target.value);
//                         }
//                     }
//                 />
//             </div>
//         );

//     }
// }
// export default EventPractice;
// // chap4.2.1.2
// import React, { Component } from 'react';

// class EventPractice extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//             </div>
//         );       
//     }
// }
// export default EventPractice;