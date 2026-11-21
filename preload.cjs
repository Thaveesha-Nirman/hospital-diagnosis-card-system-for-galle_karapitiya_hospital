
const { contextBridge, ipcRenderer } = require('electron');

/**
 * EXPOSE PROTECTED API TO THE FRONTEND
 * This allows Dashboard.tsx and Studio to communicate with main.cjs safely.
 */
contextBridge.exposeInMainWorld('api', {
  
  getPatients: () => ipcRenderer.invoke('get-patients'),
  getPatientById: (id) => ipcRenderer.invoke('get-patient-by-id', id),
  savePatient: (data) => ipcRenderer.invoke('save-patient', data),
  deletePatient: (id) => ipcRenderer.invoke('delete-patient', id),

  
  
  getLayouts: () => ipcRenderer.invoke('get-layouts'),
  saveLayout: (data) => ipcRenderer.invoke('save-layout', data),
  deleteLayout: (id) => ipcRenderer.invoke('delete-layout', id),

  
  wipeAllPatients: () => ipcRenderer.invoke('wipe-all-patients'),
  exportDatabase: () => ipcRenderer.invoke('export-database'),
  selectBackupFile: () => ipcRenderer.invoke('select-backup-file'),
  restoreDatabase: (path) => ipcRenderer.invoke('restore-database', path),

  
  
  print: () => window.print()
});