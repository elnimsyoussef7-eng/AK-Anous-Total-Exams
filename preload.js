// Preload runs in isolated context.
// Expose a safe API here if needed.
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Add methods if you need native features
});
