/**
 * Registry of Cinematic Frame Sequences
 * Reusable data structure for scroll-scrubbed historical reconstructions.
 * Covers all 14 chronological acts of Captain Lakshmi Sahgal's life (1914–2012).
 *
 * Fields:
 *   archivalExhibitId — which modal exhibit opens from the ChapterBridge button
 *   eraAccent         — hex accent colour for the per-era ChapterBridge tint
 */
export const SEQUENCES = [
  {
    id: "seq-01-origins",
    chapterNumber: "01",
    title: "The Awakening",
    subtitle: "MADRAS / 1914–1930s",
    era: "1914–1932",
    location: "Madras Presidency, British India",
    frameCount: 192,
    framePath: "/sequences/seq-01-origins",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-01",
    eraAccent: "#c08269",
    tagline: "Before the uniform, before the command — an awakening in the shadow of empire.",
    historicalContext: "Born to prominent criminal lawyer S. Swaminathan and freedom fighter Ammu Swaminathan, Lakshmi grew up in a household humming with anti-colonial politics. From her window, she witnessed a subcontinent awakening to Gandhi's call for non-cooperation.",
    quote: {
      text: "I grew up seeing poverty and foreign rule side by side. One could not accept both and remain quiet.",
      author: "Lakshmi Sahgal",
      source: "Memoirs & Oral History Archive"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "ORIGINS // 1914",
        headline: "Born into Conscience",
        subtext: "In colonial Madras, young Lakshmi watched her mother defy imperial edicts and shelter nationalist rebels."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-right",
        tag: "AWAKENING // 1930",
        headline: "The Unyielding Gaze",
        subtext: "Rejecting Victorian domesticity, she resolved that true liberation required the mastery of science."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "RESOLVE // 1932",
        headline: "A Vow of Unconditional Service",
        subtext: "She chose the hardest path: entering medical school to heal those whom colonial rule abandoned."
      }
    ]
  },
  {
    id: "seq-02-medicine",
    chapterNumber: "02",
    title: "The Science of Healing",
    subtitle: "MADRAS MEDICAL COLLEGE / 1932–1938",
    era: "1932–1938",
    location: "Madras Medical College",
    frameCount: 192,
    framePath: "/sequences/seq-02-medicine",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-02",
    eraAccent: "#b8976e",
    tagline: "Anatomy, obstetrics, and the discipline of life-saving science.",
    historicalContext: "At a time when female medical students were an extreme rarity, Lakshmi enrolled at Madras Medical College. She mastered human anatomy, obstetrics, and surgery, graduating with an MBBS in 1938 and a Diploma in Gynaecology and Obstetrics in 1940.",
    quote: {
      text: "Medicine gave me the only true weapon I ever believed in: the ability to preserve human dignity in the midst of suffering.",
      author: "Dr. Lakshmi Swaminathan",
      source: "Clinical Notes & Archival Reflections"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "SCHOLARSHIP // 1934",
        headline: "Mastering the Blade & Stethoscope",
        subtext: "One of the few women in Madras Medical College, she dissected anatomy by kerosene light."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "SPECIALIZATION // 1938",
        headline: "A Shield for Mothers & Children",
        subtext: "Specializing in gynaecology, she confronted the preventable mortality claiming impoverished women."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "GRADUATION // 1940",
        headline: "The Physician Takes the Oath",
        subtext: "Armed with medical degrees, she stepped out into a world hurtling toward global warfare."
      }
    ]
  },
  {
    id: "seq-03-calling",
    chapterNumber: "03",
    title: "The Healer's Oath",
    subtitle: "COLONIAL HOSPITALS / 1938–1940",
    era: "1938–1940",
    location: "Kasturba Gandhi Government Hospital, Madras",
    frameCount: 192,
    framePath: "/sequences/seq-03-calling",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-03",
    eraAccent: "#9e7a56",
    tagline: "Walking the long colonial corridors where life and death were divided by class and race.",
    historicalContext: "Dr. Lakshmi began her clinical practice in Madras government hospitals. There she witnessed how colonial austerity denied medicine to impoverished mothers and working-class families, hardening her resolve to practice medicine as radical social justice.",
    quote: {
      text: "When you walk past ward after ward of dying mothers who could have lived with simple hygiene and care, you realize disease is not just biology — it is injustice.",
      author: "Dr. Lakshmi Sahgal",
      source: "Interview Archive, New Delhi"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "PRACTICE // 1939",
        headline: "Corridors of Segregation",
        subtext: "Walking the wards of Kasturba Gandhi Hospital, she witnessed medicine rationed by race and rank."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "CONFRONTATION // 1940",
        headline: "The Cost of Empire",
        subtext: "Seeing destitute mothers die for lack of basic antiseptics forged her unshakeable moral rage."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "CROSSING // 1940",
        headline: "A Voyage into the Unknown",
        subtext: "Determined to practice medicine without colonial fetters, she sailed east across the Bay of Bengal."
      }
    ]
  },
  {
    id: "seq-04-singapore",
    chapterNumber: "04",
    title: "The Crossroads of Malaya",
    subtitle: "SINGAPORE / 1940–1941",
    era: "1940–1941",
    location: "Serangoon Road & Malayan Rubber Plantations",
    frameCount: 240,
    framePath: "/sequences/seq-04-singapore",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-04",
    eraAccent: "#7a5c3e",
    tagline: "Among immigrant laborers, coolies, and rubber tappers in colonial Singapore.",
    historicalContext: "Arriving in Singapore in 1940, Dr. Lakshmi set up a private practice along Serangoon Road. She immediately opened her doors to the poorest migrant labourers — Tamil rubber tappers, dockworkers, and domestic servants who were denied care in colonial hospitals.",
    quote: {
      text: "Singapore was the crossroads of the East. The British lived in colonial luxury while the plantation coolies died of untreated malaria and dysentery.",
      author: "Lakshmi Sahgal",
      source: "A Revolutionary Life: Memoirs"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "DIASPORA // 1940",
        headline: "Arrival at Serangoon Road",
        subtext: "Stepping into bustling Singapore, she encountered hundreds of thousands of disenfranchised Indian migrants."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-left",
        tag: "SANCTUARY // 1941",
        headline: "The Doctor of the Plantation Coolies",
        subtext: "She treated impoverished rubber tappers and dockers free of charge, earning their deep devotion."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-right",
        tag: "WAR // DECEMBER 1941",
        headline: "The Horizon Catches Fire",
        subtext: "Japanese imperial forces invade Malaya; Singapore's fortress colony begins to crumble."
      }
    ]
  },
  {
    id: "seq-05-clinic",
    chapterNumber: "05",
    title: "Clinic of the Dispossessed",
    subtitle: "WAR & RESISTANCE / 1941–1943",
    era: "1941–1943",
    location: "Serangoon Free Medical Clinic, Singapore",
    frameCount: 240,
    framePath: "/sequences/seq-05-clinic",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-05",
    eraAccent: "#5c3e28",
    tagline: "A clinic turned frontline sanctuary during aerial bombings and occupation.",
    historicalContext: "When Japanese bombs rained down on Singapore in early 1942, Dr. Lakshmi stayed at her clinic day and night, treating civilian casualties, burns, and shrapnel wounds. Following the British surrender, she formed the Medical Wing of the India Independence League (IIL) to provide relief to prisoners of war.",
    quote: {
      text: "We worked by candlelight with Japanese bombers shaking the floor. When someone is bleeding on your table, you have no time to fear.",
      author: "Dr. Lakshmi Sahgal",
      source: "INA Oral Archives"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-right",
        tag: "SIEGE // FEBRUARY 1942",
        headline: "Operating Under the Bombs",
        subtext: "While colonial administrators fled the island, Dr. Lakshmi kept her clinic doors open amid falling artillery."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-left",
        tag: "OCCUPATION // 1942–1943",
        headline: "Relief for the Broken & Starving",
        subtext: "Leading medical relief for POWs and orphaned families, she turned her clinic into a fortress of survival."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "DESTINY // JULY 1943",
        headline: "Netaji's Midnight Summons",
        subtext: "Subhas Chandra Bose arrived in Singapore with a vision that would forever alter her life."
      }
    ]
  },
  {
    id: "seq-06-commander",
    chapterNumber: "06",
    title: "The Commander",
    subtitle: "RANI OF JHANSI REGIMENT / 1943–1944",
    era: "1943–1944",
    location: "Singapore & Rangoon, Burma",
    frameCount: 240,
    framePath: "/sequences/seq-06-commander",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-01",
    eraAccent: "#8b3e2f",
    tagline: "Netaji's call answered: Commander of Asia's first all-women combat regiment.",
    historicalContext: "In July 1943, Subhas Chandra Bose announced the formation of the Rani of Jhansi Regiment. Dr. Lakshmi stepped forward immediately, taking command of 1,500 women volunteers across Malaya and Burma who traded saris for combat fatigues and rifles.",
    quote: {
      text: "We were not just soldiers; we were women asserting our equal right to fight and sacrifice for India's freedom.",
      author: "Captain Lakshmi Sahgal",
      source: "Rani of Jhansi Orderly Dispatches"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "COMMISSION // JULY 1943",
        headline: "From Doctor to Commander",
        subtext: "She traded her medical coat for olive khaki, taking command of Asia's first all-women combat infantry."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-right",
        tag: "DRILL // AUTUMN 1943",
        headline: "Fifteen Hundred Rifles",
        subtext: "Plantation workers, nurses, and students mastered bayonets, machine guns, and jungle warfare."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "GOVERNMENT // OCT 1943",
        headline: "Minister of the Azad Hind",
        subtext: "Appointed Minister for Women's Affairs in Netaji's Provisional Government of Free India."
      }
    ]
  },
  {
    id: "seq-07-burma",
    chapterNumber: "07",
    title: "The Burma March",
    subtitle: "IMPHAL & FRONTIER WARFARE / 1944–1945",
    era: "1944–1945",
    location: "Indo-Burma Border & Arakan Front",
    frameCount: 240,
    framePath: "/sequences/seq-07-burma",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-02",
    eraAccent: "#556b2f",
    tagline: "Marching through monsoon jungles and Allied air bombardments.",
    historicalContext: "The INA advanced alongside Japanese forces toward the Indian frontier at Imphal and Kohima. The Ranis served on frontline medical duty, facing incessant aerial shelling, tropical dysentery, and dwindling rations.",
    quote: {
      text: "The jungle mud reached our knees and Allied aircraft hunted us from the sky, but our eyes were set upon the border of our motherland.",
      author: "Captain Lakshmi Sahgal",
      source: "Burma Campaign Diaries"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "MARCH // 1944",
        headline: "Into the Monsoon Jaws",
        subtext: "Advancing toward the Indian border through knee-deep mud and torrential rainforest downpours."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "COMBAT // 1944",
        headline: "Triage Under Allied Shellfire",
        subtext: "Operating on wounded soldiers in bamboo dugouts while Allied bombers strafed the canopy."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "IMPHAL // LATE 1944",
        headline: "The Tide Turns in Blood",
        subtext: "Starvation, malaria, and severed supply lines forced a heroic but agonising fighting retreat."
      }
    ]
  },
  {
    id: "seq-08-jungle",
    chapterNumber: "08",
    title: "The Jungle Retreat",
    subtitle: "MAYMYO TO CAPTURE / 1945",
    era: "1945",
    location: "Maymyo & Ziawadi, Burma",
    frameCount: 240,
    framePath: "/sequences/seq-08-jungle",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-03",
    eraAccent: "#3c4a25",
    tagline: "Refusing to evacuate while wounded soldiers and civilians remained.",
    historicalContext: "During the chaotic retreat through Burma in mid-1945, Netaji ordered the Ranis to evacuate back to Bangkok. Captain Lakshmi oversaw the safe passage of her troops, but remained behind in Maymyo with a small medical team to care for wounded soldiers until captured by British forces.",
    quote: {
      text: "They ordered me to save myself. But a commander does not retreat before her soldiers, and a physician never abandons the dying.",
      author: "Captain Lakshmi Sahgal",
      source: "British Military Intelligence Debriefs"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "EVACUATION // MAY 1945",
        headline: "Ensuring Her Troops' Survival",
        subtext: "Captain Lakshmi personally escorted hundreds of young women soldiers through bomb-ravaged Burma to safety."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "STAND // JUNE 1945",
        headline: "Refusing the Flight to Safety",
        subtext: "She stayed behind in the Maymyo jungle hospital because dying men still needed a doctor."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "CAPTURE // JULY 1945",
        headline: "Unbroken in Captivity",
        subtext: "Captured by British forces in the Burmese hills, she faced interrogation with absolute defiance."
      }
    ]
  },
  {
    id: "seq-09-trial",
    chapterNumber: "09",
    title: "Trial & Return",
    subtitle: "THE RED FORT AWAKENING / 1946",
    era: "1946",
    location: "Red Fort, Delhi & Madras",
    frameCount: 240,
    framePath: "/sequences/seq-09-trial",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-04",
    eraAccent: "#cd5c5c",
    tagline: "The trials that ignited an empire-wide revolt.",
    historicalContext: "Flown to India as a prisoner in March 1946, Captain Lakshmi's arrival coincided with the famous Red Fort INA trials and the Royal Indian Navy mutiny. The British recognized that executing or imprisoning her would ignite uncontrollable national rebellion, prompting her release under house surveillance.",
    quote: {
      text: "The British brought us back as traitors to be broken. Instead, the people embraced us as the catalysts of freedom.",
      author: "Captain Lakshmi Sahgal",
      source: "Oral Testimony, New Delhi"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "RETURN // MARCH 1946",
        headline: "Brought Home in Chains",
        subtext: "Flown into Delhi as a prisoner of war, she found the nation on fire with anti-colonial fervor."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "REBELLION // 1946",
        headline: "The Spark that Lit the Subcontinent",
        subtext: "The INA Red Fort trials and Navy mutinies made British military control impossible to sustain."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "FREEDOM // 1946–1947",
        headline: "The Hero's Welcome",
        subtext: "Freed by overwhelming public revolt, she stood celebrated as the living embodiment of Azad Hind."
      }
    ]
  },
  {
    id: "seq-10-kanpur",
    chapterNumber: "10",
    title: "Kanpur: Fifty Years of Care",
    subtitle: "THE PEOPLE'S CLINIC / 1947–1970",
    era: "1947–1970",
    location: "Civil Lines & Industrial Wards, Kanpur",
    frameCount: 240,
    framePath: "/sequences/seq-10-kanpur",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-05",
    eraAccent: "#8b7355",
    tagline: "From military commander back to barefoot physician for industrial mill workers.",
    historicalContext: "In 1947, Lakshmi married Col. Prem Kumar Sahgal and settled in industrial Kanpur. Rejecting prestigious political appointments in independent India, she opened a modest clinic in the congested alleys of Kanpur, treating destitute mill laborers, Partition refugees, and working women for free or nominal pennies.",
    quote: {
      text: "Independence on paper is nothing if the poor are still dying of preventable infection. My frontline is right here in Kanpur.",
      author: "Dr. Lakshmi Sahgal",
      source: "Kanpur Free Dispensary Records"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "DISPENSARY // 1947",
        headline: "A New Frontline in the Alleys",
        subtext: "Rejecting high political office, she established a humble clinic in the industrial mill districts of Kanpur."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "DEVOTION // 1950s–1960s",
        headline: "Free Medicine for Mill Hands & Refugees",
        subtext: "Treating over a hundred patients daily, she paid for their life-saving prescriptions out of her own pocket."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "LEGACY // HALF CENTURY",
        headline: "The Captain Who Stayed to Heal",
        subtext: "For five continuous decades, her clinic remained an open sanctuary for Kanpur's poorest families."
      }
    ]
  },
  {
    id: "seq-11-refugee",
    chapterNumber: "11",
    title: "1971: The Refugee Camps",
    subtitle: "BORDER CRISIS AT BONGAON / 1971",
    era: "1971",
    location: "Bongaon Border Camps, West Bengal",
    frameCount: 240,
    framePath: "/sequences/seq-11-refugee",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-01",
    eraAccent: "#6b8e23",
    tagline: "Mobilizing emergency medical camps during the Bangladesh liberation refugee crisis.",
    historicalContext: "During the 1971 Bangladesh Liberation War, over 10 million refugees fled into India under horrific conditions. At age 57, Dr. Lakshmi rushed to the overcrowded border camps in Bongaon, West Bengal, organizing sanitation, combating cholera outbreaks, and personally administering IV fluids in monsoon mud for months.",
    quote: {
      text: "Human suffering has neither nationality nor politics. When a child is dehydrated from cholera, you do not ask their origin — you act.",
      author: "Dr. Lakshmi Sahgal",
      source: "1971 Medical Relief Dispatches"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "CRISIS // 1971",
        headline: "Ten Million in Flight",
        subtext: "As millions fled genocidal violence in Bangladesh, Dr. Lakshmi rushed directly to the border camps."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-left",
        tag: "EPIDEMIC // BONGAON",
        headline: "The Wall Against Cholera",
        subtext: "Working waist-deep in monsoon mud, she set up emergency saline stations to save dehydrating infants."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "COMPASSION // 1971",
        headline: "Medicine Without Borders",
        subtext: "Her tireless relief proved that true patriotism transcends boundaries to protect vulnerable humanity."
      }
    ]
  },
  {
    id: "seq-12-activist",
    chapterNumber: "12",
    title: "The Frontline Activist",
    subtitle: "BHOPAL & PROTECTION / 1980s–1990s",
    era: "1980s–1990s",
    location: "Kanpur & Bhopal, India",
    frameCount: 240,
    framePath: "/sequences/seq-12-activist",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-02",
    eraAccent: "#8b5a2b",
    tagline: "Shielding minorities in 1984 riots and treating toxic gas survivors in Bhopal.",
    historicalContext: "In 1984, during the anti-Sikh violence following Indira Gandhi's assassination, Captain Lakshmi personally stood in the streets of Kanpur, confronting rioters and sheltering Sikh families in her home and clinic. Later that year, she led medical relief teams to Bhopal following the Union Carbide toxic gas disaster, demanding corporate accountability.",
    quote: {
      text: "If you cannot stand between a violent mob and an innocent family, your talk of patriotism is an empty lie.",
      author: "Lakshmi Sahgal",
      source: "All India Democratic Women's Association (AIDWA) Archives"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "COURAGE // NOV 1984",
        headline: "Standing Between Mob & Neighbour",
        subtext: "During anti-Sikh violence in Kanpur, 70-year-old Captain Lakshmi blocked rioters with her own body."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "BHOPAL // DEC 1984",
        headline: "Healing the Poisoned City",
        subtext: "Following the Union Carbide gas tragedy, she led medical teams to treat thousands suffering respiratory trauma."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "SOLIDARITY // 1980s–90s",
        headline: "Organising Working Women Nationwide",
        subtext: "As a founding pillar of AIDWA, she marched for equal wages, safety, and constitutional rights."
      }
    ]
  },
  {
    id: "seq-13-candidate",
    chapterNumber: "13",
    title: "The People's Candidate",
    subtitle: "PRESIDENTIAL RUN / 2002",
    era: "2002",
    location: "New Delhi & Nationwide",
    frameCount: 240,
    framePath: "/sequences/seq-13-candidate",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-03",
    eraAccent: "#934b31",
    tagline: "Nominated for the Presidency of India at age 87 to champion constitutional pluralism.",
    historicalContext: "In 2002, four left parties nominated 87-year-old Captain Lakshmi as their candidate for President of the Republic of India against Dr. A.P.J. Abdul Kalam. While acknowledging the electoral math, she used her nationwide platform to campaign vigorously for secularism, social democracy, and the economic rights of the impoverished.",
    quote: {
      text: "I am not contesting against Dr. Kalam. I am contesting to raise the voice of the millions who have no voice in our democracy.",
      author: "Captain Lakshmi Sahgal",
      source: "Press Conference, New Delhi (2002)"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "top-left",
        tag: "NOMINATION // 2002",
        headline: "The Conscience of the Republic",
        subtext: "At 87, she was nominated for President of India to defend secular democracy and pluralism."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "CAMPAIGN // 2002",
        headline: "A Platform for the Forgotten",
        subtext: "She traversed the nation demanding universal healthcare, farmers' dignity, and communal peace."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "INTEGRITY",
        headline: "Principles Higher Than Power",
        subtext: "A campaign that proved fearless dissent is the heartbeat of a truly free democracy."
      }
    ]
  },
  {
    id: "seq-14-legacy",
    chapterNumber: "14",
    title: "The Living Legacy",
    subtitle: "AN UNBROKEN OATH / 2012 & BEYOND",
    era: "2012 & Beyond",
    location: "Kanpur, Uttar Pradesh",
    frameCount: 240,
    framePath: "/sequences/seq-14-legacy",
    framePrefix: "frame_",
    frameExtension: "webp",
    aspectRatio: "16/9",
    type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-05",
    eraAccent: "#7c6853",
    tagline: "Climbing clinic stairs at 92; donating her body to medical science in death.",
    historicalContext: "Captain Lakshmi Sahgal continued examining patients at her Kanpur clinic until age 92. When she passed away on 23 July 2012 at age 97, thousands of Kanpur workers and citizens lined the streets in tribute. In accordance with her living will, her body and corneas were donated to GSVM Medical College for medical research — an unbroken oath of service to humanity.",
    quote: {
      text: "My body belongs to humanity and science. Use whatever can help another human being breathe, learn, or live.",
      author: "Dr. Lakshmi Sahgal",
      source: "Living Will & Medical Archive (2012)"
    },
    typographyCues: [
      {
        progressStart: 0.05,
        progressEnd: 0.36,
        position: "bottom-left",
        tag: "HEALER // UNTIL AGE 92",
        headline: "Examining Her Final Patients",
        subtext: "Into her nineties, she climbed the stairs of her Kanpur clinic every morning to treat the poor."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "DONATION // JULY 2012",
        headline: "A Final Gift to Medical Science",
        subtext: "In death, her body and corneas were gifted to GSVM Medical College to educate young doctors."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "IMMORTALITY",
        headline: "The Unbroken Oath",
        subtext: "Physician, Commander, Healer — a life eternally dedicated to human freedom and dignity."
      }
    ]
  }
];

