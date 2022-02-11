import React from 'react'
import northPic from './Images/North.jpg'
import southPic from './Images/South.jpg'


const HemisphereDisplay = (props) => {
    if (props.latitude > 0){
        return (
            <div className="North">
                <div className='content'>
                    <img src={northPic} alt="North Hemisphere map" />
                    <div className="text">You are in the Northern Hemisphere</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="South">
                <div className='content'>
                    <img src={southPic} alt="South Hemisphere map" />
                    <div className="text">You are in the Southern Hemisphere</div>
                </div>
            </div>
        )
    }
}

export default HemisphereDisplay