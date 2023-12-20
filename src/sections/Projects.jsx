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
                    pjText={'This simple web project provides the current time and date in a clear and accessible manner. With a minimalist design, it offers an intuitive experience for users seeking schedule.'}
                />
                
                <ProjectComponent 
                    pjName={'Tic tac toe'} 
                    pjTech={['JS', 'REACT', 'HTML', 'CSS']}
                    pjImg={'/src/assets/tictactoe.png'}
                    pjText={"This project, built with React, delivers a clear and accessible gaming experience. Featuring a minimalist design, it provides users with an intuitive interface to enjoy the classic game of Tic Tac Toe."}
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