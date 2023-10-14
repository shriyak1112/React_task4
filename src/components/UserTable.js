import { useEffect, useState } from "react";
import Axios from "axios";

function UserTable(){
    const [data,setData]=useState({users:[]});
    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status === 200) 
            {
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    const UserInfo=()=>{
        
        return data.users.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="img">
                        <img src={item.image}/>
                    </td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.domain}</td>
                    <td>{item.ip}</td>
                    <td>{item.university}</td>
                    </tr>
            )
        })
    }
    return(
        <div>
            <table>
                <tbody>
                <tr>
                        <th>ID</th>
                        <th>Profile pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                    {UserInfo()}
                    
                </tbody>
            </table>
        </div>
    )

}

export default UserTable
    