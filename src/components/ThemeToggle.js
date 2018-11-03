import React from 'react'
import PropTypes from 'prop-types'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'

import styles from './ThemeToggle.module.css'

import classNames from 'classnames'

const sizeToClass={
    small: 'nameSmall',
    medium: 'nameMedium',
    large: 'nameLarge'
}
 
class ThemeToggle extends React.Component {

    state={
        day: true
    }

    toggleTheme = () => this.setState({ day: !this.state.day })

    componentDidUpdate(){
        const html = document.documentElement

        html.classList.add("color-theme-in-transition")
        setTimeout(()=>html.classList.remove("color-theme-in-transition"),1000)

        if (!this.state.day){
            html.setAttribute("data-theme","dark")
        } else {
            html.setAttribute("data-theme","light")
        }
    }

    render(){
        const cls = sizeToClass[this.props.size]
        console.log(this.props.size,cls,styles[cls])
        return (
            <div className={styles.container}>
                { this.state.day && (
                    <React.Fragment>
                        <span className={classNames(styles.name,styles[cls])}>light</span>
                        <ToggleOffIcon fontSize={this.props.size} onClick={this.toggleTheme}/>
                    </React.Fragment>
                )}
                { !this.state.day && (
                    <React.Fragment>
                        <span className={classNames(styles.name,styles[cls])}>dark</span>
                        <ToggleOnIcon fontSize={this.props.size} onClick={this.toggleTheme} />
                    </React.Fragment>
                )}
            </div>
        )
    }
}

ThemeToggle.propTypes={
    size: PropTypes.oneOf(['small','medium','large']).isRequired
}

ThemeToggle.defaultProps={
    size: 'medium'
}

export default ThemeToggle