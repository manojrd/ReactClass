var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render:function(){
		return (
			<div className="jumbotron">
				<h1>We am learning React Js</h1>
				<p>You guys are awesome</p>
			</div>
		)
	}
});

module.exports = Home;



