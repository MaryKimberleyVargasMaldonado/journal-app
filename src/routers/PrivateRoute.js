import React from "react";
import PropTypes from "prop-types";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}) => {
	return (
		<div>
			<Route
				{...rest}
				component={(props) =>
					isAuthenticated ? (
						<Component {...props} />
					) : (
						<Navigate to="/auth/login" />
					)
				}
			/>
		</div>
	);
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
