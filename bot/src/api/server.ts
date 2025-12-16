import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { config } from '../config';
import { openFront } from '../services/openfront/client';

export async function createApiServer() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(swagger, {
    swagger: {
      info: {
        title: 'OpenBot Internal API',
        description: 'API for observability and control',
        version: '1.0.0',
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
  });

  fastify.get('/health', async () => {
    return { status: 'ok', uptime: process.uptime() };
  });

  fastify.get('/status', async () => {
    const openFrontStatus = await openFront.getStatus().catch(() => ({ status: 'unreachable' }));
    return {
      bot: 'running',
      openfront: openFrontStatus,
    };
  });

  return fastify;
}
