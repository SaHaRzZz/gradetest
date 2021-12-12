import placeholder from 'Imgs/teamPlaceholder.svg';

function TeamMember(props) {
    return (
        <div className="col-6 my-5">
            <div className="card recenter" style={{backgroundColor: 'rgb(0, 0, 0)', height: 'auto', maxWidth: '250px'}}>
                <img src={placeholder} className="card-img-top"/>
                <div className="bg-green1 py-1">
                    <div className="card-title text-center mb-0" style={{fontSize: '1.5rem'}}>{props.name}</div>
                    <div className="card-subtitle text-center">{props.role}</div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;