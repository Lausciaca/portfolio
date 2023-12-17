import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';

function ProjectComponent ({ pjName, pjTech, pjImg, pjText }) {

    return(
        <div className="pjCard">
            <h2 className="pjName">{pjName}</h2>
            {
                pjTech.map((tech, index) => (
                    <h2 key={index} className='tech'>
                        <ProjectTag techName={tech} />
                    </h2>
                ))
            }
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