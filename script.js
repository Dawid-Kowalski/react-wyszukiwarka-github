class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			users: [],
		}
	}

	onChangeHandle = event => {
		this.setState({searchText : event.target.value});
	}

	onSubmit = event => {
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
			</div>
		)
	}
}




ReactDOM.render(<App />, document.getElementById('App'));

