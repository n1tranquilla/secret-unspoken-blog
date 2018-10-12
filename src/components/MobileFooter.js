import React from 'react'
import { Link } from 'gatsby'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Blog from '@material-ui/icons/ChatBubble'
import Me from '@material-ui/icons/Person'
import About from '@material-ui/icons/LiveHelp'

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
                <BottomNavigationAction label="Posts" icon={<Blog />} component={Link} to="/posts"/>
                <BottomNavigationAction label="Why" icon={<About />} component={Link} to="/why"/>
                <BottomNavigationAction label="Me" icon={<Me />} component={Link} to="/me"/>
            </BottomNavigation>
        
        )
        
    }
} 
export default MobileFooter