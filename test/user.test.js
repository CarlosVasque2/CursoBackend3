import mongoose from "mongoose";
import assert from "assert";
import User from "../src/dao/Users.dao.js";

mongoose.connect(`mongodb+srv://carlosvasquezjones:Kox6t3uJ9zdn4SO3@cluster0.9fghh.mongodb.net/Beckend3?retryWrites=true&w=majority&appName=Cluster0`)

describe("Testeo DAO de usuarios", function() {

    before(function() {
        this.userDao = new User()
    })

    beforeEach(async function() {
        await mongoose.connection.collections.users.drop();
        this.timeout(5000);
    })

    it("el get de usuarios me retorna un array", async function () {
        const resultado = await this.userDao.get();
        assert.strictEqual(Array.isArray(resultado), true);
    })

    it("El Dao debe agregar correctamente un elemento a la base de datos.", async function (){
        let usuario = {
            first_name: "Carlos",
            last_name: "Vasques",
            email: "carlos@vasquez.com",
            password: "1234"
        }

        const resultado = await this.userDao.save(usuario)
        assert.ok(resultado._id);
    })

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function () {
        let usuario = {
            first_name: "Cristobal",
            last_name: "Vasquez",
            email: "cristobal@vasquez.com",
            password: "4321"
        }

        const resultado = await this.userDao.save(usuario);
        assert.deepStrictEqual(resultado.pets, []);
    })

    it("El Dao puede obtener a un usuario por email", async function () {
        let usuario = {
            first_name: "Cristobal",
            last_name: "Vasquez",
            email: "cristobal@vasquez.com",
            password: "4321"
        }

        await this.userDao.save(usuario);

        const user = await this.userDao.getBy({email: usuario.email});
        assert.strictEqual(typeof user, "object");
    })

    after(async function () {
        await mongoose.disconnect();
    })
})