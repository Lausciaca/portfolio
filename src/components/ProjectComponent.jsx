import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';
import './projectComponent.css'

function ProjectComponent ({ pjName, pjTech, pjImg, pjText }) {

    return(
        <div className="pjCard">
            <div className="img">
                <img src={ pjImg } alt="" />
            </div>
            <div className="info">
                <h2 className="pjName">
                    <a href="https://digitalclock-lau.netlify.app/" target='_blank' rel="noreferrer">
                        {pjName}
                    </a>
                </h2>
                <p className="description">
                    {pjText}
                </p>
                <div className="tags">
                    {
                        pjTech.map((tech, index) => (
                            <h2 key={index} className='tech'>
                                <ProjectTag techName={tech} />
                            </h2>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

ProjectComponent.propTypes = {
    pjName: PropTypes.string,
    pjTech: PropTypes.array,
    pjImg: PropTypes.string,
    pjText: PropTypes.string
};
export default ProjectComponent