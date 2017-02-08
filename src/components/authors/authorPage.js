var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getInitialState :function(){
			return{
				authors:[]
			}
	},

 	componentWillMount: function(){
 		this.setState({authors:AuthorApi.getAllAuthors()})
 	},

	render:function(){
		var createAuthorRow = function(author){
			return (
					<li key={author.id} className="list-group-item">
						{author.firstName}
					</li>
				)
		};
			var createAuthorRow1 = function(author){
				return (
						<li key={author.id} className="list-group-item">
							<a href={"/#authors/" +author.id}>{author.id}</a>
						</li>
					)
			};

		return(
			<div className="container">
				<h1>Author</h1>

				<ul className="list-group">
					<li className="list-group-item">ID
				  	<ul className="list-group">
						{this.state.authors.map(createAuthorRow1, this)}
						</ul>
					</li>
					<li className="list-group-item"> Name
					<ul className="list-group">
						{this.state.authors.map(createAuthorRow, this)}
						</ul>
					</li>
				</ul>
			</div>
			)
	}
});


module.exports= Authors;
