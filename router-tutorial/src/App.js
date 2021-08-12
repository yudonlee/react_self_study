import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Added from './Added';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
const App = () => {
  return (
    // URL 파라미터 &&  리액트 부가기능(ex. Switch컴포넌트로 하나의 라우트만 렌더링 시키기, WithRouter으로 객체에 접근하기. )
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        <li>
          <Link to="/profile/valhalla">yudon 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">kildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니당</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>

    // Link 컴포넌트를 사용하여 다른 주소로 이동하기
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">홈</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">소개</Link>
    //     </li>
    //     <li>
    //       <Link to="/about/added">추가페이지</Link>
    //     </li>
    //     <li>
    //       <Link to="/added">추가페이지 다른주소1</Link>
    //     </li>
    //     <li>
    //       <Link to="/info">추가페이지 다른주소2</Link>
    //     </li>
    //     <li>
    //       <Link to="/added1">추가페이지 다른주소3</Link>
    //     </li>
    //     <li>
    //       <Link to="/added2">추가페이지 다른주소4</Link>
    //     </li>
    //   </ul>
    //   <hr />
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path="/about" component={About} exact={true} />
    //   <Route path="/about/added" component={Added} />
    //   <Route path="/added" component={Added} />
    //   <Route path="/info" component={Added} />
    //   <Route path={['/added1', '/added2']} component={Added} />
    // </div>

    // Route 컴포넌트로 특정 주소에 컴포넌트 연결
    // <div>
    //   {/* exact true가 있기 때문에, locahost:3000/about에서 홈페이지에 있던 내용이 나타나지 않는다. 하지만
    //   About은 exact true를 통해서 설정하지 않았기 때문에 /about/added시 Added 컴포넌트 뿐만 아니라 About component도 함께 뜬다. */}
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path="/about" component={About} />
    //   <Route path="/about/added" component={Added} />
    // </div>
  );
};

export default App;
