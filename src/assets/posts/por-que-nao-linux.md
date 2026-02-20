---
title: Por que eu não uso Linux?
date: 2026-02-20
description: Uma conversa sobre sistemas operacionais
---

Bom, o título desse post é na verdade uma mentira, pois eu uso Linux, só não como sistema principal.

Estou atualmente rodando Windows com Arch Linux no WSL2 e essa tem sido a melhor combinação que eu achei até agora.

Já utilizei muitos sistemas, desde Windows 7, 8, 8.1, 10, 11, até várias distribuições Linux com propósitos completamente diferentes, fui desde o Debian até o Arch, os extremos opostos das opções de distros.

Eu utilizo principalmente meu PC Desktop com o WSL e ele me serve bem pra todas as atividades que eu realizo, desde desenvolvimento, trabalhos da faculdade até a jogos (apesar de estar jogando pouco ultimamente). Além dele tenho um notebook mediano com Arch Linux, mas uso ele apenas quando estou viajando, quebra um galho.

## Por que não usar Linux como Sistema Principal?
Eu gostaria, e já usei várias vezes com diversas distros como comentei, mas sempre acabo voltando para o Windows pelos mesmos problemas.

A compatibilidade de softwares é um dos grandes fatores, e apesar disso ter sido em boa parte resolvido com Wine e alternativas para Linux, ainda deixa barreiras na utilização do sistema.

Nvidia. Eu tenho uma placa Nvidia e mesmo com suporte das placas ter evoluído, ainda não é perfeito e está longe disso, não só nvidia mas outros drivers também.

Algumas outras coisas menores acabam incomodando, por exemplo, um bug chato que eu sempre enfrento independente da distro ou máquina que esotu utilizando é que o botão de abrir o explorador de arquivos na Steam não funciona, simplesmente nada acontece (pra trocar a foto de perfil). São bugs e detalhes bestas, mas que irritam, isso foi só um exemplo, some isso com dezenas de outras coisas e entenderá.

O sistema de arquivos é diferente nos dois sistemas e com vários discos pode ser chato.

Eu tenho vários SSDs e HDs há muitos anos, eles tem muitos arquivos, jogos e programas, eu não quero ter que ficar reinstalando eles toda hora, e meus jogos estão com as versões de Windows, alguns não funcionam nem com Proton e não quero ficar misturando jogos de vários sistemas.

Voltando pra Steam, apenas no Linux tenho problemas ao abrir alguns jogos que é uma compilação de shaders excessivamente demorada, as vezes levando muitos minutos pra abrir um jogo e se pular isso fica lagado. Já procurei algumas soluções mas não fui muito a fundo, esse também é outra coisa chata do Linux, muita coisa você vai ter que ficar indo atrás e nem sempre é tão óbvio. Nem todo mundo quer ficar fazendo isso, programadores estão acostumados, mas mesmo assim se der pra evitar dor de cabeça desnecessária eu prefiro, sou preguiçoso.

Vale lembrar que a maioria desses pontos são pouco relevantes para a maioria dos usuários, e eu mesmo não ligo _tanto_ pra eles, poderia usar Linux numa boa, mas Windows com WSL me atende bem no momento.

## Linux e Windows para Desenvolvimento
Não tem comparação, é muito melhor criar um ambiente de desenvolvimento em Linux do que em Windows, PowerShell é esquisito e muitas linguagens foram feitas e performam melhor em Linux. Servidores web rodam em Linux, etc.

Se você é um desenvolvedor, não tem como fugir, Linux é essencial e você deve dominá-lo, não precisa usar como sistema operacional, mas deve entender os principais comandos e como utilizar um terminal.

## O que é esse "WSL" afinal?
Para os desavisados, o Windows possui um sistema chamado **Windows Subsystem for Linux**, que permite acessar um ambiente Linux de dentro do Windows sem precisar de máquinas virtuais.

Pra instalá-lo basta dar: `wsl --install` no terminal, por padrão será instalado o Ubuntu, mas você pode trocar a distro com `wsl --install -D <nome-da-distro>`

Eu uso Arch btw, mas Ubuntu já é mais do que suficiente.

---


Então sim, eu uso Linux e continuarei usando, algum dia talvez eu migre pra ele de forma definitiva, mas como não sou nenhum radical que não chega nem perto do sistema da Microsoft (apesar de discordar profundamente das mudanças recentes) continuarei com o que está dando certo, WSL junta o melhor dos dois mundos.

**Links úteis:**
- [Fabio Akita: O Melhor Setup Dev com Arch e WSL2](https://www.youtube.com/watch?v=sjrW74Hx5Po)