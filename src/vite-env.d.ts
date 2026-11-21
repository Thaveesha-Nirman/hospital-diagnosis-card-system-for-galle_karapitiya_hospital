


interface Window {
  api: {
    
    savePatient: (data: any) => Promise<{ status: string; id: string }>;
    getPatients: () => Promise<any[]>;
    getPatientById: (id: string) => Promise<any>;
    deletePatient: (id: string) => Promise<{ status: string }>;

    
    saveLayout: (data: { profile_name: string; coordinates: string }) => Promise<{ id: number; status: string }>;
    getLayouts: () => Promise<any[]>;

    
    print: () => void;
    log: (msg: string) => void;
  };
}






