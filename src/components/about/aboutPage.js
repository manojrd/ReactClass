"use strict"
var React = require('react');
var AbouT = React.createClass({
	render:function(){
		return(
				<div>
					<h1>About</h1>
					<p>
					  this application use followwing tech:
					  <ul>
					  	<li>React</li>
					  	<li>React Router</li>
					  	<li> Flux </li>
					  	<li> Node </li>
					  	<li> Gulp </li>
					  </ul>
					</p>
				</div>
			);
	}
});

module.exports= AbouT;