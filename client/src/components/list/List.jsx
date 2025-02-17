import {ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from "react"
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useEffect, useRef, useState } from 'react'

const List = ({list}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick =(direction) => {
        setIsMoved(true);
        
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
    }



  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">


        <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")}
            style={{display: !isMoved && "none"}}/>

        <div className="container" ref={listRef}>
            {
                list.content.map((item,i)=> (
                    <ListItem key={i} index={i} item={item}/>
                    
                ))
            }
            
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}
        />

        </div>
    </div>
  )
}

export default List
