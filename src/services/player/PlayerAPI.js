//https://ow-api.com/docs/#profile

import fetch from 'node-fetch';
import config from '../../env';

class PlayerAPI  {
	async getByBattleTag(battleTag) {
		try {
			// Replace # with - and the name is case sensitive!
			const resp = await(fetch(`${config.API.player.baseUrl}/pc/us/Arkine-1123/profile`));

			if (resp.ok) {
				return resp.json();
			}

		} catch(err) {
			throw new Error(`There was an error fetching data from the overwatchApi: ${err}`);
		}
	}
}

export const Player = new PlayerAPI();