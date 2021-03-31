import api from "api";
import { IMateria } from "interfaces/Materia.interface"

class MateriaData {
  index() {
    return api.get<IMateria[]>('materias');
  }
  show(id: number) {
    return api.get<IMateria>(`materias/${id}`);
  }
  store(data: IMateria) {
    return api.post<IMateria>(`materias`, data);
  }
  update(id: number, data: IMateria) {
    return api.put<IMateria>(`materias/${id}`, data);
  }
  delete(id: number) {
    return api.delete<IMateria>(`materias/${id}`);
  }
}

export default new MateriaData();
