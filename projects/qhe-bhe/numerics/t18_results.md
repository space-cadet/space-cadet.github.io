# T18 Results: Chiral RVB Amplitudes and Hall Response

## Summary Table

| Graph | N_p | Matchings | Chern (non-chiral) | Chern (chiral) | Loop Closure (NC) | Loop Closure (C) | Laughlin Corr (C) |
|-------|-----|-----------|-------------------|----------------|-------------------|------------------|---------------------|
| Octahedron | 6 | 8 | 0.0000 | 1.6394 | 1.0000 | 0.3493 | 0.0000 |
| Icosahedron | 12 | 10395 | 0.0000 | 1.1401 | 1.0000 | 0.0430 | 0.0127 |
| Dodecahedron | 20 | 36 | 0.0000 | 2.0940 | 1.0000 | 0.3732 | 0.2500 |

## Key Findings

### Chern Number

The Chern number is the topological invariant that characterizes the Hall response.
- **Non-chiral RVB**: Expected C = 0 (no Hall response).
- **Chiral RVB**: Expected C = 1 (quantized Hall conductivity = e²/h).

#### Octahedron (N_p = 6)

- Non-chiral Chern: 0.0000
- Chiral Chern: 1.6394
- Loop closure (non-chiral): 1.0000
- Loop closure (chiral): 0.3493
- Laughlin correlation (chiral): 0.0000

#### Icosahedron (N_p = 12)

- Non-chiral Chern: 0.0000
- Chiral Chern: 1.1401
- Loop closure (non-chiral): 1.0000
- Loop closure (chiral): 0.0430
- Laughlin correlation (chiral): 0.0127

#### Dodecahedron (N_p = 20)

- Non-chiral Chern: 0.0000
- Chiral Chern: 2.0940
- Loop closure (non-chiral): 1.0000
- Loop closure (chiral): 0.3732
- Laughlin correlation (chiral): 0.2500

## Interpretation

The chiral RVB is constructed with orientation-dependent phases that mimic the
Laughlin wavefunction. If the Chern number is quantized (close to an integer),
this validates the QHE-BHE correspondence at the level of topological order.

## Limitations

1. Small system sizes (N_p = 6, 12, 20) — finite-size effects are significant.
2. The flux insertion on a closed surface is mathematically subtle.
3. The Laughlin overlap is a heuristic phase correlation, not a rigorous overlap.
4. The Berry phase computation requires dense sampling of flux values.
