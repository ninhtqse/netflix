import "./newProduct.css";
import {useState, useContext, useEffect} from 'react';
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useHistory } from "react-router-dom";

export default function NewProduct() {

  const [movie,setMovie]        = useState(null)
  const [img,setImg]            = useState(null)
  const [imgSm,setImgSm]        = useState(null)
  const [trailer,setTrailer]    = useState(null)
  const [video,setVideo]        = useState(null);
  const [uploaded,setUploaded]  = useState(0);
  const [percent,setPercent]    = useState(0);
  const {dispatch}              = useContext(MovieContext);
  const history                 = useHistory();


  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value})
  }
  
  const upload = (items) => {
     items.forEach( (item) =>  {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on("state_changes",snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + " % done.")
        const math = Math.round(progress) * 4
        setPercent(math);
        if(math >= 400){
          setPercent(0);
        }
      },
      (err) => {console.log(err)}, () =>{
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          setMovie((prev) => {
            return {...prev, [item.label]: url};
          });
          setUploaded((prev)=> prev + 1);
        })
      })
    })
  }
  const handleUpload = (e) => {
    e.preventDefault();

    upload([
      {file: img, label: "img"},
      {file: imgSm, label: "imgSm"},
      {file: trailer, label: "trailer"},
      {file: video, label: "video"},
    ])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie,dispatch);
    history.push('/movies');
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle newMovieTitle">New Movie</h1>
      { percent > 0 && (
        <div className="loading">
          <div className="uploadBackground"></div>
          <div className="loadingPercent">
              <div className="precent">
                <div className="realLoading" style={{ width: percent }}></div>
              </div>
          </div>
        </div>
      )}
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={e => setImg(e.target.files[0])}  />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={e => setImgSm(e.target.files[0])}  />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange}  />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange}  />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange}  />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange}  />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange}  />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Is Series ? </label>
          <select name="active" id="isSeries" name="isSeries" onChange={handleChange}  >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer" id="trailer"  onChange={e => setTrailer(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video" id="video" onChange={e => setVideo(e.target.files[0])}/>
        </div>{uploaded === 4 ? (
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ): (
          <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}