export const ALL_CHAPTERS = [
  { id: "ch-01", number: "01", title: "Before the Captain", subtitle: "Origins & Awakening", year: "1914–1932", hasClip: true, sequenceId: "seq-01-origins" },
  { id: "ch-02", number: "02", title: "The Science of Healing", subtitle: "Madras Medical College", year: "1932–1938", hasClip: true, sequenceId: "seq-02-medicine" },
  { id: "ch-03", number: "03", title: "The Healer's Oath", subtitle: "Colonial Hospitals", year: "1938–1940", hasClip: true, sequenceId: "seq-03-calling" },
  { id: "ch-04", number: "04", title: "Crossroads in Malaya", subtitle: "Singapore Diaspora", year: "1940–1941", hasClip: true, sequenceId: "seq-04-singapore" },
  { id: "ch-05", number: "05", title: "Clinic of the Dispossessed", subtitle: "War & Sanctuary", year: "1941–1943", hasClip: true, sequenceId: "seq-05-clinic" },
  { id: "ch-06", number: "06", title: "The Commander", subtitle: "The Rani of Jhansi Regiment", year: "1943–1944", hasClip: true, sequenceId: "seq-06-commander" },
  { id: "ch-07", number: "07", title: "The Burma March", subtitle: "Imphal & Frontier Warfare", year: "1944–1945", hasClip: true, sequenceId: "seq-07-burma" },
  { id: "ch-08", number: "08", title: "The Jungle Retreat", subtitle: "Maymyo to Capture", year: "1945–1946", hasClip: true, sequenceId: "seq-08-jungle" },
  { id: "ch-09", number: "09", title: "Trial & Return", subtitle: "The Red Fort Awakening", year: "1946–1947", hasClip: true, sequenceId: "seq-09-trial" },
  { id: "ch-10", number: "10", title: "Kanpur: Fifty Years of Care", subtitle: "The People's Clinic", year: "1947–1970", hasClip: true, sequenceId: "seq-10-kanpur" },
  { id: "ch-11", number: "11", title: "1971: The Refugee Camps", subtitle: "Border Crisis at Bongaon", year: "1971", hasClip: true, sequenceId: "seq-11-refugee" },
  { id: "ch-12", number: "12", title: "The Frontline Activist", subtitle: "Bhopal & 1984 Protection", year: "1980s–1990s", hasClip: true, sequenceId: "seq-12-activist" },
  { id: "ch-13", number: "13", title: "The People's Candidate", subtitle: "2002 Presidential Run", year: "2002", hasClip: true, sequenceId: "seq-13-candidate" },
  { id: "ch-14", number: "14", title: "The Living Legacy", subtitle: "An Unbroken Oath", year: "2012 & Beyond", hasClip: true, sequenceId: "seq-14-legacy" },
];
