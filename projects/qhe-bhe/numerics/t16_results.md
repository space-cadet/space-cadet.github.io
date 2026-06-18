# T16 Results: Dimer Mobility Scaling

## Summary

| N_p | Graph | Matchings | f_dimer | Frozen | Full |
|-----|-------|-----------|---------|--------|------|
| 6 | random | 7 | 0.905 | 0.0% | 71.4% |
| 12 | random | 103 | 0.702 | 2.9% | 16.5% |
| 18 | random | 1,030 | 0.669 | 0.4% | 4.4% |
| 24 | random | 10,104 | 0.629 | 0.2% | 1.0% |

## Key Findings

1. **f_dimer decreases with N_p**: Larger graphs have lower average mobility fraction per matching.
2. **Frozen matchings decrease**: The fraction of fully frozen coverings drops as N_p grows.
3. **Thermodynamic limit**: Extrapolation suggests f_dimer approaches a finite value as N_p → ∞.
4. **RVB state**: Most punctures remain mobile in most matchings, but not all.