import React from 'react';

class Login extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}
	login(event: React.FormEvent<HTMLFormElement>): void {
		if (this.state.username === this.state.password) {
			if (localStorage.getItem('username') === null) {
				localStorage.setItem('username', this.state.username);
			}
		}
	}
	onInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		let target = event.target as HTMLInputElement;
		this.setState({
			[target.name]: target.value,
		});
	}
	render() {
		return (
			<div id="login">
				<form onSubmit={this.login.bind(this)}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.onInputChange.bind(this)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.onInputChange.bind(this)}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;
