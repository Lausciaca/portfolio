import './know.css'
export default function Knowledge () {
    

    return(
        <div className="knowledge" id="knowledge">
            <div className="know-container front-end">
                <h2 className="titles">FRONT-END</h2>
                <div className="know-container-imgs">
                    <img src="src\assets\icons\html.png" alt="" />
                    <img src="src\assets\icons\css.png" alt="" />
                    <img src="src\assets\icons\js.png" alt="" />
                    <img src="src\assets\icons\react.png" alt="" />
                    <img src="src\assets\icons\tailwind.png" alt="" />
                </div>
            </div>
            <div className="know-container back-end">
                <h2 className="titles">BACK-END</h2>
                <div className="know-container-imgs">
                    <img src="src\assets\icons\node.png" alt="" />
                    <img src="src\assets\icons\php.svg" alt="" />
                    <img src="src\assets\icons\laravel.png" alt="" />
                    <img src="src\assets\icons\mysql.png" alt="" />

                </div>
            </div>
            <div className="know-container techs">
                <h2 className="titles">TECHNOLOGIES</h2>
                <div className="know-container-imgs">
                    <img src="src\assets\icons\git.png" alt="" />
                    <img src="src\assets\icons\github.png" alt="" />
                    <img src="src\assets\icons\notion.png" alt="" />

                </div>
            </div>
        </div>
    )
}
