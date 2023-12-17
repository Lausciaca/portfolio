import ProjectComponent from '../components/ProjectComponent'

function Projects () {
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ProjectComponent pjName={'Reloj digital'} pjTech={['JS', 'HTML', 'CSS']}/>
        </div>
    )
}

export default Projects