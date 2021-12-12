import whiteEmerald from 'Imgs/11_whiteEmerald.png';
import greenEmerald from 'Imgs/10_greenEmerald.png';

import 'css/Goal.css';

function Goal(props) {
    return (
        <div className="col-6 text-center fontSubBold" style={{height: '200px', transform: `translateY(${props.offset ? 0 : 100}px)`}}>
            <div className={`d-flex flex-row${props.offset ? '' : '-reverse'} justify-content-end`} style={{transform: 'translateY(75px)'}}>
                <span>{props.goal}</span>
                {props.achieved ?
                <div className="position-absolute" style={{transform: `translate(${props.offset? '-' : ''}28px, 20px)`}}>
                    <div className="glow"></div>
                </div>
                :
                ''}
                <img className='mx-2 move' src={props.achieved ? greenEmerald : whiteEmerald} style={{width: '40px'}}/>
            </div>
        </div>
    )
}

export default Goal;