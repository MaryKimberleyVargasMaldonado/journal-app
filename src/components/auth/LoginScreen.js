import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
	// U S E  D I S P A T C H
	const dispatch = useDispatch();

	// U S E  S E L E C T O R
	const { loading } = useSelector((state) => state.ui);

	// U S E   F O R M
	const [formValues, handleInputChange] = useForm({
		email: "kim@gmail.com",
		password: "123456",
	});

	// F O R M   V A L U E S
	const { email, password } = formValues;

	// H A N D L E   L O G I N
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	// H A N D L E  G O G L E  L O G I N
	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	// R E T U R N
	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks:</p>

					<div className="google-btn" onClick={handleGoogleLogin}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register" className="link">
					Create new account
				</Link>
			</form>
		</>
	);
};
