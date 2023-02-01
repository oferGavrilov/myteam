

const man = require('../assets/styles/img/man.png')
const easy = require('../assets/styles/img/easy.png')
const graph = require('../assets/styles/img/graph.png')

export function DescriptionPage() {


    return (
        <section className="description-page main-container">
            <div className="hero">
                Build & manage distributed teams like no one else.
            </div>
            <div className="hero-info">
                <div className="hero-info-preview">
                    <div className="image">
                        <span className='circle'></span>
                        <img src={man} alt="" />
                    </div>
                    <div className='content'>
                        <span className='content-header'>Experienced Individuals</span>
                        Our network is made up of highly experienced professionals who are passionate about what they do.
                    </div>
                </div>
                <div className="hero-info-preview">
                    <div className="image">
                        <span className='circle'></span>
                        <img src={easy} alt="" />
                    </div>
                    <div className='content'>
                        <span className='content-header'>Experienced Individuals</span>
                        Our network is made up of highly experienced professionals who are passionate about what they do.
                    </div>
                </div>
                <div className="hero-info-preview">
                    <div className="image">
                        <span className='circle'></span>
                        <img src={graph} alt="" />
                    </div>
                    <div className='content'>
                        <span className='content-header'>Experienced Individuals</span>
                        Our network is made up of highly experienced professionals who are passionate about what they do.
                    </div>
                </div>
            </div>
        </section>
    )
}