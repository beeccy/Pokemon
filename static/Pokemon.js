var types = ["Dragon", "Psychic", "Water", "Fire", "Ghost", "Rock", "Normal", "Electric", "Grass", "Poison", 
"Flying", "Bug", "Ground", "Fairy", "Fighting", "Steel", "Ice", "Dark"];

var pokemonNames = new Array(718);
pokemonNames[1] = "Bulbasaur";
pokemonNames[2] = "Ivysaur";
pokemonNames[3] = "Venasaur";
pokemonNames[4] = "Charmander";
pokemonNames[5] = "Charmeleon";
pokemonNames[6] = "Charizard";
pokemonNames[7] = "Squirtle";
pokemonNames[8] = "Wartortle";
pokemonNames[9] = "Blastoise";

pokemonNames[10] = "Caterpie";
pokemonNames[11] = "Metapod";
pokemonNames[12] = "Butterfree";
pokemonNames[13] = "Weedle";
pokemonNames[14] = "Kakuna";
pokemonNames[15] = "Beedrill";
pokemonNames[16] = "Pidgey";
pokemonNames[17] = "Pidgeotto";
pokemonNames[18] = "Pigdeot";
pokemonNames[19] = "Rattata";
pokemonNames[20] = "Raticate";

pokemonNames[21] = "Spearow";
pokemonNames[22] = "Fearow";
pokemonNames[23] = "Ekans";
pokemonNames[24] = "Arbok";
pokemonNames[25] = "Pikachu";
pokemonNames[26] = "Raichu";
pokemonNames[27] = "Sandshrew";
pokemonNames[28] = "Sandslash";
pokemonNames[29] = "Nidoran♀";
pokemonNames[30] = "Nidorina";

pokemonNames[31] = "Nidoqueen";
pokemonNames[32] = "Nidoran♂";
pokemonNames[33] = "Nidorino";
pokemonNames[34] = "Nidoking";
pokemonNames[35] = "Clefairy";
pokemonNames[36] = "Clefable";
pokemonNames[37] = "Vulpix";
pokemonNames[38] = "Ninetales";
pokemonNames[39] = "Jigglypuff";
pokemonNames[40] = "Wigglytuff";

pokemonNames[41] = "Zubat";
pokemonNames[42] = "Golbat";
pokemonNames[43] = "Oddish";
pokemonNames[44] = "Gloom";
pokemonNames[45] = "Vileplume";
pokemonNames[46] = "Paras";
pokemonNames[47] = "Parasect";
pokemonNames[48] = "Venonat";
pokemonNames[49] = "Venomoth";
pokemonNames[50] = "Diglett";

pokemonNames[51] = "Dugtrio";
pokemonNames[52] = "Meowth";
pokemonNames[53] = "Persian";
pokemonNames[54] = "Psyduck";
pokemonNames[55] = "Golduck";
pokemonNames[56] = "Mankey";
pokemonNames[57] = "Primeape";
pokemonNames[58] = "Growlithe";
pokemonNames[59] = "Arcanine";
pokemonNames[60] = "Poliway";

pokemonNames[61] = "Polowhirl";
pokemonNames[62] = "Poliwrath";
pokemonNames[63] = "Abra";
pokemonNames[64] = "Kadabra";
pokemonNames[65] = "Alakazam";
pokemonNames[66] = "Machop";
pokemonNames[67] = "Machoke";
pokemonNames[68] = "Machamp";
pokemonNames[69] = "Bellsprout";
pokemonNames[70] = "Weepinbell";

pokemonNames[71] = "Victreebel";
pokemonNames[72] = "Tentacool";
pokemonNames[73] = "Tentacruel";
pokemonNames[74] = "Geodude";
pokemonNames[75] = "Graveler";
pokemonNames[76] = "Golem";
pokemonNames[77] = "Ponyta";
pokemonNames[78] = "Rapidash";
pokemonNames[79] = "Slowpoke";
pokemonNames[80] = "Slowbro";

pokemonNames[81] = "Magnemite";
pokemonNames[82] = "Magneton";
pokemonNames[83] = "Farfetch'd";
pokemonNames[84] = "Doduo";
pokemonNames[85] = "Dodrio";
pokemonNames[86] = "Seel";
pokemonNames[87] = "Dewgong";
pokemonNames[88] = "Grimer";
pokemonNames[89] = "Muk";
pokemonNames[90] = "Shellder";

