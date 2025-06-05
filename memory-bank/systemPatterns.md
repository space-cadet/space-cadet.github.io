# System Patterns: Deepak Vaid's Portfolio Website

## Architecture Overview

The portfolio website follows a simple, flat architecture optimized for performance and maintainability:

```
┌──────────────────────────────────────────┐
│                                          │
│               index.html                 │
│            (Main Entry Point)            │
│                                          │
└───────────────────┬──────────────────────┘
                    │
        ┌───────────┴─────────────┐
        │                         │
┌───────▼──────────┐     ┌────────▼─────────┐
│                  │     │                   │
│     main.css     │     │     main.js      │
│   (Styling)      │     │  (Interactions)  │
│                  │     │                   │
└──────────────────┘     └───────────────────┘
```

### Key Design Patterns

#### 1. Component-Based Structure
Although not using a component framework, the HTML structure is organized into conceptual "components" that represent distinct content sections, each with its own styling and behavior.

```
index.html
│
├── Header Component
│   ├── Navigation (includes Projects link)
│   └── Hero Section
│
├── About Component
│
├── Research Component
│
├── Publications Component
│
├── Teaching Component
│
├── Blog Component
│
├── Code Component
│
├── Contact Component
│
└── Footer Component

projects/index.html
│
├── Header Component
│   └── Navigation (back to main site)
│
├── Projects Component
│   ├── Development Tools Section
│   ├── Quantum Physics & Research Section
│   └── Categorized Project Cards
│
└── Footer Component
```

#### 2. Progressive Enhancement
Core content and layout work without JavaScript, with interactivity added as an enhancement layer.

```
Base Layer   → HTML (Semantic Structure)
Style Layer  → CSS (Presentation)
Enhancement → JavaScript (Interactivity)
```

#### 3. Responsive Design System
The design follows a systematic approach to responsive behavior:

```
┌─────────────────┐
│  Base Styles    │ (Applied to all viewport sizes)
└────────┬────────┘
         │
┌────────▼────────┐
│   Media Query   │ (Tablet breakpoint ~768px)
│   Adjustments   │
└────────┬────────┘
         │
┌────────▼────────┐
│   Media Query   │ (Desktop breakpoint ~1024px)
│   Adjustments   │
└─────────────────┘
```

#### 4. BEM-Inspired CSS Architecture
CSS classes follow a modified BEM (Block-Element-Modifier) pattern:

```
.block               /* Component container */
.block__element      /* Child of the component */
.block__element--mod /* Variation of the element */
```

Examples:
- `.research-card` (Block)
- `.research-card__icon` (Element)
- `.research-card--featured` (Modifier)

## Component Relationships

The components interact in several key ways:

### 1. Navigation and Section Linking
The navigation component directly references section IDs for smooth scrolling:

```
Navigation Links → Section IDs
  "About" link → #about section
  "Research" link → #research section
  "Projects" link → projects/index.html
  etc.
```

### 2. Visual Theming Consistency
Components share a common design language through CSS variables:

```
:root {
  --primary-color: #2C3E50;
  --secondary-color: #3498DB;
  /* etc. */
}

/* Used consistently across all components */
```

### 3. Progressive Disclosure Pattern
Information is organized with increasing specificity:

```
General Overview → Specific Details → External Resources
```

Example:
- Research area overview
- Specific research highlights
- Link to full publications

## Data Flow

As a static site, data flow is minimal but follows these patterns:

### 1. Scroll-Based Event Flow
```
User Scroll → Scroll Event → CSS Class Changes → Visual Updates
```

### 2. User Interaction Flow
```
User Click → Event Handler → State Change → Visual Feedback
```

## Design Patterns

### 1. Card Pattern
Used throughout the site for consistent content containers:
- Research cards
- Publication entries with enhanced styling (year badges, borders)
- Blog posts
- Repository showcases
- Project cards with technology tags and documentation links

### 2. Stats and Metrics Pattern
Quantitative information with enhanced visual treatment:
- Teaching statistics with gradient backgrounds and improved styling
- GitHub metrics
- YouTube views/subscribers with enhanced card design

### 3. Featured Content Pattern
Highlighting key information in each section:
- Featured research areas
- Selected publications
- Top lectures
- Featured blog posts

### 4. Call-to-Action Pattern
Consistent "View More" or "Learn More" links at the end of sections

## Interaction Patterns

### 1. Hover Feedback
Elements respond to hover with subtle animations:
- Cards elevate slightly
- Buttons change color
- Links show underlines

### 2. Smooth Scrolling
Navigation uses smooth scrolling to section anchors

### 3. Progressive Animation
Elements animate sequentially as the user scrolls down the page

### 4. Quantum Physics Visual Metaphor
The particle animation in the hero section follows a pattern inspired by quantum physics concepts

## Extension Points

The architecture is designed with these extension points:

### 1. Additional Pages
Multi-page structure now includes:
- Dedicated projects page with categorized software showcases
- Structure allows for additional detailed pages:
  - Individual research areas
  - Publication collections
  - Teaching resources

### 2. Content Management
Could be extended to use a static site generator without changing the core architecture

### 3. Theming System
CSS variables are organized to support:
- Dark mode implementation
- Alternative color schemes
- Seasonal or special occasion themes

### 4. Interactive Elements
JavaScript is compartmentalized to allow adding:
- Interactive visualizations
- More complex animations
- Dynamic content loading

## System Limitations

### Current Constraints
1. Static content requires manual updates
2. No server-side processing for forms or dynamic content
3. Limited to client-side interactivity
4. Content management requires code editing

### Intentional Constraints
1. No complex framework dependencies by design
2. Limited animations to maintain professional feel
3. Content density controlled for readability
4. Mobile performance prioritized over complex features
