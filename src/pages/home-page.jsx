import React from "react"
import {GiHamburgerMenu} from 'react-icons/gi'

export function HomePage() {
    return (
        <section className="home-page main-container">
            <div className="home-header ">
                <div className="navigation">
                    <div className="pages flex">
                        <span className="logo">Myteam</span>
                        <div className="pages-links flex">
                            <span>Home</span>
                            <span> About</span>
                        </div>
                    </div>
                    <button>Contact us</button>
                    <span className="menu"><GiHamburgerMenu /></span>
                </div>
            </div>

            <div className="main-content ">
                <div className="hero">
                    Find the best <span>talent</span>
                </div>
                <div className="hero-info">
                    <p>
                        Finding the right people and building high performing teams can be hard.
                        Most companies aren't tapping into the abundance of global talent. We're about to change that.
                    </p>
                </div>
            </div>

        </section>
    )
}