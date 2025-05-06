import { generateMockUser, generateMockPet } from "../utils/mockingUtils.js";
import UserModel from "../dao/models/User.js";
import PetModel from "../dao/models/Pet.js";

class MockingService {
  // Genera mascotas de prueba (sin guardar en DB)
  static async generarMascotasMocking(cantidad) {
    const mascotas = [];
    for (let i = 0; i < cantidad; i++) {
      mascotas.push(generateMockPet());
    }
    return mascotas;
  }

  // Genera usuarios de prueba (sin guardar en DB)
  static async generarUsuariosMocking(cantidad) {
    const usuarios = [];
    for (let i = 0; i < cantidad; i++) {
      const usuario = await generateMockUser();
      usuarios.push(usuario);
    }
    return usuarios;
  }

  // Genera y guarda usuarios en la base de datos
  static async generarYGuardarUsuarios(cantidad) {
    const usuarios = await this.generarUsuariosMocking(cantidad);
    return await UserModel.insertMany(usuarios);
  }

  // Genera y guarda mascotas en la base de datos
  static async generarYGuardarMascotas(cantidad) {
    const mascotas = await this.generarMascotasMocking(cantidad);
    return await PetModel.insertMany(mascotas);
  }
}

export default MockingService;