pokemonNames[91] = "Cloyster";
pokemonNames[92] = "Gastly";
pokemonNames[93] = "Haunter";
pokemonNames[94] = "Gengar";
pokemonNames[95] = "Onix";
pokemonNames[96] = "Drowzee";
pokemonNames[97] = "Hypno";
pokemonNames[98] = "Krabby";
pokemonNames[99] = "Kingler";
pokemonNames[100] = "Voltorb";

pokemonNames[101] = "Electrode";
pokemonNames[102] = "Exeggcute";
pokemonNames[103] = "Exeggutor";
pokemonNames[104] = "Cubone";
pokemonNames[105] = "Marowak";
pokemonNames[106] = "Hitmonlee";
pokemonNames[107] = "Hitmonchan";
pokemonNames[108] = "Lickitung";
pokemonNames[109] = "Koffing";
pokemonNames[110] = "Weezing";

pokemonNames[111] = "Rhyhorn";
pokemonNames[112] = "Rhydon";
pokemonNames[113] = "Chansey";
pokemonNames[114] = "Tangela";
pokemonNames[115] = "Kangaskhan";
pokemonNames[116] = "Horsea";
pokemonNames[117] = "Seadra";
pokemonNames[118] = "Goldeen";
pokemonNames[119] = "Seaking";
pokemonNames[120] = "Staryu";

pokemonNames[121] = "Starmie";

pokemonNames[300] = "Skitty";
pokemonNames[417] = "Pachirisu";
pokemonNames[704] = "Goomy";
pokemonNames[705] = "Sligoo";
pokemonNames[706] = "Goodra";

var spaceBar = "<br/>";
var space = " ";

for(var i = 0; i < 18; i++) {
	document.write("#" + i + space + types[i] + space); 
}

document.write(spaceBar + spaceBar);

