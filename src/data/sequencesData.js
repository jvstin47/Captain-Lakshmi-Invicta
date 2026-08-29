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
        headline: "A Daughter of Awakening",
        subtext: "Raised in Madras among thinkers, jurists, and defiant voices."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-right",
        tag: "CONSCIENCE // 1930",
        headline: "The Gaze Beyond the Shutter",
        subtext: "Rejecting social conservatism, she chose the hardest discipline of her era: modern medicine."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "DECISION",
        headline: "Service Over Privilege",
        subtext: "A vow to heal those whom the colonial state chose to ignore."
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
        headline: "The Anatomy of Resistance",
        subtext: "Rigorous scientific mastery at Madras Medical College."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "SPECIALIZATION // 1938",
        headline: "Women's Health as Duty",
        subtext: "Specializing in gynaecology to serve disenfranchised mothers and children."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "GRADUATION // 1940",
        headline: "MBBS & DGO Conferral",
        subtext: "Armed with stethoscope and surgical knife, ready for the world's convulsions."
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
        headline: "Through Arches of Duty",
        subtext: "A physician moving between segregated colonial hospital wards."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "REALITY // 1940",
        headline: "The Divide of Empire",
        subtext: "Witnessing how colonial healthcare abandoned rural and impoverished urban populations."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "DEPARTURE",
        headline: "Beyond the Subcontinent",
        subtext: "In 1940, personal rupture and humanitarian duty led her across the Bay of Bengal to Singapore."
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
        tag: "SINGAPORE // 1940",
        headline: "Arrival at the Crossroads",
        subtext: "Stepping into the dense, humid crossroads of Southeast Asia on the brink of war."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-left",
        tag: "DIASPORA // 1941",
        headline: "The Plantation Coolies",
        subtext: "Thousands of disenfranchised Indian migrants found their only doctor in Dr. Lakshmi."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-right",
        tag: "THUNDER ON THE HORIZON",
        headline: "1941: The Storm Gathers",
        subtext: "World War II reaches Southeast Asia. Singapore is about to fall."
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
        tag: "SANCTUARY // 1942",
        headline: "Instruments of Mercy",
        subtext: "Stethoscopes, clamps, and handwritten registers amidst artillery smoke."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-left",
        tag: "OCCUPATION // 1942",
        headline: "Treating Wounded & POWs",
        subtext: "Leading the India Independence League medical relief across Singapore."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "APPOINTMENT WITH DESTINY",
        headline: "July 1943: Netaji Arrives",
        subtext: "A four-hour midnight meeting in Singapore will transform the doctor into a Captain."
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
        tag: "COMMISSION // 1943",
        headline: "The Captain Steps Forward",
        subtext: "Trading the clinical gown for the khaki uniform of the Indian National Army."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-right",
        tag: "TRAINING // 1943",
        headline: "Bayonets & Night Maneuvers",
        subtext: "1,500 volunteers undergo rigorous infantry combat drill in Singapore and Rangoon."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "MINISTRY",
        headline: "Minister of State",
        subtext: "Appointed to Netaji's Provisional Government of Free India (Azad Hind)."
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
        tag: "ADVANCE // 1944",
        headline: "Monsoon Frontier",
        subtext: "Trailing through dense Burmese jungle under relentless tropical rainfall."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "FRONTLINE CARE",
        headline: "Under Allied Air Raids",
        subtext: "Treating devastating shrapnel injuries in makeshift bamboo trenches."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "THE TURNING TIDE",
        headline: "The Imphal Reversal",
        subtext: "Allied counter-offensives and monsoon supply cuts force a desperate defensive stance."
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
        tag: "RETREAT // 1945",
        headline: "Guiding the Safe Passage",
        subtext: "Escorting hundred of women troops across bombed terrain to Thailand."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "LAST SANCTUARY",
        headline: "The Maymyo Stand",
        subtext: "Remaining behind in the jungle hospital as British 14th Army advances."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "CAPTURE // JULY 1945",
        headline: "Prisoner of the Crown",
        subtext: "Arrested in the Burmese hills, maintaining military dignity under interrogation."
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
        tag: "DELHI // MARCH 1946",
        headline: "Return in Captivity",
        subtext: "Repatriated under armed British military escort into a nation on the brink of revolt."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "POPULAR UPRISING",
        headline: "The Red Fort Galvanism",
        subtext: "Huge crowds across Calcutta, Bombay, and Delhi demand the unconditional release of INA officers."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "RELEASE",
        headline: "A Victorious Return",
        subtext: "Released into mass adulation as the sun rapidly sets on the British Empire."
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
        tag: "KANPUR // 1947",
        headline: "The Displaced & The Worker",
        subtext: "Opening a humble dispensary amidst the smoke of Kanpur's textile mills."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "DEDICATION // 1950s–1960s",
        headline: "Daily Queues of the Forgotten",
        subtext: "Treating over a hundred patients daily, funding medicines from her own meager pocket."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "HEALER'S ANCHOR",
        headline: "Fifty Years at the Desk",
        subtext: "A lifetime commitment to the health of Northern India's industrial working class."
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
        tag: "BONGAON // 1971",
        headline: "The Ocean of Refugees",
        subtext: "Arriving at the border amidst the worst humanitarian crisis in South Asian history."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "center-left",
        tag: "EPIDEMIC SHIELD",
        headline: "Battling the Cholera Surge",
        subtext: "Setting up emergency saline distribution tents in heavy monsoon downpours."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-right",
        tag: "FRONTLINE HUMANITARIAN",
        headline: "Unfaltering Endurance",
        subtext: "Months of tireless relief work saving thousands of displaced families."
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
        tag: "KANPUR // NOVEMBER 1984",
        headline: "The Wall Against the Mob",
        subtext: "Physically shielding Sikh neighbours and refugees from communal violence."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "BHOPAL // DECEMBER 1984",
        headline: "The Toxic Aftermath",
        subtext: "Leading medical teams to treat respiratory trauma following the Union Carbide gas leak."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "ACTIVISM",
        headline: "Voice of the Dispossessed",
        subtext: "Founding leader of AIDWA, organizing working women nationwide."
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
        headline: "The Veteran Candidate",
        subtext: "Nominated for the highest constitutional office of the Republic at age eighty-seven."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "bottom-right",
        tag: "CAMPAIGN OF CONSCIENCE",
        headline: "A Platform for the Voiceless",
        subtext: "Touring the country to advocate for secular unity, healthcare access, and farmer rights."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "center-left",
        tag: "INTEGRITY",
        headline: "Principles Over Power",
        subtext: "Demonstrating that unwavering moral resistance matters more than political triumph."
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
        tag: "TWILIGHT YEARS // 2006",
        headline: "The Healer's Final Patient",
        subtext: "Practicing medicine in Kanpur until age ninety-two with unwavering empathy."
      },
      {
        progressStart: 0.37,
        progressEnd: 0.70,
        position: "top-right",
        tag: "FINAL DONATION // 2012",
        headline: "A Body Donated to Science",
        subtext: "Her corneas and remains gifted to GSVM Medical College for student education."
      },
      {
        progressStart: 0.71,
        progressEnd: 0.99,
        position: "bottom-center",
        tag: "ETERNAL RECORD",
        headline: "An Unbroken Oath",
        subtext: "A life etched forever into the moral conscience of a free and just world."
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
