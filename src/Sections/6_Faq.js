import SectionTitle from "Components/SectionTitle";
import AQ from 'Components/AQ';

function Faq() {
    let faqID = 1;
    return (
        <div>
            <SectionTitle title="FAQ"/>
            <div class="accordion mx-4 my-5 position-relative" style={{zIndex: 2}} id="faqAccordion">
                <AQ question="Can we sell our NFT investment, let’s say I buy 5 shares in the wallet but want to cash out is it possible to sell my share before the wallet is sold?" answer="You can sell the nft to someone else. but you can cash out only when the shareholders will decided to close the wallet.
                    The only way to cash out is to close the wallet, and split the money between holders." sentID={faqID++}/>
                <AQ question="What is the purpose of the project?" answer="You can find a detailed answer in our website, but in short our mission is to allow anyone to invest as little as he want, into big projects." sentID={faqID++}/>
                <AQ question="Why do you think the project will succeed, cant I make more money trading and minting NFTs on my own?" answer="Some traders can and will make more money then putting their money into this project, however you have to be extremely good trader in order to do so.
Because our community will be made of hundreds of different people, with hundreds of different brains, we will use wisdom of the crowd effect for our advantage,
and statistically outperform the average investor." sentID={faqID++}/>
            </div>
        </div>
    )
}

export default Faq;