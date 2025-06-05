import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("Testing de Adopciones", () => {

  const userId = "6841015e43739cdae7a2ac30";
  const petId = "68412ec6734351f48dc0d0a";
  let adoptionId;

  it("GET /api/adoptions - debería devolver todas las adopciones", async () => {
    const res = await requester.get("/api/adoptions");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/adoptions/:uid/:pid - debería crear una adopción", async () => {
    const res = await requester.post(`/api/adoptions/${userId}/${petId}`);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("user", userId);
    expect(res.body).to.have.property("pet", petId);
    adoptionId = res.body._id;
  });

  it("GET /api/adoptions/:aid - debería devolver la adopción creada", async () => {
    const res = await requester.get(`/api/adoptions/${adoptionId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("_id", adoptionId);
  });

});
