import React from 'react';
import './App.css';
   
import { BrowserRouter, Route, Routes } from 'react-router-dom';
   
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ListUserPage from "./pages/ListUserPage";
 
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      <h1 className="page-header text-center">React-JS and Python Flask CRUD Create, Read, Update and Delete MySql-Database</h1>
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListUserPage />} />
            <Route path="/addnewuser" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
    
export default App;




// import React, { } from 'react';
// import './App.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ListUserPage from "./pages/ListUserPage";

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">

//     //     <p>
//     //       UCC DEVICE TRACKER
//     //     </p>

//     //   </header>
//     // </div>

//     <div className='vh-100 graddient-custom'>
//       <div className='container'>
//         <h1 className='page-header text-center'>UCC DEVICE TRACKER</h1>


//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<ListUserPage />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;
