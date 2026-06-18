# Scaling Predictions for Large Resonance Graphs
## Fitted Scaling Laws (from N=[ 6 12])

- **Matchings**: log(M) = 0.4398*N + -0.4418
- **Spectral gap**: log(λ₁) = -4.1428*log(N) + 8.1161
- **Avg degree**: ⟨d⟩ = 0.1533*N + 0.0800

## Predictions

| N_p | Matchings (pred) | Gap λ₁ (pred) | Components (pred) | Avg Degree (pred) |
|-----|------------------|---------------|-------------------|-------------------|
| 18 | 1.76e+03 | 0.021106 | 28 | 2.84 |
| 24 | 2.47e+04 | 0.006409 | 28 | 3.76 |
| 36 | 4.84e+06 | 0.001195 | 28 | 5.60 |
| 48 | 9.49e+08 | 0.000363 | 28 | 7.44 |
| 72 | 3.64e+13 | 0.000068 | 28 | 11.12 |

## Interpretation

These predictions are based on extrapolation from small-N exact results.
For large random graphs, the resonance graph is expected to be:
- **Connected** (single component) with high probability
- **Gapped** with λ₁ → 0 as N → ∞ (but possibly very slowly)
- **Dense** with average degree growing with N
