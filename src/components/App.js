import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import PageNotFound from "./PageNotFound";
import Header from "./common/Header";

const App = () =>{
	return <div className='container-fluid'>
		<Header/>
		<Switch>
			<Route path="/" exact component={HomePage}/>
			<Route path="/about" component={AboutPage}/>
			<Route path="/courses" component={CoursesPage}/>
			<Route component={PageNotFound}/>
		</Switch>
	</div>
}


export default App;