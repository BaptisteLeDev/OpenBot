import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  discord: {
    token: process.env.DISCORD_TOKEN || '',
    clientId: process.env.DISCORD_CLIENT_ID || '',
    guildId: process.env.DISCORD_GUILD_ID || '',
  },
  openfront: {
    url: process.env.OPENFRONT_API_URL || 'http://localhost:3000',
    apiKey: process.env.OPENFRONT_API_KEY || '',
  },
  api: {
    port: parseInt(process.env.PORT || '3001', 10),
    host: process.env.HOST || '0.0.0.0',
  },
  env: process.env.NODE_ENV || 'development',
};

if (!config.discord.token) {
  console.warn('⚠️ DISCORD_TOKEN is missing in .env');
}
