import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';
import './index.scss';

library.add(fas);

export default class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<Sidebar />
			</div>
		);
	}
}
