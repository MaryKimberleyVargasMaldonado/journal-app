import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

// S T A R T  N E W   N O T E
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
		dispatch(addNewNote(doc.id, newNote));
	};
};

// A C T I V E    N O T E  -  A C T I O N
export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});

// A D D   N E W   N O T E
export const addNewNote = (id, note) => ({
	type: types.notesAddNew,
	payload: {
		id,
		...note,
	},
});

// S T A R T   L O A D I N G   N O T E S
export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

// S E T   N O T E S  -  A C T I O N
export const setNotes = (notes) => ({
	types: types.notesLoad,
	payload: notes,
});

// S T A R T  S A V E   N O T E S
export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!note.url) {
			delete note.url;
		}

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

		// dispatch(startLoadingNotes(uid)); manera incorrecta de actualizar el title y body de las notas del sidebar
		dispatch(refreshNotes(note.id, noteToFirestore));
		Swal.fire("Saved", note.title, "success");
	};
};

// R E F R E S H   N O T E   -  A C T I O N   -   regresa un objeto
export const refreshNotes = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		id,
		note: {
			// se hace el spread para asegurar que la nota tenga el key
			id,
			...note,
		},
	},
});

// S T A R T   U P L O A D I N G
export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;
		Swal.fire({
			title: "Uploading...",
			text: "Please wait...",
			allowOutsideClick: false,
			onBeforeOpen: () => {
				Swal.showLoading();
			},
		});
		const fileUrl = await fileUpload(file);
		activeNote.url = fileUrl;

		dispatch(startSaveNote(activeNote));

		Swal.close();
	};
};

// S T A R T   D E L E T I N G
export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		await db.doc(`${id}/journal/notes/${id}`).delete();

		dispatch(deleteNote(id));
	};
};

// D E L E T E   N O T E  -  A C T I O N
export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id,
});

// N O T E  L O G O U T -  A C T I O N
export const noteLogout = () => ({
	type: types.notesLogoutCleaning,
});
