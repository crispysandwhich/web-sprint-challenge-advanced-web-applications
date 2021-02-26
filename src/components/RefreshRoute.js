import React from 'react'
import {Route, Redirect} from 'react-router-dom'


const RefreshRoute = ({component: Component, ...rest}) => {
    return(<Route {...rest} render={
        (props) => {
            if(localStorage.getItem('token')){
                return <Component {...props} />
            }else{
                return <Redirect to="/BubblePage" />
            }
        }
    } /> )
}

export default RefreshRoute






//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in