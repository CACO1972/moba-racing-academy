
import { Mail, MapPin, Phone } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-racing-black border-t border-racing-red/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-white">Racing Academy</h3>
                <p className="text-xs text-racing-gold">Conducción Deportiva</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter mb-6 max-w-md">
              La primera y única plataforma digital especializada en enseñanza de conducción deportiva 
              para karting, carrozados y fórmula. Desde nivel amateur hasta senior.
            </p>
            
            {/* MOBA MOTORSPORT Branding */}
            <div className="flex items-center space-x-3 mb-6 p-4 bg-racing-black-light rounded-lg border border-racing-red/20">
              <img src="/lovable-uploads/ac324965-b728-49ac-a8ea-0ee99bdd137f.png" alt="MOBA MOTORSPORT" className="h-10 w-auto" />
              <div>
                <p className="text-white font-orbitron font-semibold text-sm">Powered by MOBA MOTORSPORT</p>
                <p className="text-gray-400 font-inter text-xs">        DIRECTOR / GIUSEPPE BACIGALUPO</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 font-inter text-sm">
                <Mail className="w-4 h-4 text-racing-red" />
                <span>c.montoya@mobamotorsport.cl</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 font-inter text-sm">
                <Phone className="w-4 h-4 text-racing-red" />
                <span>+569 88085850 </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 font-inter text-sm">
                
                <span>
              </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#cursos" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Cursos</a></li>
              <li><a href="#niveles" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Niveles</a></li>
              <li><a href="#recursos" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Recursos</a></li>
              <li><a href="#progreso" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Mi Progreso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Certificaciones</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 font-inter text-sm">Karting Deportivo</span></li>
              <li><span className="text-gray-400 font-inter text-sm">Carrozados</span></li>
              <li><span className="text-gray-400 font-inter text-sm">Fórmula</span></li>
              <li><span className="text-gray-400 font-inter text-sm">Trail Braking</span></li>
              <li><span className="text-gray-400 font-inter text-sm">Análisis de Telemetría</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-racing-red/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400 font-inter text-sm">
              © 2024 Racing Academy. Todos los derechos reservados.
            </p>
            <span className="text-gray-600">•</span>
            <p className="text-gray-400 font-inter text-sm">Una iniciativa de MOBA MOTORSPORT Y ACADEMIA DE PILOTOS BACIGALUPO</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Términos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-sm">Contacto</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
