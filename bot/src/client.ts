import { Client, GatewayIntentBits, Events, Interaction } from 'discord.js';
import { config } from './config';
import { openFront } from './services/openfront/client';

export class BotClient extends Client {
  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
      ],
    });

    this.setupListeners();
  }

  private setupListeners() {
    this.once(Events.ClientReady, (c) => {
      console.log(`✅ Discord Bot Ready! Logged in as ${c.user.tag}`);
    });

    this.on(Events.InteractionCreate, this.handleInteraction.bind(this));
  }

  private async handleInteraction(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;

    // TODO: Implement proper command handler
    // This is a temporary hardcoded handler for demonstration
    if (interaction.commandName === 'openfront') {
        const subdomain = interaction.options.getSubcommand();

        try {
            if (subdomain === 'start') {
                await interaction.deferReply();
                await openFront.startGame({
                    userId: interaction.user.id,
                    guildId: interaction.guildId || 'dm',
                });
                await interaction.editReply('🚀 Game started via OpenFront API!');
            }
        } catch (error) {
            console.error(error);
            if (interaction.deferred) {
                await interaction.editReply('❌ Error communicating with OpenFront.');
            } else {
                await interaction.reply({ content: '❌ Error communicating with OpenFront.', ephemeral: true });
            }
        }
    }
  }

  public async start() {
    await this.login(config.discord.token);
  }
}

export const bot = new BotClient();
