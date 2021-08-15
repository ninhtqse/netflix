import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useRef, useState } from 'react';
import ListItem from '../lisItem/listItem';
import './list.scss';

function List({list}) {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit,setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    const hanleClick = (direction) => {
        //slider
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if(direction === 'right' && slideNumber < 10 - clickLimit){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div>
            <div className="list">
                <div className="rowTitle">
                    <span className="listTitle">{list.title}</span>
                    <span className="viewAll">View All</span>
                </div>
                <div className="wrapper">
                    <ArrowBackIosOutlined 
                        className="sliderArrow left" 
                        onClick={() => hanleClick('left')} 
                        style={{ display: !isMoved && "none" }}
                    />
                    <div className="container" ref={listRef}>
                        {list.content.map((item,i) => (
                            <ListItem index={i} item={item}/>
                        ))}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => hanleClick('right')}/>
                </div>
            </div>
        </div>
    )
}

export default List
