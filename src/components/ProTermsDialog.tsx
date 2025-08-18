
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Car, MapPin, Clock, CreditCard, Shield } from 'lucide-react';

interface ProTermsDialogProps {
  children: React.ReactNode;
}

const ProTermsDialog = ({ children }: ProTermsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl racing-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-orbitron font-bold text-white flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-racing-gold" />
            <span>Términos y Condiciones - Programa Pro</span>
          </DialogTitle>
          <DialogDescription className="text-racing-silver">
            Detalles importantes sobre el programa de entrenamiento profesional
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Car className="h-5 w-5 text-racing-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-orbitron font-semibold text-white text-sm">Vehículos y Pista</h4>
                <p className="text-racing-silver text-sm">
                  Acceso a simuladores profesionales y práctica en pista con karting, carrozado o fórmula según disponibilidad. Los vehículos varían por ubicación y temporada.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-racing-gold mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-orbitron font-semibold text-white text-sm">Ubicaciones</h4>
                <p className="text-racing-silver text-sm">
                  Las sesiones se realizan en pistas afiliadas. La ubicación específica se confirmará según tu región y disponibilidad.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-orbitron font-semibold text-white text-sm">Disponibilidad</h4>
                <p className="text-racing-silver text-sm">
                  Las fechas están sujetas a disponibilidad de pista y condiciones climáticas. Se requiere reserva previa con al menos 48h de anticipación.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CreditCard className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-orbitron font-semibold text-white text-sm">Costos Adicionales</h4>
                <p className="text-racing-silver text-sm">
                  No incluye: combustible, neumáticos, tasas de pista, seguro adicional, transporte. Los costos varían según ubicación y tipo de vehículo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-racing-gold mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-orbitron font-semibold text-white text-sm">Requisitos</h4>
                <p className="text-racing-silver text-sm">
                  Licencia de conducir vigente, edad mínima 18 años, firma de deslinde de responsabilidad. Algunos vehículos requieren licencia de competición.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-racing-red/20 pt-4">
            <p className="text-xs text-racing-silver">
              <strong className="text-racing-gold">Política de cancelación:</strong> Cancelaciones con más de 48h: reembolso completo. 
              Menos de 48h: cargo del 50%. Cancelaciones por clima: reagendado sin costo.
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" className="border-racing-red/30 text-white hover:bg-racing-red/10">
              Contactar Soporte
            </Button>
            <Button className="racing-button">
              Entendido
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProTermsDialog;
