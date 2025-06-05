import supertest from "supertest";

import { expect } from "chai";


const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptame", () => {
    describe("Testing de Mascotitas", () => {
        it("El endoint /api/pets debe crear una mascota correctamente", async() => {
            
            const pichichoMock = {
                name: "Cleo", 
                specie: "Mestiza", 
                birthDate: "2019-07-09"
            }

            const {statusCode, ok, _body}  = await requester.post("/api/pets").send(pichichoMock); 

            console.log(statusCode);
            console.log(ok); 
            console.log(_body); 
            

            expect(_body.payload).to.have.property("_id"); 

        })
 

        it("Al crear una mascota solo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted: false", async () => {

            const nuevaMascota = {
                name: "Goliat",
                specie: "Perro chascon", 
                birthDate: "1990-05-09"
            }

            const {statusCode, _body} = await requester.post("/api/pets").send(nuevaMascota); 

            expect(statusCode).to.equal(200); 
            expect(_body.payload).to.have.property("adopted").that.equals(false); 
        })
    })
})