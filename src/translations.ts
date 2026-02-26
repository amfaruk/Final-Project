// src/translations.ts
export type Lang = "en" | "am" | "om";

type TranslationKeys = {
  welcome: string;
  home: string;
  title: string;
  subtitle: string;
  about: string;
  learnMore: string;
  login: string;
  managerLogin: string;
  sectorLogin: string;
  password: string;
  enterPassword: string;
  savePassword: string;
  signIn: string;
  visionTitle: string;
  visionDesc: string;
  missionTitle: string;
  missionDesc: string;
  objectivesTitle: string;
  objective1: string;
  objective2: string;
  objective3: string;
  objective4: string;
  systemOverviewTitle: string;
  systemOverviewDesc: string;
  guidelineTitle: string;
  howToUseTitle: string;
  howToUseDesc: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  historyTitle: string;
  historyDesc: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  sector: string;
  sectorPortal: string;
  sectorGreeting: string;
  enterInfo: string;
  sectorName: string;
  govDoc: string;
  longitudeFile: string;
  latitudeFile: string;
  chooseFile: string;
  submitInfo: string;
  back: string;
  close: string;
  officialWebsite: string;
  brand: string;
  copyright: string;

  // Manager Dashboard keys
  managerDashboard: string;
  managerGreeting: string;
  receivedInfo: string;
  adminHub: string;
  managerActive: string;
  collisionAnalysis: string;
  active: string;
  connectedSectors: string;
  totalSubmissions: string;
};

