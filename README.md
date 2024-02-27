<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
  <a href="[https://www.dio.me/](https://web.dio.me/track/decola-tech-avanade-net-developer)">
     <img align="center" width="40px" src="https://hermes.dio.me/tracks/977d1b41-5888-44d7-8e4c-57d2348748dc.png"></a>
    <span>Desafios de projeto - Formação Lógica de Programação</span>
</h1>

Projeto desenvolvido para fins didáticos com o objetivo de consolidar os fundamentos de lógica de programação com a trilha da DIO, publicando os desafios de projeto e anotações do curso.

# Desafio 1 - Classificador de nível de Herói
### Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

# Desafio 2️ - Calculadora de partidas Rankeadas
### Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

# Desafio 3 - Escrevendo as classes de um Jogo
### Objetivo:
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

