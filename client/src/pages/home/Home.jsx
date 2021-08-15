import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";

const Home = ({type}) => {
    const [lists,setLists] = useState([]);
    const [genre,setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try{
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
                    headers:{
                        authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                })
                console.log(res);
                setLists(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    },[type,genre]);

    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre} />
            {
                lists.map((list) => (
                    <List list={list}/>
                ))
            }
            <Footer/>
        </div>
    )
}

export default Home
