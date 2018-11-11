import React from 'react'
import { Link } from 'gatsby'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Blog from '@material-ui/icons/List'
import Me from '@material-ui/icons/PersonOutline'
import Home from '@material-ui/icons/HomeOutlined'

import { head, reject, isEmpty, split, compose } from 'ramda'

import styles from './MobileFooter.module.css'

import classNames from 'classnames'

const getHeadPathname = compose(
    head,
    reject(isEmpty),
    split('/')
)

const pageToIndexMap={
    home: 0,
    posts: 1,
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
        this.setState({ value: pageToIndexMap[topLevelPage] || 0 })
    }

    render(){
        return (
            <BottomNavigation
                classes={{ root: styles.bottomNav }}
                value={this.state.value}
                onChange={this.handleChange}
                showLabels>
                <BottomNavigationAction 
                    classes={{
                        wrapper: classNames(styles.wrapper,this.state.value===0 ? styles.selected : null)
                    }} 
                    label="Home" 
                    icon={<Home color="inherit"/>} 
                    component={Link} 
                    to="/"/>
                <BottomNavigationAction 
                    classes={{
                        wrapper: classNames(styles.wrapper,this.state.value===1 ? styles.selected : null)
                    }} 
                    label="Posts" 
                    icon={<Blog color="inherit"/>} 
                    component={Link} 
                    to="/posts"/>
                <BottomNavigationAction 
                    classes={{
                        wrapper: classNames(styles.wrapper,this.state.value===2 ? styles.selected : null)
                    }} 
                    label="Me" 
                    icon={<Me color="inherit"/>} 
                    component={Link} 
                    to="/me"/>
            </BottomNavigation>
        
        )
        
    }
} 
export default MobileFooter