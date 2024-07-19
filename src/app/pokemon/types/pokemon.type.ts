export class Pokemon {
	id: number;
	hp: number;
	cp: number;
	name: string;
	picture: string;
	types: string[];
	created: Date;

	constructor(
		hp = 0,
		cp = 0,
		name = "",
		picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
		types = ["Normal"],
		created = new Date()
	) { 
		this.hp = hp;
		this.cp = cp;
		this.name = name;
		this.picture = picture;
		this.types = types;
		this.created = created;
	}
}