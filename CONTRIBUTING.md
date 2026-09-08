# Contributing to Captain Lakshmi: Invicta

Thank you for your interest in contributing to this interactive digital monograph. We welcome contributions that preserve historical memory, improve archival rigor, enhance performance, or elevate the user experience.

---

## 📜 Guiding Principles

1. **Historical Rigor & Primary Sources:** All historical claims, dates, and direct quotes must be anchored in verified archival literature (e.g., National Archives of India, Netaji Research Bureau, peer-reviewed biographies).
2. **Performance & Memory Safety:** The project uses hardware-accelerated canvas rendering across 14 high-resolution cinematic sequences. Any changes to the rendering pipeline must maintain 60 FPS scrolling and zero memory leaks.
3. **Period-Accurate Broadsheet Aesthetic:** UI components adhere to the vintage deep-ink, warm bronze, and letterpress design system.

---

## 🛠️ Development Setup

1. **Fork and Clone:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Captain-Lakshmi-Invicta.git
   cd Captain-Lakshmi-Invicta
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Local Dev Server:**
   ```bash
   npm run dev
   ```

4. **Verify Production Build:**
   ```bash
   npm run build
   ```

---

## 📂 Code Organization

- `src/components/CinematicSequence.jsx`: Canvas frame-scrubbing engine, IntersectionObserver trigger, and scroll-lock mechanics.
- `src/components/Navigation.jsx`: Sticky header, active chapter tracker, and one-click rewatch system.
- `src/components/ArchivalModal.jsx`: Fullscreen museum artifact inspection modal.
- `src/data/sequencesData.js`: Central narrative registry for all 14 acts (dates, cues, quotes, frame paths).
- `src/data/portfolioData.js`: Archival exhibits metadata and life impact matrix.
- `public/archival_photos/`: Authentic photographs and primary artifact documents.

---

## 📝 Commit Conventions

We follow clear and concise commit messages:
- `feat:` Adds a new feature or interactive capability.
- `fix:` Fixes a bug or rendering issue.
- `history:` Updates or corrects archival text, dates, or citations.
- `perf:` Performance optimizations (canvas, rAF, asset loading).
- `docs:` Documentation improvements.

---

## ⚖️ License & Fair Use

By contributing to this repository, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
