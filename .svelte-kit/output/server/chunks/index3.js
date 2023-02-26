import Database from "better-sqlite3";
const DB_PATH = "./data/chinook.db";
const db = new Database(DB_PATH, { verbose: console.log });
function getBlog() {
  const sql = `SELECT * FROM students`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  return rows;
}
export {
  getBlog as g
};
