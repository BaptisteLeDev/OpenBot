import { bot } from './client';
import { createApiServer } from './api/server';
import { config } from './config';

async function bootstrap() {
  console.log('🚀 Starting OpenBot...');

  // 1. Start Internal API
  try {
    const api = await createApiServer();
    const address = await api.listen({ port: config.api.port, host: config.api.host });
    console.log(`🌐 API Server listening at ${address}`);
  } catch (err) {
    console.error('❌ Failed to start API server:', err);
    process.exit(1);
  }

  // 2. Start Discord Bot
  try {
    await bot.start();
  } catch (err) {
    console.error('❌ Failed to start Discord Bot:', err);
    process.exit(1);
  }
}

bootstrap();
