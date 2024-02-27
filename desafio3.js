/* 
## Desafio 3 - Escrevendo as classes de um Jogo
## Objetivo:
Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- Nome
- idade
- Tipo (ex: guerreiro, mago, monge, ninja )

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- Exibir a mensagem: "o {tipo} atacou usando {ataque}")
- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

Se mago -> no ataque exibir (usou magia)
Se guerreiro -> no ataque exibir (usou espada)
Se monge -> no ataque exibir (usou artes marciais)
Se ninja -> no ataque exibir (usou shuriken)

Ao final deve se exibir uma mensagem:
- "O {tipo} atacou usando {ataque}"
  Ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

class hero{
    constructor(nome, age, type){
        this.name = nome
        this.age = idade 
        this.type = type
    }

    attack(){
        let attack

        switch(this.type){
            case "guerreiro":
                console.log(" usando Espada")
                break
            case "mago":
                console.log(" usando Magia")
                break
            case "monge":
                console.log(" usando Artes Marciais")
                break
            case "ninja":
                console.log(" usando Shurikens")
                break
        }

        console.log(`O ${this.type} atacou usando ${attack}`);
    }

}

let warrior = new hero ("Guerreiro", 25, "guerreiro")
warrior.attack()

let wizard = new hero ("Mago", 65, "mago")
wizard.attack()

let monge = new hero ("Monge", 25, "monge")
monge.attack()

let ninja = new hero ("Ninja", 25, "ninja")
ninja.attack()