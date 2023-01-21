import React from 'react'
import './style.scss'
const Advert = () => {
    return (
        <div className='advert'>
            <img className='advert-img' src='https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg' />
            <div className='advert-content'>
                <h2>Monster Energy</h2>
                <p>500gm</p>

                <div className='advert-content-footer'>
                    <p>Rs</p>
                    <p>Rs</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Advert