import 'css/AQ.css';

function AQ(props) {
    return (
        <div class="accordion-item text-white fontSub">
            <h2 class="accordion-header" id={`heading${props.sentID}`}>
                <button onClick={e => e.target.blur()} class="accordion-button collapsed text-white" style={{fontSize: '1.2rem'}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.sentID}`} aria-expanded="false" aria-controls={`collapse${props.sentID}`}>{props.question}</button>
            </h2>
            <div id={`collapse${props.sentID}`} class="accordion-collapse collapse" aria-labelledby={`heading${props.sentID}`} data-bs-parent="#faqAccordion">
                <div class="accordion-body">{props.answer}</div>
            </div>
            <hr className='bg-green2'/>
        </div>
    )
}

export default AQ;