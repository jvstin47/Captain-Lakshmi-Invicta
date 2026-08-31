/**
 * Portfolio Grid: The Multifaceted Life of Captain Lakshmi Sahgal
 * Showcasing Her Struggles, Her Contributions, Her Milestones, Her Impact
 */
export const LIFE_ROLES = [
  {
    id: "role-physician",
    role: "The Physician",
    badge: "MBBS // DGO (1938)",
    years: "1938 – 2012",
    summary: "A doctor who never hung up her stethoscope for 74 consecutive years.",
    details: "From colonial Madras hospitals to the rubber plantations of Malaya, from wartime jungle operating tables in Burma to 60 years in Kanpur slums, medicine was her purest calling. She charged pennies or nothing, treating hundreds of destitute patients daily.",
    keyStats: [
      { label: "Years in Medical Practice", value: "74" },
      { label: "Average Consultation Fee", value: "₹0–5" },
      { label: "Final Medical Act", value: "Body Donated to Research" }
    ],
    struggles: "Practicing under colonial austerity, wartime medical shortages, Japanese occupation supply lines, and decades in impoverished industrial belts with zero corporate funding.",
    contributions: "Pioneered free maternal healthcare in Malaya; ran frontline mobile surgeries in World War II; founded women\'s and children\'s community health clinics in Uttar Pradesh."
  },
  {
    id: "role-commander",
    role: "The Commander",
    badge: "RANI OF JHANSI REGIMENT",
    years: "1943 – 1946",
    summary: "Captain and leader of Asia\'s first all-women combat infantry regiment.",
    details: "Handpicked by Netaji Subhas Chandra Bose in Singapore, she commanded over 1,500 women volunteers from across Southeast Asia. She underwent identical rigorous combat training, rifle drills, and jungle warfare preparations as male infantry units.",
    keyStats: [
      { label: "Regiment Strength", value: "1,500+" },
      { label: "Rank", value: "Captain & Minister" },
      { label: "Historic Milestone", value: "First Asian Women\'s Combat Infantry" }
    ],
    struggles: "Overcoming traditional patriarchal skepticism, harsh jungle warfare conditions in Burma, and facing air bombardment without air superiority.",
    contributions: "Permanently redefined the capability and role of Indian women in national defense, military command, and anti-colonial armed resistance."
  },
  {
    id: "role-humanitarian",
    role: "The Humanitarian",
    badge: "DISASTER & REFUGEE RELIEF",
    years: "1971 – 1984",
    summary: "First to arrive at border refugee crises and industrial catastrophe zones.",
    details: "In 1971, when millions of refugees fled violence into West Bengal, she established life-saving medical camps in Bongaon. In 1984, she led direct medical aid to Bhopal gas leak victims and physically protected Sikh families during riots.",
    keyStats: [
      { label: "1971 Camps", value: "Bongaon, Bengal" },
      { label: "1984 Riot Action", value: "Guarded Kanpur Streets" },
      { label: "1984 Disaster Aid", value: "Bhopal Gas Tragedy" }
    ],
    struggles: "Battling bureaucratic inertia, extreme epidemic conditions (cholera/dysentery), and risking physical violence from communal mobs.",
    contributions: "Demonstrated that human solidarity knows no religious, national, or regional boundaries."
  },
  {
    id: "role-activist",
    role: "The Democratic Voice",
    badge: "AIDWA // 2002 CANDIDACY",
    years: "1981 – 2002",
    summary: "Founding member of AIDWA and presidential candidate for social justice.",
    details: "Co-founded the All India Democratic Women\'s Association (AIDWA) in 1981, leading campaigns against dowry deaths, caste discrimination, and economic exploitation. In 2002, accepted the Left\'s nomination for the Presidency of India to advocate for the poor.",
    keyStats: [
      { label: "Organization Co-founded", value: "AIDWA (1981)" },
      { label: "2002 Presidential Run", value: "Opposition Candidate" },
      { label: "Civil Award", value: "Padma Vibhushan (1998)" }
    ],
    struggles: "Facing powerful entrenched patriarchal norms, political marginalization of grassroots movements, and corporate-led economic displacement.",
    contributions: "Built one of India\'s largest mass democratic women\'s movements with millions of working-class members."
  }
];

export const ARCHIVAL_EXHIBITS = [
  {
    id: "arch-01",
    title: "Dr. Lakshmi in INA Uniform",
    year: "1943",
    location: "Singapore",
    image: "/archival_photos/badge_rani_of_jhansi.jpg",
    type: "MILITARY INSIGNIA ARTIFACT",
    caption: "Official cast brass cap badge of the Rani of Jhansi Regiment, Azad Hind Fauj, worn by Captain Lakshmi and women infantry troops.",
    source: "National Archives of India & Netaji Research Bureau, Kolkata",
    significance: "The physical emblem of Asia's first all-women combat regiment, depicting Rani Lakshmibai of Jhansi leading the charge."
  },
  {
    id: "arch-02",
    title: "Proclamation of the Provisional Government of Azad Hind",
    year: "21 October 1943",
    location: "Cathay Cinema, Singapore",
    image: "/archival_photos/azad_hind_proclamation.jpg",
    type: "HISTORICAL PROCLAMATION DOCUMENT",
    caption: "Official proclamation founding the Provisional Government of Free India with Dr. Lakshmi inducted as Minister for Women's Affairs.",
    source: "Azad Hind Archival Collection, Ministry of External Affairs",
    significance: "Recognized by nine sovereign states during World War II, establishing an independent Indian administrative and military authority."
  },
  {
    id: "arch-03",
    title: "Rani of Jhansi Regiment Inspection",
    year: "December 1943",
    location: "Serangoon Camp, Singapore",
    image: "/archival_photos/photo_02.jpg",
    type: "HISTORICAL PHOTOGRAPH",
    caption: "Subhas Chandra Bose and Captain Lakshmi reviewing armed women recruits holding Lee-Enfield rifles during parade drill.",
    source: "Imperial War Museum / INA Photo Archives",
    significance: "Documenting the rigorous military discipline of over 1,500 women volunteers from Malaya, Burma, and Singapore."
  },
  {
    id: "arch-04",
    title: "Kanpur Free Clinic Patient Register Entry",
    year: "1962",
    location: "Civil Lines, Kanpur",
    image: "/archival_photos/kanpur_clinic_register.jpg",
    type: "PRIMARY CLINICAL RECORD",
    caption: "Handwritten clinical register from Dr. Lakshmi Sahgal's Kanpur clinic, documenting free prenatal care and typhoid treatments for mill families.",
    source: "Sahgal Family Personal Archive & GSVM Medical Heritage",
    significance: "Tangible proof of her unconditional 50-year commitment to providing medicine to the most vulnerable without commercial motive."
  },
  {
    id: "arch-05",
    title: "Dr. Lakshmi Sahgal's Living Will & Body Donation Certificate",
    year: "2012",
    location: "GSVM Medical College, Kanpur",
    image: "/archival_photos/gsvm_donation_record.jpg",
    type: "PRIMARY LEGAL DOCUMENT",
    caption: "The notarized living will in which Dr. Lakshmi Sahgal instructed that her body and corneas be donated to GSVM Medical College for medical education and research.",
    source: "GSVM Medical College Heritage Archive, Kanpur",
    significance: "An act that transformed her death into a final gift to medical science — an unbroken oath of service that continued beyond her last breath."
  }
];
