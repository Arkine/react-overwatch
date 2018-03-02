import fetch from 'node-fetch';
import config from '../../env';

//https://overwatch-api.net/docs/v1
class HeroAPI {
	async getHeroById(id) {
		try {
			const resp = await (fetch(`${config.API.hero.baseUrl}/hero/${id}`))

			if (resp.ok) {
				return resp.json();
			}

		} catch(err) {
			throw new Error(`There was an error fetching hero with the ID ${id}`)
		}
	}

	async getAllHeros() {
		try {
			const resp = await (fetch(`${config.API.hero.baseUrl}/hero`));

			if (resp.ok) {
				return resp.json();
			}
		} catch(err) {
			throw new Error(`There was an error fetching all heros.`)
		}
	}
}

export const Hero = new HeroAPI();