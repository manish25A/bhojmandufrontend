import * as React from 'react';
// import { trackPromise } from 'react-promise-tracker';
import { userAPI } from '../../api/userAPI';

import { UserTable, LoadButton } from './Delay/';

import { trackPromise } from 'react-promise-tracker';

interface State {
	users: any[];
}

export class GetProducts extends React.Component<{}, State> {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
		};

		this.onLoadTables = this.onLoadTables.bind(this);
	}

	onLoadTables() {
		this.setState({
			users: [],
		});

		trackPromise(
			userAPI.fetchUsers().then((users: any) => {
				this.setState({
					users,
				});
			})
		);
	}

	render() {
		return (
			<div>
				<LoadButton onLoad={this.onLoadTables} title='Load tables with delay' />
				<div className='tables'>
					<UserTable users={this.state.users} />
				</div>
			</div>
		);
	}
}
