import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
	// U S E   D I S P A T C H
	const dispatch = useDispatch();

	// U S E  S E L E C T O R
	const { name } = useSelector((state) => state.auth);

	// H A N D L E    L O G O U T
	const handleLogout = () => {
		dispatch(startLogout());
	};

	// H A N D L E   A D D   N E W
	// const handleAddNew = () => {
	// 	dispatch(notesAddNew());
	// };

	//R E T U R N
	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon"></i>
					<span> {name}</span>
				</h3>

				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>

			<div className="journal__new-entry" /*onClick={handleAddNew}*/>
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};
