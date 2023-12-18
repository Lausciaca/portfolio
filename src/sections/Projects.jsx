import ProjectComponent from '../components/ProjectComponent'

function Projects () {
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectsList">
                <ProjectComponent pjName={'Digital clock'} pjTech={['JS', 'HTML', 'CSS']}/>
                <ProjectComponent pjName={'Tic tac toe'} pjTech={['JS', 'REACT', 'HTML', 'CSS']}/>
                <ProjectComponent pjName={'Hackathon page'} pjTech={['JS', 'HTML', 'CSS']}/>
                <ProjectComponent pjName={'Portfolio'} pjTech={['JS', 'REACT', 'HTML', 'CSS']}/>
            </div>
        </div>
    )
}

export default Projects