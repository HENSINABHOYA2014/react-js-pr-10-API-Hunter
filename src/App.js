import logo from './logo.svg';
import './App.css';
import './Api.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [record, setRecord] = useState([]);
  const[alldata,setAllData]=useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/users`)
      .then((res) => {
        setRecord(res.data.users); 
      })
      .catch((err) => {
        console.log(err);
      });

      fetch(`https://dummyjson.com/posts`)
      .then(res=>res.json())
      .then(data=>setAllData(data.posts))
      .catch(err=>console.log(err));
  }, []);

  return (
    <>
      <center>
        <br/>
        <h1 style={{color:'white'}}>API Using Axios Method</h1>
        <br/>
        <table border={1} className="rwd-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>MaideName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {record.map((val) => {
              const {id,firstName,lastName,maidenName,age,gender,email } = val;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{maidenName}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>{email}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
<br/><br/>
<h1 style={{color:'white'}}>API Using Fetch Method</h1>
<br/>
        <table border={1} className="rwd-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Tags</th>
              <th>Userid</th>
              <th>Reactions</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((item) => {
              const {id, title,body,tags,userId,reactions } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>{tags}</td>
                  <td>{userId}</td>
                  <td>{reactions}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default App;
