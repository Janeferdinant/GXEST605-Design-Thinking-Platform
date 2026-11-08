import { ProductCaseStudy } from "../types";

export const caseStudiesData: ProductCaseStudy[] = [
  {
    id: "cs-1",
    number: 1,
    title: "SortAI: Autonomous Optical Waste Segregation Appliance",
    category: "Smart Waste Management",
    summary: "An edge-AI enabled smart municipal waste bin that uses computer vision and robotic flap diverters to classify and segregate discarded items into biodegradable, recyclable, and hazardous streams in under 1.2 seconds.",
    societalProblem: "Rapid urbanization in Indian cities generates 62 million tonnes of municipal solid waste annually. Over 75% remains unsegregated at the source, causing toxic landfill leaching, groundwater poisoning, and dignity-degrading manual scavenging by sanitation workers.",
    userResearch: "Ethnographic shadowing of 12 sanitation workers at Kochi Corporation transfer stations and surveys of 80 urban apartment households revealed that people know waste should be segregated, but find manual multi-bin sorting tedious, confusing, and unhygienic.",
    empathizePhase: {
      empathyFindings: "Residents experience decision fatigue when encountering composite packaging (e.g. paper cups with polyethylene lining) and avoid touching dirty bin lids.",
      personaSummary: "Radhika (34, Urban Apartment Resident): Wants to be environmentally conscious but has only 5 minutes in the morning and refuses to touch contaminated bins.",
      journeyTouchpoint: "Throwing away breakfast packaging -> Confused which bin -> Drops all waste in one bin -> Feels guilty -> Sanitation worker manually sorts bare-handed."
    },
    definePhase: {
      problemStatement: "Urban residents need a hands-free, autonomous waste segregation appliance at the disposal point because manual sorting is unhygienic and confusing, resulting in catastrophic landfill mixing.",
      successMetrics: [
        "Classification accuracy >= 95% across 20 common waste classes",
        "Segregation latency <= 1.5 seconds per item",
        "Zero-touch lid opening with ultrasonic proximity detection",
        "BOM manufacturing cost <= Rs. 4,500"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Capacitive density sensor belt",
        "Overhead YOLO-v8 edge camera with dual pneumatic air-jets",
        "Rotating carousel with motorized tilt trays",
        "RFID tagged smart packaging network"
      ],
      convergentSelection: "Selected rotating three-chamber carousel with downward-facing wide-angle camera and ESP32-S3 edge vision module.",
      scamperApplication: "Eliminate: Removed expensive motorized lids by using an open conical hopper with anti-odor carbon flap. Combine: Combined internal disinfectant UV-C LEDs with classification cycle."
    },
    feasibilityStudy: {
      technical: "Edge inferencing using quantized MobileNetV2 achieves 96.2% accuracy in 280ms on an ESP32-S3 (240MHz, 8MB PSRAM).",
      economic: "BOM cost of Rs. 4,120 enables a retail selling price of Rs. 7,499 with 45% gross margin.",
      market: "Target addressable market in India: 120,000 corporate offices and gated apartment lobbies in Tier-1 cities.",
      operational: "Modular snap-fit internal bins allow sanitation workers to lift 15-litre bags with zero contact.",
      legalEthical: "Downward-facing camera has zero external field-of-view, fully complying with India's DPDP Act 2023."
    },
    proofOfConcept: {
      objectives: "Verify whether a 240MHz micro-controller running a 4-bit quantized CNN can classify wet vegetable waste vs dry plastic bottles with > 90% accuracy in real-time.",
      keyRisks: [
        "Lighting variance inside the chamber causing misclassification",
        "Liquid seepage damaging internal electronics"
      ],
      validationResult: "Tested on 200 sample items under varying ambient lux; achieved 93.5% accuracy; added internal ring-light LED for invariant lighting."
    },
    detailedDesign: {
      srdSpecs: [
        "Camera: OV2640 2MP 120-degree FOV",
        "Sorting Mechanism: 360-degree high-torque stepper motor driving rotating distributor chute",
        "Power: 12V 2A DC adapter with 4-hour internal LiFePO4 battery backup",
        "Enclosure: Antimicrobial UV-stabilized ABS plastic with IP54 rating"
      ],
      dfmConsiderations: "Draft angles of 2.5 degrees on all molded internal bins for easy injection mold release; standardized M3 fasteners throughout.",
      industrialStandards: ["IEC 60950-1 (Information technology safety)", "RoHS 2011/65/EU", "BIS IS 13252"]
    },
    prototyping: {
      alphaPrototype: "Constructed with CNC routed acrylic frame, 3D printed chute, and ESP32 dev board; verified motor torque under 1 kg load.",
      betaPrototype: "Formed using silicone soft tooling with textured matte finish, integrated custom PCBA with power surge protection; deployed in 3 college cafeterias.",
      timelineStrategy: "Used parallel-path PCB fabrication while 3D printing enclosure shells, saving 3 weeks."
    },
    pilotBuild: {
      pilotObjectives: "Produce 50 pilot units with EMS partner in Bangalore to achieve First Pass Yield (FPY) >= 92% and assembly tact time < 18 minutes.",
      manufacturingPartner: "SGS Teknika Electronics Manufacturing Services, Bangalore.",
      testingProcedures: "100-cycle continuous drop test of plastic bottles and wet apple cores; automated optical inspection of soldered driver boards.",
      scaleStrategy: "Establish tool lease agreement for multi-cavity injection molds to scale to 2,000 units/month."
    },
    commercialization: {
      targetPrice: "Rs. 7,499 (Residential) / Rs. 14,999 (Commercial 45L variant)",
      bepEstimate: "420 units to recover Rs. 14,00,000 in tooling and CDSCO/BIS certification CapEx.",
      marketStrategy: "B2B sales to IT parks, educational institutions, and luxury residential complexes through distributor partnerships."
    },
    billOfMaterials: [
      { item: "ESP32-S3 8MB Micro-controller Module", qty: 1, unitCost: "Rs. 450", subtotal: "Rs. 450" },
      { item: "OV2640 Wide-Angle Camera Module", qty: 1, unitCost: "Rs. 280", subtotal: "Rs. 280" },
      { item: "NEMA 17 Stepper Motor & Driver", qty: 1, unitCost: "Rs. 620", subtotal: "Rs. 620" },
      { item: "Ultrasonic Proximity Sensors", qty: 2, unitCost: "Rs. 85", subtotal: "Rs. 170" },
      { item: "Molded ABS Enclosure & Chute Shells", qty: 1, unitCost: "Rs. 1,450", subtotal: "Rs. 1,450" },
      { item: "12V 2A SMPS Power Supply Board", qty: 1, unitCost: "Rs. 320", subtotal: "Rs. 320" },
      { item: "Internal Ring LED & UV-C Disinfectant Module", qty: 1, unitCost: "Rs. 190", subtotal: "Rs. 190" },
      { item: "Wiring harness, fasteners, and rubber feet", qty: 1, unitCost: "Rs. 140", subtotal: "Rs. 140" },
      { item: "Internal Removable 15L Polypropylene Bins", qty: 3, unitCost: "Rs. 165", subtotal: "Rs. 495" }
    ],
    totalEstimatedCost: "Rs. 4,115 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "V. M. Patel et al., 'Edge-based Convolutional Neural Networks for Automated Municipal Waste Classification,' IEEE Trans. Sustainable Computing, 2023.",
      "K. R. Suresh Nair, 'Product Sense: Engineering your ideas into reality,' Notion Press, 2024."
    ],
    futureScope: [
      "Weight-based fill level telemetry with automated municipal truck dispatch API",
      "Gas-phase electronic nose integration for early organic rot warning",
      "Voice guidance in Malayalam, Hindi, and English"
    ]
  },
  {
    id: "cs-2",
    number: 2,
    title: "NeoGlow: Low-Cost Solar Neonatal Phototherapy Unit",
    category: "Low-Cost Healthcare",
    summary: "A portable, battery-backed narrow-spectrum blue LED phototherapy system for treating severe neonatal jaundice in resource-constrained rural clinics without continuous electricity.",
    societalProblem: "Neonatal hyperbilirubinemia affects 60% of term and 80% of preterm infants worldwide. In rural areas lacking reliable grid power, delayed treatment causes permanent brain damage (kernicterus) or death. Commercial western phototherapy machines cost over Rs. 1,50,000 and fail under power cuts.",
    userResearch: "Interviews with 14 rural pediatricians and district nurses in Wayanad and Attappadi revealed that erratic power cuts disrupt treatment, while fluorescent tube bulbs degrade quickly and burn fragile infant skin.",
    empathizePhase: {
      empathyFindings: "Nurses worry about infant overheating; mothers are terrified of separating from babies placed in cold glass incubators.",
      personaSummary: "Sister Mary (48, Head Nurse at Rural Primary Health Centre): Stressed by frequent 4-hour monsoon power outages while nursing jaundiced infants.",
      journeyTouchpoint: "Infant turns yellow -> Diagnosed with jaundice -> Power cut strikes -> Nurse searches for working generator -> Treatment interrupted -> High infant distress."
    },
    definePhase: {
      problemStatement: "Rural health centers need an affordable, battery-autonomous phototherapy device delivering clinical-grade narrow-band blue light because grid outages interrupt treatment, causing irreversible infant neurological disability.",
      successMetrics: [
        "Spectral irradiance: 35 µW/cm²/nm at 450–470 nm peak wavelength",
        "Battery autonomy: >= 8 continuous hours on internal solar-charged battery",
        "Uniform footprint: 50cm × 30cm bassinet coverage",
        "Retail price: < Rs. 18,000 (10x lower than imported units)"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Fibre-optic blanket wrapped around baby",
        "High-power overhead Cree blue LED array with thermal aluminum heatsink",
        "Reflective canopy utilizing sunlight with UV optical filters",
        "Wearable phototherapy infant onesie"
      ],
      convergentSelection: "Overhead adjustable LED canopy with high-efficiency copper MCPCB heatsink and LiFePO4 battery pack.",
      scamperApplication: "Substitute: Substituted fragile fluorescent tubes with 50,000-hour narrow-spectrum 460nm LEDs. Eliminate: Eliminated noisy motorized cooling fans by engineering convective chimney cooling."
    },
    feasibilityStudy: {
      technical: "Custom copper MCPCB keeps LED junction temperature < 65°C without fans; LiFePO4 battery delivers 9 hours at 24W draw.",
      economic: "BOM cost of Rs. 6,850; allows selling at Rs. 16,500 with sustainable medical distributor margins.",
      market: "Over 25,000 primary health centers and rural nursing homes across South Asia and East Africa.",
      operational: "Zero maintenance for 5 years; passive cooling means no dust filters to clean.",
      legalEthical: "Designed strictly to meet IEC 60601-2-50 standard for infant phototherapy equipment safety."
    },
    proofOfConcept: {
      objectives: "Verify whether passive convective chimney airflow can keep 24 high-intensity blue LEDs under 65°C while delivering 35 µW/cm²/nm at 40cm distance.",
      keyRisks: [
        "Thermal runaway degrading LED blue spectral output",
        "Harmful UV or Infrared radiation leakage"
      ],
      validationResult: "Spectrometer bench test confirmed 462 nm peak with zero UV (< 380nm) and irradiance of 38.2 µW/cm²/nm; maximum heatsink temperature reached 58°C."
    },
    detailedDesign: {
      srdSpecs: [
        "Irradiance: 35-40 µW/cm²/nm at 40 cm distance",
        "Wavelength: Peak 460 nm ± 5 nm (narrow band)",
        "Battery: 12.8V 18Ah LiFePO4 with built-in smart BMS",
        "Structure: Telescopic stainless steel stand with swivel locking castors"
      ],
      dfmConsiderations: "Folded sheet-metal aluminum canopy requires zero injection tooling CapEx; uses standard extruded T-slot profiles for height adjustment.",
      industrialStandards: ["IEC 60601-1 (Medical electrical safety)", "IEC 60601-2-50 (Particular requirements for phototherapy)"]
    },
    prototyping: {
      alphaPrototype: "Lab prototype tested with optical spectroradiometer and thermal imaging camera; verified 8-hour continuous battery discharge.",
      betaPrototype: "Finished hospital-grade powder-coated units deployed for clinical observational trials at a district hospital; treated 18 neonates with 100% recovery.",
      timelineStrategy: "Secured pre-certified medical power supply modules to fast-track electrical safety compliance."
    },
    pilotBuild: {
      pilotObjectives: "Fabricate 25 units under ISO 13485 clean assembly protocol to validate wiring harness reliability and photometer calibration jigs.",
      manufacturingPartner: "MedTech Innovations Hub, KINFRA Hi-Tech Park, Kalamassery.",
      testingProcedures: "100-hour continuous burn-in test per unit; optical spectrometer irradiance mapping across 9 grid points on the bassinet plane.",
      scaleStrategy: "Partner with state National Health Mission (NHM) for public health procurement tenders."
    },
    commercialization: {
      targetPrice: "Rs. 16,500 (Base) / Rs. 21,500 (with Foldable 60W Solar Panel)",
      bepEstimate: "180 units to break even on R&D, clinical trial, and CDSCO regulatory filing costs.",
      marketStrategy: "Direct institutional sales to state health departments and non-profit rural health foundations."
    },
    billOfMaterials: [
      { item: "High-Power 460nm Blue LED Array (3W x 16)", qty: 1, unitCost: "Rs. 1,600", subtotal: "Rs. 1,600" },
      { item: "Copper Core Metal-Core PCB (MCPCB)", qty: 1, unitCost: "Rs. 450", subtotal: "Rs. 450" },
      { item: "Constant-Current Buck LED Driver Board", qty: 1, unitCost: "Rs. 380", subtotal: "Rs. 380" },
      { item: "12.8V 18Ah LiFePO4 Battery Pack with BMS", qty: 1, unitCost: "Rs. 2,400", subtotal: "Rs. 2,400" },
      { item: "Aluminum Convective Chimney Canopy", qty: 1, unitCost: "Rs. 850", subtotal: "Rs. 850" },
      { item: "Telescopic Stand, Base & Medical Castors", qty: 1, unitCost: "Rs. 720", subtotal: "Rs. 720" },
      { item: "Digital Hour Meter & Battery Indicator", qty: 1, unitCost: "Rs. 210", subtotal: "Rs. 210" },
      { item: "Medical Grade 15V 4A Power Adapter", qty: 1, unitCost: "Rs. 240", subtotal: "Rs. 240" }
    ],
    totalEstimatedCost: "Rs. 6,850 (Unit BOM Cost at 500-unit volume)",
    researchReferences: [
      "American Academy of Pediatrics, 'Management of Hyperbilirubinemia in the Newborn Infant,' Pediatrics, 2022.",
      "WHO, 'Compendium of Innovative Health Technologies for Low-Resource Settings,' 2023."
    ],
    futureScope: [
      "Non-invasive transcutaneous bilirubin optical skin sensor integrated on canopy",
      "Cellular IoT telemetry sending treatment compliance data to pediatrician smartphones",
      "Convertible bassinet cradle accessory"
    ]
  },
  {
    id: "cs-3",
    number: 3,
    title: "AquaSense: Solar-Powered IoT Smart Precision Irrigation System",
    category: "Smart Irrigation Systems",
    summary: "A decentralized, LoRaWAN-connected smart irrigation controller that uses depth-profile soil moisture sensing and localized evapotranspiration models to automate drip irrigation, reducing agricultural water use by 42%.",
    societalProblem: "Agriculture consumes over 80% of India's freshwater reserves. Flood irrigation leads to 50% water loss through runoff and deep percolation, depleting groundwater tables and causing root asphyxiation.",
    userResearch: "Field visits across 30 cardamom and vegetable farms in Idukki revealed that farmers irrigate on fixed hourly timers regardless of recent rainfall because walking 3 kilometers across hilly terrain to open manual valves is exhausting.",
    empathizePhase: {
      empathyFindings: "Farmers are terrified of crop drying during flowering stages but have no reliable way to gauge moisture 30 cm below root level.",
      personaSummary: "Kunjumon (52, Cardamom Farmer in Kattappana): Battles hilly terrain, wild boar threats, and erratic monsoon dry spells.",
      journeyTouchpoint: "Wakes at 4 AM -> Walks down slippery hill -> Manually turns 8 heavy brass gate valves -> Leaves them running for 3 hours -> Water table runs dry."
    },
    definePhase: {
      problemStatement: "Smallholder cash crop farmers need an automated, autonomous irrigation system that waters crops precisely according to subsurface root moisture because manual valve management is dangerous, labor-intensive, and wastes scarce water.",
      successMetrics: [
        "Water conservation: >= 35% reduction compared to timer-based irrigation",
        "Battery autonomy: >= 100 days on solar-charged supercapacitor / battery",
        "Wireless range: >= 2.5 km in dense plantation canopy using LoRaWAN",
        "Subsystem unit price: < Rs. 6,000 per 2-acre node"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Satellite multispectral soil moisture monitoring",
        "LoRa-enabled multi-depth capacitive probe with solar pulse latching valve",
        "Acoustic leaf turgor sensor clamped onto plant stems",
        "Drone thermal imaging automated flight service"
      ],
      convergentSelection: "Solar LoRa node with dual-depth (15cm and 30cm) capacitive sensor and 12V DC latching solenoid valve.",
      scamperApplication: "Combine: Combined soil temperature sensing with moisture probe to predict fungal disease outbreaks. Reverse: Used latching valves that require power ONLY for 50ms during opening and closing, drawing zero steady-state holding power."
    },
    feasibilityStudy: {
      technical: "LoRa 865 MHz penetrates dense cardamom canopy up to 3.2 km; latching valve consumes only 12mJ per actuation.",
      economic: "BOM cost of Rs. 2,680; recovers full purchase investment within 6 months via electricity and diesel savings.",
      market: "High-value plantation crops (coffee, tea, cardamom, spices, greenhouse floriculture) in Kerala, Karnataka, and Tamil Nadu.",
      operational: "Vernacular Malayalam/Tamil voice-prompt mobile dashboard and fallback physical rotary switch.",
      legalEthical: "Operates in unlicensed 865-867 MHz Indian LoRa spectrum; open data protocols."
    },
    proofOfConcept: {
      objectives: "Verify whether capacitive frequency-shift moisture sensing can distinguish field capacity from wilting point across red laterite soil without recalibration.",
      keyRisks: [
        "Corrosion of sensor copper traces inside acidic moist soil",
        "RF signal attenuation through wet monsoon foliage"
      ],
      validationResult: "Encapsulated sensor PCB in conformal silicone with FR4 gold plating; showed zero corrosion after 1,000 hours of continuous wet soil immersion; packet loss < 2% at 2 km."
    },
    detailedDesign: {
      srdSpecs: [
        "Moisture Sensor: Dual-depth capacitive frequency-domain sensor (15cm & 30cm)",
        "Actuator: 1-inch 12V pulse latching solenoid valve (pressure rating 0.5 to 8 bar)",
        "Radio: SX1262 LoRa transceiver (+22 dBm output)",
        "Power: 2W monocrystalline solar panel + 3.2V 3200mAh LiFePO4 cell",
        "Enclosure: UV-stabilized polycarbonate IP67 weatherproof housing"
      ],
      dfmConsiderations: "Integrated mounting lugs directly on the molded valve manifold to eliminate extra bracket hardware; potted electronic chamber.",
      industrialStandards: ["IP67 Ingress Protection (IEC 60529)", "WPC ETA India Radio Equipment Approval"]
    },
    prototyping: {
      alphaPrototype: "Assembled on milled double-sided PCB, tested on university polyhouse tomato patch for 4 weeks.",
      betaPrototype: "Deployed across 10 commercial cardamom plantations in Idukki; survived severe monsoon thunderstorms and lightning strikes.",
      timelineStrategy: "Used pre-certified LoRa breakout modules to avoid radio redesign cycles."
    },
    pilotBuild: {
      pilotObjectives: "Produce 100 field-ready nodes with local EMS in Kochi to validate ultrasonic potting sealant and RF impedance matching.",
      manufacturingPartner: "Entuple Electronics & IoT Hub, Kochi.",
      testingProcedures: "Water immersion test under 1 meter tank for 2 hours; automated hydraulic pressure test at 10 bar.",
      scaleStrategy: "Integrate with NABARD and state agriculture subsidy schemes for farmer co-operative distribution."
    },
    commercialization: {
      targetPrice: "Rs. 5,999 (Per Valve + Sensor Node) / Rs. 11,999 (Master Gateway + 2 Nodes)",
      bepEstimate: "310 nodes to recover initial tooling, FCC/WPC testing, and app development costs.",
      marketStrategy: "Demonstration plots with Krishi Vigyan Kendras (KVK) and direct agricultural dealer networks."
    },
    billOfMaterials: [
      { item: "SX1262 LoRaWAN + ESP32-C3 Module", qty: 1, unitCost: "Rs. 420", subtotal: "Rs. 420" },
      { item: "Dual-Depth Capacitive Moisture Probe PCB", qty: 1, unitCost: "Rs. 260", subtotal: "Rs. 260" },
      { item: "1-inch 12V Latching Solenoid Valve", qty: 1, unitCost: "Rs. 750", subtotal: "Rs. 750" },
      { item: "2W Monocrystalline Solar Panel", qty: 1, unitCost: "Rs. 220", subtotal: "Rs. 220" },
      { item: "3.2V 3200mAh LiFePO4 Cell & BMS", qty: 1, unitCost: "Rs. 310", subtotal: "Rs. 310" },
      { item: "Molded IP67 Polycarbonate Housing", qty: 1, unitCost: "Rs. 480", subtotal: "Rs. 480" },
      { item: "Brass compression fittings and cable glands", qty: 1, unitCost: "Rs. 150", subtotal: "Rs. 150" },
      { item: "Polyurethane Potting Compound Resin", qty: 1, unitCost: "Rs. 90", subtotal: "Rs. 90" }
    ],
    totalEstimatedCost: "Rs. 2,680 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "J. M. Varghese et al., 'Decentralized LoRa Sensing for Precision Hill-Agriculture,' Computers and Electronics in Agriculture, 2024.",
      "FAO, 'Coping with Water Scarcity in Agriculture: A Global Framework,' 2023."
    ],
    futureScope: [
      "AI edge forecasting predicting soil drying based on weather satellite APIs",
      "Liquid NPK fertilizer fertigation proportional injector integration",
      "Satellite direct-to-cell NTN LoRa communication for zero-cellular blind spots"
    ]
  },
  {
    id: "cs-4",
    number: 4,
    title: "PathFinder: Smart Haptic Cane for the Visually Impaired",
    category: "Assistive Devices",
    summary: "An ultra-lightweight ergonomic smart cane that utilizes dual ultrasonic beams and an optical time-of-flight sensor to detect knee-height and head-level obstacles, translating hazards into intuitive directional haptic vibration pulses.",
    societalProblem: "Over 40 million visually impaired individuals rely on traditional white canes, which only detect obstacles directly touching the ground. Head-level hazards (e.g. tree branches, open truck beds, signboards) cause frequent, severe facial injuries and psychological trauma.",
    userResearch: "Interviews with 20 blind students and orientation & mobility instructors at the Kerala Federation of the Blind revealed that existing acoustic beeping electronic canes are hated because audio beeps mask critical ambient environmental sounds (like approaching traffic).",
    empathizePhase: {
      empathyFindings: "Blind users navigate primarily via auditory landmarks and echo; blocking their ears with beeping gadgets degrades their safety and dignity.",
      personaSummary: "Anand (21, Blind College Student in Thiruvananthapuram): Navigates busy bus terminals; terrified of protruding rear-view mirrors of parked buses.",
      journeyTouchpoint: "Walking down crowded pavement -> Cane touches ground -> Head strikes low-hanging iron shop awning -> Sustains head injury -> Avoids traveling alone."
    },
    definePhase: {
      problemStatement: "Visually impaired pedestrians need an unobtrusive obstacle detection cane that identifies head-level and ground obstacles silently through haptics because traditional canes miss elevated hazards and acoustic beeping masks vital street survival sounds.",
      successMetrics: [
        "Head-height and knee-height obstacle detection range: 0.5 to 2.5 meters",
        "Zero acoustic interference: 100% silent dual-frequency eccentric rotating mass (ERM) haptic feedback",
        "Total weight: <= 280 grams (within 10% of traditional white canes)",
        "Battery life: >= 14 hours of continuous walking"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Ultrasonic glasses with bone-conduction audio",
        "Smart cane handle attachment clipping onto standard white canes with dual ToF sensors",
        "LIDAR chest harness with tactile belt around the waist",
        "Smartphone computer vision walking lanyard"
      ],
      convergentSelection: "Universal snap-on ergonomic smart handle with dual ultrasonic/ToF sensors and multi-zone directional haptic motors.",
      scamperApplication: "Adapt: Adapted vibro-tactile feedback cues from gaming controller haptics. Put to another use: Embedded an emergency panic button that emits an acoustic siren and sends SMS GPS coordinates if the user falls."
    },
    feasibilityStudy: {
      technical: "Dual ultrasonic sensors angled at 15 degrees down and 30 degrees up provide full upper-body coverage; power draw of 42mA ensures 18-hour runtime on 800mAh LiPo.",
      economic: "BOM cost of Rs. 1,480 allows social enterprise pricing at Rs. 2,999, heavily subsidizable through corporate CSR.",
      market: "Over 8 million blind individuals in India and 40 million globally.",
      operational: "Universal collet chuck allows clipping onto any standard government-issued aluminum white cane in 10 seconds.",
      legalEthical: "Complies with Rights of Persons with Disabilities (RPwD) Act 2016 and universal accessibility design standards."
    },
    proofOfConcept: {
      objectives: "Verify whether visually impaired users can differentiate between three distinct haptic vibration frequencies (Low = 80Hz, Medium = 160Hz, High = 240Hz) to gauge obstacle distance without confusion.",
      keyRisks: [
        "Sensory numbness in palm after 30 minutes of continuous vibration",
        "False alarms triggered by grass and rain puddles"
      ],
      validationResult: "Testing with 10 blind subjects showed 98% accuracy in distance estimation; replaced continuous vibration with discrete burst pulses (200ms on, 300ms off) to eliminate palm numbness."
    },
    detailedDesign: {
      srdSpecs: [
        "Sensors: Dual ultrasonic transceivers (40 kHz) + 1 Forward Time-of-Flight (VL53L0X)",
        "Haptics: Dual ERM coin vibration motors embedded in thumb rest and palm swell",
        "Safety: Tri-axial accelerometer for fall detection with 105 dB emergency alarm",
        "Battery: 3.7V 800mAh Li-Po with USB-C charging",
        "Weight: 245 grams including clamping mechanism"
      ],
      dfmConsiderations: "Two-part clamshell ABS housing with textured TPE soft-touch overmolding for ergonomic non-slip grip; ultrasonically welded seam for IP54 water resistance.",
      industrialStandards: ["ISO 9999 (Assistive products for persons with disability)", "CE / RoHS compliance"]
    },
    prototyping: {
      alphaPrototype: "3D printed prototype tested with blindfolded engineering students navigating obstacle corridors; verified head-level branch detection.",
      betaPrototype: "Manufactured 15 injection-molded units with textured silicone grips; tested by members of the Blind Association across urban traffic for 6 weeks.",
      timelineStrategy: "Used 3D printed molds for rapid TPE overmolding trials before steel tooling."
    },
    pilotBuild: {
      pilotObjectives: "Produce 100 units with medical device contract manufacturer to achieve assembly tact time < 10 mins and calibrate automated sensor distance test rig.",
      manufacturingPartner: "Sree Chitra Medical Technology Prototyping Facility, Trivandrum.",
      testingProcedures: "1.5-meter drop test onto concrete on 6 axes; 24-hour moisture spray test; 50,000-cycle button endurance test.",
      scaleStrategy: "Partner with ALIMCO (Artificial Limbs Manufacturing Corporation of India) for government welfare distribution."
    },
    commercialization: {
      targetPrice: "Rs. 2,999 (Subsidized direct price: Rs. 1,499 via CSR partnerships)",
      bepEstimate: "500 units to amortize injection mold tooling and clinical trial expenses.",
      marketStrategy: "Distribution through blind schools, eye hospitals, and state social justice departments."
    },
    billOfMaterials: [
      { item: "Microchip SAMD21 / ESP32-C3 Ultra-Low-Power MCU", qty: 1, unitCost: "Rs. 210", subtotal: "Rs. 210" },
      { item: "Ultrasonic Sealed Transducers (40kHz pair)", qty: 2, unitCost: "Rs. 130", subtotal: "Rs. 260" },
      { item: "VL53L0X Laser Time-of-Flight Sensor", qty: 1, unitCost: "Rs. 180", subtotal: "Rs. 180" },
      { item: "Dual ERM Linear Resonant Haptic Motors", qty: 2, unitCost: "Rs. 65", subtotal: "Rs. 130" },
      { item: "3.7V 800mAh Li-Po Battery & Protection Circuit", qty: 1, unitCost: "Rs. 190", subtotal: "Rs. 190" },
      { item: "Molded ABS/TPE Ergonomic Handle Shells", qty: 1, unitCost: "Rs. 280", subtotal: "Rs. 280" },
      { item: "Universal Collet Clamp & Stainless Hardware", qty: 1, unitCost: "Rs. 120", subtotal: "Rs. 120" },
      { item: "USB-C Charging Board & Panic Buzzer", qty: 1, unitCost: "Rs. 110", subtotal: "Rs. 110" }
    ],
    totalEstimatedCost: "Rs. 1,480 (Unit BOM Cost at 2,000-unit volume)",
    researchReferences: [
      "World Health Organization, 'World Report on Vision,' 2022.",
      "IEEE Transactions on Neural Systems and Rehabilitation Engineering, 'Haptic Spatial Navigation Aids,' 2023."
    ],
    futureScope: [
      "Ultra-wideband (UWB) indoor navigation beacon integration for railway stations",
      "Pothole and descending curb edge detection optical triangulation",
      "Bluetooth BLE audio sync for turn-by-turn navigation integration"
    ]
  },
  {
    id: "cs-5",
    number: 5,
    title: "Classroom Acoustic Balancer & Environmental Quality Monitor",
    category: "Smart Classroom Products",
    summary: "An edge-sensing IoT acoustic and air-quality device that measures real-time reverberation, noise decibels, and CO2 concentration in classrooms, adjusting motorized acoustic metamaterial dampening louvers to maximize speech intelligibility.",
    societalProblem: "Poor acoustics in overcrowded schools create an average background noise of 72 dB. Studies prove high noise reduces children's reading comprehension by 25% and causes severe vocal chord strain in 65% of teachers.",
    userResearch: "Observational studies in 10 government high schools in Ernakulam showed teachers shouting over street traffic and ceiling fan hum, while afternoon CO2 levels exceeded 1800 ppm, causing extreme student drowsiness.",
    empathizePhase: {
      empathyFindings: "Teachers feel exhausted by 2:00 PM; students in the back rows miss 30% of spoken words due to reverberation.",
      personaSummary: "Sujatha (44, High School Teacher): Suffers from chronic laryngitis and vocal fatigue from shouting over street noise and noisy ceiling fans.",
      journeyTouchpoint: "Enters noisy classroom -> Raises voice -> Fan noise clatters -> Students lose attention -> Vocal strain by period 4 -> Exhaustion."
    },
    definePhase: {
      problemStatement: "School classrooms need an autonomous ambient acoustic and air quality optimization system because high reverberation and CO2 spikes severely degrade student learning comprehension and cause chronic teacher vocal injury.",
      successMetrics: [
        "Acoustic noise dampening: Maintain ambient classroom noise <= 55 dB",
        "Speech Transmission Index (STI): Improve STI from 0.48 (poor) to >= 0.72 (good)",
        "CO2 monitoring: Visual traffic-light alert when CO2 exceeds 1,000 ppm",
        "Hardware cost: < Rs. 12,000 per classroom installation"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Noise-cancelling wireless microphones worn by all students and teachers",
        "Ceiling-mounted motorized acoustic baffling louvers with real-time decibel feedback LED rings",
        "Active acoustic cancellation speakers emitting anti-noise waveforms",
        "Soundproof double-glazed window retrofits"
      ],
      convergentSelection: "Hybrid passive acoustic PET-felt motorized louvers that angle automatically based on decibel levels, paired with wall-mounted environmental sensor hub.",
      scamperApplication: "Substitute: Substituted expensive imported fiberglass panels with locally manufactured recycled PET plastic felt panels. Combine: Combined acoustic dampening with indoor CO2 and PM2.5 air quality monitoring."
    },
    feasibilityStudy: {
      technical: "Recycled PET felt has a Noise Reduction Coefficient (NRC) of 0.85; silent stepper motor rotates louvers in < 3 seconds.",
      economic: "BOM cost of Rs. 4,850; pays for itself through reduced teacher medical leave and enhanced learning outcomes.",
      market: "Over 1.5 million schools and colleges in India undergoing smart classroom modernization.",
      operational: "Plug-and-play installation on existing masonry walls using simple drywall anchors; zero maintenance.",
      legalEthical: "No audio recording or speech storage occurs on the device, ensuring 100% privacy compliance for minors."
    },
    proofOfConcept: {
      objectives: "Verify whether rotating acoustic louvers from 0 degrees (flush to wall) to 45 degrees changes reverberation time (RT60) in an 8m x 6m classroom by at least 0.4 seconds.",
      keyRisks: [
        "Stepper motor noise contributing to classroom distraction",
        "Inaccurate CO2 readings from uncalibrated NDIR sensors"
      ],
      validationResult: "Benchmarking in school room showed RT60 dropped from 1.2s to 0.68s when louvers engaged; stepper motors geared down to 18 dB (whisper-quiet)."
    },
    detailedDesign: {
      srdSpecs: [
        "Sensor Hub: Sensirion SCD40 NDIR CO2 sensor + I2S MEMS calibrated microphone",
        "Actuation: 12V planetary geared stepper motor driving tandem linkage rod",
        "Acoustic Material: 12mm thermo-compressed recycled PET polyester fiber felt (NRC 0.85)",
        "Display: Ambient RGB LED halo displaying visual noise levels (Green < 50dB, Red > 70dB)"
      ],
      dfmConsiderations: "Modular interlocking extrusion rails allow louvers to scale from 4-panel to 12-panel banks without changing tooling.",
      industrialStandards: ["ANSI/ASA S12.60 (Acoustical Performance Criteria for Schools)", "ISO 3382-2 (Room acoustics)"]
    },
    prototyping: {
      alphaPrototype: "Constructed benchtop louver bank tested in university audio testing room; verified noise reduction curves across 250Hz - 4kHz speech frequencies.",
      betaPrototype: "Installed in two standard classrooms in a public school for an academic term; measured 22% improvement in back-row test scores.",
      timelineStrategy: "Sourced locally recycled felt sheets directly from textile recyclers in Tirupur, avoiding overseas shipping delays."
    },
    pilotBuild: {
      pilotObjectives: "Fabricate 20 complete classroom kits to establish packaging dimensions and verify modular wall bracket installation within 45 minutes.",
      manufacturingPartner: "AcousticTech Systems, Peenya Industrial Area, Bangalore.",
      testingProcedures: "Acoustic impedance tube absorption coefficient verification; 10,000-cycle continuous rotation motor durability test.",
      scaleStrategy: "Distribution through Samagra Shiksha Kerala smart classroom procurement tenders."
    },
    commercialization: {
      targetPrice: "Rs. 11,999 (Complete 4-louver motorized bank + sensor hub)",
      bepEstimate: "250 units to amortize metal stamping dies and acoustic certification testing.",
      marketStrategy: "Direct outreach to private educational trusts and state education infrastructure boards."
    },
    billOfMaterials: [
      { item: "Sensirion SCD40 NDIR CO2 & Humidity Sensor", qty: 1, unitCost: "Rs. 1,400", subtotal: "Rs. 1,400" },
      { item: "I2S Digital MEMS Microphone & ESP32 Hub", qty: 1, unitCost: "Rs. 380", subtotal: "Rs. 380" },
      { item: "12V Silent Geared Stepper Motor & Driver", qty: 1, unitCost: "Rs. 650", subtotal: "Rs. 650" },
      { item: "Recycled PET Felt Acoustic Panels (4 units)", qty: 4, unitCost: "Rs. 320", subtotal: "Rs. 1,280" },
      { item: "Aluminum Linkage Rail & Pivot Hardware", qty: 1, unitCost: "Rs. 520", subtotal: "Rs. 520" },
      { item: "RGB LED Ring Visual Feedback Diffuser", qty: 1, unitCost: "Rs. 180", subtotal: "Rs. 180" },
      { item: "12V 2A Wall Power Supply & Fasteners", qty: 1, unitCost: "Rs. 240", subtotal: "Rs. 240" },
      { item: "Wall Mount Brackets & Packaging", qty: 1, unitCost: "Rs. 200", subtotal: "Rs. 200" }
    ],
    totalEstimatedCost: "Rs. 4,850 (Unit BOM Cost at 500-unit volume)",
    researchReferences: [
      "A. K. Sharma et al., 'Impact of Classroom Reverberation on Speech Intelligibility and Cognitive Load,' Journal of Educational Psychology, 2023.",
      "ASHRAE Standard 62.1, 'Ventilation for Acceptable Indoor Air Quality,' 2022."
    ],
    futureScope: [
      "Automated ceiling fan speed regulation based on combined temperature, humidity, and speech noise",
      "Directional acoustic beamforming spotlight for teacher voice amplification",
      "Cloud campus analytics dashboard reporting school-wide indoor environmental health"
    ]
  },
  {
    id: "cs-6",
    number: 6,
    title: "HydroLoop: Automated Domestic Greywater Recycling Valve",
    category: "Water Conservation",
    summary: "An intelligent diverter valve and inline multi-barrier sand-biochar filtration unit that routes washing machine and shower greywater to toilet flush tanks, saving up to 45% of domestic treated drinking water.",
    societalProblem: "Over 50% of high-grade municipal drinking water in urban homes is wasted on toilet flushing. Meanwhile, Indian cities face severe summer water rationing and drying groundwater aquifers.",
    userResearch: "Interviews with 40 apartment dwellers and plumbers in Kozhikode revealed that while homeowners want to reuse greywater, existing recycling plants cost lakhs of rupees, smell foul, and require complex chemical pumps.",
    empathizePhase: {
      empathyFindings: "Residents find greywater reuse gross if water looks cloudy or smells; plumbers refuse to install complex secondary piping.",
      personaSummary: "Vinod (38, Resident Association Secretary): Battles Rs. 15,000 monthly water tanker bills for his 12-flat apartment complex during peak summer.",
      journeyTouchpoint: "Water tanker bill arrives -> High maintenance cost -> Considers water recycling -> Commercial plant quoted at Rs. 4 lakhs -> Abandons project -> Tanker dependency continues."
    },
    definePhase: {
      problemStatement: "Urban households need a compact, low-cost, automated greywater diversion unit that cleans wash water without bad odors or chemicals because current recycling systems are unaffordable and maintenance-heavy.",
      successMetrics: [
        "Water conservation: Divert >= 150 liters/household/day to toilet flushing",
        "Turbidity reduction: Reduce NTU from > 50 to < 5 NTU",
        "Zero electricity for filtration: Gravity-driven sand-biochar filter bed",
        "Payback period: < 8 months against water tanker costs"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Electrochemical ozone disinfectant reactor",
        "Gravity-fed modular dual-valve diverter with activated biochar and UV-C sterilization",
        "Biological reed bed on apartment balcony",
        "Manual bucket siphon system"
      ],
      convergentSelection: "Motorized 3-way diverter valve paired with replaceable biochar-sand filter cartridge and capacitive tank level sensors.",
      scamperApplication: "Put to another use: Used coconut shell biochar (abundant agricultural byproduct in Kerala) as the active odor and soap surfactant filtration medium. Reverse: Divert initial 2 minutes of heavily soiled laundry water to sewer, capturing only the clean secondary rinse cycles."
    },
    feasibilityStudy: {
      technical: "Activated coconut biochar adsorbs 98% of linear alkylbenzene sulfonate detergents and eliminates anaerobic odors.",
      economic: "BOM cost of Rs. 3,150; retail price of Rs. 6,999 saves an apartment family Rs. 1,200/month in water bills.",
      market: "Over 8 million urban flats in water-stressed Indian metropolitan areas (Bengaluru, Chennai, Kochi, Hyderabad).",
      operational: "Standard 1.5-inch plumbing threads allow any local plumber to install the unit in under 45 minutes.",
      legalEthical: "Meets Central Pollution Control Board (CPCB) standards for non-potable urban toilet flushing reuse."
    },
    proofOfConcept: {
      objectives: "Verify whether activated coconut biochar filtration can reduce chemical oxygen demand (COD) and surfactant turbidity of washing machine rinse water by > 80% without clogging over 30 days.",
      keyRisks: [
        "Filter media compaction causing water overflow",
        "Bacterial biofilm growth generating odors in stagnant storage"
      ],
      validationResult: "Lab testing confirmed 88% surfactant removal; incorporated an automated back-flush cycle and slow-release chlorine puck dispenser in the filter head."
    },
    detailedDesign: {
      srdSpecs: [
        "Diverter Valve: Motorized brass 3-way ball valve (12V DC, 5 Nm torque)",
        "Filter Cartridge: 3-stage modular cartridge (50-micron mesh -> Coarse sand -> Activated coconut biochar)",
        "Level Sensors: Non-contact capacitive sensors mounted outside the plastic storage drum",
        "Controller: ESP32-C3 with Wi-Fi water savings telemetry dashboard"
      ],
      dfmConsiderations: "Rotomolded polyethylene cartridge housing with quick-disconnect bayonet lugs for 2-minute tool-free filter replacement.",
      industrialStandards: ["ISO 14046 (Water footprint)", "CPCB Non-Potable Water Reuse Guidelines"]
    },
    prototyping: {
      alphaPrototype: "Assembled with acrylic filter tube and 3-way ball valve; tested on a 7 kg front-load washing machine for 50 wash cycles.",
      betaPrototype: "Installed in 5 apartment flats in Kozhikode; tracked water savings over 90 days; saved an average of 4,200 liters per flat per month.",
      timelineStrategy: "Utilized standard irrigation pipe fittings for prototype plumbing, slashing fabrication lead time."
    },
    pilotBuild: {
      pilotObjectives: "Manufacture 50 production-intent units with plumbing hardware partner to validate burst pressure testing up to 8 bar.",
      manufacturingPartner: "Kochi PolyPlast & Valve Technologies, Eloor.",
      testingProcedures: "10-bar hydrostatic burst test; 10,000-cycle valve rotation endurance test; water quality BOD/COD laboratory testing.",
      scaleStrategy: "Partner with residential building developers to pre-install HydroLoop into new eco-apartment construction projects."
    },
    commercialization: {
      targetPrice: "Rs. 6,999 (Complete Diverter + Filter Kit) / Annual Filter Refill: Rs. 499",
      bepEstimate: "280 units to break even on injection tooling for filter heads and plumbing certifications.",
      marketStrategy: "Plumber incentive referral schemes, resident welfare association demonstrations, and green building tax rebate marketing."
    },
    billOfMaterials: [
      { item: "1-inch Motorized Brass 3-Way Ball Valve", qty: 1, unitCost: "Rs. 1,150", subtotal: "Rs. 1,150" },
      { item: "Rotomolded Polyethylene Filter Housing", qty: 1, unitCost: "Rs. 580", subtotal: "Rs. 580" },
      { item: "Activated Coconut Shell Biochar & Silica Media", qty: 1, unitCost: "Rs. 240", subtotal: "Rs. 240" },
      { item: "Non-Contact Capacitive Level Sensors (Pair)", qty: 2, unitCost: "Rs. 120", subtotal: "Rs. 240" },
      { item: "ESP32-C3 Valve Control & Telemetry Board", qty: 1, unitCost: "Rs. 380", subtotal: "Rs. 380" },
      { item: "12V 2A Weatherproof Power Adapter", qty: 1, unitCost: "Rs. 220", subtotal: "Rs. 220" },
      { item: "Plumbing unions, mesh screen, and O-rings", qty: 1, unitCost: "Rs. 190", subtotal: "Rs. 190" },
      { item: "Packaging & instruction manual", qty: 1, unitCost: "Rs. 150", subtotal: "Rs. 150" }
    ],
    totalEstimatedCost: "Rs. 3,150 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "Central Pollution Control Board, 'Guidelines for Water Conservation and Recycling in Urban Areas,' 2022.",
      "Water Research, 'Biochar Adsorption for Household Greywater Treatment,' 2023."
    ],
    futureScope: [
      "Integrated micro-hydro turbine generating power from falling wash water to make unit self-powered",
      "Automated soap concentration optical refractometer optimizing divert timing",
      "Municipal carbon-credit token generation for verified household water savings"
    ]
  },
  {
    id: "cs-7",
    number: 7,
    title: "MycoPack: Mushroom Mycelium Sustainable Packaging",
    category: "Sustainable Packaging",
    summary: "A 100% biodegradable, compostable thermal protective packaging material grown from oyster mushroom mycelium and agricultural waste (paddy straw / sawdust) that completely replaces toxic expanded polystyrene (Thermocol).",
    societalProblem: "Expanded polystyrene (Thermocol) takes over 500 years to decompose in landfills, fractures into toxic microplastics that poison marine ecosystems, and releases carcinogenic styrene fumes when incinerated.",
    userResearch: "Interviews with 15 e-commerce electronics shippers and organic farmers in Kerala revealed that while businesses want green packaging, existing cardboard air-pillows rupture easily, and bioplastics are prohibitively expensive.",
    empathizePhase: {
      empathyFindings: "Consumers feel guilty throwing giant Thermocol blocks into domestic trash; municipal collectors refuse to pick up bulky EPS foam.",
      personaSummary: "Deepak (29, Eco-friendly Electronics Brand Founder): Struggles to find protective packaging that matches his company's zero-waste brand promise.",
      journeyTouchpoint: "Product shipped -> Arrives safely -> Customer unboxes -> Stares at squeaky Thermocol -> Stuffs into closet -> Eventually burns in backyard -> Toxic smoke."
    },
    definePhase: {
      problemStatement: "Hardware shippers need an affordable, custom-molded, shock-absorbing packaging material that decomposes naturally in backyard soil because polystyrene packaging creates permanent environmental pollution and brand backlash.",
      successMetrics: [
        "Shock absorption: Drop test survival from 1.2 meters without product damage",
        "Biodegradability: 100% soil decomposition within 45 days in domestic compost",
        "Thermal insulation: Thermal conductivity k <= 0.04 W/m·K (matching Thermocol)",
        "Cost parity: Maximum 15% price premium over standard expanded polystyrene"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Starch-based extruded foam pellets",
        "Molded agricultural waste bound with living fungal mycelium root networks",
        "Compressed honeycomb banana pseudostem fiber boards",
        "Inflatable sea-algae air bladders"
      ],
      convergentSelection: "Pleurotus ostreatus (Oyster mushroom) mycelium grown on pasteurized paddy straw inside thermoformed thermo-plastic growth molds.",
      scamperApplication: "Substitute: Substituted synthetic petroleum resins with biological fungal hyphae growth. Adapt: Adapted natural fungal bonding mechanisms to turn local agricultural stubble into structural composites."
    },
    feasibilityStudy: {
      technical: "Mycelium hyphae bind agricultural lignin-cellulose fibers into a rigid, shock-absorbing composite in 7 days; heat baking at 85°C denatures spores permanently.",
      economic: "Raw materials (paddy straw) cost under Rs. 4/kg; unit packaging piece costs Rs. 28 to grow vs Rs. 22 for EPS foam.",
      market: "High-end consumer electronics, fragile ceramics, wine bottles, and temperature-sensitive vaccine cold boxes.",
      operational: "Clean, low-energy cultivation in humidity-controlled growth rooms; zero effluent discharge.",
      legalEthical: "Certified non-toxic, non-allergenic; fully aligns with Single-Use Plastic ban rules across India."
    },
    proofOfConcept: {
      objectives: "Verify whether mycelium-bound paddy straw can withstand standard ASTM D5276 packaging drop tests from 1.2m without fracturing or transferring shock > 35G to internal electronics.",
      keyRisks: [
        "Mold contamination during the 7-day incubation period",
        "Moisture absorption causing material softening in monsoon humidity"
      ],
      validationResult: "Drop tests showed average impact shock of 28G (well below 45G damage threshold); coated final baked parts with natural carnauba wax to achieve water repellency."
    },
    detailedDesign: {
      srdSpecs: [
        "Density: 120 - 160 kg/m³ (lightweight structural core)",
        "Compressive Strength: >= 0.45 MPa",
        "Thermal Conductivity: 0.038 W/m·K",
        "Moisture Ingress: < 5% mass gain at 90% RH after natural wax dip coating",
        "Inactivation: Oven baked at 90°C for 4 hours to terminate all biological activity"
      ],
      dfmConsiderations: "Draft angles of 5 degrees on vacuum-formed growth trays to allow clean de-molding of delicate living pre-baked blocks.",
      industrialStandards: ["ASTM D5276 (Drop Test for Loaded Containers)", "ASTM D6400 (Standard Specification for Compostable Plastics)"]
    },
    prototyping: {
      alphaPrototype: "Grown in hand-sculpted molds using oyster mushroom spawn and rubberwood sawdust; tested density and tensile properties in materials lab.",
      betaPrototype: "Produced 200 custom packaging corner protectors for a local audio speaker manufacturer; passed real-world cross-country shipping trials via road courier.",
      timelineStrategy: "Maintained a rolling incubation chamber schedule to ensure continuous daily harvesting without batch delays."
    },
    pilotBuild: {
      pilotObjectives: "Establish a 500-unit/week pilot cultivation facility in Thrissur to optimize autoclave steam sterilization cycles and drying oven throughput.",
      manufacturingPartner: "Kerala Agro-Biotech Innovations Center, Thrissur.",
      testingProcedures: "Accelerated compost degradation testing; humidity chamber conditioning; fungal spore dormancy air testing.",
      scaleStrategy: "Franchise the substrate inoculation to local rural women's self-help groups (Kudumbashree), decentralizing raw material growth."
    },
    commercialization: {
      targetPrice: "Rs. 38 per protective packaging corner (Competitive with premium molded pulp)",
      bepEstimate: "18,000 units to recover autoclave sterilization, vacuum forming, and drying oven setup costs.",
      marketStrategy: "B2B supply contracts with eco-conscious direct-to-consumer (D2C) brands, organic food exporters, and pharmaceutical companies."
    },
    billOfMaterials: [
      { item: "Agricultural Paddy Straw & Sawdust Substrate (1 kg)", qty: 1, unitCost: "Rs. 5", subtotal: "Rs. 5" },
      { item: "Certified Pleurotus Ostreatus Pure Mycelium Spawn", qty: 1, unitCost: "Rs. 8", subtotal: "Rs. 8" },
      { item: "Steam Sterilization & Inoculation Energy Cost", qty: 1, unitCost: "Rs. 4", subtotal: "Rs. 4" },
      { item: "7-Day Climate Chamber Incubation Energy", qty: 1, unitCost: "Rs. 3", subtotal: "Rs. 3" },
      { item: "Oven Drying & Biological Inactivation Energy", qty: 1, unitCost: "Rs. 4", subtotal: "Rs. 4" },
      { item: "Natural Carnauba Wax Eco Water-Resistant Dip", qty: 1, unitCost: "Rs. 2", subtotal: "Rs. 2" },
      { item: "Reusable Vacuum-Formed PET Growth Tray Amortization", qty: 1, unitCost: "Rs. 1", subtotal: "Rs. 1" },
      { item: "Labeling & Compost Certification Stamp", qty: 1, unitCost: "Rs. 1", subtotal: "Rs. 1" }
    ],
    totalEstimatedCost: "Rs. 28.00 (Per Unit Component BOM Cost at 5,000 units/month)",
    researchReferences: [
      "E. Karana et al., 'When the Material Grows: A Guide to Mycelium-Based Materials,' Materials & Design, 2022.",
      "Ministry of Environment, Forest and Climate Change, 'Plastic Waste Management Rules,' Government of India, 2022."
    ],
    futureScope: [
      "Fire-retardant structural building insulation board variations",
      "Biodegradable agricultural nursery seed-starter seedling pots",
      "Custom acoustic wall tiles for architectural soundproofing"
    ]
  },
  {
    id: "cs-8",
    number: 8,
    title: "CookBot: Robotic Precision Automated Induction Cooker",
    category: "Automated Cooking Systems",
    summary: "An automated culinary appliance that utilizes dual-sensor infrared pan temperature feedback, motorized ingredient dispensing carousels, and closed-loop algorithmic thermal control to prepare traditional gravies and curries with zero burning.",
    societalProblem: "Busy working couples and elderly individuals struggle to prepare healthy, home-cooked traditional meals daily, leading to heavy dependence on unhealthy, ultra-processed food deliveries costing over Rs. 8,000 monthly.",
    userResearch: "Interviews with 35 working professionals in Kochi and Bengaluru revealed that while they love traditional cooking, standing over a hot stove continuously stirring onions and monitoring milk boiling is frustrating and incompatible with work-from-home schedules.",
    empathizePhase: {
      empathyFindings: "Users hate burnt food accidents when taking Zoom calls; they desire authentic home taste without constant stove supervision.",
      personaSummary: "Anjali (31, Software Architect & Mother): Juggles client deadlines while trying to cook dinner; frequently burns curries when distracted.",
      journeyTouchpoint: "Starts cooking -> Adds spices -> Laptop pings urgent Slack message -> Rushes to desk -> Forgets stove -> Kitchen fills with smoke -> Curry ruined -> Orders Swiggy."
    },
    definePhase: {
      problemStatement: "Working professionals need an automated cooking assistant that dispenses ingredients and regulates cooking temperatures autonomously because multi-tasking leads to burnt food, high stress, and unhealthy takeout reliance.",
      successMetrics: [
        "Zero-burn guarantee: Algorithmic thermal regulation preventing pan scorched spots",
        "Autonomous ingredient dispensing: 6-chamber motorized dry/wet ingredient carousel",
        "Recipe library: Pre-programmed memory for 50 traditional South and North Indian dishes",
        "Easy cleanup: Food-contact components 100% dishwasher safe with tool-free removal"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Full robotic arm holding spatulas over regular gas stove",
        "Integrated countertop induction appliance with motorized overhead carousel and magnetic rotary stirrer",
        "Ready-to-eat heated capsule pods",
        "Smart stirring spoon with built-in thermometer"
      ],
      convergentSelection: "Countertop intelligent induction cooker with overhead 6-hopper ingredient dispenser and detachable magnetic rotary stirrer blade.",
      scamperApplication: "Combine: Combined bottom induction coil heating with an overhead downward-looking non-contact infrared pyrometer to monitor surface gravy temperature directly, eliminating pan thickness measurement errors."
    },
    feasibilityStudy: {
      technical: "Dual-temperature sensing (bottom NTC thermistor + top Melexis MLX90614 IR sensor) controls IGBT duty cycle to regulate gravy within ±2°C.",
      economic: "BOM cost of Rs. 6,450; retail price of Rs. 14,999 offers exceptional value compared to imported $1,500 cooking robots.",
      market: "Over 5 million urban dual-income households and expatriates living abroad.",
      operational: "Modular food-grade Teflon-coated pots and food-grade silicone dispenser chambers.",
      legalEthical: "Certified to BIS IS 302-2-6 for domestic cooking appliance electrical and food safety."
    },
    proofOfConcept: {
      objectives: "Verify whether closed-loop PID control of an induction coil based on infrared gravy surface temperature can completely prevent milk boiling over and onion scorching under 100 trials.",
      keyRisks: [
        "Viscous gravies sticking to the bottom of the pot",
        "Steam condensation blinding the overhead infrared sensor"
      ],
      validationResult: "Created a motorized magnetic bottom-sweeping silicone blade to eliminate sticky spots; designed an angled air-curtain fan around the IR lens to prevent steam condensation."
    },
    detailedDesign: {
      srdSpecs: [
        "Heating Power: 1800W resonant half-bridge induction heating coil",
        "Sensors: Dual NTC bottom sensor + MLX90614 infrared pyrometer (0-300°C)",
        "Stirring: High-torque brushless DC motor driving detachable food-grade magnetic anchor blade (0-120 RPM)",
        "Dispenser: 6-chamber motorized carousel with stepper-driven trap doors",
        "Connectivity: ESP32-S3 with 4.3-inch capacitive IPS touchscreen and Wi-Fi recipe cloud"
      ],
      dfmConsiderations: "One-piece die-cast aluminum base housing providing structural rigidity and electromagnetic shielding for the power electronics.",
      industrialStandards: ["BIS IS 302-2-6 (Safety of Household Electric Cooking Appliances)", "IEC 60335-1"]
    },
    prototyping: {
      alphaPrototype: "Assembled using modified commercial induction cooktop, 3D printed dispenser tower, and Arduino Mega; successfully cooked dal tadka automatically.",
      betaPrototype: "Manufactured 5 production-intent units with custom injection-molded food-grade polycarbonate housings and food-contact silicones; tested in 5 family kitchens.",
      timelineStrategy: "Used off-the-shelf certified induction coil assemblies to focus development resources on the novel dispenser and stirring IP."
    },
    pilotBuild: {
      pilotObjectives: "Fabricate 50 units with home appliance manufacturing partner to validate high-voltage dielectric isolation testing (1,500V) and thermal cycle endurance.",
      manufacturingPartner: "Sumeru Appliance Engineering, Coimbatore.",
      testingProcedures: "1,000-hour continuous cooking endurance test; 500-cycle dishwasher wash of food contact parts; high-voltage insulation resistance test.",
      scaleStrategy: "Direct-to-consumer (D2C) e-commerce launch backed by cooking influencer live demonstrations."
    },
    commercialization: {
      targetPrice: "Rs. 14,999 (Introductory) / Rs. 18,999 (MSRP)",
      bepEstimate: "450 units to amortize high-pressure aluminum die-cast tooling and BIS safety certification.",
      marketStrategy: "Digital video marketing showing side-by-side 'CookBot vs Busy Mom' time savings, paired with cloud subscription for new master-chef recipe updates."
    },
    billOfMaterials: [
      { item: "1800W Induction Heating Coil & Ferrite Core Assembly", qty: 1, unitCost: "Rs. 1,100", subtotal: "Rs. 1,100" },
      { item: "Half-Bridge IGBT Inverter Board with Heat Sink", qty: 1, unitCost: "Rs. 850", subtotal: "Rs. 850" },
      { item: "ESP32-S3 Controller with 4.3-inch IPS Touchscreen", qty: 1, unitCost: "Rs. 1,250", subtotal: "Rs. 1,250" },
      { item: "Brushless Magnetic Stirrer Motor & Driver", qty: 1, unitCost: "Rs. 620", subtotal: "Rs. 620" },
      { item: "MLX90614 Medical-Grade Infrared Temperature Sensor", qty: 1, unitCost: "Rs. 450", subtotal: "Rs. 450" },
      { item: "6-Chamber Food-Grade Ingredient Dispenser Assembly", qty: 1, unitCost: "Rs. 780", subtotal: "Rs. 780" },
      { item: "Die-Cast Aluminum Base & Flame-Retardant Body", qty: 1, unitCost: "Rs. 950", subtotal: "Rs. 950" },
      { item: "Magnetic Stirrer Blade & Food-Contact Silicone Seals", qty: 1, unitCost: "Rs. 250", subtotal: "Rs. 250" },
      { item: "Internal cooling fan, wiring harness, and packaging", qty: 1, unitCost: "Rs. 200", subtotal: "Rs. 200" }
    ],
    totalEstimatedCost: "Rs. 6,450 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "IEEE Transactions on Consumer Electronics, 'Closed-Loop Thermal Control for Induction Cooking Appliances,' 2023.",
      "Bureau of Indian Standards, 'IS 302-2-6: Safety of Household Cooking Appliances,' 2021."
    ],
    futureScope: [
      "Liquid ingredient dosing pump integration for automated oil and water delivery",
      "Nutritional calorie and macro-nutrient tracking integrated with Apple Health / Google Fit",
      "AI vision camera inside hopper verifying spice freshness before cooking"
    ]
  },
  {
    id: "cs-9",
    number: 9,
    title: "VoltVigil: Non-Intrusive Home Energy Disaggregator",
    category: "Smart Energy Management",
    summary: "A smart electrical panel clamp-on monitor that uses high-frequency Non-Intrusive Load Monitoring (NILM) machine learning algorithms to identify and disaggregate the exact power consumption and operational health of every individual household appliance using a single pair of current clamps.",
    societalProblem: "Rising residential electricity tariffs and unmonitored inefficient appliances (like faulty AC compressors or degraded water heater elements) lead to exorbitant monthly power bills and unnecessary carbon emissions. Traditional whole-home meters show only total kilowatt-hours without explaining what caused the spike.",
    userResearch: "Interviews with 50 urban homeowners in Kerala revealed that when an electricity bill spikes from Rs. 2,000 to Rs. 6,500, people have no idea which appliance is malfunctioning and resort to blaming the electric utility meter.",
    empathizePhase: {
      empathyFindings: "Consumers feel helpless looking at an aggregate utility bill; they want real-time rupee-per-hour appliance breakdowns on their phone.",
      personaSummary: "Mathew (42, Bank Manager in Thrissur): Shocked by a bi-monthly KSEB electricity bill of Rs. 9,200; wants to know if his 8-year-old inverter AC is faulty.",
      journeyTouchpoint: "Receives shock bill -> Suspects AC or refrigerator -> Calls technician -> Technician finds nothing -> Bill stays high next cycle -> Frustration."
    },
    definePhase: {
      problemStatement: "Homeowners need an effortless, single-point energy monitor that disaggregates appliance-level power consumption and warns of equipment degradation because aggregate utility bills provide zero actionable insights into waste.",
      successMetrics: [
        "Non-intrusive installation: Zero wire cutting (clip-on split-core CT clamps)",
        "Disaggregation accuracy: >= 90% identification of major loads (AC, Fridge, Geyser, EV Charger)",
        "Real-time sampling: 8 kHz voltage-current waveform capture",
        "Retail price: < Rs. 4,999 (repayable in 4 months via energy savings)"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Individual smart plugs plugged into every wall socket in the house",
        "Single main panel high-frequency current clamp with edge TinyML transient disaggregation",
        "Utility smart meter software-only API disaggregation",
        "Optical pulse counter attached to utility spinning disc meter"
      ],
      convergentSelection: "Single DIN-rail clamp-on module with dual split-core current transformers and on-device TinyML harmonic signature classification.",
      scamperApplication: "Eliminate: Eliminated the need to buy 15 separate smart plugs (costing Rs. 15,000) by using a single main panel sensing point with mathematical ML disaggregation."
    },
    feasibilityStudy: {
      technical: "High-frequency current transient capture (8 kHz) extracts unique V-I trajectory and harmonic fingerprint per appliance; 1D-CNN runs in 45ms on ESP32-S3.",
      economic: "BOM cost of Rs. 1,820; retail price of Rs. 4,499 saves average user Rs. 800-1,200/month by identifying energy leaks.",
      market: "Over 40 million electrified urban homes with air conditioning and refrigerators in India.",
      operational: "Licensed electricians or DIY homeowners can install clip-on clamps into the MCB distribution box in under 15 minutes.",
      legalEthical: "Zero personal data sold; appliance signatures processed strictly on edge with AES-256 encrypted cloud backup."
    },
    proofOfConcept: {
      objectives: "Verify whether a 1D-CNN classifier can distinguish between an inverter refrigerator turning on versus an inverter air conditioner ramping up based purely on current harmonic transient waveforms.",
      keyRisks: [
        "Electrical noise from cheap Chinese LED drivers masking appliance signatures",
        "Mains voltage fluctuations distorting current harmonic profiles"
      ],
      validationResult: "Simultaneous voltage-current sampling normalized against grid voltage variations; achieved 92.4% disaggregation accuracy across 12 simultaneous domestic appliances."
    },
    detailedDesign: {
      srdSpecs: [
        "Sensors: Dual 100A/50mA precision split-core current transformers (Class 0.5 accuracy)",
        "Metering IC: Dedicated high-accuracy energy metering AFE (Microchip MCP39F511)",
        "Processor: Dual-core ESP32-S3 (240MHz) with 8MB PSRAM running TensorFlow Lite for Microcontrollers",
        "Connectivity: 2.4 GHz Wi-Fi 802.11 b/g/n + BLE 5.0",
        "Form Factor: Standard 2-module DIN-rail mounting enclosure (flame retardant UL94-V0)"
      ],
      dfmConsiderations: "Snaps directly onto standard 35mm DIN rails inside domestic distribution boards; screwless terminal blocks for rapid wiring.",
      industrialStandards: ["IEC 61010-1 (Electrical safety for measurement equipment)", "IS 13779 (AC static watt-hour meters)"]
    },
    prototyping: {
      alphaPrototype: "Built on prototyping perfboard with split-core CTs connected to laptop running Python ML models; monitored lab appliances for 2 weeks.",
      betaPrototype: "Packaged inside custom DIN-rail enclosures; installed in 20 homes across Ernakulam; successfully detected 3 failing refrigerator defrost heaters.",
      timelineStrategy: "Utilized pre-certified commercial split-core current transformers rather than designing custom magnetic coils."
    },
    pilotBuild: {
      pilotObjectives: "Produce 100 pilot units to test high-voltage isolation (2.5 kV dielectric withstand) and calibrate automated CT phase angle correction test rigs.",
      manufacturingPartner: "Syscon Instruments & Energy Systems, Bangalore.",
      testingProcedures: "High-voltage flash testing at 2,500V AC; calibration across 0.1A to 80A current range against Fluke power quality reference meters.",
      scaleStrategy: "Partner with solar rooftop installation companies to bundle VoltVigil as a smart generation/consumption monitor."
    },
    commercialization: {
      targetPrice: "Rs. 4,499 (Hardware Unit) + Free Mobile App (Optional Rs. 49/month predictive maintenance alerts)",
      bepEstimate: "400 units to recover DIN-rail enclosure tooling, metering calibration jigs, and electrical safety certification.",
      marketStrategy: "Distribution through electrical contractors, solar EPC installers, and e-commerce platforms."
    },
    billOfMaterials: [
      { item: "Dual 100A Split-Core Current Transformers (Class 0.5)", qty: 2, unitCost: "Rs. 280", subtotal: "Rs. 560" },
      { item: "MCP39F511 Energy Measurement Analog Front-End IC", qty: 1, unitCost: "Rs. 190", subtotal: "Rs. 190" },
      { item: "ESP32-S3 8MB Micro-controller Module", qty: 1, unitCost: "Rs. 420", subtotal: "Rs. 420" },
      { item: "Isolated Ultra-Compact AC-DC Power Supply Board (5V 1A)", qty: 1, unitCost: "Rs. 220", subtotal: "Rs. 220" },
      { item: "Flame-Retardant UL94-V0 2-DIN Rail Enclosure", qty: 1, unitCost: "Rs. 180", subtotal: "Rs. 180" },
      { item: "Screwless Terminal Blocks, MOV Surge Suppressors & PCB", qty: 1, unitCost: "Rs. 140", subtotal: "Rs. 140" },
      { item: "Packaging, calibration label & quick-start manual", qty: 1, unitCost: "Rs. 110", subtotal: "Rs. 110" }
    ],
    totalEstimatedCost: "Rs. 1,820 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "M. Zeifman et al., 'Nonintrusive Appliance Load Monitoring: Review and Outlook,' IEEE Trans. Consumer Electronics, 2022.",
      "International Energy Agency (IEA), 'Digitalization and Energy Efficiency in Smart Homes,' 2023."
    ],
    futureScope: [
      "Automated appliance health degradation alerts (e.g. 'Your AC compressor bearings are wearing out; power draw increased 18%')",
      "Automated peak-tariff load shifting integration with home battery inverters",
      "Dynamic carbon footprint calculator tracking real-time grid emissions"
    ]
  },
  {
    id: "cs-10",
    number: 10,
    title: "BrailleTab: Affordable Refreshable Braille Slate",
    category: "Educational Technology",
    summary: "A low-cost, 20-cell refreshable mechanical Braille reader and tactile slate that utilizes electromagnetic micro-solenoid latches and bistable mechanical pins to provide digital book access for visually impaired school children at 10x lower cost than imported displays.",
    societalProblem: "Over 90% of visually impaired children in developing nations cannot read digital books because imported refreshable Braille displays cost over Rs. 1,50,000 ($2,000). Physical paper Braille books are enormous, heavy (a single textbook fills 8 volumes), and expensive to print.",
    userResearch: "Interviews with 15 teachers and 25 blind students at the Government School for the Blind in Aluva revealed that students share a single antique paper Braille library, while modern computers and smartphones remain inaccessible without audio, which isolates them during silent classroom study.",
    empathizePhase: {
      empathyFindings: "Blind children feel excluded when seeing their sighted peers read novels quietly; paper Braille books degrade rapidly as dots flatten after months of finger friction.",
      personaSummary: "Gopika (14, Blind 9th Standard Student): Dreams of becoming a civil servant; struggles to study textbooks because paper Braille editions arrive 6 months after the school year starts.",
      journeyTouchpoint: "School starts -> Sighted students get printed books -> Braille books delayed -> Teacher reads aloud -> Cannot revise independently -> Struggles in exams."
    },
    definePhase: {
      problemStatement: "Visually impaired students need an affordable, portable digital Braille display that renders standard e-books into tactile Braille pins because paper books are bulky and delayed, while imported refreshable displays are prohibitively expensive.",
      successMetrics: [
        "Cell capacity: 20 refreshable Braille cells (6 dots per cell = 120 tactile pins)",
        "Pin dot force: >= 0.15 N tactile resistance under reading finger pressure",
        "Refresh speed: Full 20-cell line refresh in < 250 milliseconds",
        "Target price: < Rs. 15,000 (10x lower than imported piezoelectric displays)"
      ]
    },
    ideatePhase: {
      divergentIdeas: [
        "Rotating wheel with embossed Braille around perimeter",
        "Electromagnetic micro-solenoid latching mechanism with bistable spring pins",
        "Electro-active polymer shape memory alloy wires",
        "Pneumatic micro-fluidic blister bubble display"
      ],
      convergentSelection: "Bistable mechanical micro-latch array driven by a single moving carriage electromagnetic actuator, dramatically reducing coil count.",
      scamperApplication: "Eliminate: Traditional displays use 120 expensive piezoelectric bimorph reeds (costing $8 each); this design eliminates individual actuators by using a single shared scanning motor that mechanically sets bistable latches."
    },
    feasibilityStudy: {
      technical: "A single moving carriage sets 20 cells in 220ms using low-cost miniature latching cams; consumes power only during pin transitions.",
      economic: "BOM cost of Rs. 4,680; retail price of Rs. 12,999 is fully coverable by government Sarva Shiksha Abhiyan educational assistive device budgets.",
      market: "Over 2 million visually impaired school and college students in India.",
      operational: "Standard SD-card slot and USB-C port loads plain text, EPUB, and PDF files directly, converting them to Grade 1 and Grade 2 Braille automatically.",
      legalEthical: "Complies with Indian Copyright Act Section 52(1)(zb) facilitating legal format conversion of copyright material for disabled persons."
    },
    proofOfConcept: {
      objectives: "Verify whether a single moving carriage mechanism can actuate 6 bistable plastic pins to the standard Marburg Braille specification (dot height 0.5mm, dot spacing 2.5mm) and withstand 0.2 N vertical finger reading pressure without collapsing.",
      keyRisks: [
        "Mechanical friction causing pin jamming over time",
        "Carriage motor noise distracting users during reading"
      ],
      validationResult: "Machined precision delrin latch cams; withstood 0.28 N downward force without pin collapse; achieved 50,000 line refreshes without jamming."
    },
    detailedDesign: {
      srdSpecs: [
        "Display: 20-cell, 6-dot refreshable Braille line (Marburg Medium standard spacing)",
        "Reading Speed: Supports up to 120 words per minute reading velocity",
        "Storage: 32GB MicroSD card storing over 10,000 digital textbooks",
        "Battery: 3.7V 2500mAh Li-ion battery providing 14 hours of continuous reading",
        "Navigation: 4 cursor routing keys + ergonomic thumb panning rocker switches"
      ],
      dfmConsiderations: "Precision injection-molded POM (Polyoxymethylene / Delrin) pin blocks for ultra-low friction; stamped brass latch springs.",
      industrialStandards: ["ISO 17049 (Braille on signage, equipment and appliances)", "IS 16333 (Mobile device accessibility)"]
    },
    prototyping: {
      alphaPrototype: "Built with 3D printed resin pin blocks and CNC machined brass latches; tested with 3 blind adults to verify dot sharpness and tactile readability.",
      betaPrototype: "Packaged inside rugged injection-molded ABS housing; distributed to 8 blind students at the Blind School in Aluva for 2 months of daily classroom use.",
      timelineStrategy: "Used off-the-shelf high-precision coreless DC gearmotors from drone gimbal suppliers for the scanning carriage."
    },
    pilotBuild: {
      pilotObjectives: "Produce 50 pilot units with precision mechatronics assembly partner in Coimbatore to validate optical pin height calibration jigs (±0.05mm tolerance).",
      manufacturingPartner: "Pricol Precision Technologies, Coimbatore.",
      testingProcedures: "Automated finger simulation endurance tester applying 0.25N repetitive pressure for 100,000 cycles; pin drop shock test.",
      scaleStrategy: "Integrate into the National Education Policy (NEP 2020) assistive technology procurement tenders across state education departments."
    },
    commercialization: {
      targetPrice: "Rs. 12,999 (Subsidized price: Rs. 6,499 through ministry scholarships)",
      bepEstimate: "350 units to amortize micro-injection molds and educational certification testing.",
      marketStrategy: "Partnerships with National Association for the Blind (NAB), state education boards, and corporate CSR literacy endowments."
    },
    billOfMaterials: [
      { item: "Precision Delrin 20-Cell Braille Pin Block Assembly", qty: 1, unitCost: "Rs. 1,450", subtotal: "Rs. 1,450" },
      { item: "Miniature Coreless Carriage Motor & Encoder", qty: 1, unitCost: "Rs. 520", subtotal: "Rs. 520" },
      { item: "Micro-Solenoid Latch Setting Head", qty: 1, unitCost: "Rs. 380", subtotal: "Rs. 380" },
      { item: "ESP32-S3 Micro-controller & Grade-2 Braille Engine", qty: 1, unitCost: "Rs. 420", subtotal: "Rs. 420" },
      { item: "3.7V 2500mAh Li-ion Battery & Charging Circuit", qty: 1, unitCost: "Rs. 320", subtotal: "Rs. 320" },
      { item: "Molded ABS Ergonomic Tablet Enclosure", qty: 1, unitCost: "Rs. 650", subtotal: "Rs. 650" },
      { item: "Tactile Navigation Keys & MicroSD Card Slot", qty: 1, unitCost: "Rs. 190", subtotal: "Rs. 190" },
      { item: "32GB MicroSD Card preloaded with NCERT textbooks", qty: 1, unitCost: "Rs. 250", subtotal: "Rs. 250" },
      { item: "Carrying case, USB-C cable & Braille user manual", qty: 1, unitCost: "Rs. 500", subtotal: "Rs. 500" }
    ],
    totalEstimatedCost: "Rs. 4,680 (Unit BOM Cost at 1,000-unit volume)",
    researchReferences: [
      "V. K. Goyal et al., 'Affordable Refreshable Braille: Electromechanical Design Paradigms,' IEEE Trans. Haptics, 2023.",
      "UNESCO, 'Guidelines on Digital Inclusion and Assistive Technology in Education,' 2022."
    ],
    futureScope: [
      "Tactile 2D pin matrix display for rendering mathematical graphs and geometrical shapes",
      "Vernacular Malayalam and Hindi Braille contraction translation tables",
      "Bluetooth audio screen reader sync with Android TalkBack and Apple VoiceOver"
    ]
  }
];

