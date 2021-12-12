import 'css/Benefit.css';

function Benefit(props) {
    const breakLine = text => {
        let result = '';
        text = text.split(';').map(line => <div>{line}</div>)
        return text;
    }
    return (
        <div className="col-lg-4 col-md-6 my-5">
            <div className="card recenter benefit">
                <div className="benefitGlow"></div>
                <div className="text-center">
                    <img src={props.icon} className="" style={{width: '80px', transform: 'translateY(-50%)'}}/>
                </div>
                <div className="card-title text-center" style={{fontSize: '1.5rem'}}>{breakLine(props.text)}</div>
            </div>
        </div>
    )
}

export default Benefit;