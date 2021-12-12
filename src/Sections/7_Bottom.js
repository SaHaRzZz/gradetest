import twitterIcon from 'Imgs/5_icon_twitter_white.png';
import discordIcon from 'Imgs/6_icon_discord_white.png';
import footer from 'Imgs/bottom.svg';
import emeraldChunk from 'Imgs/daddy_______sahar.webp';
import emeraldFull from 'Imgs/0001.webp';

import 'css/Bottom.css';

function Bottom() {
    return (
        <div className="text-white pt-4 position-relative" style={{zIndex: 2}}>
            <div className="fontSubBold text-center socialInviteText container">Found interesting join our handles</div>
            <div className="text-center mt-3 container">
                <a className="btn text-white fontSubBolder mx-3 twitterSocial" style={{fontSize: '0.8rem'}} href="https://twitter.com/EmeraldNftClub" target="_blank">
                    <img src={twitterIcon} style={{width: '24px'}}/>
                    <span className="mx-2">Follow Twitter</span>
                </a>
                <a className="btn text-white fontSubBolder mx-3 discordSocial" style={{fontSize: '0.8rem'}} href="https://discord.gg/cJGVR9nnFF" target="_blank">
                    <img src={discordIcon} style={{width: '24px'}}/>
                    <span className="mx-2">Join Discord</span>
                </a>
            </div>
            <img src={emeraldChunk} className="position-absolute emeraldChunkResize"/>
            <img src={emeraldFull} className="position-absolute emeraldFullResize"/>
            <img src={footer} className="footer"/>
        </div>
    )
}

export default Bottom;