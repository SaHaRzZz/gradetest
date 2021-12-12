import discordIcon from 'Imgs/2_icon_discord_color.png';
import twitterIcon from 'Imgs/3_icon_twitter_color.png';

import 'css/Navbar.css';

function Navbar() {
    const navClick = target => {
        document.getElementById(target).scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark mx-0">
                <div className="container-fluid px-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <div className="mx-auto">
                            <ul className="navbar-nav d-flex">
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>How it works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>Benefits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>Roadmap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={e => navClick(e.target.innerText)}>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="topSocials">
                            <a className="mx-3 socialLinks" href="https://twitter.com/EmeraldNftClub" target="_blank"><img src={twitterIcon} width="32px"/></a>
                            <a className="mx-3 socialLinks" href="https://discord.gg/cJGVR9nnFF" target="_blank"><img src={discordIcon} width="32px"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;