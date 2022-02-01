import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { loadNodes } from "../helpers/loadNotes";

export const AppRouter = () => {
	//  U S E    D I S P A T C H I O N
	const dispatch = useDispatch();

	// U S E  S T A T E
	const [checking, setChecking] = useState(true);

	// U S E   S T A T E  2
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// E F F E C T
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			// ? evalua si el obj user tiene algo, entonces pregunta si existe el uid
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				loadNodes(user.uid);
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	// C H E C K I N G  -  pantalla de espera
	if (checking) {
		return <h1>Espere...</h1>;
	}

	//  R E T U R N
	return (
		<Router>
			<div>
				<Routes>
					<PublicRoute
						path="/auth/*"
						isAuthenticated={isLoggedIn}
						element={<AuthRouter />}
					/>
					<PrivateRoute
						path="/"
						isAuthenticated={isLoggedIn}
						element={<AuthRouter />}
					/>
					{/* <Route
						path="/auth/*"
						element={
							<PublicRoute isAuthenticated={isLoggedIn}>
								<AuthRouter />
							</PublicRoute>
						}
					/>
					<Route
						path="/"
						element={
							<PrivateRoute isAuthenticated={isLoggedIn}>
								<JournalScreen />
							</PrivateRoute>
						}
					/> */}

					{/* <Navigate to="/auth/login" /> */}
				</Routes>
			</div>
		</Router>
	);
};
