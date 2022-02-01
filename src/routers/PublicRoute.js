import PropTypes from "prop-types";
import { Navigate, Route } from "react-router-dom";

export const PublicRoute = ({
	isAuthenticated,
	componente: Component,
	...rest
}) => {
	return (
		<div>
			<Route
				{...rest}
				component={(props) =>
					isAuthenticated ? <Navigate to="/" /> : <Component {...props} />
				}
			/>
		</div>
	);
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
