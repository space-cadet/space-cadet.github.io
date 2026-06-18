---
kind: edit_chunk
id: 2026-06-18-1125-qhe-bhe-deploy
created_at: 2026-06-18 11:25:00 IST
task_ids: [T8]
source_branch: main
source_commit: 42af2a9
---

#### 11:25 IST - T8: Deploy QHE-BHE Numerics to Portfolio Website
- Created `projects/qhe-bhe/index.html` - Landing page redirecting to numerics
- Created `projects/qhe-bhe/numerics/index.html` - Quarto-rendered numerics overview
- Created `projects/qhe-bhe/numerics/reassessment.html` - Modern reassessment memo
- Created `projects/qhe-bhe/numerics/t14-filling-fractions.html` through `t19-thurston-enhanced.html` - All task pages
- Created `projects/qhe-bhe/numerics/scripts/table-scroll.js` - Mobile responsive table/figure scroll wrapper
- Created `projects/qhe-bhe/styles.css` - QHE-BHE specific styles with figure-scroll-wrapper
- Created `projects/qhe-bhe/numerics/*.png` - 20+ figure images for T14-T19
- Modified `.github/workflows/quarto-deploy-website.yml` - Auto-deploy to website repo on push
