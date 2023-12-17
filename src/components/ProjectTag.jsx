import PropTypes from 'prop-types';

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
        <div>
            <h2 style={color={color}}>{techName}</h2>
        </div>
    )

}

ProjectTag.propTypes = {
    techName: PropTypes.string.isRequired
}

export default ProjectTag