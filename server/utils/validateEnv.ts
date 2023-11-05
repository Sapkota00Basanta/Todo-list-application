import { cleanEnv, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    PROTOCOL: str(),
    PORT: str(),
    HOST_IP: str(),
    REQUEST_LIMIT: str(),
    NODE_ENV: str(),
    LOG_ID: str(),
    APP_ID: str(),
    MONGODB_LOCAL_URI: str(),
  });
};

export default validateEnv;
