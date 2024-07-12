<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function ListUserPage() {

=======
import axios from "axios"; //npm install axios --save 
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
  
export default function ListUserPage(){
  
>>>>>>> 26f4bb33317881bfa598af6135c7f5a4f1015134
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
<<<<<<< HEAD

    function getUsers() {
        axios.get('http://127.0.0.1:5000/listusers').then(function (response) {
=======
  
    function getUsers() {
        axios.get('http://127.0.0.1:5000/listusers').then(function(response) {
>>>>>>> 26f4bb33317881bfa598af6135c7f5a4f1015134
            console.log(response.data);
            setUsers(response.data);
        });
    }
<<<<<<< HEAD



    return (
        <div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link></p>
                        <h1>List Users</h1>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date Added</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>



                        </table>
                    </div>
=======
     
    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:5000/userdelete/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
        alert("Successfully Deleted");
    }
     
    return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <p><Link to="/addnewuser" className="btn btn-success">Add New User</Link> </p>
                    <h1>List Users</h1>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date Added</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, key) =>
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date}</td>
                                    <td>
                                        <Link to={`user/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
>>>>>>> 26f4bb33317881bfa598af6135c7f5a4f1015134
                </div>
            </div>
        </div>
    </div>
  );
}














// import React, { } from "react";

// import { Link } from 'react-router-dom';

// export default function ListUserPage() {
//     return (
//         <div>
//             <div className="container h-100">
//                 <div className="row h-100">
//                     <div className="col-12">
//                         <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link></p>
//                         <h1>List Users</h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
