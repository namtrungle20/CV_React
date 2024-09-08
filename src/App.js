import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyCompornents from './components/MyComponents';
import React from 'react';



class App extends React.Component{
  render(){
    return (
      <div>
      CV react &amp; Người dưng
      <MyCompornents></MyCompornents>
    </div>
    );
  }
}

// const App = () => {

//   return (
//     <div>
//       CV react &amp; Người dưng
//       <MyCompornents></MyCompornents>
//     </div>
//   );
// }

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }


export default App;
