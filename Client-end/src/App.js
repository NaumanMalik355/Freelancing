import React, { Component } from 'react';
// import SimpleAppBar from './components/layouts/appBar.js';
import Sheetfile from './components/file.js';
import Footer from './components/layouts/footer.js';

class App extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectorFiles) {
		console.log(selectorFiles);
	}

	render() {
		return (
			<div className="app">
				<Sheetfile />
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
