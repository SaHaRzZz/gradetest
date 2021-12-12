import Goal from "Components/Goal";
import SectionTitle from "Components/SectionTitle";

import 'css/Roadmap.css';

import backgroundVectors from 'Imgs/vectors.png';

function Roadmap() {
    let offsetState = false;
    const getOffset = () => {
        offsetState = !offsetState;
        return offsetState;
    }
    return (
        <div>
            <SectionTitle title="Roadmap"/>
            <div className="text-white position-relative" style={{zIndex: 2}}>
                <img className="vectors" src={backgroundVectors}/>
                <div className="row position-relative">
                    <div className="position-absolute" id="dashes" style={{width: '2px', zIndex: '4', left: '50%'}}></div>
                    <Goal offset={getOffset()} achieved={true} goal="Goal number One"/>
                    <Goal offset={getOffset()} achieved={true} goal="Goal number Two"/>
                    <Goal offset={getOffset()} achieved={true} goal="Goal number Three"/>
                    <Goal offset={getOffset()} achieved={false} goal="Goal number Four"/>
                    <Goal offset={getOffset()} achieved={false} goal="Goal number Five"/>
                    <Goal offset={getOffset()} achieved={false} goal="Goal number Six"/>
                    <Goal offset={getOffset()} achieved={false} goal="Goal number Seven"/>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;