import React from 'react'
import { Link } from 'gatsby'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Blog from '@material-ui/icons/List'
import Me from '@material-ui/icons/PersonOutline'
import About from '@material-ui/icons/HelpOutline'

import { head, reject, isEmpty, split, compose } from 'ramda'

import styles from './MobileFooter.module.css'

const getHeadPathname = compose(
    head,
    reject(isEmpty),
    split('/')
)

const pageToIndexMap={
    posts: 0,
    why: 1,
    me: 2
}

class MobileFooter extends React.Component {
    state = {
        value: null,
    }
    
    handleChange = (event, value) => {
        this.setState({ value })
    }

    componentDidMount(){
        const topLevelPage = getHeadPathname(this.props.location.pathname)
        this.setState({ value: pageToIndexMap[topLevelPage] })
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