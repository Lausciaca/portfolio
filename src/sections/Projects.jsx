import ProjectComponent from '../components/ProjectComponent'
import "./projects.css"

function Projects () {
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectsList">
                <ProjectComponent 
                    pjName={'Digital clock'} 
                    pjTech={['JS', 'HTML', 'CSS']}
                    pjImg={'/src/assets/digital-clock.png'}
                    pjText={'Este proyecto web simple ofrece la hora y fecha actuales de forma clara y accesible. Con un diseño minimalista, proporciona una experiencia intuitiva para los usuarios que buscan información temporal rápida. '}
                />
                
                <ProjectComponent 
                    pjName={'Tic tac toe'} 
                    pjTech={['JS', 'REACT', 'HTML', 'CSS']}
                />
                
                <ProjectComponent
                    pjName={'Hackathon page'}
                    pjTech={['JS', 'HTML', 'CSS']}
                />

                <ProjectComponent
                    pjName={'Portfolio'} 
                    pjTech={['JS', 'REACT', 'HTML', 'CSS']}
                />
            </div>
        </div>
    )
}

export default Projects