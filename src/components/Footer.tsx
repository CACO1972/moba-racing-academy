
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-racing-black border-t border-racing-red/20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-sm sm:text-lg">R</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white">Racing Academy</h3>
                <p className="text-xs text-racing-gold">Conducción Deportiva</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              La primera y única plataforma digital especializada en enseñanza de conducción deportiva 
              para karting, carrozados y fórmula. Desde nivel amateur hasta senior.
            </p>
            
            {/* MOBA MOTORSPORT Branding */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6 p-3 sm:p-4 bg-racing-black-light rounded-lg border border-racing-red/20">
              <img 
                src="/lovable-uploads/5e67185b-203b-4c7a-820c-2000a2aa613a.png" 
                alt="Racing Academy" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div>
                <p className="text-white font-orbitron font-semibold text-xs sm:text-sm">Powered by MOBA MOTORSPORT</p>
                <p className="text-gray-400 font-inter text-xs">DIRECTOR / GIUSEPPE BACIGALUPO</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 font-inter text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-racing-red flex-shrink-0" />
                <span className="truncate">c.montoya@mobamotorsport.cl</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 font-inter text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-racing-red flex-shrink-0" />
                <span>+569 88085850</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#cursos" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Cursos</a></li>
              <li><a href="#niveles" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Niveles</a></li>
              <li><a href="#recursos" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Recursos</a></li>
              <li><a href="#progreso" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Mi Progreso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Certificaciones</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Especialidades</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 font-inter text-xs sm:text-sm">Karting Deportivo</span></li>
              <li><span className="text-gray-400 font-inter text-xs sm:text-sm">Carrozados</span></li>
              <li><span className="text-gray-400 font-inter text-xs sm:text-sm">Fórmula</span></li>
              <li><span className="text-gray-400 font-inter text-xs sm:text-sm">Trail Braking</span></li>
              <li><span className="text-gray-400 font-inter text-xs sm:text-sm">Análisis de Telemetría</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-racing-red/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <p className="text-gray-400 font-inter text-xs sm:text-sm">
              © 2024 Racing Academy. Todos los derechos reservados.
            </p>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <p className="text-gray-400 font-inter text-xs sm:text-sm">
              Una iniciativa de MOBA MOTORSPORT Y ACADEMIA DE PILOTOS BACIGALUPO
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Términos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-racing-red transition-colors font-inter text-xs sm:text-sm">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
