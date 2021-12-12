import {useState, useEffect, useRef} from 'react';

import topBg from 'Imgs/18_top_bg.webp';
import emeraldFull from 'Imgs/0001.webp';

import 'css/Top.css';
import Navbar from 'Components/Navbar';

function Top() {
    const [topImgHeight, setTopImgHeight] = useState(window.innerHeight);
    
    function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
      }

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setTopImgHeight(emeraldImgRef.current.height);
        }, 10)
        window.addEventListener('resize', debouncedHandleResize);

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    });

    const emeraldImgRef = useRef(null);

    return (
        <div>
            <img className="position-absolute background" src={topBg}/>
            <Navbar/>
            <div className="text-center" id="topDiv">
                <img src={emeraldFull} id="emeraldFull" onLoad={(e) => setTopImgHeight(e.target.height)} ref={emeraldImgRef}/>
            </div>
            <div id="blackBottom" style={{height: topImgHeight*2}}></div>
            <div className="text-center text-white fontMainBold" id="mainText" style={{transform: `translateY(${topImgHeight/3.5}px)`}}>The Emerald Nft Club</div>
            <div style={{height: topImgHeight*0.5}}></div>
        </div>
    )
}

export default Top;