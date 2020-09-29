import axios from "axios";

import { API_PREFIX } from "../constants/api";

const api = {
	loadNotes: () => {
		return axios.get(`${API_PREFIX}/notes`);
	},

	createNote: note => {
		return axios.post(`${API_PREFIX}/notes`, note);
	},

	deleteNote: noteId => {
		return axios.delete(`${API_PREFIX}/notes/${noteId}`);
	}
};

export default api;
