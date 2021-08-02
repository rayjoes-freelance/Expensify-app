import React from 'react'; 
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
    isAuthentificated, 
    component: Compnent,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthentificated ? (
            <Compnent {...props}/>
        ) :(
            <Redirect to='/'/>
        )
    
        )}>
    </Route>
);

const mapStateToProps = (state) => ({
    isAuthentificated: !!state.auth.uid
});


export default connect(mapStateToProps)(PrivateRoute);