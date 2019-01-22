class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			users: []
		}
	}

	onChangeHandle (event) {
		this.setState({searchText : event.target.value});
	}

	onSubmit (event) {
		event.preventDefault();
		const {searchText} = this.state;
		const url = `https://api.github.com/search/users?q=${searchText}`;
		fetch(url)
			.then(response => response.json())
			.then(response => this.setState({ users: responseJson.items}))
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label>Wuszukaj uzytkownika</label>
					<input type="text" onChange={this.onChange} value={this.state.searchText}/>
				</form>
			</div>
		)
	}
}




ReactDOM.render(<App />, document.getElementById('App'));

