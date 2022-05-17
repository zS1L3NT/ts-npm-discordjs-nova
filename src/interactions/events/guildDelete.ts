import { BaseBotCache, BaseEntry, BaseEvent, BaseGuildCache } from "../.."

const file = <
	E extends BaseEntry,
	GC extends BaseGuildCache<E, GC>,
	BC extends BaseBotCache<E, GC>
>(): BaseEvent<E, GC, BC, "guildDelete"> => ({
	name: "guildDelete",
	execute: async (botCache, guild) => {
		logger.info(`Removed from Guild(${guild.name})`)
		await botCache.eraseGuildCache(guild.id)
		botCache.caches.delete(guild.id)
	}
})

export default file
