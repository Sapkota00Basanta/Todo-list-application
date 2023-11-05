// Third-party Module Imports
import dotEnvConfig from 'dotenv';
import path from 'path';

const envConfig = dotEnvConfig.config({
  path: path.join(__dirname, '../.env.local'),
});
export default envConfig;
