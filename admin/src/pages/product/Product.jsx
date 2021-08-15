import { useHistory, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Product() {

    const location                = useLocation();
    const movie                   = location.movie;
    const [img,setImg]            = useState(null)
    const [imgTitle,setImgTitle]  = useState(null)
    const [imgSm,setImgSm]        = useState(null)
    const [trailer,setTrailer]    = useState(null)
    const [video,setVideo]        = useState(null);
    const [uploaded,setUploaded]  = useState(0);
    const [percent,setPercent]    = useState(0);
    const {dispatch}              = useContext(MovieContext);
    const history                 = useHistory();
    const [movieUpdate,setMovieUpdate] = useState(movie);
    
    const handleChange = (e) => {
        const value = e.target.value;
        setMovieUpdate({...movie, [e.target.name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleUpload(e);
        await updateMovie(movie._id,movieUpdate,dispatch);
        await history.push('/movies');
    }

    const upload = (items) => {
        console.log(items)
        items.forEach( (item) =>  {
         const fileName = new Date().getTime() + item.label + item.file.name;
         const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
         uploadTask.on("state_changes",snapshot => {
           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log("Upload is " + progress + " % done.")
            if(progress >= 100){
                updateMovie(movie._id,movieUpdate,dispatch);
            }
         },
         (err) => {console.log(err)}, () =>{
           uploadTask.snapshot.ref.getDownloadURL().then(url => {
            setMovieUpdate((prev) => {
               return {...prev, [item.label]: url};
             });
             setUploaded((prev)=> prev + 1);
           })
         })
       })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const upload_item = [];
        if(img){
            upload_item.push({file: img, label: "img"});
        }
        if(imgSm){
            upload_item.push({file: imgSm, label: "imgSm"});
        }
        if(trailer){
            upload_item.push({file: trailer, label: "trailer"});
        }
        if(video){
            upload_item.push({file: video, label: "video"});
        }
        if(!img && !imgSm && !trailer && !video){
            return;
        }
        upload(upload_item);
    }

    
   
    return (
        <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
        </div>
        <div className="productTop">
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={movie.img} alt="" className="productInfoImg" />
                    <span className="productName">{movie.title}</span>
                </div>
                <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">description:</span>
                            <span className="productInfoValue">{movie.desc}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">isSeries:</span>
                            <span className="productInfoValue">{movie.isSeries ? 'Yes' : 'No'}</span>
                        </div>
                        
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Movie Title</label>
                    <input type="text" name="title" defaultValue={movieUpdate.title} onChange={(e) => handleChange(e)} />
                    <label>Year</label>
                    <input type="text" name="year" defaultValue={movieUpdate.year} onChange={(e) => handleChange(e)}  />
                    <label>Genre</label>
                    <input type="text" name="genre" defaultValue={movieUpdate.genre} onChange={(e) => handleChange(e)}  />
                    <label>Limit</label>
                    <input type="text" name="limit" defaultValue={movieUpdate.limit} onChange={(e) => handleChange(e)}  />
                    <label>Description</label>
                    <input type="text" name="desc" defaultValue={movieUpdate.desc} onChange={(e) => handleChange(e)}  />
                    <label>Trailer</label>
                    <input type="file" name="trailer" placeholder={movieUpdate.trailer} onChange={e => setTrailer(e.target.files[0])}  />
                    <label>Video</label>
                    <input type="file" name="video" placeholder={movieUpdate.video} onChange={e => setVideo(e.target.files[0])}  />
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={movieUpdate.img} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" name="img" id="file" style={{display:"none"}} onChange={e => setImg(e.target.files[0])}  />
                    </div>
                    <div className="productUpload">
                        <img src={movieUpdate.imgSm} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" name="imgSm" id="file" style={{display:"none"}} onChange={e => setImgSm(e.target.files[0])}  />
                    </div>
                    <button className="productButton" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
        </div>
    );
}
