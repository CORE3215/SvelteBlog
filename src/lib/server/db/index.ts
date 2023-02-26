import Database from "better-sqlite3";
import type { Students } from "./types";
import { DB_PATH } from "$env/static/private";

const db = new Database(DB_PATH, { verbose: console.log })

export function getBlog() : Students[]{
    const sql = `SELECT * FROM students`;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows as Students[];
}