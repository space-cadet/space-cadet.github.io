# T17 Heuristic Results: Large Resonance Graphs

## Methodology

For large graphs where exact perfect matching enumeration is #P-complete,
we use the following heuristic approaches:

1. **MCMC Sampling**: Random walk on the resonance graph via plaquette flips
2. **Monte Carlo Counting**: Greedy matching success rate gives order-of-magnitude estimate
3. **Scaling Laws**: Extrapolate from small-N exact results to predict large-N behavior

## Results

| Graph | N_p | Est. Matchings | Sampled Unique | Est. Component Size | Approx. Gap | Method |
|-------|-----|---------------|----------------|---------------------|-------------|--------|
| Random Sphere (N_p=18) | 18 | 1.12e+07 | 1 | 1.0 | 0.000000 | heuristic |
| Random Sphere (N_p=24) | 24 | 5.34e+10 | N/A | 1.0 | 0.000000 | heuristic |
| Random Sphere (N_p=36) | 36 | 9.53e+18 | 1 | 1.0 | N/A | heuristic |
| Random Sphere (N_p=48) | 48 | 1.31e+28 | 1 | 1.0 | N/A | heuristic |

## Scaling Predictions

| N_p | Pred. Matchings | Pred. Gap | Pred. Components | Pred. Avg Degree |
|-----|-----------------|-----------|------------------|----------------|
| 18 | 1.76e+03 | 0.021106 | 28 | 2.84 |
| 24 | 2.47e+04 | 0.006409 | 28 | 3.76 |
| 36 | 4.84e+06 | 0.001195 | 28 | 5.60 |
| 48 | 9.49e+08 | 0.000363 | 28 | 7.44 |
