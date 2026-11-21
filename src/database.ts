import Database from 'better-sqlite3';
import path from 'path';
import { app } from 'electron';


const dbPath = path.join(app.getPath('userData'), 'hospital.db');



const db = new Database(dbPath);

export function initDatabase() {
  
  db.pragma('journal_mode = WAL');

  
  const createPatientsTable = `
    CREATE TABLE IF NOT EXISTS patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      personal_health_no TEXT,
      nic_no TEXT,
      patient_name TEXT NOT NULL,
      age INTEGER,
      sex TEXT,
      admission_date TEXT,
      discharge_date TEXT,
      ward TEXT,
      bht_no TEXT,
      diagnosis_details TEXT -- We will store JSON here for the complex stuff
    );
  `;

  
  const createProfilesTable = `
    CREATE TABLE IF NOT EXISTS print_profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      profile_name TEXT NOT NULL,
      coordinates JSON NOT NULL -- Stores { "name": {x: 10, y: 20}, ... }
    );
  `;


  db.exec(createPatientsTable);
  db.exec(createProfilesTable);
  
  console.log('✅ Database initialized successfully at:', dbPath);
}

export default db;
