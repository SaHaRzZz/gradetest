import Benefit from "Components/Benefit";
import SectionTitle from "Components/SectionTitle";

import benefit1 from 'Imgs/12_benefits_1.png';
import benefit2 from 'Imgs/13_benefits_2.png';
import benefit3 from 'Imgs/14_benefits_3.png';
import benefit4 from 'Imgs/15_benefits_4.png';
import benefit5 from 'Imgs/16_benefits_5.png';
import benefit6 from 'Imgs/17_benefits_6.png';

import backgroundVectors from 'Imgs/vectors.png';

function Benefits() {
    return (
        <div>
            <SectionTitle title="Benefits"/>
            <div className="row text-center my-4 fontSubBold text-white position-relative" style={{zIndex: 2}}>
                <img className="vectors" src={backgroundVectors}/>
                <Benefit icon={benefit1} text={`Be able to vote;on the;community;wallet`}/>
                <Benefit icon={benefit2} text={`A weekly ada;giveaway for;emerald owners`}/>
                <Benefit icon={benefit3} text={`Closed discord;room with;discussions of;upcoming drops`}/>
                <Benefit icon={benefit4} text={`An NFT monthly;giveaway for;emerald owners`}/>
                <Benefit icon={benefit5} text={`Be able to use;the NFT in the;wallet as a;profile pic;(with a little;club symbol)`}/>
                <Benefit icon={benefit6} text={`And much;more coming;in the future`}/>
            </div>
        </div>
    )
}

export default Benefits;