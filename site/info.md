---
title: Info
editLink: true
layout: doc
---

## Summary {#summary}

In recent years computerized tools for verifying and manipulating proofs have become much more mature, and as a result formalized proofs are playing a meaningful role in mathematical innovation and teaching.

This short program consists of four colloquium talks on major aspects of formalization, in terms of both underlying ideas and concrete implementations, together with a series of workshop-style sessions intended to give participants first-hand knowledge using the [Lean](https://leanprover.github.io/) language, its [mathematical library](https://leanprover-community.github.io/index.html) and associated tools.
We aim to provide an introduction to the area for working mathematicians and advanced students in a variety of fields.

Copious quantities of coffee ☕ and space to code and collaborate will be available.

Workshop and talks will be held in the Department of Mathematics, University of Rome Tor Vergata ([Via della Ricerca Scientifica 1, 00133 Roma](https://osm.org/go/xcXqPCo1?m=)).

## Workshop repo

All the Lean code for the workshop, the exercises and the slides from each talk are available in the [event repo](https://github.com/fpvandoorn/LeanInRome).

## Schedule {#schedule}

|             | Wed 24/01/2024   | Thu 25/01/2024   | Fri 26/01/2024   |
| :---------: | :--------------- | :--------------- | :--------------- |
| 10:00-11:00 |                  | workshop         | workshop         |
| 11:00-12:00 |                  | ☕ 💻            | ☕ 💻            |
| 12:00-13:00 | workshop         | **Colloquium 2** | workshop         |
| 13:00-14:30 | 🍽️               | 🍽️               | 🍽️               |
| 14:30-15:30 | workshop         | **Colloquium 3** | **Colloquium 4** |
| 15:30-16:30 | **Colloquium 1** | ☕ 💻            | ☕ 💻            |
| 16:30-17:30 | ☕ 🍷            | workshop         | workshop         |

The colloquium talks will be held in room 2001 and the workshop sessions in Aula 26.

::: details Session topics (tap to view)

|     | session             | speaker  | topics                                                                       |
| --- | ------------------- | -------- | ---------------------------------------------------------------------------- |
| 1   | **introduction**    | Riccardo | tutorial on Lean, installation of Lean (if needed), topics in mathlib (ch 1) |
| 2   | **basics**          | Gihan    | `apply`, `rewrite`, `linarith` (ch 2)                                        |
| 3&4 | **logic**           | Riccardo | logical connectives and quantifiers (ch 3)                                   |
| 5   | **sets, functions** | Filippo  | intersections, (pre)images, extensionality (ch 4)                            |
| 6&7 | **topology**        | Floris   | topological spaces, filters (ch 9)                                           |

Chapter numbers listed are from [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/).
:::

## Colloquium talks {#colloquium}

<TalkList :items="colloquia"/>

## Speakers {#speakers}

<RandomList :items="speakers" :interval="120000"/>

See also the [event team page](/team).

## Participants {#participants}

Alessio Proietti,
Amos Turchet,
Carlangelo Liverani,
Christoph Lhotka,
Daniel K Lou,
David Wiygul,
Fabrizio Barroero,
Fedor Part,
Gabriele Gullà,
Giovanni Canestrari,
Giulia Cava,
Guido Lido,
Laura Capuano,
Lorenzo Luccioli,
Luca Ferrigno,
Luca Giorgetti,
Marco Lenci,
Marco Pedicini,
Marco Pozza,
Minsung Kim,
Nicola Ottolini,
Oliver Butterley,
Pietro Monticone,
Rafael Greenblatt,
Rinat Kamalov,
Roberto Castorrini,
Valerio Dose,
Valery Isaev,
Vincenzo Bonifaci,
Vincenzo Morinelli,
Yoh Tanimoto.

## Practical info {#practical}

The Mathematics department of the University of Rome Tor Vergata is not the easiest place to reach from the city centre. Our advice on public transport is to get to the Anagnina stop of Metro Line A and take the 20 or 500 (Atac) bus from there. They stop at several locations within or near campus _(@)_. It's easiest (by far) that you get off at the right stop, the one near the "Macroarea di Scienze Matematiche Fisiche e Naturali (M.F.N.)", which is the building that hosts the Mathematics Department (together with other departments).

::: details (@) If you take the 20 bus (tap to view)

The best stop is "Sorbona". As you get off the bus, walk uphill (in the direction of the bus) for a few metres, cross a little opening in the fence on your right and you'll find yourself in a large car park. Walk across it. The large not-so-tall building that you see on the other side is the "Macroarea" building. As you enter the building, Aula 26 will be on the same corridor, a (fairly) long way to your left.
:::

Here’s a [Google map pointer to the building](https://maps.app.goo.gl/QXFjbkdeqgHf63jY7), that you can use to plan your trip, identify the right stop once you’re on the bus, etc.
See also [here](https://www.mat.uniroma2.it/dovesiamo2.php) for more transportation info.

## Register {#register}

In case you are interested, please [register](https://forms.gle/ePWKBwz5y7qMXt2GA).
(Update 06/01/2024: we will do our best to accommodate everyone who wishes to attend, if registering very close to the event, please contact us if you don't hear back within a few days of registering.)

## Contact

Contact [Oliver Butterley](https://www.mat.uniroma2.it/butterley/) or another of the [local organizers](/team) for anything practical.

## Links

- Getting started with Lean:
  If you haven't already, [get started](https://leanprover-community.github.io/get_started) by installing Lean or using it online.
- Other events of interests:
  For those who want to go deeper into Lean and mathlib, check out some [other Lean events](https://leanprover-community.github.io/events.html).
- To use the Lean files in the cloud, [open the project in Codespaces](https://codespaces.new/fpvandoorn/LeanInRome). Note that this requires a Github account. Make sure the Machine type is 4-core, and then press Create codespace. After 1-2 minutes you see a VSCode window in your browser. However, it is still busily downloading mathlib in the background, so give it another few minutes (5 to be safe) and then open a .lean file to start.

## Supporters

- [MUR Excellence Department Project MatMod@TOV](https://www.mat.uniroma2.it/progetto/) awarded to the Department of Mathematics, University of Rome Tor Vergata, CUP E83C23000330006.
- PRIN Grant ["Regular and stochastic behaviour in dynamical systems"](https://site.unibo.it/regular-stochastic-dynamical-systems/en) (PRIN 2017S35EHN).

![Supporter stuff](./images/supporters.jpg)

<script setup>
  import RandomList from './helpers/RandomList.vue'
  import TalkList from './helpers/TalkList.vue'

  const speakers = [
    {
      text: "Riccardo Brasca",
      link: "https://webusers.imj-prg.fr/~riccardo.brasca/",
    },
    {
      text: "Kevin Buzzard",
      link: "https://wwwf.imperial.ac.uk/~buzzard/",
    },
    {
      text: "Floris van Doorn",
      link: "https://florisvandoorn.com/",
    },
    {
      text: "Gihan Marasingha",
      link: "https://mathematics.exeter.ac.uk/staff/gm299?sm=gm299",
    },
    {
      text: "Filippo A. E. Nuccio Mortarino Majno di Capriglio",
      link: "https://perso.univ-st-etienne.fr/nf51454h/",
    },
  ];

  const colloquia = [
    {
      speaker: "Filippo A. E. Nuccio Mortarino Majno di Capriglio",
      title: "How to enjoy a mathematical discussion with your laptop",
      abstract: "In this talk I will illustrate how certain programs, of which Lean is an example, permit to interact with a computer about the logical soundness of mathematical arguments. I will go through the details of well-known proofs trying to understand the feedback provided by the computer and will try to share the fun involved in the process.",
      time: "Wed 24/01/2024, 15:30-16:30, room 2001"
    },
    {
      speaker: "Floris van Doorn",
      title: "The internals of Lean",
      abstract: "In this talk I will describe what goes on behind the scenes of Lean. I will explain the logic of Lean, called dependent type theory, what Lean tactics are and explain why we can trust proofs that are checked by Lean.",
      time: "Thu 25/01/2024, 12:00-13:00, room 2001"
    },
    {
      speaker: "Gihan Marasingha",
      title: "The benefits and challenges of teaching proof with Lean",
      abstract: "This presentation will explore the pivotal role of Lean in enhancing first-year undergraduates' understanding of mathematical proofs. I will share insights from my experiences and initial educational research on teaching a large first-year undergraduate cohort with Lean, focusing on how this tool can significantly impact student perception of proofs. Additionally, I will address the challenges encountered in teaching with Lean and the implications for learning and comprehension.",
      time: "Thu 25/01/2024, 14:30-15:30, room 2001"
    },
    {
      speaker: "Kevin Buzzard",
      title: "Formalising modern research mathematics (Departmental Colloquium)",
      abstract: "A few years ago, the idea of formalising modern research level mathematics seemed completely out of reach. Since then, more and more examples have appeared. I'll go through several examples (some related to the mathematics of Scholze, Tao and Gowers), and talk about how the process is evolving, enabling multiple people to collaborate in the formalisation of modern research in real time.",
      time: "Fri 26/01/2024, 14:30-15:30, room 2001"
    },
  ]
</script>
