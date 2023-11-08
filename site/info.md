---
title: Info
editLink: true
layout: doc
---

## Summary {#summary}

In recent years computerized tools for verifying and manipulating proofs have become much more mature, and as a result formalized proofs are playing a meaningful role in mathematical innovation and teaching.

This short program consists of three colloquium talks on major aspects of formalization, in terms of both underlying ideas and concrete implementations, together with a series of workshop-style sessions intended to give participants first-hand knowledge using the [Lean](https://leanprover.github.io/) language, its [mathematical library](https://leanprover-community.github.io/index.html) and associated tools.
We aim to provide an introduction to the area for working mathematicians and advanced students in a variety of fields.

Copious quantities of coffee ☕ and space to code and collaborate will be available.

## Schedule & speakers {#schedule}

|             | Wed 24/01/2024   | Thu 25/01/2024   | Fri 26/01/2024   |
| :---------: | :--------------- | :--------------- | :--------------- |
| 10:00-11:00 |                  | workshop         | workshop         |
| 11:00-12:00 |                  | ☕ 💻            | ☕ 💻            |
| 12:00-13:00 | workshop         | workshop         | workshop         |
| 13:00-14:30 | 🍽️               | 🍽️               | 🍽️               |
| 14:30-15:30 | workshop         | **Colloquium 2** | **Colloquium 3** |
| 15:30-16:30 | **Colloquium 1** | ☕ 💻            | ☕ 💻            |
| 16:30-17:30 | ☕ 🍷            | workshop         | workshop         |

::: details Session topics (tap to view)

|     | session             | topics                                                                         |
| --- | ------------------- | ------------------------------------------------------------------------------ |
| 1   | **introduction**    | tutorial on Lean, installation of Lean (if needed), topics in mathlib (ch 1&2) |
| 2   | **basics**          | apply, rewrite, linarith (ch 2)                                                |
| 3&4 | **logic**           | how to deal with all logical connectives and quantifiers (ch 3)                |
| 5   | **sets, functions** | intersections, (pre)images, extensionality (ch 4)                              |
| 6&7 | **topology**        | topological spaces, filters (ch 8)                                             |
| 8   | **analysis**        | differentiation, integration (ch 9&10)                                         |

Chapter numbers listed are from [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/).
:::

<!-- | 5                   | **numbers**                                                                    | how to work with the numbers in `ℕ`, `ℤ`, `ℚ`, `ℝ`, `ℂ` and relevant tactics | -->
<!-- | 6                   | **algebra**                                                                    | groups, rings, fields, linear algebra                                        | -->

### Speakers {#speakers}

<script setup>
  import RandomList from './helpers/RandomList.vue'

  const items = [
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
</script>

<RandomList :items="items" :interval="120"/>

See also the [event team page](/team).

### Colloquium talks {#colloquium}

Titles TBA...

## Register {#register}

In case you are interested, [please register](https://forms.gle/ePWKBwz5y7qMXt2GA), it helps us a lot with the organization! (And it's fine if you change your mind later.)

## Contact

Contact one of the [local organizers](/team) for anything practical.

## Links

- Getting started with Lean:
  If you haven't already, [get started](https://leanprover-community.github.io/get_started) by installing Lean or using it online.
- Other events of interests:
  For those who want to go deeper into Lean and mathlib, check out some [other Lean events](https://leanprover-community.github.io/events.html).
