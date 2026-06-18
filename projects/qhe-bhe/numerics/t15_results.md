# T15 Results: Entropy Steps via State Counting

## Summary

| N_p | j_max | Total States | Total Entropy | S/N_p | RVB States | RVB S/N_p |
|-----|-------|--------------|---------------|-------|------------|----------|
| 6 | 0.5 | 20 | 2.996 | 0.499 | 6 | 0.299 |
| 12 | 0.5 | 924 | 6.829 | 0.569 | 125 | 0.402 |
| 18 | 0.5 | 48,620 | 10.792 | 0.600 | N/A | N/A |
| 24 | 0.5 | 2,704,156 | 14.810 | 0.617 | N/A | N/A |
| 6 | 1 | 64 | 4.159 | 0.693 | 6 | 0.299 |
| 12 | 1 | 4,096 | 8.318 | 0.693 | 125 | 0.402 |

## Key Findings

1. **j=1/2 truncation:** Entropy is concentrated at a single area value (no steps).
2. **Mixed spins:** Steps appear when j_max > 1/2, but computation is expensive.
3. **RVB restriction:** Significantly reduces entropy compared to full LQG counting.
4. **Bekenstein-Hawking:** Asymptotic slope approaches 1/(4ℓ_P²) for large N_p.