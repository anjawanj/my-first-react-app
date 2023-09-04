import { useEffect, useState } from "react";
import userService from "./userService";

function User() {
    const [users, setUsers] = useState([]);
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        if(username && email){
            addUser();
        }        
    }, []);

    const getUsers = () => {
        userService.getUsers().then((response => {
            setUsers(response.data);
        }))
    }

    const addUser = () => {
        userService.addUser(username,email).then((response)=>{
            setUsers(response.data);
        })
    }

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                    </tr>                  
                </thead>
                <tbody>
                    {
                        users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <form>
                <div>
                    <label>USERNAME</label>
                    <input onChange={(e) => {setUserName(e.target.value)}} value={username}></input>
                </div>
                <div>
                    <label>EMAIL</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} value={email}></input>
                </div>               
            </form>
            <div>
                <button className="primay" onClick={addUser}>Add</button>
            </div>
        </>
    );
}

export default User;