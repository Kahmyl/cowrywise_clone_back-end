import User from "../Models/Home.js";
import jwt from "jsonwebtoken";

export default class HomeController {
    static async getHome(req, res) {
        res.send('<h2>Hello World</h2>');
    }


    static async register(req, res) {
        
    }

    static async login(req, res) {
        
    }

    static async user(req, res) {

    }
}