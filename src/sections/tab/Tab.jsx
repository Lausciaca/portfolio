import './tab.css'

function Tab () {
    return(
        <div className="tab">
            <h1>Index</h1>
            <ul>
                <li><a href="#home">Introduction</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#knowledge">Knowledge</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
        </div>
    )
}

export default Tab