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
                    pjLink={'https://digitalclock-lau.netlify.app/'}
                />
                
                <ProjectComponent 
                    pjName={'Tic tac toe'} 
                    pjTech={['REACT', 'HTML', 'CSS']}
                    pjImg={'/src/assets/tictactoe.png'}
                    pjText={"This project, built with React, delivers a clear and accessible gaming experience. Featuring a minimalist design, it provides users with an intuitive interface to enjoy the classic game of Tic Tac Toe."}
                    pjLink={'https://tictactoereactsc.netlify.app/'}
                />
                
                <ProjectComponent
                    pjName={'Hackathon page'}
                    pjTech={['JS', 'HTML', 'CSS']}
                    pjImg={'/src/assets/hackathon.png'}
                    pjText={'Built during a hackathon, this app exemplifies my ability to create efficient solutions under tight deadlines. The user-centric design addresses a specific problem with an intuitive interface, showcasing my knack for delivering impactful results quickly.'}
                    pjLink={'https://hackatonabp360.netlify.app/'}
                />

                <ProjectComponent
                    pjName={'Portfolio'} 
                    pjTech={['REACT', 'HTML', 'CSS']}
                    pjImg={'/src/assets/portfolio.png'}
                    pjText={'My portfolio, developed with React, is a digital snapshot that introduces me and showcases my web projects. Its minimalist design offers an intuitive interface, providing insights into my background and highlighting key projects.'}
                    pjLink={'https://laureanosciacaluga.netlify.app/'}
                />
            </div>
        </div>
    )
}

export default Projects