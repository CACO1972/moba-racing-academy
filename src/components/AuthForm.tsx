
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  mode: 'login' | 'register';
  onToggleMode: () => void;
}

const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'register') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "¡Registro exitoso!",
          description: "Revisa tu email para confirmar tu cuenta.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "¡Bienvenido de vuelta!",
          description: "Has iniciado sesión correctamente.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="racing-card p-4 sm:p-6 max-w-md mx-auto w-full">
      <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-4 sm:mb-6 text-center">
        {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-white text-sm sm:text-base">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-racing-black-light border-racing-red/30 text-white mt-1 h-10 sm:h-12 text-sm sm:text-base"
            placeholder="tu@email.com"
          />
        </div>
        
        <div>
          <Label htmlFor="password" className="text-white text-sm sm:text-base">Contraseña</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-racing-black-light border-racing-red/30 text-white mt-1 h-10 sm:h-12 text-sm sm:text-base"
            placeholder="••••••••"
          />
        </div>
        
        <Button 
          type="submit" 
          className="racing-button w-full h-10 sm:h-12 text-sm sm:text-base"
          disabled={loading}
        >
          {loading ? 'Procesando...' : (mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta')}
        </Button>
      </form>
      
      <p className="text-center mt-4 text-gray-400 text-sm sm:text-base">
        {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
        <button
          onClick={onToggleMode}
          className="text-racing-red hover:text-racing-gold ml-2 font-semibold underline"
        >
          {mode === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
