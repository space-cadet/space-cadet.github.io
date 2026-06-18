# QHE/BHE Correspondence — Computational Code

This folder contains numerical and computational scripts for the QHE/BHE correspondence project.

## Scripts

### `t12_dimer_mobility.py`

Toy calculation for the RVB horizon-puncture mobility model (Task T12).

**What it computes:**
- Enumerates all perfect matchings (dimer coverings) on spherical graphs (octahedron, icosahedron)
- Identifies flippable plaquettes (rhombus cycles where two dimers can be resonated)
- Computes the dimer mobility fraction `f_dimer`: fraction of punctures that participate in at least one flippable plaquette
- Compares with the exchange mobility fraction `f_exchange` from the M=0 spin sector

**Usage:**

```bash
# Octahedron (N_p = 6, trivial case)
python3 t12_dimer_mobility.py --graph octahedron

# Icosahedron (N_p = 12, first non-trivial result)
python3 t12_dimer_mobility.py --graph icosahedron
```

**Requirements:** Python 3 only. No external dependencies (uses `itertools`, `collections`, `argparse` from the standard library).

**Key results so far:**
- **Octahedron:** f_dimer = 1.000 (all punctures mobile — trivial, too symmetric)
- **Icosahedron:** f_dimer = 0.960 (5 out of 125 coverings are completely frozen, pulling the average down)

**Next steps:**
- Map the resonance graph (connect coverings by plaquette flips)
- Scale to larger spherical triangulations (N_p = 18, 24, 30)
- Add chiral RVB phases (Kalmeyer-Laughlin style)
- See T12 implementation note and task file for full context.

## Architecture

Each script is self-contained. Shared utilities (graph generation, combinatorics) may be factored into a `utils/` subfolder as the codebase grows.

## References

- T12 task file: `memory-bank/tasks/T12.md`
- T12 implementation note: `memory-bank/implementation-details/t12-rvb-horizon-puncture-mobility-model.md`
- T13 code architecture: `memory-bank/implementation-details/t13-code-architecture.md`
