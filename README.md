<div align="center">

# CAPTAIN LAKSHMI SAHGAL (1914–2012)
### *An Interactive Digital Monograph & Scroll-Driven Historical Documentary*

[![ACM-W INVICTA](https://img.shields.io/badge/ACM--W-INVICTA%20Submission-c08269?style=for-the-badge)](https://github.com/jvstin47/Captain-Lakshmi-Invicta)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Canvas 2D](https://img.shields.io/badge/Render-Hardware_Canvas_2D-e34c26?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

<p align="center">
  <strong>Physician • Commander of the Rani of Jhansi Regiment • Minister of State • Prisoner of War • Lifelong Healer</strong>
</p>

<p align="center">
  <em>"To heal is to resist; to serve is to remain free."</em>
</p>

---

</div>

## 📖 Executive Summary

This project is an editorial-grade, digital museum monograph and interactive web documentary commemorating the life, military leadership, and medical humanitarianism of **Captain Lakshmi Sahgal (Dr. Lakshmi Swaminathan, 1914–2012)**.

Built as an entry for the **ACM-W INVICTA** competition, the platform moves beyond conventional scrolling articles by introducing a **hardware-accelerated, scroll-driven cinematic frame sequencer**, contextualizing authentic historical archives with visual reconstructions of pre-independence India, colonial Singapore, wartime Burma, and post-independence public health activism.

---

## 🧭 Narrative Pillars: The 14 Acts

The digital monograph is architected around a 14-chapter biographical continuum:

| Act | Title | Era | Location | Key Theme |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **The Awakening** | 1914–1932 | Madras Presidency | Early life, Swaminathan family political crucible, anti-colonial awakening |
| **02** | **The Science of Healing** | 1932–1938 | Madras Medical College | MBBS & DGO training, mastering anatomy & obstetrics during colonial austerity |
| **03** | **The Healer’s Oath** | 1938–1940 | Madras Govt Hospitals | Segregated colonial hospital wards, healthcare as social justice |
| **04** | **Crossroads in Malaya** | 1940–1941 | Singapore / Malaya | Diaspora practice on Serangoon Road, treating Tamil rubber plantation coolies |
| **05** | **Clinic of the Dispossessed** | 1941–1943 | Wartime Singapore | Japanese air raids, frontline medical sanctuary, IIL Medical Wing relief |
| **06** | **The Commander Takes the Field** | 1943–1944 | Singapore / Malaya | Netaji 4-hour meeting, raising Asia’s first all-women combat regiment (1,500+ troops) |
| **07** | **The Burma March** | 1944–1945 | Maymyo / Imphal | Jungle warfare, mobile military hospital under Allied artillery bombardment |
| **08** | **The Jungle Retreat** | 1945–1946 | Kalaw / Burma Front | Refusing surrender until patients evacuated; capture by British forces |
| **09** | **Trial & Return** | 1946–1947 | Delhi / Red Fort | INA Trials public fervor, release, hero’s return to a free nation |
| **10** | **Kanpur: Fifty Years of Care** | 1947–1990s | Kanpur, UP | The Clinic of the Poor: ₹5 consultations, free maternal & refugee care |
| **11** | **The 1971 Refugee Crisis** | 1971 | Bongaon Border | Organizing medical relief camps for millions fleeing the Bangladesh genocide |
| **12** | **The Frontline Activist** | 1980s–1990s | Kanpur / Bhopal | Bhopal disaster medical relief; protecting Sikh families during 1984 violence |
| **13** | **The People’s Candidate** | 2002 | New Delhi | Historic presidential candidacy representing democratic and secular dissent |
| **14** | **The Living Legacy** | 2012 & Beyond | Global Record | Final donation of her body for medical research; unbroken physician's oath |

---

## ⚡ Technical Architecture & Engineering Innovations

### 1. Scroll-Controlled Frame Sequencer Engine (`CinematicSequence.jsx`)
* **Hardware-Accelerated `<canvas>` Renderer:** Renders frame-by-frame image sequences synchronised to scroll delta, avoiding the latency and memory overhead of HTML5 `<video>` scrubbing.
* **Device Pixel Ratio (DPR) Scaling:** Dynamic resolution management preserving sharpness on Retina and 4K displays with aspect-ratio cover mathematics.
* **Chunked Batch Preloading & Memory Safety:** Frames load progressively in 8-frame chunks gated behind an `IntersectionObserver`. Off-screen sequences do not consume memory, preventing OOM crashes on mobile.
* **ResizeObserver Auto-Sync:** Dynamically calculates canvas dimensions upon device rotation and browser viewport adjustments.
* **Decoupled Mouse Parallax:** State-decoupled mouse offset with `requestAnimationFrame` throttling for stutter-free cursor depth perception.
* **Single-Cue Cross-Fade Engine:** Dynamic typography cues trigger cleanly on scroll ranges without visual text overlap.

### 2. Automated Asset Pipeline & Watermark Inpainting (`scripts/extract_sequences.py`)
* Source video clips are processed through a custom FFmpeg pipeline:
  ```bash
  ffmpeg -i source.mp4 -vf "delogo=x=1670:y=830:w=180:h=160,fps=8,scale=1600:-1:flags=lanczos" -c:v libwebp -quality 82 out/frame_%03d.webp
  ```
* High-quality Lanczos scaling generates lightweight, high-fidelity WebP frames (~55KB/frame) while seamlessly inpainting synthetic watermark artifacts at the asset level.

### 3. Broadsheet Daily Gazette Timeline (`HorizontalTimeline.jsx`)
* **Authentic 1940s Newsprint Aesthetic:** Designed as *"THE HISTORICAL GAZETTE & DISPATCH"*, featuring drop-cap editorial typography, volume/issue datelines, and letterpress drop shadows.
* **Desk Category Filters:** Interactive switching across *Origins, Medicine, Command, Humanitarian, Activism,* and *Legacy*.
* **Right-Edge Scroll Affordance:** Soft radial fade indicator guiding the user through 12 chronological dispatches.

### 4. Archival Photographic Record & Dual Provenance Standard
* **Historical Reconstruction Notice:** Clear ethical distinction between graphical visual recreations and verified primary source materials.
* **Archival Photo Carousel (`Hero.jsx`):** Dedicated browser for authentic photographs sourced from the National Archives of India and Netaji Research Bureau.
* **Deep-Inspection Modal (`ArchivalModal.jsx`):** High-resolution examination of primary source artifacts with archival metadata, cataloging IDs, and historical provenance.

---

## 🎨 Design System & Palette

| Token Name | Hex Code | Purpose & Context |
| :--- | :--- | :--- |
| `vintage-deepInk` | `#12100e` | Foundation background; rich warm black |
| `vintage-charcoal` | `#262320` | Secondary surface, card containers, news cards |
| `vintage-paper` | `#f3efe6` | Primary typographic heading ink |
| `vintage-sand` | `#dfd5c0` | Body serif reading text |
| `bronze` | `#c08269` | Primary narrative accent, historical highlights |
| `bronze-light` | `#dfab94` | Interactive hover states, glow borders |
| `terracotta` | `#913b30` | Gazette stamps, urgent historical dispatches |
| `khaki-dark` | `#303429` | Military archival hub (Act 06 Rani of Jhansi) |

### Typography Hierarchy
* **Display Headlines:** *DM Serif Display* (dignified editorial gravitas)
* **Body / Archival Prose:** *Newsreader* & *Libre Baskerville* (period-accurate literary and newsprint)
* **Metadata & Datelines:** *Courier Prime* & *Space Mono* (telegraphic typewriter dispatches)

---

## 📂 Project Structure

```
Invicta/
├── public/
│   ├── archival_photos/        # Authentic historical photographs (photo_01 to photo_07)
│   └── sequences/              # Reconstructed WebP frame sequences
│       ├── seq-01-origins/     # Act 01 (64 frames)
│       ├── seq-02-medicine/    # Act 02 (64 frames)
│       ├── seq-03-calling/     # Act 03 (64 frames)
│       ├── seq-04-singapore/   # Act 04 (70 frames)
│       └── seq-05-clinic/      # Act 05 (70 frames)
├── scripts/
│   └── extract_sequences.py    # FFmpeg frame extraction & watermark inpainting pipeline
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Editorial header, live Act tracker & chapter drawer
│   │   ├── Hero.jsx                # Display masthead & archival photo carousel
│   │   ├── DisclaimerBanner.jsx    # Historical reconstruction disclaimer notice
│   │   ├── CinematicSequence.jsx   # Hardware-accelerated canvas frame sequencer
│   │   ├── ChapterBridge.jsx       # Era-accented context bridge with verified citations
│   │   ├── Chapter06ArchivalHub.jsx# Turning point military archive (Rani of Jhansi)
│   │   ├── HorizontalTimeline.jsx  # Broadsheet newspaper interactive timeline
│   │   ├── LifePortfolioGrid.jsx   # 4-facet biography portfolio (Struggles vs Contributions)
│   │   ├── FutureChaptersRoadmap.jsx# Acts 07–14 editorial narrative preview
│   │   ├── ArchivalModal.jsx       # Museum deep-inspection modal
│   │   └── Footer.jsx              # Historical sources, bibliography & credits
│   ├── data/
│   │   ├── sequencesData.js        # Sequence definitions, frame paths, typography cues
│   │   ├── timelineData.js         # 12 verified milestones with datelines & impact
│   │   ├── portfolioData.js        # Life roles matrix & archival exhibits
│   │   └── heroPhotosData.js       # Archival photo metadata & provenance
│   ├── App.jsx                     # Core application orchestrator
│   ├── index.css                   # Vintage film grain, vignettes & letterpress styling
│   └── main.jsx                    # React entrypoint
├── index.html                      # SEO metadata, OpenGraph tags & Google Fonts
├── tailwind.config.js              # Vintage tokens & font mappings
└── vite.config.js                  # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher
* *(Optional for frame extraction)*: **FFmpeg 6.0+** with `libwebp` support

### Installation & Run

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:jvstin47/Captain-Lakshmi-Invicta.git
   cd Captain-Lakshmi-Invicta
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000/` (or port indicated in the terminal).

4. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📚 Primary Historical References & Bibliography

1. **Sahgal, Lakshmi.** *A Revolutionary Life: Memoirs of a Political Activist.* Kali for Women / Zubaan Books, 1997 / 2011.
2. **National Archives of India (NAI), New Delhi:** *Indian Independence League (IIL) and Indian National Army (INA) Papers, 1942–1946.*
3. **Netaji Research Bureau, Kolkata:** *Subhas Chandra Bose Collected Works, Vol. 11 (Special INA Edition).*
4. **Imperial War Museum, London:** *Allied SEAC Dispatches & Indian National Army Interrogation Reports (1945–1946).*
5. **GSVM Medical College & Kanpur Municipal Archives:** *Records of Free Medical Practice and Public Dispensaries (1952–2012).*

---

## 📄 License & Fair Use

Developed for the **ACM-W INVICTA Competition**. Historical texts, dispatches, and quotes are in the public domain or referenced under Fair Use for educational and non-commercial historical preservation. Reconstructed visual scenes are proprietary to this presentation.
