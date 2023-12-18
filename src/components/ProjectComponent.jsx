import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';
import './projectComponent.css'

function ProjectComponent ({ pjName, pjTech, pjImg, pjText }) {

    return(
        <div className="pjCard">
            <h2 className="pjName">{pjName}</h2>
            <div className="pjTags">
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
    pjImg: PropTypes.string,
    pjText: PropTypes.string
};
export default ProjectComponent