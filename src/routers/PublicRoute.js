import React from 'react';
import {Route}  from 'react-router-dom';
import {connect} from 'react-redux';

export const PubliceRoute = ({
    isAuthentificated, 
    component: Compnent,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthentificated ? (
            <Compnent {...props}/>
        ) :(
            <Redirect to='/dashboard'/>
        )
    
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
});


export default connect(mapStateToProps)(PublicRoute);