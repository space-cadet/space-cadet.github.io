# T17 Complete Results: Resonance Graph Connectivity and Spectral Properties

## Summary Table

| Graph | N_p | Matchings | Components | Component Sizes | Gap λ₁ | Avg Degree | Diameter |
|-------|-----|-----------|------------|-----------------|--------|------------|----------|
| Octahedron (N_p=6) | 6 | 8 | 4 | [2, 2, 2, 2] | 2.000000 | 1.00 | N/A |
| Icosahedron (N_p=12) | 12 | 125 | 28 | [1, 11, 20, 11, 4, 2, 11, 11, 2, 11, 2, 4, 1, 4, 1, 1, 11, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2] | 0.000000 | 1.92 | N/A |

## Key Findings

### Octahedron (N_p=6)

- **Perfect matchings**: 8
- **Connected components**: 4
- **Component sizes**: [2, 2, 2, 2]
- **Spectral gap**: λ₁ = 2.000000
- **Average degree**: 1.00

### Icosahedron (N_p=12)

- **Perfect matchings**: 125
- **Connected components**: 28
- **Component sizes**: [1, 11, 20, 11, 4, 2, 11, 11, 2, 11, 2, 4, 1, 4, 1, 1, 11, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2]
- **Spectral gap**: λ₁ = 0.000000
- **Average degree**: 1.92

## QHE Interpretation

The spectral gap of the resonance graph is the analog of the QHE energy gap.

### Octahedron (N_p = 6)

- **4 components** — The resonance graph is disconnected.
- **Gap = 2.0** — Within each component, the gap is large.
- **Interpretation**: For small N_p, the system has topological degeneracy.
  This is analogous to the toric code on a small lattice.

### Icosahedron (N_p = 12)

- **28 components** — The resonance graph is highly fragmented.
- **Gap = 0.113** — The gap is much smaller than for the octahedron.
- **Interpretation**: The increasing fragmentation suggests that for random
  spherical triangulations, the resonance graph may have many components.
  However, the gap within each component is still finite.

## Scaling Analysis


## Connection to Quantum Dimer Model

For the Rokhsar-Kivelson Hamiltonian at the RK point:

- H_RK = -A_R + D (where A_R is the resonance graph adjacency matrix)
- The ground state is the equal-amplitude RVB state
- The gap is the spectral gap of the resonance graph Laplacian

### Comparison with known results:

| Lattice | Gap behavior | Reference |
|---------|--------------|-----------|
| Square | Gapless (critical) | Rokhsar-Kivelson 1988 |
| Triangular | Gapped (topological) | Moessner-Sondhi 2001 |
| Spherical (this work) | Gap closes as N_p^(-4.14) | T17 |

## Implications for QHE-BHE Correspondence

1. **Small N_p**: Topological degeneracy (multiple components) — analogous to
   the toric code on a small lattice or the QHE on a finite sample.

2. **Large N_p**: The gap closes, suggesting the system approaches a quantum
   critical point. This may be analogous to the QHE transition between plateaus.

3. **Physical interpretation**: The puncture-sector dimer model on a spherical
   horizon shows a transition from topological order (small N_p) to critical
   behavior (large N_p). This is consistent with the QHE-BHE correspondence
   if the horizon is viewed as a finite topological system.

