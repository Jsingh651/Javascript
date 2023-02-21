const pokémon = Object.freeze([
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


// Gets all the id's and check if divisble by 4 and then prints them.
const evenlyDivisible = pokémon.filter(pok => pok.id % 3 === 0);
console.log(evenlyDivisible)

// Gets all the pokeomons that are the type fire.
const fireType = pokémon.filter(pok => pok.types == "fire");
console.log(fireType)

// Finds all the pokemons with more then 1 type
const moreThanOneType = pokémon.filter(pok => pok.types.length > 1);
console.log(moreThanOneType)

// Only the names
const namesOnly = pokémon.map(pok => pok.name);
console.log(namesOnly)

// Prints name with ID greater then 99
const highNames = pokémon.filter(pok => pok.id > 99).map(p => p.name);
console.log(highNames)

// Names of the pokemons with type poision
const poisonType = pokémon.filter(pok => pok.types == "poison").map(p => p.name);
console.log(poisonType)

// Filterd by second index of type flying
const firstTypeFromSecondFlying = pokémon.filter(pok => pok.types[1] === "flying").map(p => p.types[0]);
console.log(firstTypeFromSecondFlying)

// Amount of pokemons with type normal
const countOfNormal = pokémon.filter(pok => pok.types.includes("normal")).length;
console.log(countOfNormal)