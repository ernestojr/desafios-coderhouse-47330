import { Router } from 'express';

export default class RouterBase {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, policies, ...callbacks) {
    this.router.get(path, this.handlePolicies(policies), this.generateCustomeResponse, this.applyCallbacks(callbacks));
  }

  postWithPolicies(path, policies, ...callbacks) {
    this.router.post(path, this.handlePolicies(policies), this.generateCustomeResponse, this.applyCallbacks(callbacks));
  }

  post(path, ...callbacks) {
    this.router.post(path, this.generateCustomeResponse, this.applyCallbacks(callbacks));
  }

  put(path, policies, ...callbacks) {
    this.router.put(path, this.handlePolicies(policies), this.generateCustomeResponse, this.applyCallbacks(callbacks));
  }

  delete(path, policies, ...callbacks) {
    this.router.delete(path, this.handlePolicies(policies), this.generateCustomeResponse, this.applyCallbacks(callbacks));
  }

  applyCallbacks(callbacks) {
    return callbacks.map((cb) => {
      return async (...params) => {     
        try {
          await cb.apply(this, params);
        } catch (error) {
          console.error('Ah ocurrido un error 😨:', error.message);
          // params[0] -> req
          // params[1] -> res
          // params[2] -> next
          params[1].status(500).json({ message: error.message });
        }
      }
    });
  }

  generateCustomeResponse(req, res, next) {
    res.sendSuccess = (payload) => {
      res.status(200).json({ succes: true, payload });
    };
    res.sendServerError = (error) => {
      res.status(500).json({ succes: false, error });
    };
    res.sendUserError = (error) => {
      res.status(400).json({ succes: false, error });
    };
    res.sendNotFoundError = (error) => {
      res.status(404).json({ succes: false, error });
    };
    next();
  }

  handlePolicies = (policies) => (req, res, next) => {
    if (policies[0] === 'PUBLIC') {
      return next();
    }
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: 'unauthorized 🖐️' });
    }
    // Beare admin
    // Beare user
    // Beare premium
    const token = authorizationHeader.split(' ')[1];
    if (!validateToken(token)) {
      return res.status(401).json({ message: 'unauthorized 🖐️' });
    }
    const role = this.getRole(token);
    // admin
    // user
    // premium
    if (!policies.includes(role.toUpperCase())) {
      return res.status(403).json({ message: 'unauthorized 🖐️' });
    }
    next();
  }

  getRole(token) {
    return token;
  }

  validateToken(token) {
    return true;
  }
}