import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers,setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try{
        const res = await axios.get('/users?new=true',{
          headers:{
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTc1NWI3Y2IwOGMzMjQyNGUyNzRiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODk0MDQ0NSwiZXhwIjoxNjI5MzcyNDQ1fQ.VoNOPYsooJmB3ai4zS1rw_dC3RQtWD5wAXsNL8iku4I"
          }
        });
        setNewUsers(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getNewUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
