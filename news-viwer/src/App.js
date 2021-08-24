// import Categories from './components/Categories';
// import React, { useState } from 'react';
// import axios from 'axios';
// import NewsList from './components/NewsList';
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//       <NewsList />
//     </>
//   );
// };

/* // const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=bcd006b4095f4755b34573b21ee2c0c9',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   // const onClick = () => {
//   //   axios
//   //     .get('https://jsonplaceholder.typicode.com/todos/1')
//   //     .then((response) => {
//   //       setData(response.data);
//   //     });
//   // };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// }; */

export default App;
