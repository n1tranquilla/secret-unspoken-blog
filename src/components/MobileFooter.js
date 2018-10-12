import React from 'react'
import { Link } from 'gatsby'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Blog from '@material-ui/icons/List'
import Me from '@material-ui/icons/PersonOutline'
import About from '@material-ui/icons/HelpOutline'

import styles from './MobileFooter.module.css'

class MobileFooter extends React.Component {
    state = {
        value: 0,
    }
    
    handleChange = (event, value) => {
        this.setState({ value })
    }

    render(){
        return (
            <BottomNavigation
                className={styles.bottomNav}
                value={this.state.value}
                onChange={this.handleChange}
                showLabels>
                <BottomNavigationAction classes={{selected: styles.selected}} label="Posts" icon={<Blog />} component={Link} to="/posts"/>
                <BottomNavigationAction classes={{selected: styles.selected}} label="Why" icon={<About />} component={Link} to="/why"/>
                <BottomNavigationAction classes={{selected: styles.selected}} label="Me" icon={<Me />} component={Link} to="/me"/>
            </BottomNavigation>
        
        )
        
    }
} 
export default MobileFooter