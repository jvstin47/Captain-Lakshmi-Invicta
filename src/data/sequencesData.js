/**
 * Registry of Cinematic Frame Sequences
 * Reusable data structure for scroll-scrubbed historical reconstructions.
 * Easily extensible for Chapters 07-14 when new clips are generated.
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
  ,
  {
    id: "seq-06-commander", chapterNumber: "06", title: "The Commander", subtitle: "RANI OF JHANSI REGIMENT / 1943",
    era: "1943-1944", location: "Singapore & Burma", frameCount: 240, framePath: "/sequences/seq-06-commander",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-01", eraAccent: "#8b3e2f", tagline: "Netaji's call answered: The first all-women infantry regiment.",
    historicalContext: "In 1943, Subhas Chandra Bose arrived in Singapore. He called for an all-women's regiment. Dr. Lakshmi, closing her clinic, stepped forward to lead the Rani of Jhansi Regiment, becoming Captain Lakshmi.",
    quote: { text: "We were not just soldiers; we were women demanding the right to die for our country's freedom.", author: "Captain Lakshmi Sahgal", source: "Memoirs" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "bottom-left", tag: "1943", headline: "A Regiment is Born", subtext: "Swapping the stethoscope for a rifle." }]
  },
  {
    id: "seq-07-burma", chapterNumber: "07", title: "The Burma March", subtitle: "IMPHAL & FRONTIER WARFARE / 1944",
    era: "1944", location: "Burma", frameCount: 240, framePath: "/sequences/seq-07-burma",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-02", eraAccent: "#556b2f", tagline: "Marching through monsoons toward the Indian border.",
    historicalContext: "The INA marched through the dense jungles of Burma towards Imphal. The Ranis faced aerial bombardment, starvation, and malaria alongside the regular troops.",
    quote: { text: "The jungle took more lives than bullets, but no one turned back.", author: "Captain Lakshmi Sahgal", source: "INA Archives" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "top-right", tag: "1944", headline: "The March to Imphal", subtext: "Enduring the relentless monsoon and British artillery." }]
  },
  {
    id: "seq-08-jungle", chapterNumber: "08", title: "The Jungle Retreat", subtitle: "MAYMYO TO CAPTURE / 1945",
    era: "1945", location: "Burma", frameCount: 240, framePath: "/sequences/seq-08-jungle",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-03", eraAccent: "#3c4a25", tagline: "A fighting retreat as the tide of war turns.",
    historicalContext: "With the Japanese defeat imminent, the INA retreated. Captain Lakshmi stayed behind in the jungles of Burma to run a hospital for the wounded, eventually being captured by British forces.",
    quote: { text: "I told them to retreat. I stayed because a doctor does not abandon her patients.", author: "Captain Lakshmi Sahgal", source: "Interview" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "center-left", tag: "1945", headline: "Capture in the Jungle", subtext: "Staying behind with the wounded as the empire returned." }]
  },
  {
    id: "seq-09-trial", chapterNumber: "09", title: "Trial & Return", subtitle: "THE RED FORT AWAKENING / 1946",
    era: "1946", location: "Delhi, India", frameCount: 240, framePath: "/sequences/seq-09-trial",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-04", eraAccent: "#cd5c5c", tagline: "The trials that united a fractured nation.",
    historicalContext: "Brought back to India as a prisoner, Lakshmi's defiance and the subsequent Red Fort trials of INA officers ignited a massive wave of nationalism, uniting the country and hastening the end of British rule.",
    quote: { text: "They put us on trial for treason, but the people put the Empire on trial.", author: "Captain Lakshmi Sahgal", source: "Post-War Archives" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "bottom-right", tag: "1946", headline: "The Red Fort Defiance", subtext: "A nation rises to defend its captured soldiers." }]
  },
  {
    id: "seq-10-kanpur", chapterNumber: "10", title: "Kanpur: Fifty Years of Care", subtitle: "THE PEOPLE'S CLINIC / 1947–1970",
    era: "1947-1970", location: "Kanpur, India", frameCount: 240, framePath: "/sequences/seq-10-kanpur",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-05", eraAccent: "#8b7355", tagline: "From the battlefield back to the clinic.",
    historicalContext: "Settling in Kanpur after Independence, Dr. Lakshmi returned to her original calling. She opened a clinic for the poorest mill workers and refugees, serving them relentlessly for decades.",
    quote: { text: "Freedom is incomplete if the poorest still cannot afford to heal.", author: "Dr. Lakshmi Sahgal", source: "Kanpur Clinical Records" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "top-left", tag: "1947", headline: "The People's Doctor", subtext: "A lifetime dedicated to the marginalized of Kanpur." }]
  },
  {
    id: "seq-11-refugee", chapterNumber: "11", title: "1971: The Refugee Camps", subtitle: "BORDER CRISIS AT BONGAON / 1971",
    era: "1971", location: "Bongaon, West Bengal", frameCount: 240, framePath: "/sequences/seq-11-refugee",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-01", eraAccent: "#6b8e23", tagline: "Answering the call during the Bangladesh liberation crisis.",
    historicalContext: "When millions of refugees fled into India during the Bangladesh Liberation War, the 57-year-old Captain Lakshmi packed her bags and headed to the border camps in Bongaon, working tirelessly to contain cholera and disease.",
    quote: { text: "Pain has no borders. A refugee's suffering is the world's failing.", author: "Dr. Lakshmi Sahgal", source: "1971 Relief Dispatches" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "bottom-left", tag: "1971", headline: "The Borders of Crisis", subtext: "Combating cholera and despair at the Bongaon camps." }]
  },
  {
    id: "seq-12-activist", chapterNumber: "12", title: "The Frontline Activist", subtitle: "BHOPAL & PROTECTION / 1980s",
    era: "1980s", location: "India", frameCount: 240, framePath: "/sequences/seq-12-activist",
    framePrefix: "frame_", frameExtension: "webp", aspectRatio: "16/9", type: "RECONSTRUCTED SCENE",
    archivalExhibitId: "arch-02", eraAccent: "#8b5a2b", tagline: "Always on the frontlines of civil defense.",
    historicalContext: "Whether providing medical relief to the victims of the 1984 anti-Sikh riots in Kanpur or leading medical teams to Bhopal following the gas tragedy, she remained an activist until the end.",
    quote: { text: "There is no retirement from fighting injustice.", author: "Lakshmi Sahgal", source: "Public Addresses" },
    typographyCues: [{ progressStart: 0.1, progressEnd: 0.9, position: "center-right", tag: "1984", headline: "Unwavering Duty", subtext: "Standing between rioters and the vulnerable." }]
  }
]
;

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
  { id: "ch-13", number: "13", title: "The People's Candidate", subtitle: "2002 Presidential Run", year: "2002", hasClip: false, isPlaceholder: true },
  { id: "ch-14", number: "14", title: "The Living Legacy", subtitle: "An Unbroken Oath", year: "2012 & Beyond", hasClip: false, isPlaceholder: true },
];