export const translations: Record<Lang, TranslationKeys> = {
  en: {
    welcome: "Home",
    home: "Home",
    title: "Ethiopian Infrastructure System",
    subtitle: "Centralized infrastructure management",
    about: "About Us",
    learnMore: "Learn More",
    login: "Login",
    managerLogin: "Manager Login",
    sectorLogin: "Sector Login",
    password: "Password",
    enterPassword: "Enter your password",
    savePassword: "Save password",
    signIn: "Sign In",
    visionTitle: "Vision",
    visionDesc: "We manage and coordinate infrastructure data to improve planning, monitoring and service delivery across all sectors.",
    missionTitle: "Mission",
    missionDesc: "To provide a centralized, AI-powered infrastructure management system that improves coordination and reduces planning conflicts.",
    objectivesTitle: "Objectives",
    objective1: "Centralize all infrastructure project data.",
    objective2: "Detect and prevent project overlaps using AI.",
    objective3: "Support sector managers in decision-making.",
    objective4: "Improve transparency and resource allocation.",
    systemOverviewTitle: "System Overview",
    systemOverviewDesc: "The Ethiopian Infrastructure System integrates all sectors into a single platform, allowing real-time monitoring, reporting, and analysis.",
    guidelineTitle: "Submission Guidelines",
    howToUseTitle: "How to Use the Website",
    howToUseDesc: "Follow these steps to navigate and utilize the EIMS platform effectively:",
    step1: "Navigate the Home page for a general overview of the AI Gap Analysis objectives.",
    step2: "Read the 'Learn More' section to understand infrastructure collision history and system solutions.",
    step3: "Login using your assigned Sector or Manager credentials via the 'Get Started' portal.",
    step4: "Sectors: Use the dashboard to upload project documents and geospatial coordinate files.",
    step5: "Managers: Monitor the 'Received Sector Information' table to detect planning conflicts.",
    historyTitle: "01. Infrastructure Collision History",
    historyDesc: "Historically, Ethiopian infrastructure projects have suffered from lack of synchronization. Newly paved roads were frequently excavated by utility companies for pipe installations, leading to significant financial waste and public inconvenience.",
    problemTitle: "02. The Problem: Fragmented Planning",
    problemDesc: "Fragmented planning between different government sectors—Roads, Water, Electricity, and Telecom—creates 'spatial collisions.' These are areas where two or more projects occupy the same physical space at the same time without mutual awareness.",
    solutionTitle: "03. The Solution: Centralized AI Gap Analysis",
    solutionDesc: "Our AI-powered gap analysis system centralizes all project data. It automatically detects overlapping coordinates and analyzes the chronological gap between project phases, alerting managers before budget allocation occurs.",
    sector: "Sector Dashboard",
    sectorPortal: "Sector Portal",
    sectorGreeting: "Welcome — submit your sector data here.",
    enterInfo: "Enter Information",
    sectorName: "Sector Name",
    govDoc: "Government Legality Document",
    longitudeFile: "Longitude Coordinates (File)",
    latitudeFile: "Latitude Coordinates (File)",
    chooseFile: "Choose a file to upload",
    submitInfo: "Submit Information",
    back: "Back",
    close: "Close",
    officialWebsite: "Official website",
    brand: "CDAAS",
    copyright: "© 2026 Ethiopian Infrastructure System",

    // Manager Dashboard keys
    managerDashboard: "Manager Dashboard",
    managerGreeting: "Welcome — here you can monitor and manage sector data.",
    receivedInfo: "Received Sector Information",
    adminHub: "Administrative Coordination Hub",
    managerActive: "Manager Active",
    collisionAnalysis: "Collision Analysis",
    active: "Active",
    connectedSectors: "Connected Sectors",
    totalSubmissions: "Total Submissions",
  },

  am: {
    welcome: "መነሻ",
    home: "መነሻ",
    title: "የኢትዮጵያ ኢንፍራስትራክቸር ስርዓት",
    subtitle: "የተሳተፉ የኢንፍራ አስተዳደር ስርዓት",
    about: "ስለ እኛ",
    learnMore: "ተጨማሪ ያውቁ",
    login: "መግቢያ",
    managerLogin: "የአስተዳዳሪ መግቢያ",
    sectorLogin: "የመስክ መግቢያ",
    password: "ፕስወርድ",
    enterPassword: "ፕስወርድዎን ያስገቡ",
    savePassword: "ፕስወርድ አስቀምጥ",
    signIn: "ግባ",
    visionTitle: "ራዕይ",
    visionDesc: "እኛ የኢንፍራስትራክቸር ዳታን እና ማስተካከያን ለማሻሻል እንጠናቀቃለን።",
    missionTitle: "ተልዕኮ",
    missionDesc: "የሁሉንም የኢንፍራስትራክቸር አስተዳደር ስርዓት በመካተት ችግሮችን ለመቀነስ እና ለማስተካከል ይረዳል።",
    objectivesTitle: "ዓላማዎች",
    objective1: "ሁሉንም የኢንፍራስትራክቸር ፕሮጀክቶች ዳታ አንድ በማድረግ መረጃ ማግኘት።",
    objective2: "በAI የፕሮጀክት ግጭቶችን መገንባትና ማስከላከል።",
    objective3: "ለመስክ አስተዳዳሪዎች የውሳኔ እድል ማቀላጠፍ።",
    objective4: "ግልጽነትን እና የሃብት ስርጭትን ማሻሻል።",
    systemOverviewTitle: "የስርዓት እይታ",
    systemOverviewDesc: "የኢትዮጵያ ኢንፍራስትራክቸር ስርዓት ሁሉንም መስኮች አንድ ላይ በማዋል በሰዓት በሰዓት እና ሪፖርት እና ትንተና እንዲኖር ይፈቅዳል።",
    guidelineTitle: "መስጠት መመሪያዎች",
    howToUseTitle: "ድረ-ገጹን እንዴት እንደሚጠቀሙ",
    howToUseDesc: "እነዚህን እርምጃዎች ተከትለው የEIMS መድረክ ይጠቀሙ።",
    step1: "የAI ግንዛቤ ትኩረት ለማግኘት የመነሻ ገጽን ይመልከቱ።",
    step2: "የተጨማሪ መረጃ ክፍልን ያንብቡ፤ የኢንፍራስትራክቸር ግጭት ታሪክ እና መፍትሄ ያስተውሉ።",
    step3: "በመጀመሪያ የተሰጠዎትን መስክ ወይም አስተዳዳሪ መግቢያ ተጠቀሙ።",
    step4: "መስኮች፡ ፕሮጀክት ሰነዶችን እና ጂዦስፓቻል ኮርዲኔቶችን ያስገቡ።",
    step5: "አስተዳዳሪዎች፡ የተሰጠዎ መረጃ ሰንጠረዥን ተከታትሉ፤ ግጭቶችን ያገኙ።",
    historyTitle: "01. የኢንፍራስትራክቸር ግጭት ታሪክ",
    historyDesc: "ታሪካዊ በኢትዮጵያ የኢንፍራስትራክቸር ፕሮጀክቶች የቅንብር አልነበረም። አዲስ ጎዳናዎች በመገጣጠም በንግድ ኩባንያዎች ተፈልገው ተገናኝተው የገንዘብ እና የሕዝብ እንቅስቃሴ ያጋጥማሉ።",
    problemTitle: "02. ችግር፡ ተከፋፍሎ የማይኖር ዕቅድ",
    problemDesc: "በተለያዩ መንግስት መስኮች—ጎዳናዎች፣ ውሃ፣ ኤሌክትሪክ፣ ቴሌኮም—መካከል የተከፋፈለ እቅድ ይፈጥራል። “ስፔሻል ግጭት” ማለት ከዚህ በላይ ፕሮጀክቶች በአንድ ቦታ በአንደኛ ጊዜ ሲኖሩ ያሳያል።",
    solutionTitle: "03. መፍትሄ፡ የAI ግንዛቤ ማእከል",
    solutionDesc: "የAI ስርዓት ሁሉንም ፕሮጀክት ዳታ ይአንደርሳል። እሱ ተዛማጅ ኮርዲኔቶችን ይለያያል እና ከተወሰኑ የፕሮጀክት ደረጃዎች ጊዜ ግንዛቤ በፊት አስተዳዳሪዎችን ያሳያል።",
    sector: "የመስክ መስክ",
    sectorPortal: "የመስክ መዳረሻ",
    sectorGreeting: "እንኳን ደህና መጡ — የመስክ ዳታዎችን እዚህ ያስገቡ።",
    enterInfo: "ማስገባት",
    sectorName: "የመስክ ስም",
    govDoc: "የመንግስት ህጋዊ ሰነድ",
    longitudeFile: "የረዥም ኮርዲኔት (ፋይል)",
    latitudeFile: "የርዝመት ኮርዲኔት (ፋይል)",
    chooseFile: "ፋይል ይምረጡ",
    submitInfo: "መረጃ ያስገቡ",
    back: "ተመለስ",
    close: "ዝጋ",
    officialWebsite: "የመንግስት ድረ-ገጽ",
    brand: "CDAAS",
    copyright: "© 2026 የኢትዮጵያ ኢንፍራስትራክቸር",

    managerDashboard: "የአስተዳዳሪ ዳሽቦርድ",
    managerGreeting: "እንኳን ደህና መጡ — እዚህ የመስክ ዳታ ማስተዳደር ይችላሉ።",
    receivedInfo: "የተቀበሉ የመስክ መረጃዎች",
    adminHub: "የአስተዳደር አማካይ ማዕከል",
    managerActive: "አስተዳዳሪ እንደሚሰራ",
    collisionAnalysis: "የግጭት ትንተና",
    active: "እየሰሩ ላይ",
    connectedSectors: "የተገናኙ መስኮች",
    totalSubmissions: "ድምር የተላኩ መረጃዎች",
  },

  om: {
    welcome: "Fuula Duraa",
    home: "Fuula Duraa",
    title: "Sirna Ijaarsa Ethiopia",
    subtitle: "To'annoo ijaarsa waloo",
    about: "Nuti eenyu?",
    learnMore: "Dabalata hubadhu",
    login: "Seensa",
    managerLogin: "Seensa Bulchaa",
    sectorLogin: "Seensa Qooda",
    password: "Jecha darbii",
    enterPassword: "Jecha darbii galchaa",
    savePassword: "Jecha darbii olkaa'i",
    signIn: "Seeni",
    visionTitle: "Mul'ata",
    visionDesc: "Odeeffannoo ijaarsa waloo too’achuuf fi hordofuuf sirna tokko qopheessina.",
    missionTitle: "Hojii",
    missionDesc: "Sirna waloo kan AI fayyadamu, gargaarsa bulchaa fi waldhaansoo xiqqeessu.",
    objectivesTitle: "Kaayyoo",
    objective1: "Odeeffannoo proojektii hundaa walitti qindeessu.",
    objective2: "AI fayyadamuun wal dorgommii proojektii ittisu.",
    objective3: "Bulchaa qoodaaf deeggarsa murtii gochuu.",
    objective4: "Itti fufinsaa fi qoodinsa qabeenya fooyyessu.",
    systemOverviewTitle: "Ijaarsa Sirna",
    systemOverviewDesc: "Sirni ijaarsa Ethiopia, proojektoota mara bakka tokkotti qindeessa, hordoffii fi qorannoo yeroo dhugaa kenna.",
    guidelineTitle: "Qajeelfama Galchaa",
    howToUseTitle: "Akkaataa Fuula Marsariitiitti fayyadamu",
    howToUseDesc: "Tartiiba kana hordofaa EIMS fayyadamaa:",
    step1: "Fuula Duraa ilaali, kaayyoo AI hubachuuf.",
    step2: "Kutaa 'Dabalata Hubadhu' dubbisi, seenaa fi fala ijaarsa beeki.",
    step3: "Seensa qooda ykn bulchaa fayyadami.",
    step4: "Qoodota: Odeeffannoo fi kooridinetoota geospatiaal galchi.",
    step5: "Bulchaa: Table 'Received Sector Information' hordofi, wal dorgommii argi.",
    historyTitle: "01. Seenaa Walitti Bu'iinsa Ijaarsa",
    historyDesc: "Proojektoonni Ethiopia yeroo darbe wal hin simanne. Daandii haaraa yeroo hedduu jijjiirama argate.",
    problemTitle: "02. Rakkoo: Qoodinsa Hin Waloo",
    problemDesc: "Qoodinsa hin waloo proojektoota keessaa, daandii, bishaan, ibsaa, telekom wal qunnamaa hin jirre.",
    solutionTitle: "03. Furmaata: AI Gap Analysis",
    solutionDesc: "Sirni AI, odeeffannoo hunda walitti qindeessa, walitti bu'iinsa argisiisa, bulchaa dursee beeksisa.",
    sector: "Qooda Dashboard",
    sectorPortal: "Qooda Portal",
    sectorGreeting: "Baga nagaan dhuftan — odeeffannoo qooda galchaa.",
    enterInfo: "Galchi Odeeffannoo",
    sectorName: "Maqaa Qoodaa",
    govDoc: "Galmee Seeraa Mootummaa",
    longitudeFile: "Kooridinetoota Dheeraa (Faayilii)",
    latitudeFile: "Kooridinetoota Bal'aa (Faayilii)",
    chooseFile: "Faayilii Filadhu",
    submitInfo: "Odeeffannoo Galchi",
    back: "Deebi'i",
    close: "Cufi",
    officialWebsite: "Marsariitii Mootummaa",
    brand: "CDAAS",
    copyright: "© 2026 Sirna Ijaarsa Ethiopia",

    managerDashboard: "Dashboard Bulchaa",
    managerGreeting: "Baga nagaan dhuftan — asitti odeeffannoo qoodaa too’achuu dandeessu.",
    receivedInfo: "Odeeffannoo Qoodaa Argame",
    adminHub: "Giddugala To'annoo Bulchiinsa",
    managerActive: "Bulchaa Aktiiva",
    collisionAnalysis: "Xiinxala Walitti Bu'iinsa",
    active: "Aktiiva",
    connectedSectors: "Qoodota Walitti Hidhaman",
    totalSubmissions: "Guutuu Galmeewwan",
  },
};
