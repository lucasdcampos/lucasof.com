---
title: Vibe Coding e o futuro da programação
date: 2026-02-19
description: O que eu acho de Vibe Coding e IAs para programar
---

Recentemente venho usando bastante agentes de IA avançados providenciados pelo meu trabalho, como o Claude Sonnet 4.5 e afins,
e isso mudou totalmente a forma como eu desenvolvo software.

O ato de programar, simplificando, é simplesmente dizer ao computador o que fazer e como fazer, isso é feito através de uma linguagem
de programação, que define um conjunto de instruções para especificarmos o comportamento do software de maneira lógica e não ambigua.

Mas recentemente, com o surgimento de LLMs, a programação está cada vez mais se distanciando do código puro em si e indo para um caminho
cada vez mais alto nível. De forma resumida, os niveis seriam esses:

- Código de Máquina (Instruções codificadas em binário que representam um circuito elétrico lógico)
- Assembly (Versão legível do código de máquina)
- Linguagem de "Baixo Nível" (Debatível, mas vamos colocar C aqui para simplificar)
- Linguagem de "Alto Nível" (Python, C#, Java, etc)
- Linguagem Natural (A etapa atual em que nos encontramos, como Inglês ou Português)

Se a programação é definir o comportamento de um programa, a linguagem natural não poderia também ser? Tudo é uma camada de abstração
da lógica booleana.

O problema é que linguagens naturais podem ser ambíguas, exigir contexto e não serem deterministicas. O quanto mais você for preciso na especificação, mais próximo chegará da lógica pura, que SEMPRE será a maneira mais clara de especificar um programa.

Certamente ninguém irá programar somente com portões lógicos, mas eles sempre são o produto final do software, mesmo que o desenvolvedor passe longe deles, o compilador fará essa tradução.

IAs estão se tornando como "compiladores" (entre muitas aspas, obviamente não se encaixam em compiladores formais por serem probabilisticas), transformando linguagem natural geralmente em uma linguagem de alto nível, que por sua vez é compilada até chegar em código de máquina.

Da mesma forma que programadores não mexem mais com código de máquina ou assembly diretamente, iremos cada vez menos escrever código puro, delegando esse trabalho para IA.

Dev -> LLM -> Compilador -> Assembler -> Código de Máquina Final

## Então programação irá acabar?
Não, da mesma forma que Assembly não acabou. O que provavelmente irá acontecer é se tornar menos comum passar _horas escrevendo código_, o foco será em compreender muito bem as regras de negócio do sistema e especificar isso para a IA.

## Qualquer um poderá programar?
Qualquer um pode fritar um ovo, isso não torna ninguém em chef, a mesma coisa acontecerá com o desenvolvimento de software. Para aplicações _simples_, alguém que sabe minimamente o que quer consegue se virar com um Cursor da vida, mas dificilmente conseguirá colocar uma aplicação grande em produção.

A qualidade do código gerado por LLMs é simplesmente horrível, se você deixar ela por conta própria e não souber o que está fazendo, ficará com um código feito na base de gambiarras. O código pode estar semanticamente correto, mas arquiteturalmente ruim, mesmo que isso esteja mudando e a qualidade esteja aumentando bastante com os últimos modelos lançados, em certo momento a IA ainda se perderá se não for bem guiada.

## Como usar Agentes de IA da maneira correta?
Eu ainda estou experimentando modos de usar IA no desenvolvimento, é muito tentador mandar o Claude corrigir o bug pra você e só sair aceitando o que ele alterar, mas na maioria das vezes isso só trará mais problemas a longo prazo.

Estou usando uma abordagem onde eu primeiro penso em soluções e formas de abordar um certo problema e discuto com a IA, quando chegar em uma conclusão eu dou permissão para ela implementar, mas sempre de maneira incremental para ser fácil de perceber se ela está fazendo besteira, que quase sempre faz.

Alguns modelos são bastante prolixos e gostam de fazer coisas que não foram pedidas para impressionar, isso deve ser cortado imediatamente e você deve deixar bem claro o escopo do que é para ser implementado.

A velocidade de desenvolver com IA é infinitamente mais rápida do que sem IA, e a qualidade do software produzido é proporcional a experiência e conhecimento do desenvolvedor, um dev ruim usando IA vai produzir rápido um código ruim, um programador bom vai produzir rápido um código bom.

## A que conclusão chegamos então?
No final das contas, programação nunca foi sobre escrever código em si, apesar disso ter sido parte fundamental no desenvolvimento até agora.

Mas o que realmente importa é sobre entender as regras de negócio e transformá-las em algo executável, a diferença é que a linguagem mudou e a abstração subiu.

Código é apenas trabalho manual, pensar é o verdadeiro trabalho e sempre será, IA nenhuma substituirá isso.

>"Nenhum homem é melhor do que uma máquina, e nenhuma máquina é melhor do que um homem com uma máquina"
