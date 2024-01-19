export default function Header(props){
    return (
        <header className={props.darkMode?"darkHeader header":"header"} >
            <img className="head-image" src="images/Troll Face.png" alt="" />
            <h2 className="head-title" >Meme Generator</h2>
            <span>    
            <h4 className="course-name" >React Course - Project 3</h4>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="slider" onClick={props.toggleDarkMode}>
                    <div className="slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
            </span>
        </header>
    )
}