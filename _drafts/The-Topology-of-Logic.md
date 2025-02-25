---
title: The Topology of Logic
description: In this article, I describe an alternative interpretation of the geometric concepts of topology as concepts seen in logic.
tags: math logic topology
author: Tyler Wang
---

{::comment}
$$
\def\real{\mathbb{R}}
\def\complex{\mathbb{C}}
\def\rat{\mathbb{Q}}
\def\nat{\mathbb{N}}
\def\integ{\mathbb{Z}}
\def\mod#1{\mathbb{Z}_{#1}}
\def\cpx{\mathbb{C}}

\def\paren#1{\left(#1\right)}
\def\sbrak#1{\left[#1\right]}
\def\cbrak#1{\left\{#1\right\}}

\def\ceil#1{\left\lceil #1 \right\rceil}
\def\floor#1{\left\lfloor #1 \right\rfloor}
\def\abs#1{\left\lvert #1 \right\rvert}
\def\abrak#1{\left\langle #1 \right\rangle}
\def\bra#1{\left\langle #1 \right\rvert}
\def\ket#1{\left\lvert #1 \right\rangle}
\def\braket#1#2{\left\langle #1 \left.\right\lvert #2 \right\rangle}

\def\jand{\quad\text{and}\quad}
\def\jor{\quad\text{or}\quad}
\def\for{\quad\text{for }\,}

\def\ieval#1#2{\Bigg|^{#2}_{#1}}
\def\deval#1{\bigg|_{#1}}

\def\diff#1#2{\frac{d#1}{d#2}}
\def\pdiff#1#2{\frac{\partial#1}{\partial#2}}
$$
{:/comment}

## Introduction
Topology is a field that is often described as a field that studies geometric objects that have a notion of closeness but not necessarily distance.
Unfortunately, this is not easy to formalize since we often think of math as a system where everything is very set in stone.
Nonetheless, topology can capture this notion through the use of open sets.
However, this definition is not one without problems, for one, it's very difficult to understand the motivation for such a definition without an ample amount of mathematical background in analysis or geometry.
Therefore, my aim in this essay is to provide a more fundamental rationale for the open set definition of topological spaces and use this to explain ideas that are commonly seen in geometry.
This discussion is part of a broader notion called geometric logic, but I wish to keep the ideas I present simple enough that anyone with some mathematical background could, in theory, understand, thus, I will save the more interesting results of geometric logic for a future discussion.

To begin, we should first define what a topological space is.

{:.def #def-top}
> Let $X$ be some set, and $T$ is some collection of subsets of $X$. Then if $T$ satisfies
> 1. $\varnothing \in T$ and $X\in T$
> 2. For any $S\subseteq T$, $\bigcup_{U\in S}U \in T$
> 3. For any $S\subseteq T$, if $S$ is finite, then, $\bigcap_{U\in S}U \in T$
> then we say $(X,T)$ is a topological space, and $T$ is the set of open sets in $X$.

If you've never seen this definition, it might feel a bit daunting. Still, for now, I don't want you to worry too much about its geometric ramifications. In this article, I will develop some interpretations that hopefully will make the motivation behind this definition clearer.

## Semi-decidable Processes
In this section, I will give a brief introduction to semi-decidable statements.
Before we take on semi-decidable statements, we should first introduce the notion of decidability with respect to a statement.
It turns out in general, the validity, or non-validity, of any arbitrary statement in mathematics cannot always be determined by an experiment.






It turns out that in our day-to-day lives, we come across plenty of semi-decidable statements, but we often assume that many of these statements are decidable by way of lousy logic.
Whilst this lousy logic is fine in day-to-day life, mathematics tends to want concrete conclusions without even a shadow of a doubt.  Hence, in mathematics, two 
Thus we make the distinction between process that are *decidable* and processes that are *semi-deciable*.

