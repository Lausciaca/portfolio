import PropTypes from 'prop-types';
import './projectTag.css'

function ProjectTag ({ techName }) {
    let backgroundColor = ''
    let color = ''
    switch (techName){
        case ('JS'):
            color = 'black'
            backgroundColor = '#F7E025'
            break
        case ('REACT'):
            backgroundColor = '#0C9FCB'
            break
        case ('HTML'):
            backgroundColor = '#FF5722'
            break
        case ('CSS'):
            backgroundColor = '#0065F4'
            break
    }
    
    return (
        <div className='tag' style={{ backgroundColor: backgroundColor }}>
            <p style={color={color}}>{techName}</p>
        </div>
    )

}

ProjectTag.propTypes = {
    techName: PropTypes.string.isRequired
}

export default ProjectTag