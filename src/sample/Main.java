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
        }
    }
}

class Pokemon {
    String name;

    public Pokemon(String name) {
        this.name = name;
    }

    public String toString() {
        return "Name: " + this.name;
    }
}
