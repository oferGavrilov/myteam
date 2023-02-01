const facebook = require('../assets/styles/img/facebook.png')
const pinterest = require('../assets/styles/img/pinterest.png')

export function AppFooter() {
    return (
        <section className="app-footer">
            <div className="header">
                <span className="title">Ready to get started?</span>
                <button>Contact us</button>
            </div>
            <div className="footer-info main-container">
                <div className='team-info flex'>
                    <div className="my-team">
                        <span className='title'>myteam</span>
                        <div className="page-links flex">
                            <span>Home</span>
                            <span>About</span>
                        </div>
                    </div>
                    <div className="team-about flex">
                        <span>987  Hillcrest Lane</span>
                        <span>Irvine, CA</span>
                        <span>California 92714</span>
                        <span>Call Us : 949-833-7432</span>
                    </div>
                </div>
                <div className="social-links flex">
                    <div className='links flex'>
                        <img src={facebook} alt="" />
                        <img src={pinterest} alt="" />
                    </div>
                    <span>Copyright 2020. All Rights Reserved</span>
                </div>
            </div>
        </section>
    )
}