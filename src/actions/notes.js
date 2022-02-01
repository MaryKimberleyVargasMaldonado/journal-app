import { db } from "../firebase/firebase-config";

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime(),
		};

		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

		dispatch(activeNote(doc.id, newNote));
	};
};

// A C T I V E    N O T E
export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});
