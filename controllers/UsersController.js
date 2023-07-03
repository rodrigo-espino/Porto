const UserORM = require('../models/userORM');
const { check, validationResult } = require("express-validator")

const validationRules = [                                                                        
    check('username').notEmpty().trim().withMessage('username is required'),
    check('password').notEmpty().trim()
]


class UsersController {
    static async getAllUsers(req, res) {
        //let results = await userModel.getUsers();
        let results = await UserORM.findAll();
        console.log(results);
        if (results) {
            res.render("Users", {users: results});
        }
    }

    static async addUser(req, res){

        // const errors = validationResult(req);


        // if(!errors.isEmpty()){
        //     res.send(errors.errors[0].msg);
        // }
        // else{
        //     let result = await userModel.addUser(
        //         req.body.username, 
        //         req.body.password, 
        //         req.body.avatar
        //     );

        let result = await UserORM.create({username: req.body.username, pass: req.body.password, avatar: req.body.avatar})

        if(result){
            res.redirect("/auth/login")
        }
        else{
            res.send("ERROR: the user added failed")
        }
    }

    static async updateUser(req, res){
        let uid = req.params.id; //ROUTE/addUser/:id

        // let result = await userModel.updateUser(
        //     id,
        //     req.body.username,
        //     req.body.password,
        //     req.body.avatar
        // );

        let result = await UserORM.update({ username: req.body.username, pass: req.body.password, avatar: req.body.avatar }, {
            where: {
                id: uid
            }
        })

        if (result){
            res.redirect("/users")
        }
        else{
            res.send("Update user failed")
        }
    }

    static async getUser(req, res) {
        let id = req.params.id;
        //let results = await userModel.getUser(id);

        let results = await UserORM.findByPk(id);

        if (results) {
            res.render("adduser", { users: results });
        }
    }
    
    static async deleteUser(req, res){
        let uid = req.params.id;
        

        console.log(uid)
        let result = await UserORM.destroy({
            where: {
                id: uid
            }
        })
        if (result){
            res.status(200).send("OK");
        }
    }
}

module.exports = {
    validationRules,
    UsersController
}