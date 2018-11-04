import React from 'react'
import PropTypes from 'prop-types'

class Delay extends React.Component {
    state={
        render: false
    }

    componentDidMount(){
        setTimeout(()=>this.setState({render:true}),this.props.delay)
    }

    render(){
        return this.state.render 
            ? this.props.children
            : null
    }
}

Delay.propTypes={
    delay: PropTypes.number.isRequired
}

Delay.defaultProps={
    delay: 200
}

export default Delay