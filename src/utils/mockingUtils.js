import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

/**
 * Hashea una contraseña usando bcrypt.
 * @param {string} password - La contraseña en texto plano.
 * @returns {Promise<string>} La contraseña hasheada.
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Genera un usuario de prueba con contraseña hasheada y datos fake.
 * @returns {Promise<Object>} Usuario generado.
 */
export const generateMockUser = async () => {
  const roles = ['user', 'admin'];
  const hashedPassword = await hashPassword('coder123');

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(roles),
    pets: []
  };
};

/**
 * Genera una mascota de prueba con datos fake.
 * @returns {Object} Mascota generada.
 */
export const generateMockPet = () => {
  return {
    name: faker.animal.cat(),
    specie: faker.animal.type(),
    birthDate: faker.date.past(),
    adopted: faker.datatype.boolean(),
    image: "https://via.placeholder.com/150"
  };
};
