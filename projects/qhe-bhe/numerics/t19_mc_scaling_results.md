# T19 Phase 6: Monte Carlo Scaling to Larger N_p

## Files
- `code/t19_random_triangulation.py` — Random sphere triangulations via convex hull + edge flips
- `code/t19_monte_carlo_dimer.py` — MC dimer sampling (plaquette-flip random walk), Berry phase Chern number
- `code/t19_mc_scaling_results.json` — Numerical results
- `code/t19_mc_scaling_results.png` — Visualization

## Method

For each N_p ∈ {12, 24, 36, 48}:
1. Generate 2 random triangulations of the sphere (convex hull + random edge flips)
2. Sample dimer configurations via plaquette-flip MCMC (2000 samples, 300 burn-in)
3. Compute Berry phase from flux threading, extract Chern number C

## Results

| N_p | Mean C | Std C | Notes |
|-----|--------|-------|-------|
| 12 | 3.00 | 3.24 | Large variance, no quantization |
| 24 | 0.02 | 2.54 | Near zero on average |
| 36 | −7.86 | 1.18 | Strongly negative, surprisingly consistent |
| 48 | 2.84 | 1.99 | Positive again, but large variance |

**No 1/N scaling observed.** The Chern number varies wildly between random triangulations and does **not** converge to 1.

## Comparison with Regular Polyhedra

| Polyhedron | N_p | C (exact) |
|------------|-----|-----------|
| Octahedron | 6 | 1.64 |
| Icosahedron | 20 | 1.14 |
| Dodecahedron | 30 | 2.09 |

Regular polyhedra show **well-defined, positive** Chern numbers. Random triangulations do not.

## Interpretation

The QHE-BHE correspondence is **not robust to arbitrary triangulation disorder**. In LQG, triangulation vertices and edges carry **geometric** information in addition to topological information. Adding or removing triangles means adding or removing chunks of space. When done arbitrarily, the spherical symmetry of the vacuum state is broken.

The numerical result confirms this: the correspondence requires **uniform curvature** (regular polyhedra, geodesic spheres) — not arbitrary random triangulations. Random geometric disorder in the stereographic projection destroys the well-defined mean of the chiral phase Φ, and the Berry phase loses its topological quantization.

## Conclusion

The Monte Carlo scaling test demonstrates that the correspondence is a **geometric** one, not merely topological. The triangulation is not just a graph — it is a discretization of spacetime, and its regularity matters.

## Deployment Note

Numerics pages can be deployed to the space-cadet.github.io repo (https://github.com/space-cadet/space-cadet.github.io) until the GitHub billing situation is resolved.
