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

<ul :class="$style.colloquia">
  <li v-for="talk in colloquia"> 
    <span>
      <span :class="$style.talkTitle"> {{ talk.title }}</span> by <em>{{ talk.speaker }}</em>
    </span>
    <p :class="$style.talkBody">
      <div>{{ talk.abstract }}</div> 
      <div>{{ talk.time }}</div>
    </p>
  </li>
</ul>

## Speakers {#speakers}

<RandomList :items="speakers" :interval="120000"/>

See also the [event team page](/team).

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
      abstract: "Abstract: TBA",
      time: "Wed 24/01/2024 15:30-16:30",
    },
    {
      speaker: "Floris van Doorn",
      title: "The internals of Lean",
      abstract: "Abstract: TBA",
      time: "Thu 25/01/2024, 12:00-13:00"
    },
    {
      speaker: "Gihan Marasingha",
      title: "Title: TBA",
      abstract: "Abstract: TBA",
      time: "Thu 25/01/2024, 14:30-15:30"
    },
    {
      speaker: "Kevin Buzzard",
      title: "Formalising modern research mathematics",
      abstract: "Abstract: TBA (LTE / PFR / FLT) 😄",
      time: "Fri 26/01/2024, 14:30-15:30"
    },
  ]
</script>

<style module>
ul.colloquia {
  list-style-type: none;
  margin: 0px;
  padding: 0;
}
.talkTitle {
  font-weight: 600;
  font-size: 18px;
}
p.talkBody {
  margin: 0px 10px 10px 10px;
  font-weight: 300;
}
</style>
