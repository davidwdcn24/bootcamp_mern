const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// Una serie de objetos Pokémon donde la identificación es divisible por 3
let resultado = pokemon.filter(p => p.id % 3 === 0);
console.log("Una serie de objetos Pokémon donde la identificación es divisible por 3");
console.log(resultado);

// una serie de objetos Pokémon que son del tipo "fuego"
resultado = pokemon.filter(p => p.types.filter(t => t === "fire").length > 0);
console.log("una serie de objetos Pokémon que son del tipo \"fuego\"");
console.log(resultado);

// Una variedad de objetos Pokémon que tienen más de un tipo
resultado = pokemon.filter(p => p.types.length > 1);
console.log("Una variedad de objetos Pokémon que tienen más de un tipo");
console.log(resultado);

// una matriz con solo los nombres de los Pokémon
resultado = pokemon.map(p => p.name);
console.log("una matriz con solo los nombres de los Pokémon");
console.log(resultado);

// Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
resultado = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log("Una matriz con solo los nombres de Pokémon con una identificación mayor que 99");
console.log(resultado);

// una matriz con solo los nombres del pokémon cuyo único tipo es veneno
resultado = pokemon.filter(p => p.types.length === 1 && p.types.filter(t => t === "poison").length > 0).map(p => p.name);
console.log("una matriz con solo los nombres del pokémon cuyo único tipo es veneno");
console.log(resultado);

// una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
resultado = pokemon.filter(p => p.types.length > 1 && p.types[1] === "flying").map(p => p.types[0]);
console.log("una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es \"volador\"");
console.log(resultado);

// un recuento de la cantidad de pokémon que son de tipo "normal"
resultado = pokemon.filter(p => p.types.filter(t => t === "normal").length > 0).length;
console.log("un recuento de la cantidad de pokémon que son de tipo \"normal\"");
console.log(resultado);