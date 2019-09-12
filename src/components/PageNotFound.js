import React from 'react';

import {Link} from 'react-router-dom';

const PageNotFound = () =>{
	return (
		<>
			<h1>404 Page Not Found</h1>
			<Link to="/">Back to Home</Link>
		</>
	)
}

export default PageNotFound;
