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

The colloquium talks will be held in Aula dal Passo and the workshop sessions in Aula 26.

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

## Practical info {#practical}

The Mathematics department of the University of Rome Tor Vergata is not the easiest place to reach from the city centre. Our advice on public transport is to get to the Anagnina stop of Metro Line A and take the 20 or 500 (Atac) bus from there. They stop at several locations within campus. It's easiest (by far) that you get off at the right stop, the one near the "Macroarea di Scienze Matematiche Fisiche e Naturali (M.F.N.)", which is the building that hosts the Mathematics Department (together with other departments).

Here’s a [Google map pointer to the building](https://maps.app.goo.gl/QXFjbkdeqgHf63jY7), that you can use to plan your trip, identify the right stop once you’re on the bus, etc.

See also [here](https://www.mat.uniroma2.it/dovesiamo2.php) for more transportation.

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
      time: "Wed 24/01/2024, 15:30-16:30, Aula Dal Passo",
    },
    {
      speaker: "Floris van Doorn",
      title: "The internals of Lean",
      abstract: "TBA",
      time: "Thu 25/01/2024, 12:00-13:00, Aula Dal Passo"
    },
    {
      speaker: "Gihan Marasingha",
      title: "The benefits and challenges of teaching proof with Lean",
      abstract: "This presentation will explore the pivotal role of the Lean in enhancing first-year undergraduates' understanding of mathematical proofs. I will share insights from my experiences and initial educational research on teaching a large first-year undergraduate cohort with Lean, focusing on how this tool can significantly impact student perception of proofs. Additionally, I will address the challenges encountered in teaching with Lean and the implications for learning and comprehension.",
      time: "Thu 25/01/2024, 14:30-15:30, Aula Dal Passo"
    },
    {
      speaker: "Kevin Buzzard",
      title: "Formalising modern research mathematics",
      abstract: "A few years ago, the idea of formalising modern research level mathematics seemed completely out of reach. Since then, more and more examples have appeared. I'll go through several examples (some related to the mathematics of Scholze, Tao and Gowers), and talk about how the process is evolving, enabling multiple people to collaborate in the formalisation of modern research in real time.",
      time: "Fri 26/01/2024, 14:30-15:30, Aula Dal Passo"
    },
  ]
</script>
