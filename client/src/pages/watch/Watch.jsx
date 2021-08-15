import { ArrowBackOutlined } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';
import './watch.scss';

function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            </Link>
            <video 
                src={movie.video}
                className="video" 
                autoPlay 
                progress 
                controls 
            />
        </div>
    )
}

export default Watch