import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container p-5 mb-5 mt-5" >
            <div className="row text-center">
                <h1>404 Page not found!!</h1>
                <p className='mb-1 fs-4'>We couldn’t find the page you were looking for.
                <Link to="/" className='text-decoration-none'
                >Visit Autisense’s home page</Link>
                </p>
                

            </div>
        </div>
    );
}

export default NotFound;