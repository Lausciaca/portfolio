import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';
import './projectComponent.css'

function ProjectComponent ({ pjName, pjTech, pjText, pjLink }) {

    return(
        <div className="pjCard">
            <h2 className="pjName">
                <a href={pjLink} target='_blank' rel="noreferrer">
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
    )
}

ProjectComponent.propTypes = {
    pjName: PropTypes.string,
    pjTech: PropTypes.array,
    pjText: PropTypes.string,
    pjLink: PropTypes.string
};
export default ProjectComponent