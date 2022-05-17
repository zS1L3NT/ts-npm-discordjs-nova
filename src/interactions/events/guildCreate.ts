import {
	BaseBotCache, BaseEntry, BaseEvent, BaseGuildCache, FilesSetupHelper, SlashCommandDeployer
} from "../.."

const file = <
	E extends BaseEntry,
	GC extends BaseGuildCache<E, GC>,
	BC extends BaseBotCache<E, GC>
>(
	fsh: FilesSetupHelper<E, GC, BC>
): BaseEvent<E, GC, BC, "guildCreate"> => ({
	name: "guildCreate",
	execute: async (botCache, guild) => {
		logger.info(`Added to Guild(${guild.name})`)
		await botCache.registerGuildCache(guild.id)
		await new SlashCommandDeployer(guild.id, fsh.slashFiles).deploy()
	}
})

export default file
