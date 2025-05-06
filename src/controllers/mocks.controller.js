import MockingService from "../services/mocking.js";

// GET /mockingpets (ya implementado)
const crearMascotas = async (req, res) => {
  try {
    const mascotas = await MockingService.generarMascotasMocking(50);
    res.status(200).send({ status: "success", payload: mascotas });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

// GET /mockingusers
const crearUsuariosMocking = async (req, res) => {
  try {
    const usuarios = await MockingService.generarUsuariosMocking(50);
    res.status(200).send({ status: "success", payload: usuarios });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

// POST /generateData
const generarYGuardarDatos = async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const usuariosGuardados = await MockingService.generarYGuardarUsuarios(users);
    const mascotasGuardadas = await MockingService.generarYGuardarMascotas(pets);

    res.status(201).send({
      status: "success",
      insertedUsers: usuariosGuardados.length,
      insertedPets: mascotasGuardadas.length,
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

export default {
  crearMascotas,
  crearUsuariosMocking,
  generarYGuardarDatos,
};
