import SectionTitle from "Components/SectionTitle";
import emeraldChunks from 'Imgs/9_emeraldChunks.png';

import 'css/About.css';
import backgroundVectors from 'Imgs/vectors.png';

function About() {
    return (
        <div>
            <SectionTitle title="About Us"/>
            <div className="text-white position-relative text-center py-2 textBlocks row px-5 pb-4 fontSub fw-bold" style={{backgroundColor: 'black', zIndex: 2}}>
                <img className="vectors" src={backgroundVectors}/>
                <div className="col-12 my-2">
                    <div className="my-3">
                        “The Emerald Nft Club” is the way for the average investor, to get exposure to high ticket projects, without purchasing a full nft.
                    </div>
                    <div className="my-3">
                        Our mission is to allow the average investors to invest into big and Expensive blue-chip Cnft projects, without buying a full nft.
                    </div>
                    <div className="my-3">
                        There will be 1,000 nfts, each one is representing 0.1% of the total cnft in the wallet.
                    </div>
                    <div className="my-3">
                        That means there will be 1000 votes on what Cnft to purchase money.
                    </div>
                    <div className="my-3">
                        Every decision will be democratic, and every vote will be equal.
                    </div>
                </div>
                <div className="col-12 my-2">
                    <div className="my-3">
                        This way we are using the “wisdom of the crowd”, to get better odds in choosing the best project.
                    </div>
                    <div className="my-3">
                        Wisdom of the crowd is the collective opinion of group of individuals rather that of a single expert.
                    </div>
                    <div className="my-3">
                        Is has been proven by many example that wisdom of the crowd beat experts, in many fields.
                    </div>
                    <div className="my-3">
                        This is the reason every member will have a limit of 10 nfts, so we will have at least 100 different opinions, that way we will improve our odds of success.
                    </div>
                </div>
            <div id="additionalSpacer"></div>
            <img src={emeraldChunks} id="emeraldChunks"/>
            </div>
            
        </div>
    )
}

export default About;