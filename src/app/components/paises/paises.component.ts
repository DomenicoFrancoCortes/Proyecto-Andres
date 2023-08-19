import { Component, OnInit } from '@angular/core';
import { Paises } from '../../models/visa';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Paises[] 
  filterPaises: string ;
  filaExpandida: boolean = false;
  constructor() {
    this.filterPaises = "";
    this.paises = [
      
        {
          country: "Afganistán",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, carta de invitación",
          visa_cost_usd: 160 // Valor en dólares de la visa para Afganistán
        },
        {
          country: "Albania",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 3 meses, prueba de fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0 // Albania no cobra una tarifa por visa para estancias de hasta 90 días
        },
        {
          country: "Alemania",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, prueba de fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0 // Alemania no cobra una tarifa por visa para estancias de hasta 90 días
        },
        {
          country: "Andorra",
          visa: "no requerida",
          requisitos: "Pasaporte válido",
          visa_cost_usd: 0 // Andorra no requiere visa para la mayoría de los visitantes
        },
        {
          country: "Angola",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 9 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 135 // Valor en dólares de la visa para Angola
        },
        {
          country: "Antigua y Barbuda",
          visa: "no requerida por 180 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje, prueba de alojamiento y fondos suficientes",
          visa_cost_usd: 0 // Antigua y Barbuda no cobra una tarifa por visa para estancias de hasta 180 días
        },
        {
          country: "Arabia Saudita",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 300 // Valor en dólares de la visa para Arabia Saudita
        },
        {
          country: "Argelia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, reserva de hotel y billete de regreso",
          visa_cost_usd: 160 // Valor en dólares de la visa para Argelia
        },
        {
          country: "Argentina",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses",
          visa_cost_usd: 0 // Argentina no cobra una tarifa por visa para estancias de hasta 90 días
        },
        {
          country: "Armenia",
          visa: "no requerida por 180 días",
          requisitos: "Pasaporte válido por al menos 180 días, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0 // No aplica para estancias de hasta 180 días
        },
        {
          country: "Australia",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud en línea, tarifa de visa electrónica, certificado de vacunación contra la fiebre amarilla para los viajeros que lleguen de áreas de riesgo",
          visa_cost_usd: 139
        },
        {
          country: "Austria",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte o documento de viaje válido por al menos 3 meses, billete de regreso o de continuación del viaje, prueba de alojamiento y fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Azerbaiyán",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 3 meses, formulario de solicitud, tarifa de visa, fotografía, carta de invitación",
          visa_cost_usd: 30
        },
        {
          country: "Bahamas",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje, prueba de fondos suficientes, prueba de alojamiento",
          visa_cost_usd: 0
        },
        {
          country: "Bangladés",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud, tarifa de visa, fotografía, prueba de fondos suficientes, certificado de vacunación contra la fiebre amarilla para los viajeros que lleguen de áreas de riesgo",
          visa_cost_usd: 51
        },
        {
          country: "Barbados",
          visa: "no requerida por 180 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje, prueba de fondos suficientes, prueba de alojamiento",
          visa_cost_usd: 0
        },
        {
          country: "Bahréin",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Bélgica",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte o documento de viaje válido por al menos 3 meses, billete de regreso o de continuación del viaje, prueba de alojamiento y fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Belice",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Benín",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografía, prueba de alojamiento y fondos suficientes, certificado de vacunación contra la fiebre amarilla para los viajeros que lleguen de áreas de riesgo",
          visa_cost_usd: 75
        },
        {
          country: "Bhután",
          visa: "requerida",
          requisitos: "Permiso de turismo emitido por el Departamento de Turismo de Bután, reserva de alojamiento aprobada, guía de viaje con licencia, pasaporte válido por al menos 6 meses",
          visa_cost_usd: 40
        },
        {
          country: "Bielorrusia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, seguro médico, tarifa de visa, invitación de una empresa registrada en Bielorrusia o una carta de invitación emitida por el Ministerio de Asuntos Exteriores de Bielorrusia",
          visa_cost_usd: 60
        },
        {
          country: "Birmania (Myanmar)",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 50
        },
        {
          country: "Bolivia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Bosnia y Herzegovina",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 3 meses, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Botsuana",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Brasil",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 160
        },
        {
          country: "Brunéi",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Bulgaria",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido, prueba de fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Burkina Faso",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 110
        },
        {
          country: "Burundi",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 90
        },
        {
          country: "Cabo Verde",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Camboya",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 30
        },
        {
          country: "Camerún",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 160
        },
        {
          country: "Canadá",
          visa: "requerida",
          requisitos: "Pasaporte válido, eTA o visa, billete de regreso o de continuación del viaje",
          visa_cost_usd: 7
        },
        {
          country: "Chad",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 155
        },
        {
          country: "Chile",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses",
          visa_cost_usd: 0
        },
        {
          country: "China",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud, fotografías, billete de avión de ida y vuelta, reserva de hotel, tarifa de visa",
          visa_cost_usd: 140
        },
        {
          country: "Chipre",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Colombia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido",
          visa_cost_usd: 0
        },
        {
          country: "Comoras",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 50
        },
        {
          country: "Corea del Norte",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 50
        },
        {
          country: "Corea del Sur",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses",
          visa_cost_usd: 0
        },
        {
          country: "Costa de Marfil",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 85
        },
        {
          country: "Cuba",
          visa: "requerida",
          requisitos: "Tarjeta de turista, pasaporte válido por al menos 2 meses desde la fecha de entrada, billete de regreso o de continuación del viaje, seguro médico de viaje",
          visa_cost_usd: 50
        },
        {
          country: "Dinamarca",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos el periodo de estadía, suficientes fondos para la estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Egipto",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud de visa, fotografía, tarifa de visa, billete de regreso o de continuación del viaje",
          visa_cost_usd: 25
        },
        {
          country: "Etiopía",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud de visa, fotografía, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 52
        },
        {
          country: "Fiji",
          visa: "no requerida por 4 meses",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Finlandia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos el periodo de estadía, suficientes fondos para la estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Francia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos el periodo de estadía, suficientes fondos para la estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Gabón",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, prueba de fondos suficientes",
          visa_cost_usd: 205
        },
        {
          country: "Gambia",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografía, tarifa de visa, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 100
        },
        {
          country: "Georgia",
          visa: "no requerida por 365 días",
          requisitos: "Pasaporte válido por al menos el periodo de estadía, prueba de fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Ghana",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 100
        },
        {
          country: "Grecia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 3 meses, prueba de fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Guinea Ecuatorial",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 50
        },
        {
          country: "Haití",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 10
        },
        {
          country: "Honduras",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "India",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 80
        },
        {
          country: "Indonesia",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Irán",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 75
        },
        {
          country: "Iraq",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 80
        },
        {
          country: "Jamaica",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Japón",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por el periodo de estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Jordania",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 56
        },
        {
          country: "Kazajstán",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Kenia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 51
        },
        {
          country: "Kiribati",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido por el periodo de estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Kenia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud en línea, tarifa de visa electrónica, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 51
        },
        {
          country: "Laos",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 30
        },
        {
          country: "México",
          visa: "no requerida por 180 días",
          requisitos: "Pasaporte válido por la duración de la estadía, tarjeta de turista (Forma Migratoria para Turistas) que se puede obtener en línea o en el punto de entrada al país",
          visa_cost_usd: 0
        },
        {
          country: "Nueva Zelanda",
          visa: "requerida",
          requisitos: "Pasaporte válido por la duración de la estadía, formulario de solicitud en línea, tarifa de visa electrónica",
          visa_cost_usd: 39
        },
        {
          country: "Omán",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografía, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 50
        },
        {
          country: "Panamá",
          visa: "no requerida por 180 días",
          requisitos: "Pasaporte válido por la duración de la estadía",
          visa_cost_usd: 0
        },
        {
          country: "Qatar",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografía, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 30
        },
        {
          country: "Rusia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud en línea, fotografía, carta de invitación",
          visa_cost_usd: 50
        },
        {
          country: "Seychelles",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por la duración de la estadía, prueba de alojamiento y fondos suficientes, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Sierra Leona",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud, fotografías, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 160
        },
        {
          country: "Singapur",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Siria",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografías, tarifa de visa",
          visa_cost_usd: 40
        },
        {
          country: "Somalia",
          visa: "requerida",
          requisitos: "Pasaporte válido, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 60
        },
        {
          country: "Sri Lanka",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, formulario de solicitud, fotografías, tarifa de visa",
          visa_cost_usd: 100
        },
        {
          country: "Sudáfrica",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de alojamiento y fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Sudán",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografías, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 50
        },
        {
          country: "Surinam",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografías, tarifa de visa",
          visa_cost_usd: 45
        },
        {
          country: "Suecia",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos la duración de la estadía, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Suiza",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos la duración de la estadía, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Surinam",
          visa: "requerida",
          requisitos: "Pasaporte válido, formulario de solicitud, fotografías, tarifa de visa",
          visa_cost_usd: 45
        },
        {
          country: "Tailandia",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido por al menos 6 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Tanzania",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 50
        },
        {
          country: "Uganda",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa, certificado de vacunación contra la fiebre amarilla",
          visa_cost_usd: 50
        },
        {
          country: "Uruguay",
          visa: "no requerida por 90 días",
          requisitos: "Pasaporte válido por al menos 3 meses, billete de regreso o de continuación del viaje, prueba de fondos suficientes",
          visa_cost_usd: 0
        },
        {
          country: "Vanuatu",
          visa: "no requerida por 30 días",
          requisitos: "Pasaporte válido por al menos el periodo de estadía, billete de regreso o de continuación del viaje",
          visa_cost_usd: 0
        },
        {
          country: "Zambia",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 50
        },
        {
          country: "Zimbabue",
          visa: "requerida",
          requisitos: "Pasaporte válido por al menos 6 meses, fotografías, formulario de solicitud, tarifa de visa",
          visa_cost_usd: 30
        }
      
    ]
    
   }

  ngOnInit(): void {
  }
  
  fila(){
    this.filaExpandida = true;
    
  }
}
