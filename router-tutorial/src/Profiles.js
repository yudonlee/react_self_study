import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
// import { Link, Route } from 'react-router-dom';
// import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/valhalla">
            yudonlee
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
// const Profiles = () => {
//   return (
//     <div>
//       <h3> 사용자 List: </h3>
//       <ul>
//         <li>
//           <Link to="/profiles/valhalla">yudonlee</Link>
//         </li>
//         <li>
//           <Link to="/profiles/gildong">gildong</Link>
//         </li>
//       </ul>
//       <Route
//         path="profiles"
//         exact
//         render={() => <div>사용자 선택해주세요.</div>}
//       />
//       <Route path="/profiles/:username" component={Profile} />
//       <WithRouterSample />
//     </div>
//   );

// };
export default Profiles;
