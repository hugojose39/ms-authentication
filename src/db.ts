require('dotenv').config();

import { Pool } from "pg";

const connectionString = process.env.CONECTION_STRING;

const db = new Pool({ connectionString });

export default db;