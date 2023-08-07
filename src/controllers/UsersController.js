const appError = require("../utils/appError");

const sqliteConnection = require("../database/SQLite");
class UsersController {
  /*
           Somente esses métodos dentre de um controller 


index- GET para listar varios registros
show- GET para exbiir um registro
create - POST para criar um registro
update - PUT para atualizar um registro
delete - DELETE para remover um registro
*/

  async create(req, res) {
    const { name, email, password } = req.body;
    
    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email =(?)", [email])

    if(checkUserExists){
      throw new appError("Este email ja esta em uso !")
    }

    return res.status(201).json({name,email,password})


  }
}

module.exports = UsersController;
