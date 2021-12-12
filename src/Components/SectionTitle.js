import 'css/SectionTitle.css';

function SectionTitle(props) {
    return (
        <div>
            <div className="text-center sectionTitle" id={props.title}>{props.title}</div>
        </div>
    )
}

export default SectionTitle;