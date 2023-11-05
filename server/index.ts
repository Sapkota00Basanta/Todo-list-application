// Module Import Definations
import server from './server';
import routes from './routes';

// Fetch environment values to create new Express Server
const protocol = (process.env.PROTOCOL ?? 'https')!;
const port = parseInt(process.env.PORT ?? '3000')!;
const hostIp = (process.env.HOST_IP ?? 'localhost')!;

// Starting a new express server
export default new server()
  .routesMethod(routes)
  .serverListen(protocol, port, hostIp);