for(var a = 1; a < 720; a++) {
	document.write("#" + a + space, pokemonNames[a] + space);
	switch (a) {
		/* Dragon */
		case 704:
		case 705:
		case 706:
		document.write(types[0] + spaceBar);
		break;

		/* Psychic */
		case 63:
		case 64:
		case 65:
		case 96:
		case 97:
		document.write(types[1] + spaceBar);
		break;

		/* Psychic & Fairy */
		case 122:
		document.write(types[1] + space + types[13] + spaceBar);
		break;

		/* Water */
		case 7:
		case 8:
		case 9:
		case 54:
		case 55:
		case 60:
		case 61:
		case 86:
		case 90:
		case 98:
		case 99:
		case 116:
		case 117:
		case 118:
		case 119:
		case 120:
		case 129:
			document.write(types[2] + spaceBar);
		break;

		/* Water & Psychic */
		case 79:
		case 80:
		case 121:
		document.write(types[2] + space + types[1] + spaceBar);
		break;

		/* Water & Poison */
		case 72:
		case 73:
		document.write(types[2] + space + types[9] + spaceBar);
		break;

		/* Water & Flying */
		case 130:
		document.write(types[2] + space + types[10] + spaceBar);
		break;

		/* Water & Fighting */
		case 62:
		document.write(types[2] + space + types[14] + spaceBar);
		break;

		/* Water & Ice */
		case 87:
		document.write(types[2] + space + types[16] + spaceBar);
		break;

		/* Water & Dark */
		case 130:
		document.write(types[2] + space + types[18] + spaceBar);
		break;

		/* Fire */
		case 4:
		case 5:
		case 37:
		case 38:
		case 58:
		case 59:
		case 77:
		case 78:
		case 126:
		document.write(types[3] + spaceBar);
		break; 

		/* Fire & Flying */
		case 6:
		document.write(types[3] + space + types[10] + spaceBar);
		break;

		/* Ghost */

		/* Ghost & Poison */ 
		case 92:
		case 93:
		case 94:
		document.write(types[4] + space + types[9] + spaceBar);
		break;

		/* Rock */

		/* Rock & Ground */
		case 74:
		case 75:
		case 76:
		case 95:
		document.write(types[5] + space + types[12] + spaceBar);
		break;

		/* Normal */
		case 19:
		case 20:
		case 52:
		case 53:
		case 108:
		case 113:
		case 115:
		case 128:
		case 300:
		document.write(types[6] + spaceBar);
		break;

		/* Normal & Fairy */
		case 39:
		case 40:
		document.write(types[6] + space + types[13] + spaceBar);
		break;

		/* Normal & Flying */
		case 16:
		case 17:
		case 18:
		case 21:
		case 22:
		case 83:
		case 84:
		case 85:
		document.write(types[6] + space + types[10] + spaceBar);
		break;
		
		/* Electric */
		case 25:
		case 26:
		case 100:
		case 101:
		case 125:
		case 417:
		document.write(types[7] + spaceBar);
		break;

		/* Electric & Steel */
		case 81:
		case 82:
		document.write(types[7] + space + types[15] + spaceBar);
		break;

		/* Grass */
		case 114:
		document.write(types[8] + spaceBar);
		break;

		/* Grass & Psychic */
		case 102:
		case 103:
		document.write(types[8] + space + types[1] + spaceBar);
		break;

		/* Grass & Poison */
		case 1: 
		case 2: 
		case 3:
		case 43:
		case 44:
		case 45:
		case 69:
		case 70:
		case 71:
		document.write(types[8] + space + types[9] + spaceBar);			
		break;

		/* Poison */
		case 23:
		case 24:
		case 29:
		case 30:
		case 32:
		case 33:
		case 88:
		case 89:
		case 109:
		case 110:
		document.write(types[9] + spaceBar);
		break;

		/* Poison & Flying */
		case 41:
		case 42:
		document.write(types[9] + space + types[10] + spaceBar);
		break;

		/* Poison & Bug */
		case 13:
		case 14:
		case 15:
		document.write(types[9] + space + types[11] + spaceBar);
		break;

		/* Poison & Ground */
		case 31:
		case 34:
		document.write(types[9] + space + types[12] + spaceBar);
		break;

		/* Bug */
		case 10:
		case 11:
		case 127:
		document.write(types[11] + spaceBar);
		break;

		/* Bug & Grass */
		case 46:
		case 47:
		document.write(types[11] + space + types[8] + spaceBar);
		break;

		/* Bug & Poison */
		case 48:
		case 49:
		document.write(types[11] + space + types[9] + spaceBar);
		break;

		/* Bug & Flying */
		case 12:
		case 123:
		case 127:
		document.write(types[11] + space + types[10] + spaceBar);
		break;

		/* Ground */
		case 27:
		case 28:
		case 50:
		case 51:
		case 104:
		case 105:
		document.write(types[12] + spaceBar);
		break;

		/* Ground & Rock*/
		case 111:
		case 112:
		document.write(types[12] + space + types[5] + spaceBar);
		break;

		/* Fairy */
		case 35:
		case 36:
		document.write(types[13] + spaceBar);
		break;

		/* Fighting */
		case 56:
		case 57:
		case 66:
		case 67:
		case 68:
		case 106:
		case 107:
		document.write(types[14] + spaceBar);
		break;

		/* Steel */

		/* Ice */
		
		/* Ice & Psychic */
		case 124:
		document.write(types[16] + space + types[1] + spaceBar);
		break;

		default:
		document.write("Missing type");
	}
}


/*
function pokemon(pokedexNumber, name) {
    this.pokedexNumber = pokedexNumber;
    this.name = name;
}

/*
document.write(spaceBar + pokemonNames[300].length + space, pokemonNames[300] + space, types[6] + spaceBar);
 /*
document.write(p417.pokedexNumber + space, p417.name, types[7] + spaceBar)
document.write(p704.pokedexNumber + space, p704.name, types[0] + spaceBar);
document.write(p705.pokedexNumber + space, p705.name, types[0] + spaceBar);
document.write(p706.pokedexNumber + space, p706.name, types[0] + spaceBar);

/*
for(var x = 1; x < 751; x++) {
	pokedexNumber = x;
	document.write(x + spaceBar);
} */


/*
var p300 = new pokemon(300, "Skitty ");
var p300 = new pokemon(300, "Skitty ");
var p417 = new pokemon(417, "Pachirisu ");
var p704 = new pokemon(704, "Goomy ");
var p705 = new pokemon(705, "Sligoo ");
var p706 = new pokemon(706, "Goodra ");	

document.write(spaceBar + spaceBar);

document.write(p300.pokedexNumber + space, p300.name, types[6] + spaceBar);
document.write(p417.pokedexNumber + space, p417.name, types[7] + spaceBar)
document.write(p704.pokedexNumber + space, p704.name, types[0] + spaceBar);
document.write(p705.pokedexNumber + space, p705.name, types[0] + spaceBar);
document.write(p706.pokedexNumber + space, p706.name, types[0] + spaceBar);
*/