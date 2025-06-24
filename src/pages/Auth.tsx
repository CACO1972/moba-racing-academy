
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
