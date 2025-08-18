
import { useState } from 'react';
import AuthForm from '@/components/AuthForm';

const Auth = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-racing-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-racing-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-2xl font-orbitron font-bold text-white">Racing Academy</h1>
              <p className="text-sm text-racing-gold">Conducción Deportiva</p>
            </div>
          </div>
          
          {/* Moba Branding */}
          <div className="flex items-center justify-center space-x-3 mt-6 p-4 bg-racing-black-light rounded-lg border border-racing-red/20">
            <img 
              src="/lovable-uploads/aa3548df-59db-4f99-8da6-1842524800af.png" 
              alt="Moba" 
              className="h-8 w-auto"
            />
            <div className="text-left">
              <p className="text-white font-orbitron font-semibold text-sm">Moba</p>
              <p className="text-gray-400 font-inter text-xs">Excelencia en automovilismo</p>
            </div>
          </div>
        </div>
        
        <AuthForm 
          mode={mode} 
          onToggleMode={() => setMode(mode === 'login' ? 'register' : 'login')} 
        />
      </div>
    </div>
  );
};

export default Auth;
