const app = require("../app");
const session = require("supertest");
const agent = session(app);

const  personaje={
  "id": 1,
  "name": "Rick",
  "species": "Humano",
  "gender": "Masculino",
  "status": "En Riesgo",
}


describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const response = await agent.get("/rickandmorty/character/1");
    const data = [
      "id",
      "name",
      "species",
      "gender",
      "status",
      "origin",
      "image",
    ];
    data.forEach(element => {
      expect(response.body).toHaveProperty(element);
      
    });
  });

  it('Si hay un error responde con status: 500' , async () => {
    const response = await agent.get("/rickandmorty/character/4534")
    expect(response.status).toBe(500);
  })

  describe( "GET /rickandmorty/login", () => {
    it("Responde con un objeto con la propiedad acces en true si el usuario se logea con las credenciales correctas" , async () => {
      const response = await agent.get("/rickandmorty/login?email=pruebas@gmail.com&password=admin1")
      const access = {access: true}
      expect(response.body).toEqual(access);
    })
    it("Responde con un objeto con la propiedad acces en false si el usuario se logea con las credenciales incorrectas" , async () => {
      const response = await agent.get("/rickandmorty/login?email=pruebas@gmail.com&password=admin1s")
      const access = {access: false}
      expect(response.body).toEqual(access);
    })
  
  })

  describe("POST /rickandmorty/fav", () => {
    it('Debe guardar un objeto con el personaje enviado al servidor'
    , async () => {
      const response = await agent.post("/rickandmorty/fav")
      .send(personaje)
      expect(response.body)
    })
    it('Debe agregar un onjeto con el personaje nuevo sin eliminar el anterior ', async () => {
      const response = await agent.post("/rickandmorty/fav")
      .send(personaje)
      expect(response.body.length).toBe(2)
    })
    
  })

  describe( "DELETE /rickandmorty/fav/:id" , () => {
    it('Si el Id solicitado no existe deberia retornar un areglo con todos los favoritos', async () => {
      const response = await agent.delete("/rickandmorty/fav/2")
      expect(response.body.length).toBe(2)
    })
  })
});

