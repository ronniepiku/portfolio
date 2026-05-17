---
layout: layouts/case-study.njk
title: "Real-Time ML Detection System"
tags: ["Machine Learning", "Computer Vision", "Docker", "CI/CD", "Python"]
colab: "https://colab.research.google.com/drive/example"
---

## Overview

At Pineamite, I built an **end-to-end computer vision pipeline** for live sports event coverage, reducing production costs by **90%** (one-tenth of previous costs) while achieving state-of-the-art detection accuracy.

## Problem

Traditional live sports coverage relied on:
- Large camera crews and manual switching
- Expensive dedicated hardware for real-time processing
- Significant per-event operational overhead

## Solution

### ML Pipeline

- **Data curation**: Built and maintained a proprietary dataset for model training and benchmarking
- **Model architecture**: Custom detection model optimised for real-time inference on edge hardware
- **Training infrastructure**: Reproducible training with Docker containers and automated hyperparameter search

### System Architecture

```
Camera Feed → Ingest Service → ML Detection → Event Engine → Output Stream
                    ↓                                ↓
             Monitoring DB                    Performance Metrics
```

### Performance Optimisation

- Profiled system bottlenecks using custom monitoring infrastructure
- Optimised frame processing pipeline, **reducing latency by 60%**
- Implemented batch inference where possible without impacting real-time constraints

## Results

| Metric | Achievement |
|--------|-------------|
| Cost reduction | 90% vs. traditional coverage |
| Latency improvement | 60% reduction |
| Detection accuracy | State-of-the-art on proprietary benchmark |
| Deployment | Fully containerised (Docker) |

## Tech Stack

- **Python** (PyTorch, OpenCV, NumPy)
- **Docker** for reproducible training and deployment
- **GitHub Actions** CI/CD for model validation and deployment
- **Custom monitoring** for real-time performance tracking

## Interactive Demo

Explore a simplified version of the detection model in Google Colab:

[**Open in Google Colab →**](https://colab.research.google.com/drive/example)

The notebook demonstrates:
- Loading a pre-trained detection model
- Running inference on sample sports footage
- Visualising bounding box outputs and confidence scores

---

*Model weights and proprietary dataset are not publicly available. The Colab demo uses a simplified model trained on public data.*
