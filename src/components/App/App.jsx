import React from "react";
import { Provider } from "react-redux";

import NotesApp from "../../containers/NotesApp";
import store from "../../store";

const App = () => (
	<Provider store={store}>
		<NotesApp />
	</Provider>
);

export default App;
