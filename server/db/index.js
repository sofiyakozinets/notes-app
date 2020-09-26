import Dexie from "dexie";

const db = new Dexie("NotesDatabase");
db.version(1).stores({ notes: "++id, title, text, color, createdAt" });

export default db;
