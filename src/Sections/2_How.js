import SectionTitle from "Components/SectionTitle";

import emeraldCard from 'Imgs/8_emeraldCard.png';

import backgroundVectors from 'Imgs/vectors.png';

function How() {
    return (
        <div>
            <SectionTitle title="How it works"/>
            <div className="row flex-row-reverse text-white text-center my-5 px-5 fontSub fw-bold position-relative" style={{zIndex: 2}}>
                <img className="vectors" src={backgroundVectors}/>
                <div className="col-lg-6 col-md-12 text-center">
                    <img src={emeraldCard}/>
                </div>
                <div className="col-lg-6 col-md-12 my-2">
                    <div className="my-3">
                        For this example, each nft will be sold for 12.3 ada (getting 1.8 ada back and paying 0.5 ada in fees) representing 10 ada or 0.1% of the wallet (10,000 total nfts).                    </div>
                    <div className="my-3">
                    With this nft, there will be a vote on what nft to buy.
In order to not put all the eggs in one basket, we will limit the price of a single nft to 5k ada.
The vote will occur, and 60% of the votes will go into buying a floor spacebud.
                    </div>
                    <div className="my-3">
                        Floor spacebud will be bought with 4k ada, and then another vote will take place on what to buy with the remaining ada.
                    </div>
                    <div className="my-3">
                        That means there will be 1000 votes on what Cnft to purchase money.
                    </div>
                    <div className="my-3">
                        Everything in this example can be changed with a poll of 66% positive votes.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How;