import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../actions/notes";
import { useForm } from "../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
	// U S E   D I S P A T C H
	const dispatch = useDispatch();

	// U S E   S E L E C T O R
	const { active: note } = useSelector((state) => state.notes); // active:note --> renombrar

	// U S E   F O R M
	const { formValues, handleInputChange, reset } = useForm(note); // solo se ejecuta 1 vez, mantiene el estado

	// F O R M   V A L U E S
	const { body, title, id } = formValues;

	// U S E   R E F
	const activeId = useRef(note.id);

	// U S E   E F F E C T   -  para resolver el problema del estado
	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	// U S E   E F F E C T   -  actualizar la nota activa
	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	// H A N D L E   D E L E T E
	const handleDelete = () => {
		dispatch(startDeleting(id));
	};

	//R E T U R N
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
					name="title"
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					placeholder="What happened today?"
					className="notes__textarea"
					name="body"
					value={body}
					onChange={handleInputChange}
				></textarea>

				{note.url && (
					<div className="notes__image">
						<img src={note.url} alt="imagen" />
					</div>
				)}
			</div>
			<button className="btn btn-danger" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};
