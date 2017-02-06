
var React = require('react');
var Login = React.createClass({
	render:function(){
		return(
				<div>
					<div>
						<h2>Login Form</h2>
						 	<div >
						    	<img className="img-circle" src="images/avatar2.png" alt="Avatar"  width="304" height="236" />
						    </div><hr/>
						  <div className="container">
						    <label><b>Username</b></label><br/>
						    <input type="text" placeholder="Enter Username"  required /><br/><br/>

						    <label><b>Password</b></label><br/>
						    <input type="password" placeholder="Enter Password" required /><br/><br/>
						        
						    <button type="submit">Login</button>
						    <br/><br/><input type="checkbox" checked="checked" /> Remember me
						  </div>

						  <div className="container" > <br/>
						    <button type="button" >Cancel</button><br/><br/>
						    <span >Forgot <a href="#">password?</a></span>
						  </div>
					</div>
				</div>
			);
	}
});

module.exports = Login;