import React from 'react';
import qs from 'qs';

// qs 라우터를 위해서 about 컴포넌트에서 detail이 true 인지 아닌지에 따라서 보여줄쑤 있는 추가정보
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제 프로젝트!</p>
      {showDetail && <p>detail 값을 true로 설정되었구나!</p>}
    </div>
  );
};

// 일반
// const About = () => {
//   return (
//     <div>
//       <h1> 소개 </h1>
//       <p> 이 프로젝트는 라우터 기초를 실습하는 예제 프로젝트</p>
//     </div>
//   );
// };

export default About;
