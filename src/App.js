import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Catalog from './components/Catalog';
import Recommender from './components/Recommender';
import Profile from './components/Profile';
import Header from './components/Header';
import Answer from './components/Answer';
import './App.css';
import "./Fonts/monday-sans.regular.ttf";
import SignUp from './components/SignUp';
import React, {Component} from 'react';
import background from './background.png'
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';




class App extends Component {
  render(){
    return (
      <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/profile" element= {<Profile/>}></Route>
          <Route path="/recommender" element={<Recommender/>}></Route>
          <Route path="/recommendations" element={<Answer/>}></Route>
          <Route path="/" element={<Catalog/>}></Route>
        </Routes>
      </Router>
      </div>
    )
  }
}
//   return (
//     <div className="App">
//       <Router>
//         <Header/>
//         <Routes>
//           <Route path="/signup" element={<SignUp/>}></Route>
//           <Route path="/" element= {<Catalog/>}></Route>
//           <Route path="/recommender" element={<FindClassroom/>}></Route>
//           <Route path="/profile" element={<Profile/>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default App;
