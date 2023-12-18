import PropTypes from 'prop-types';
import './projectTag.css'

function ProjectTag ({ techName }) {
    let color = ''
    switch (techName){
        case ('JS'):
            color = 'yellow'
            break
        case ('HTML'):
            color = 'orange'
            break
        case ('CSS'):
            color = 'blue'
            break
    }
    
    return (
        <div className='tag' style={{ backgroundColor: color }}>
            <p>{techName}</p>
        </div>
    )

}

ProjectTag.propTypes = {
    techName: PropTypes.string.isRequired
}

export default ProjectTag