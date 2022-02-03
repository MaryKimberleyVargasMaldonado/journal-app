import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../actions/notes";

export const NotesAppBar = () => {
	// U S E  D I S P A T C H
	const dispatch = useDispatch();

	// U S E   S E L E C T O R
	const { active } = useSelector((state) => state.notes);

	// H A N D L E   S A V E
	const handleSave = () => {
		dispatch(startSaveNote(active));
	};

	// H A N D L E  P I C T U R E  C L I C K
	const handlePictureClick = () => {
		document.querySelector("#fileSelector").click();
	};

	// H A N D L E   F I L E   C H A N G E
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file));
		}
	};

	// R E T U R N
	return (
		<div className="notes__appbar">
			<span>29 de abril 2022</span>

			<input
				id="fileSelector"
				type="file"
				name="file"
				style={{ display: "none" }}
				onChange={handleFileChange}
			/>

			<div>
				<button className="btn" onClick={handlePictureClick}>
					Picture
				</button>

				<button className="btn" onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};
