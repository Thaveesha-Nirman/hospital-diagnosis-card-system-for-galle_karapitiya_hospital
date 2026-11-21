
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  
  
  
  
  
  getPatients: () => ipcRenderer.invoke('get-patients'),
  
  
  getPatientById: (id) => ipcRenderer.invoke('get-patient-by-id', id),
  
  
  savePatient: (data) => ipcRenderer.invoke('save-patient', data),
  
  
  deletePatient: (id) => ipcRenderer.invoke('delete-patient', id),

  
  
  
  
  
  exportDatabase: () => ipcRenderer.invoke('export-database'),
  
  
  selectBackupFile: () => ipcRenderer.invoke('select-backup-file'),
  
  
  restoreDatabase: (path) => ipcRenderer.invoke('restore-database', path),

wipeAllPatients: () => ipcRenderer.invoke('wipe-all-patients'),
  
  
  
  
  
  print:() => window.print()
});

