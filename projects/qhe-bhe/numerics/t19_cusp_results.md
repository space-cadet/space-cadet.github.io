# T19 Phase 5: Cusp Limit and Phase Transition

## Overview

Analysis of the Thurston cusp limit for the dodecahedron RVB state.
The sphere pinches into two components, testing whether the QHE-BHE
correspondence exhibits a phase transition.

## Graph Structure

- **Graph**: Dodecahedron (20 vertices, 30 edges)
- **Perfect matchings**: 36
- **Neck edges**: 6 (cross the partition)
- **Group A**: 10 vertices
- **Group B**: 10 vertices

## Neck Edge Distribution

| Neck edges | Matchings |
|------------|-----------|
| 0 | 9 |
| 2 | 18 |
| 4 | 9 |

## Critical λ Analysis

- **Critical λ_c**: 2.68e-01
- **Entropy knee at**: 0.2682695795279726
- **Gap 10% threshold at**: 0.2682695795279726
- **IPR half threshold at**: 0.39069399370546176

## Phase Transition Type

**KT-LIKE (GAP CLOSING)**

- Graph splits: False
- Gap closes: True
- Min spectral gap: 4.45e-09
- Entropy drop: 38.7%
- Max correlation length: 2.25e+08
- Entropy is monotonic: True

## Sector Analysis (λ = 1.0 vs λ = 1e-4)

| Neck edges | Matchings (λ=1) | P(λ=1) | Matchings (λ=1e-4) | P(λ=1e-4) |
|------------|-----------------|--------|-------------------|-------------|
| 0 | 9 | 0.2500 | 9 | 1.0000 |
| 2 | 18 | 0.5000 | 18 | 0.0000 |
| 4 | 9 | 0.2500 | 9 | 0.0000 |

## Key Findings

1. **KT-like transition** — The spectral gap closes as λ → 0, signaling a   kt-like (gap closing). The resonance graph remains connected   for all λ > 0, but the correlation length diverges.
2. **Resonance graph connectivity** — The graph remains connected for all λ > 0. The spectral gap closes to 4.45e-09.
3. **State localization** — In the cusp limit (λ → 0), the RVB state localizes onto the sector with minimum neck edges, breaking the uniform superposition.
4. **Entropy drop** — Total entropy reduction: 38.7% from λ=1 to λ→0.

## Connection to QHE-BHE Correspondence

The cusp limit corresponds to a partition of the horizon punctures into two disconnected components. If the resonance graph splits, the QHE-BHE correspondence may exhibit a phase transition — the Laughlin state (single connected component) may transition to a product state (two disconnected components).

## Files

- `t19_cusp_limit.py`: This script
- `t19_cusp_results.json`: Numerical results
- `t19_cusp_transition.png`: Visualization
