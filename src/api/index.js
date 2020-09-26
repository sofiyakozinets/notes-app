import axios from "axios";

import { API_PREFIX } from "../constants/api";

const api = {
	loadNotes: () => {
		return axios.get(`${API_PREFIX}/notes`);
	},

	createNote: data => {
		return axios.post(`${API_PREFIX}/notes`, data);
	},

	deleteNote: noteId => {
		return axios.delete(`${API_PREFIX}/notes/${noteId}`);
	}
};

export default api;
