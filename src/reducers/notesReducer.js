import React from "react";
import { types } from "../types/types";

// I N I T I A L   S T A T E
const initialState = {
	notes: [],
	active: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.notesActive:
			return {
				...state,
				active: {
					...action.payload,
				},
			};

		default:
			return state;
	}
};
