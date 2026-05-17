---
layout: layouts/case-study.njk
title: "F1 Performance Statistics Pipeline"
tags: ["Python", "SQL", "Data Pipelines", "Plotly", "Performance Analysis"]
---

## Overview

At Alpine Formula One Team, I designed and deployed a **performance statistics pipeline** and reporting interface that replaced an ageing legacy platform. The new system delivers faster insights to engineers and drivers, saving the team over **£100k annually** in licensing and maintenance.

## Problem

The existing platform was:
- Expensive to licence and maintain
- Slow for complex queries (10+ second response times for common analytics)
- Difficult to extend with new metrics as regulations evolved
- Tightly coupled to a vendor's proprietary format

## Solution

### Architecture

Built an end-to-end pipeline using:
- **Python** (pandas, NumPy) for data transformation and feature engineering
- **SQL** (PostgreSQL) for optimised storage and indexing
- **Plotly** for interactive dashboards accessible trackside

### Key Design Decisions

1. **Event-driven ingestion** — data flows automatically from telemetry into staging tables within seconds of session completion
2. **Modular metric definitions** — each performance KPI is a self-contained Python module, making it trivial to add new analyses
3. **Pre-computed aggregates** — common queries are materialised, reducing dashboard load times by 30%

## Results

| Metric | Before | After |
|--------|--------|-------|
| Query response time | ~12s | ~3s (30% improvement) |
| Annual platform cost | £100k+ | Near-zero (in-house) |
| Time to add new metric | 2-3 weeks | 1-2 days |
| Analyst turnaround | Hours | Minutes (80% reduction) |

## Technical Highlights

- Processed telemetry from **24 race weekends** per season in near real-time
- Automated pre-race and post-race report generation
- Built with CI/CD for zero-downtime deployments during event weekends
- Comprehensive test coverage ensuring data integrity

## Lessons Learned

- Start with the highest-value queries and work outward
- Invest in data validation early — trust is everything in high-performance sport
- Materialised views are worth the storage cost when sub-second dashboards matter

---

*This project uses proprietary Alpine F1 data and code. The architecture patterns and public-domain techniques are described here for portfolio purposes.*
