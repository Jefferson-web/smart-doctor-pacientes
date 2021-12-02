import http from '../http-common';

class MedicosService {

    ListarEspecialidades(filtro_nombre = null) {
        let params = {};
        if (filtro_nombre != null) {
            params = { filtro_nombre };
        }
        return http.get('/ConocerMedicos/ListarEspecialidades', { params });
    }

    ListarMedicos(filtro_nombre, especialidad) {
        let params = { "filtro_nombre": filtro_nombre, "especialidadId": especialidad };
        return http.get('/ConocerMedicos/ListarMedicos', { params });
    }

    VerPerfil(medicoId) {
        return http.get(`/ConocerMedicos/VerPerfil/${medicoId}`);
    }

    ListarHorariosDisponibles(medicoId, fecha){
        let params = { "medicoId": medicoId, "fecha": fecha };
        return http.get('/ProgramarCita/ListarHorariosDisponibles', { params });
    }

}

export default new MedicosService();