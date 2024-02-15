export default {
  port: process.env.PORT || 8080,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
  persistenceType: process.env.PERSISTENCE_TYPE || 'memory',
  jwtSecret: process.env.JWT_SECRET || 'shhhhh',
}