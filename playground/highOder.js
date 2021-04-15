import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>This is the details my G : {props.info}</p>
    </div>
);

const withAdminWarninig = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is confidential info FBI warning</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentification = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuth ? <p>Your logged</p> : <p>You have to log</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const AdminInfo = withAdminWarninig(Info);
const AuthInfo =requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='Helvete'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo  info='Helvete'/>, document.getElementById('app'));