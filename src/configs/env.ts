export enum Env {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
  STAGING = 'staging',

  PORT = '8080',
  HOST = '0.0.0.0',

  JWT_ACCESS_SECRET = 'your_jwt_access_secret',
  JWT_REFRESH_SECRET = 'your_jwt_refresh_secret',
  JWT_ACCESS_TOKEN_EXPIRES_IN = '1y',
  JWT_REFRESH_TOKEN_EXPIRES_IN = '1y',

  MONGO_URI = 'mongodb://localhost:27017/forsa_db',
  MONGO_URI_TEST = 'mongodb://localhost:27017/forsa_db_test',

  CLIENT_URL = 'http://localhost:3000/auth/activate-account',
}
