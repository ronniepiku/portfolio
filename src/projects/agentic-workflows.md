---
layout: layouts/case-study.njk
title: "Agentic Workflow Orchestration"
tags: ["Agentic Workflows", "Python", "NLP", "LLMs", "Automation"]
---

## Overview

An exploration of **LLM-based agentic systems** for automating analytical workflows — from data ingestion and cleaning through to insight generation and report delivery.

## Motivation

In high-cadence environments like F1, analysts repeat many similar workflows across events:
- Pull data from multiple sources
- Apply standard transformations and checks
- Generate templated reports with commentary
- Flag anomalies for human review

Agentic systems can orchestrate these steps autonomously, freeing analysts for higher-value interpretive work.

## Approach

### Architecture

```
Trigger (event end) → Orchestrator Agent
    ├── Data Agent (fetch & validate)
    ├── Analysis Agent (compute metrics, detect anomalies)
    ├── Narrative Agent (generate commentary via LLM)
    └── Delivery Agent (format report, notify stakeholders)
```

### Key Design Principles

1. **Human-in-the-loop** — agents flag low-confidence outputs for manual review
2. **Deterministic where possible** — use traditional code for computation, LLMs only for natural language tasks
3. **Auditable** — every agent action is logged with inputs, outputs, and reasoning traces
4. **Modular** — swap individual agents without changing the orchestration layer

## Technical Implementation

- **Orchestration**: Custom Python framework using async/await for parallel agent execution
- **LLM integration**: API-based (Claude, GPT-4) with structured output parsing
- **Guardrails**: Schema validation, confidence thresholds, and human approval gates
- **Testing**: Unit tests for each agent, integration tests for full workflow execution

## Current Status

This is an active research project within my MSc programme. Key areas of investigation:
- Reliability and consistency of LLM-generated analytical narratives
- Optimal decomposition of workflows into agent responsibilities
- Cost-performance tradeoffs between model sizes

## Links

- [GitHub Repository](https://github.com/ronniepiku/agentic-workflows) — Framework code and example workflows
- Research paper in progress (expected 2026)
