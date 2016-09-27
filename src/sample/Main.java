package sample;

import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from start");

        List<Pokemon> pokemon = Arrays.asList(
                new Pokemon("Goomy"),
                new Pokemon("Sliggoo"),
                new Pokemon("Goodra")
        );

        for (int i = 0; i < pokemon.size(); i++) {
            System.out.println(pokemon.get(i));

            Pokemon currentPokemon = pokemon.get(i);
            currentPokemon.sayHi(); // sånn her kaller du en metode
        }
    }
}


class Pokemon {

    // dette er ting en pokemon HAR (felter)
    String name;
    String type;

    // dette er den som blir kjørt når du skriver "new Pokemon(...)"
    // denne heter konstruktøren fordi den "konstruerer"/lager pokemon
    public Pokemon(
            String name
    ) {
        // her kan du gjøre ting som skal gjøres når man skriver "new Pokemon(...)"
        // det er typisk å sette feltene lenger opp du vil gjøre
        this.name = name;
    }


    // dette er en metode inni klassen
    public String toString() {
        return "Name: " + this.name;
    }

    // dette er en annen metode inni klassen
    public void sayHi() {
        System.out.println("Hi from " + name + "!");
    }
}
