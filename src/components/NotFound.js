import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Error 404! <Link to="/">go home</Link>
        </div>
    );
};

export default NotFound;