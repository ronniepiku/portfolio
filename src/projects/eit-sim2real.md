---
layout: layouts/case-study.njk
title: "Towards Simulation-to-Reality Transfer in EIT Tactile Sensing"
subtitle: "Teaching models to handle real sensor noise"
storyHook: "Simulation is fast and cheap, but real sensors are noisy and unpredictable. This project explores how to bridge that gap so models trained in simulation can perform more reliably in reality."
impactSummary: "A noise-aware training strategy intended to improve robustness while reducing dependence on costly real-world data collection."
heroImage: "/assets/projects/eit-sim2real/cover.svg"
heroAlt: "EIT Sim2Real visual concept"
github: "https://github.com/ronniepiku/eit-sim2real"
demoUrl: "https://github.com/ronniepiku/eit-sim2real/blob/main/notebooks/eda_analysis.ipynb"
demoLabel: "Explore Notebook"
tags: ["Python", "Machine Learning", "Deep Learning", "Robotics", "Sim2Real"]
confidentialityNote: "This page summarizes publicly shareable research findings and methodology patterns."
---

## Where it started

One of the most interesting problems in applied machine learning is what happens when a model leaves a clean training environment and meets the real world. In tactile sensing, that gap shows up quickly. Simulation is convenient and scalable, but live sensors are noisy, imperfect, and much harder to predict.

This project came from that tension. I wanted to explore whether it was possible to make sim-to-real transfer more reliable by teaching the model about those imperfections earlier in the process rather than discovering them too late.

## What needed to change

Without that robustness, teams are pushed into an awkward tradeoff:

- spend large amounts of time collecting real-world data,
- or accept that models trained in simulation may become brittle in deployment.

Neither option is especially attractive when you are trying to build practical systems.

## The core idea

The approach here was straightforward in spirit, even if the implementation had depth: make the training data less idealised. By introducing realistic noise patterns during training, the model is forced to cope with inputs that look more like deployment conditions and less like a perfect lab setup.

That changed the framing of the whole problem for me. Sim-to-real transfer stopped feeling like a correction step after training and started to look more like a design decision that should shape the training process from the beginning.

## What that improved

- Better resilience to variation in sensor measurements.
- More confidence that performance would hold up outside controlled settings.
- A more efficient path for experimentation without relying entirely on new real-world capture cycles.

## Why it matters to me

This project reinforced something I care about a lot in ML systems: robustness is not a nice-to-have. In healthcare, robotics, and other real-world settings, a model that behaves well under messy inputs is often more valuable than one that looks impressive only in perfect conditions.

## Explore further

- Repository and code: [EIT Sim2Real on GitHub](https://github.com/ronniepiku/eit-sim2real)
- Data exploration notebook: [EDA notebook](https://github.com/ronniepiku/eit-sim2real/blob/main/notebooks/eda_analysis.ipynb)
- Noise model notes: [Noise model documentation](https://github.com/ronniepiku/eit-sim2real/blob/main/docs/NOISE_MODEL.md)
