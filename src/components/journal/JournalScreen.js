import React from "react";
import { useSelector } from "react-redux";
import { NoteScreen } from "../../notes/NoteScreen";
import { Sidebar } from "./Sidebar";
import { NothingSelected } from "./NothingSelected";

export const JournalScreen = () => {
	// U S E   S E L E C T O R
	const { active } = useSelector((state) => state.notes);

	// R E T U R N
	return (
		<div className="journal__main-content animate__animated animate__fadeIn animate__faster">
			<Sidebar />

			<main>{active ? <NoteScreen /> : <NothingSelected />}</main>
		</div>
	);
};
