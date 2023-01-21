import React from 'react';
import { useBearStore } from '../hooks/window-scroll';
import { useDebouncedEffect } from "../hooks/useDebouncedEffect";
import './style.scss';
import {
    BarChartFill, Wifi, BatteryFull, Bell, DashCircle, Person, Heart
    , ChatDotsFill,
    BoxArrowRight
} from "react-bootstrap-icons";
import Advert from '../advert-list';

const Feeds = (props) => {
    const ref = React.useRef();
    const videoRef = React.useRef();
    const data = useBearStore((state) => state.data)


    useDebouncedEffect(
        () => {
            getOffSetTop();
        }, 100,
        [data]
    );

    const getOffSetTop = () => {
        var rect = ref.current.getBoundingClientRect();
        if (isElementInViewport(rect)) {
            videoRef.current.play();
            alignScreenInCenter(rect.height);
        } else {
            videoRef.current.pause();
        }
    }

    function isElementInViewport(el) {
        return (
            el.top >= -el.height / 2 &&
            el.bottom <= (window.innerHeight || document.documentElement.clientHeight) + el.height / 2
        );
    }

    const alignScreenInCenter = (distance) => {
        props.onScrollTo(distance)
    }

    return <div ref={ref} className='feed-container'>
        <video ref={videoRef} width="100%" height="100%" muted>
            <source src={props?.videoUrl} type="video/mp4" />
        </video>

        <div className='video-content-head'>
            <div className='video-content-header'>
                <p>9:41</p>
                <div className='header-icons'>
                    <BarChartFill />
                    <Wifi />
                    <BatteryFull />
                </div>
            </div>
            <div className='video-content-header'>
                <div className='header-middle'>
                    <span class="badge bg-secondary"><Person /></span>
                    <p>Cakes & Cheese</p>
                    <button>Follow</button>
                </div>
                <div>
                    <DashCircle />
                    <Bell />
                </div>

            </div>
            <div className='video-content-header'>
                Get your fresh birthday cake today
            </div>

        </div>
        <div className='video-content-mid'>
            <div className='video-content-icons'>
                <div className='icon-container'><Heart className='my-icon'/></div>
                <div className='icon-container'><ChatDotsFill className='my-icon'/></div>
                <div className='icon-container'><BoxArrowRight className='my-icon'/></div>

            </div>
        </div>
        <div className='video-content-footer'>
            <Advert className="adv" />
        </div>

    </div>
}

export default Feeds