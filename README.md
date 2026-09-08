<div align="center">

# CAPTAIN LAKSHMI SAHGAL (1914–2012)
### *An Interactive Digital Monograph & Scroll-Driven Historical Documentary*

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite 5](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Canvas 2D](https://img.shields.io/badge/Render-Hardware_Canvas_2D-e34c26?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![CI Status](https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/jvstin47/Captain-Lakshmi-Invicta/actions)

<p align="center">
  <strong>Physician • Commander of the Rani of Jhansi Regiment • Minister of State • Prisoner of War • Lifelong Healer</strong>
</p>

<p align="center">
  <em>"To heal is to resist; to serve is to remain free."</em>
</p>

---

</div>

## 📖 Executive Summary

This digital archive is an editorial-grade, interactive museum monograph commemorating the life, military leadership, and medical humanitarianism of **Captain Lakshmi Sahgal (Dr. Lakshmi Swaminathan, 1914–2012)**.

The platform moves beyond conventional scrolling articles by introducing a **hardware-accelerated, scroll-driven cinematic frame sequencer**, contextualizing authentic historical archives with visual reconstructions of pre-independence India, colonial Singapore, wartime Burma, and post-independence public health activism.

---

## 🧭 Narrative Continuum: The 14 Acts

The digital monograph is architected around a 14-chapter biographical timeline:

| Act | Title | Era | Location | Core Historical Dimension |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **The Awakening** | 1914–1932 | Madras Presidency | Early life, Swaminathan family political crucible, anti-colonial awakening |
| **02** | **The Science of Healing** | 1932–1938 | Madras Medical College | MBBS & DGO training, mastering anatomy & obstetrics during colonial austerity |
| **03** | **The Healer’s Oath** | 1938–1940 | Madras Govt Hospitals | Segregated colonial hospital wards, healthcare as radical social justice |
| **04** | **Crossroads in Malaya** | 1940–1941 | Singapore / Malaya | Diaspora practice on Serangoon Road, treating Tamil rubber plantation coolies |
| **05** | **Clinic of the Dispossessed** | 1941–1943 | Wartime Singapore | Japanese air raids, frontline medical sanctuary, IIL Medical Wing relief |
| **06** | **The Commander** | 1943–1944 | Singapore / Burma | Netaji 4-hour meeting, raising Asia’s first all-women combat regiment (1,500+ troops) |
| **07** | **The Burma March** | 1944–1945 | Maymyo / Imphal | Jungle warfare, mobile military hospital under Allied artillery bombardment |
| **08** | **The Jungle Retreat** | 1945–1946 | Kalaw / Burma Front | Refusing surrender until patients evacuated; capture by British forces |
| **09** | **Trial & Return** | 1946–1947 | Delhi / Red Fort | INA Trials public fervor, release, hero’s return to a free nation |
| **10** | **Kanpur: Fifty Years of Care** | 1947–1970 | Kanpur, UP | The Clinic of the Poor: ₹5 consultations, free maternal & refugee care |
| **11** | **1971: The Refugee Camps** | 1971 | Bongaon Border | Organizing emergency cholera relief camps for millions fleeing Bangladesh genocide |
| **12** | **The Frontline Activist** | 1980s–1990s | Kanpur / Bhopal | Bhopal gas leak medical relief; physically shielding Sikh families in 1984 |
| **13** | **The People’s Candidate** | 2002 | New Delhi | Historic presidential candidacy representing democratic and secular dissent |
| **14** | **The Living Legacy** | 2012 & Beyond | Global Record | Final donation of her body for medical research; unbroken physician's oath |

---

## ⚡ Technical Architecture & Engineering Highlights

### 1. Hardware-Accelerated `<canvas>` Engine (`CinematicSequence.jsx`)
* **Dynamic DPR Scaling:** Automatically matches physical display pixel density with `window.devicePixelRatio` for razor-sharp rendering on Retina and 4K screens.
* **Aspect-Ratio Cover Mathematics:** Fluidly scales 16:9 historical frames to fill any viewport dimension without stretching or distorting authentic archival aspect ratios.
* **IntersectionObserver Native Compositing:** Triggers frame sequences via native browser compositing thresholds, eliminating scroll-event bottlenecking on high-refresh displays.
* **Programmatic Nav-Jump Guard:** A global `__navJumping` coordination flag prevents intermediate off-screen sequences from hijacking scroll positions during instant navigation.

### 2. Auto-Tour & One-Click Rewatch Architecture
* **Continuous Sub-Pixel Auto Tour:** Stable `requestAnimationFrame` loop advancing smooth historical progression at calibrated reading velocity (~75px/sec).
* **Global One-Click Rewatch:** Clicking the masthead monogram in the persistent navigation bar resets all 14 sequence states, clears animation buffers, and returns smoothly to the monograph opening.
* **Context-Aware Navigation Tracker:** Dynamic nav pill tracks the active act as the user scrolls, gracefully falling back to `"Historical Monograph"` when returning to the hero masthead.

### 3. Dual Provenance Standard & Archival Deep-Viewer (`ArchivalModal.jsx`)
* **Clear Ethical Distinction:** Distinct UI signifiers differentiate artistic visual reconstructions from verified primary sources.
* **Archival Specimen Mount:** Primary artifact images display in high fidelity with archival double-matting, cataloging IDs (National Archives of India & Netaji Research Bureau), and historical significance notes.
* **Hero Archival Photo Carousel (`Hero.jsx`):** Authentic photographic records presented in a horizontal scrollway with period-accurate deckle edges.

---

## 🎨 Design System & Visual Identity

| Token Name | Hex Code | Visual Context |
| :--- | :--- | :--- |
| `vintage-deepInk` | `#12100e` | Foundation canvas; rich warm black |
| `vintage-charcoal` | `#262320` | Secondary surface, card containers, gazette cards |
| `vintage-paper` | `#f3efe6` | Primary typographic heading ink |
| `vintage-sand` | `#dfd5c0` | Body serif reading text |
| `bronze` | `#c08269` | Primary narrative accent, historical highlights |
| `bronze-light` | `#dfab94` | Interactive hover states, glow borders |
| `terracotta` | `#913b30` | Gazette stamps, urgent historical dispatches |
| `khaki-dark` | `#303429` | Military archival hub (Act 06 Rani of Jhansi) |

### Typographic Hierarchy
* **Display Headlines:** *DM Serif Display* (dignified editorial gravitas)
* **Body / Archival Prose:** *Newsreader* & *Libre Baskerville* (period-accurate literary and newsprint)
* **Metadata & Datelines:** *Courier Prime* & *Space Mono* (telegraphic typewriter dispatches)

---

## 📂 Project Structure

```
Captain-Lakshmi-Invicta/
├── .github/
│   ├── workflows/ci.yml        # Automated build & verification CI pipeline
│   ├── ISSUE_TEMPLATE/         # Bug reports, historical corrections & feature requests
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   ├── archival_photos/        # Verified primary photographs & documents
│   ├── favicon.ico             # Multi-resolution favicon (16x16, 32x32, 64x64)
│   ├── favicon.svg             # Vector regiment star favicon
│   ├── apple-touch-icon.png    # High-res iOS bookmark icon
│   └── sequences/              # 14 Reconstructed WebP frame sequences (1600x900)
├── scripts/
│   └── extract_sequences.py    # FFmpeg frame extraction & scaling pipeline
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Sticky header, act tracker & rewatch trigger
│   │   ├── Hero.jsx                # Display masthead & archival photo strip
│   │   ├── DisclaimerBanner.jsx    # Historical reconstruction disclaimer
│   │   ├── CinematicSequence.jsx   # Hardware canvas sequencer & scroll engine
│   │   ├── ChapterBridge.jsx       # Editorial bridge with primary source citations
│   │   ├── Chapter06ArchivalHub.jsx# Military turning-point dossier (Rani of Jhansi)
│   │   ├── HorizontalTimeline.jsx  # Broadsheet newspaper interactive timeline
│   │   ├── LifePortfolioGrid.jsx   # 4-facet biography matrix (Struggles vs Contributions)
│   │   ├── FutureChaptersRoadmap.jsx# Acts 07–14 preview roadmap
│   │   ├── ArchivalModal.jsx       # Primary source museum viewer
│   │   └── Footer.jsx              # Historical bibliography & references
│   ├── data/
│   │   ├── sequencesData.js        # 14 Acts data registry & typography cues
│   │   ├── timelineData.js         # Chronological milestones & gazette dispatches
│   │   ├── portfolioData.js        # Archival exhibits & life facets
│   │   └── heroPhotosData.js       # Archival portraits metadata & provenance
│   ├── App.jsx                     # Top-level application coordinator
│   ├── index.css                   # Custom film grain, letterpress & photo styling
│   └── main.jsx                    # React 19 entrypoint
├── index.html                      # SEO metadata, OpenGraph tags & typography
├── tailwind.config.js              # Custom archival palette tokens
└── vite.config.js                  # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** `v18.0.0` or higher (Node 20+ recommended)
* **npm:** `v9.0.0` or higher

### Local Development

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jvstin47/Captain-Lakshmi-Invicta.git
   cd Captain-Lakshmi-Invicta
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` (or the port indicated in terminal).

4. **Production Build & Preview:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📚 Archival Provenance & Bibliography

1. **Sahgal, Lakshmi.** *A Revolutionary Life: Memoirs of a Political Activist.* Kali for Women / Zubaan Books, 1997 / 2011.
2. **National Archives of India (NAI), New Delhi:** *Indian Independence League (IIL) and Indian National Army (INA) Papers, 1942–1946.*
3. **Netaji Research Bureau, Kolkata:** *Subhas Chandra Bose Collected Works, Vol. 11 (Special INA Edition).*
4. **Imperial War Museum, London:** *Allied SEAC Dispatches & Indian National Army Interrogation Reports (1945–1946).*
5. **GSVM Medical College & Kanpur Municipal Archives:** *Records of Free Medical Practice and Public Dispensaries (1952–2012).*

---

## 📄 License & Fair Use

This project is open-source under the [MIT License](LICENSE).

Historical documents, quotes, and archival photographs are curated for non-commercial educational, commemorative, and historical preservation purposes under Fair Use guidelines. Original photographic attributions belong to their respective archival repositories.

