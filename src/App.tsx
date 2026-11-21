/**
 * @module AppEntry
 * @description Root router and application bootstrapper. Configures global context providers, state providers, and router nodes.
 * @author Thaveesha Nirman / K.K.T.V.N. Kodithuwakku 
 * @institution NSBM Green University
 */


import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';          
import Dashboard from './pages/Dashboard';  
import Sidebar from './components/Sidebar'; 
import Admission from './pages/Admission';
import Settings from './pages/Settings';    
import PrintPreview from './pages/PrintPreview';
import Layouts from './pages/Layouts';      

const App = () => {
  return (
    <Router>
      <Routes>
        
        {}
        <Route path="/" element={<Login />} />

        {}
        <Route 
          path="/dashboard" 
          element={
            <div className="flex h-screen bg-slate-50">
              <Sidebar />
              <div className="flex-1 overflow-auto p-4">
                <Dashboard />
              </div>
            </div>
          } 
        />

        {}
        <Route 
          path="/admission" 
          element={
            <div className="flex h-screen bg-slate-50">
              <Sidebar />
              <div className="flex-1 overflow-auto p-4">
                <Admission />
              </div>
            </div>
          } 
        />
      

        {}
        <Route 
          path="/layouts" 
          element={
            <div className="flex h-screen bg-slate-50">
              <Sidebar />
              <div className="flex-1 overflow-auto p-4">
                <Layouts />
              </div>
            </div>
          } 
        />

        {}
        <Route 
          path="/settings" 
          element={
            <div className="flex h-screen bg-slate-50">
              <Sidebar />
              <div className="flex-1 overflow-auto p-4">
                <Settings />
              </div>
            </div>
          } 
        />

        {}
        <Route path="/print/:id" element={<PrintPreview />} />

      </Routes>
    </Router>
  );
};

export default App;
