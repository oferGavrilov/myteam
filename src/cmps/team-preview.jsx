const kady = require('../assets/styles/img/avatar-kady.jpg')
const aiysha = require('../assets/styles/img/avatar-aiysha.jpg')
const arthur = require('../assets/styles/img/avatar-arthur.jpg')


export function TeamPreview() {
    return (
        <section className="team-preview main-container">
            <div className="team-preview-header">
                <p> Delivering real results for top companies. Some of our
                <span> success stories.</span></p>
            </div>
            <div className="team-preview-content">
                <div className="member">
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <span className="member-name">Kady Baker</span>
                    <span className="member-job">Product Manager at Bookmark</span>
                    <img src={kady} alt="" />
                </div>
                <div className="member">
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <span className="member-name">Kady Baker</span>
                    <span className="member-job">Product Manager at Bookmark</span>
                    <img src={aiysha} alt="" />
                </div>
                <div className="member">
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <span className="member-name">Kady Baker</span>
                    <span className="member-job">Product Manager at Bookmark</span>
                    <img src={arthur} alt="" />
                </div>
            </div>
        </section>
    )
}