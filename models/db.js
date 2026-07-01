const Database = require("better-sqlite3");
const db = new Database("inventarios.db");

db.exec(
  `CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    empresa_id INTEGER NOT NULL,
    nombre TEXT NOT NULL, 
    categoria TEXT, 
    cantidad INTEGER NOT NULL default 0,
    archivado INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')) );`,
);
