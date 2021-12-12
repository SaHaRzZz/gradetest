import SectionTitle from "Components/SectionTitle";
import TeamMember from "Components/TeamMember";

import backgroundVectors from 'Imgs/vectors.png';

function Team() {
    return (
        <div>
            <SectionTitle title="Team"/>
            <div className="row text-center my-4 fontSub fw-bold text-white position-relative mx-2" style={{zIndex: 2}}>
                <img className="vectors" src={backgroundVectors}/>
                <TeamMember name="thetcd" role="Founder"/>
                <TeamMember name="SaHaRzZz" role="Co-Founder"/>
            </div>
        </div>
    )
}

export default Team;