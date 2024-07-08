// C:\react-js\myreactdev\src\App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './pages/Header';
import Profile from './pages/Profile';
import useToken from './pages/useToken';
import ListUserPage from "./pages/ListUserPage";
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <h1 className="page-header text-center">React-JS and Python Flask Authentication & CRUD Operations</h1>
        <BrowserRouter>
          <Header token={removeToken} />
          {!token && token !== "" && token !== undefined ?
            <Login setToken={setToken} />
            : (
              <>
                <Routes>
                  <Route exact path="/profile" element={<Profile token={token} setToken={setToken} />} />
                  <Route path="/" element={<ListUserPage />} />
                  <Route path="/addnewuser" element={<CreateUser />} />
                  <Route path="user/:id/edit" element={<EditUser />} />
                </Routes>
              </>
            )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
