// ═══════════════════════════════════════════════════════════
//  Nexa Hub Services — Central Data Store
//  All content, services, FAQs, team and stats live here.
//  Edit this file to update any content site-wide.
//
//  Anything marked  ← PLACEHOLDER  must be replaced with the
//  client's real details before the site goes live.
// ═══════════════════════════════════════════════════════════

// ─── BRAND CONFIG ───────────────────────────────────────────
const PHONE_DIGITS = '919875037579'   // phone with country code, digits only (tel: & WhatsApp links)

export const BRAND = {
  name: 'Nexa Hub Services',
  shortName: 'Nexa Hub',
  legalName: 'Nexa Hub Services',
  founder: 'Yogi Surendra Nath',
  tagline: 'Empowering Startups & MSMEs',
  subTagline: 'Strategic advisory, funding, compliance and digital transformation — business registration from A to Z.',
  description:
    'Nexa Hub Services empowers startups and MSMEs with strategic advisory, government funding, compliance and business registration from A to Z — GST, PMEGP loans, Startup India, trademark, MSME, FSSAI, IEC, income tax and more. Based in Ahmedabad, serving clients across India.',
  phone: '+91 98750 37579',
  phoneLink: `tel:+${PHONE_DIGITS}`,
  whatsapp: PHONE_DIGITS,
  email: 'info@nexahubservices.in',    // ← PLACEHOLDER: confirm business email
  address: 'Ahmedabad, Gujarat, India', // ← add full street address if the client wants it shown
  city: 'Ahmedabad',
  state: 'Gujarat',
  timings: 'Quick response, 7 days a week',
  mapLink: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat', // ← replace with the office's Google Maps link
  domain: 'nexahubservices.in',
  website: 'https://nexahubservices.in',
  // Social profiles — icons only appear for links that are filled in
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
    twitter:   '',
    youtube:   '',
  },
}

// Website developer credit (footer)
export const DEVELOPER = {
  name: 'Code Hyphen',
  url: 'https://codehyphen.in',
  whatsapp: '919911681113',
}

// Build a WhatsApp deep-link with a pre-filled message
export const waLink = (message = `Hi! I'd like to know more about ${BRAND.name}.`) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`

// ─── STATS (animated counters) ──────────────────────────────
// ← confirm these figures with the client
export const STATS = [
  { number: 500,  suffix: '+', label: 'Businesses Served' },
  { number: 1200, suffix: '+', label: 'Filings Completed' },
  { number: 12,   suffix: '',  label: 'Service Categories' },
  { number: 100,  suffix: '%', label: 'Online Process' },
]

// ─── SERVICES (10 professional services) ───────────────────────────────
export const SERVICES = [
  {
    "id": 1,
    "slug": "income-tax",
    "title": "Income Tax Return Filing & Tax Planning",
    "shortTitle": "Income Tax & Planning",
    "icon": "fa-file-invoice-dollar",
    "iconEmoji": "💰",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "ITR filing for individuals, businesses & professionals with maximum tax savings.",
    "overview": "File your income tax return accurately and on time with Nexa Hub Services. We handle ITR-1 through ITR-7, reconcile your AIS/26AS, maximise deductions under 80C, 80D, HRA, and provide expert tax planning strategies.",
    "services": [
      "ITR Filing for Salaried & Business",
      "Old Pending ITR Filing",
      "Capital Gains & Crypto Tax",
      "NRI Return Filing",
      "Income Tax Notice, Assessment & Proceeding",
      "Tax Planning on Refund & Tax Saving",
      "AIS/26AS Reconciliation",
      "Advance Tax Computation"
    ],
    "startingPrice": "₹499",
    "timeline": "1-3 working days",
    "whatsappMsg": "Hi! I need Income Tax Filing assistance from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 2,
    "slug": "gst-services",
    "title": "GST Registration & GST Return Filing",
    "shortTitle": "GST Services",
    "icon": "fa-receipt",
    "iconEmoji": "🧾",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "Complete GST compliance — registration to annual returns, notices & audit.",
    "overview": "Nexa Hub Services provides end-to-end GST services. From obtaining your GSTIN to filing monthly, quarterly, and annual returns, we handle everything efficiently ensuring you claim maximum ITC and stay penalty-free.",
    "services": [
      "New GST Registration",
      "GSTR-1 & GSTR-3B Filing",
      "GSTR-9 Annual Return",
      "GST Reconciliation (GSTR-2A/2B)",
      "GST Audit",
      "LUT Application",
      "GST Notice Reply"
    ],
    "highlights": [
      { "icon": "ri-flashlight-line", "title": "Fast GSTIN", "text": "Application filed the same day your documents are ready." },
      { "icon": "ri-exchange-funds-line", "title": "Claim Input Credit", "text": "Recover GST paid on purchases and lower your costs." },
      { "icon": "ri-calendar-check-line", "title": "Never Miss a Due Date", "text": "Monthly reminders and on-time GSTR-1 / GSTR-3B filing." }
    ],
    "documents": [
      "PAN & Aadhaar of the proprietor / partners / directors",
      "Passport-size photograph",
      "Business address proof (electricity bill / rent agreement + NOC)",
      "Bank statement or cancelled cheque",
      "Incorporation certificate / partnership deed (for firms & companies)",
      "Authorisation letter / board resolution (for firms & companies)"
    ],
    "faqs": [
      { "id": 1, "q": "Who must register for GST?", "a": "Registration is mandatory when aggregate turnover exceeds ₹40 lakh for goods (₹20 lakh in special category states) or ₹20 lakh for services (₹10 lakh in special category states). Inter-state suppliers and e-commerce sellers must register regardless of turnover." },
      { "id": 2, "q": "How long does GST registration take?", "a": "We file the application as soon as your documents are ready. With Aadhaar authentication, the GSTIN is usually issued within a few working days, unless the officer raises a query — which we respond to for you." },
      { "id": 3, "q": "Is there any government fee for GST registration?", "a": "No. GST registration on the government portal is free; you pay only our professional fee." },
      { "id": 4, "q": "What happens if I file GST returns late?", "a": "A late fee of ₹50 per day (₹20 for nil returns) applies, subject to caps, plus 18% annual interest on tax due. Continued non-filing can lead to cancellation of the GSTIN." }
    ],
    "startingPrice": "₹499",
    "timeline": "3-7 working days",
    "whatsappMsg": "Hi! I need GST Services from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 3,
    "slug": "tax-audit",
    "title": "Tax Audit & Statutory Audit",
    "shortTitle": "Tax Audit",
    "icon": "fa-file-signature",
    "iconEmoji": "📝",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Comprehensive Tax & Statutory Audit services for businesses and corporations.",
    "overview": "Ensure full regulatory compliance with our audit services. Nexa Hub Services conducts Tax Audits u/s 44AB and Statutory Audits to verify your financial statements are accurate and comply with the latest tax laws.",
    "services": [
      "Tax Audit u/s 44AB",
      "Statutory Audit of Companies",
      "NGO, Trust & Society Audit",
      "ADT-1 — Auditor Appointment",
      "Form 3CA/3CB & 3CD",
      "Internal Audit",
      "Audit Report Preparation"
    ],
    "startingPrice": "Consult for Pricing",
    "timeline": "Case-specific",
    "whatsappMsg": "Hi! I need Tax Audit services from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 4,
    "slug": "tds-compliance",
    "title": "TDS Return & Compliance",
    "shortTitle": "TDS Compliance",
    "icon": "fa-percent",
    "iconEmoji": "📊",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Quarterly TDS/TCS return filing, deduction computation & Form 16 issuance.",
    "overview": "We manage your complete TDS compliance. Nexa Hub Services handles TDS computation, quarterly return filing (24Q, 26Q, 27EQ), default resolution, and issues Form 16/16A to employees and vendors.",
    "services": [
      "TDS Computation & Challan",
      "24Q, 26Q, 27EQ Filing",
      "Form 16/16A Generation",
      "TAN Registration",
      "TDS Notice Resolution"
    ],
    "startingPrice": "₹1,499",
    "timeline": "2-5 working days",
    "whatsappMsg": "Hi! I need TDS compliance services from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 5,
    "slug": "business-registration",
    "title": "Business Registration & Setup",
    "shortTitle": "Business Setup",
    "icon": "fa-building",
    "iconEmoji": "🏢",
    "category": "Business",
    "isPopular": true,
    "badge": "High Demand",
    "shortDesc": "One-stop business setup — Proprietorship to Private Limited, FSSAI, IEC & NGO registrations.",
    "overview": "Start your business the right way with Nexa Hub Services. We help you choose the right structure and handle all registrations — from simple Proprietorships to Private Limited Companies, FSSAI food licenses, IEC for export-import, and NGO/Trust/Society formation.",
    "services": [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "Private Limited Company (Pvt Ltd)",
      "One Person Company (OPC)",
      "FSSAI Food License",
      "IEC — Import Export Code",
      "NGO / Trust / Society Registration",
      "MSME / Udyam Registration"
    ],
    "startingPrice": "₹4,999",
    "timeline": "7-15 working days",
    "whatsappMsg": "Hi! I want to register a business with Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 6,
    "slug": "roc-compliance",
    "title": "ROC / Corporate Compliance",
    "shortTitle": "ROC Compliance",
    "icon": "fa-landmark",
    "iconEmoji": "🏛️",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Annual filings, board resolutions, minutes & all MCA/ROC compliance for companies.",
    "overview": "Keep your company fully compliant with MCA regulations. Nexa Hub Services handles all your ROC filings, annual returns (AOC-4, MGT-7), board meeting minutes, and statutory registers to keep you penalty-free.",
    "services": [
      "Annual Return (MGT-7)",
      "Financial Statements (AOC-4)",
      "Board Meeting Minutes & Resolutions",
      "Director Appointment / Resignation",
      "Share Transfer & Allotment",
      "Charge Creation / Satisfaction",
      "Statutory Register Maintenance"
    ],
    "startingPrice": "₹3,999",
    "timeline": "5-10 working days",
    "whatsappMsg": "Hi! I need ROC/Corporate compliance from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 7,
    "slug": "project-reports",
    "title": "Project Reports & CMA Data",
    "shortTitle": "Project Reports",
    "icon": "fa-chart-bar",
    "iconEmoji": "📈",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Bank loan project reports, CMA data & feasibility studies for all business types.",
    "overview": "Nexa Hub Services prepares professional project reports and CMA (Credit Monitoring Arrangement) data for bank loans, Mudra, SIDBI, and PMEGP. Our reports meet bank standards and are designed to maximise loan approval chances.",
    "services": [
      "Project Report for Bank Loans",
      "CMA Data Preparation",
      "Mudra Loan Report",
      "SIDBI / PMEGP Reports",
      "Feasibility Studies",
      "Business Plan Preparation"
    ],
    "startingPrice": "₹2,999",
    "timeline": "3-5 working days",
    "whatsappMsg": "Hi! I need a Project Report / CMA Data from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 8,
    "slug": "certificates",
    "title": "Certificates & Attestations",
    "shortTitle": "Certificates",
    "icon": "fa-certificate",
    "iconEmoji": "🏅",
    "category": "Certificates",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Turnover, net worth, solvency, export and other certificates for banks, tenders and visas.",
    "overview": "Nexa Hub Services arranges all types of professional certificates required for bank loans, tenders, visa applications and government schemes — prepared accurately and delivered fast.",
    "services": [
      "Turnover / Revenue Certificate",
      "Net Worth Certificate",
      "Export / Import Turnover Certificate",
      "Solvency Certificate",
      "Capital / Fund Utilisation Certificate",
      "15CA / 15CB Certificate",
      "Form 15G / 15H"
    ],
    "startingPrice": "₹1,499",
    "timeline": "1-2 working days",
    "whatsappMsg": "Hi! I need a certificate / attestation from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 9,
    "slug": "loan-documentation",
    "title": "Loan Documentation & Bank Liaison",
    "shortTitle": "Loan Documentation",
    "icon": "fa-hand-holding-usd",
    "iconEmoji": "🏦",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Complete loan file preparation — home, business, MSME & personal loan documentation.",
    "overview": "Nexa Hub Services assists with complete loan documentation — from ITR preparation to balance sheet compilation, bank statement analysis, and project report preparation — to help you secure the loan you need.",
    "services": [
      "Home Loan Documentation",
      "Business Loan File Preparation",
      "MSME / Mudra Loan Documentation",
      "Personal Loan ITR Support",
      "Balance Sheet & P&L for Loans",
      "Bank Statement Analysis & Certification"
    ],
    "startingPrice": "₹1,999",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hi! I need Loan Documentation assistance from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 10,
    "slug": "fno-capital-gain",
    "title": "F&O / Capital Gain Tax",
    "shortTitle": "F&O & Capital Gain",
    "icon": "fa-chart-line",
    "iconEmoji": "📉",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Specialised ITR filing for F&O traders, equity investors & capital gain computation.",
    "overview": "Nexa Hub Services handles complex ITR filings for F&O traders and investors — computing turnover, setting off losses, claiming expenses, and ensuring full tax compliance for stock market participants.",
    "services": [
      "F&O Turnover Computation",
      "ITR-3 Filing for F&O Traders",
      "Long-Term & Short-Term Capital Gains",
      "Crypto / Virtual Digital Asset Tax",
      "Loss Set-Off & Carry Forward",
      "P&L from Broker Reports"
    ],
    "startingPrice": "₹2,499",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hi! I need F&O / Capital Gain Tax filing from Nexa Hub Services.",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 11,
    "slug": "pmegp-loan",
    "title": "PMEGP Loan Scheme — Project Approval & Subsidy",
    "shortTitle": "PMEGP Loan",
    "category": "Govt. Funding",
    "shortDesc": "Start your own business with a PMEGP loan — project cost up to ₹50 lakh with 15–35% government subsidy.",
    "overview": "The Prime Minister's Employment Generation Programme (PMEGP) helps first-time entrepreneurs set up new manufacturing, service and trading units with a bank loan backed by a government margin-money subsidy. Nexa Hub Services handles everything — eligibility check, bankable project report, online application on the KVIC portal, bank follow-up and EDP training guidance — until your loan is sanctioned.",
    "services": [
      "Eligibility & Subsidy Assessment",
      "Bankable Project Report Preparation",
      "Online Application on KVIC PMEGP Portal",
      "Bank Selection & Loan Follow-up",
      "EDP Training Guidance",
      "Subsidy Claim & Disbursement Support"
    ],
    "highlights": [
      { "icon": "ri-funds-line", "title": "Up to ₹50 Lakh", "text": "Maximum project cost for manufacturing units (₹20 lakh for service units)." },
      { "icon": "ri-hand-coin-line", "title": "15–35% Subsidy", "text": "Margin-money subsidy based on category and rural / urban location." },
      { "icon": "ri-user-star-line", "title": "Only 5–10% Own Share", "text": "Your contribution is just 10% (general) or 5% (special category)." }
    ],
    "documents": [
      "Aadhaar & PAN card",
      "Passport-size photograph",
      "Educational qualification certificate (VIII pass for larger projects)",
      "Caste / special category certificate (if applicable)",
      "Rural area certificate (for rural units)",
      "Project report & quotations for machinery",
      "Bank account details"
    ],
    "faqs": [
      { "id": 1, "q": "Who can apply for a PMEGP loan?", "a": "Any individual above 18 years can apply for a new unit. For projects above ₹10 lakh (manufacturing) or ₹5 lakh (service), the applicant must have passed at least Class VIII. Self-help groups, societies, trusts and production co-operatives are also eligible. Existing units and units that have already availed a government subsidy are not eligible." },
      { "id": 2, "q": "How much subsidy is available under PMEGP?", "a": "General category applicants get 15% subsidy in urban areas and 25% in rural areas. Special categories (SC/ST/OBC/minorities/women/ex-servicemen/differently-abled/NER, hill and border areas) get 25% in urban and 35% in rural areas." },
      { "id": 3, "q": "What is the maximum project cost under PMEGP?", "a": "Up to ₹50 lakh for manufacturing units and up to ₹20 lakh for service or business units. The balance after your contribution is provided as a bank loan." },
      { "id": 4, "q": "How long does PMEGP loan approval take?", "a": "Timelines depend on the implementing agency and bank, but most applications move from submission to sanction within a few weeks when the project report and documents are complete. We follow up with the agency and bank at every stage." }
    ],
    "startingPrice": "₹2,499",
    "timeline": "Case-specific",
    "whatsappMsg": "Hi! I want to apply for a PMEGP loan. Please guide me.",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 12,
    "slug": "startup-india",
    "title": "Startup India (DPIIT) Registration",
    "shortTitle": "Startup India",
    "category": "Govt. Funding",
    "shortDesc": "Get DPIIT startup recognition and unlock tax exemptions, IP fee rebates and government funding access.",
    "overview": "DPIIT recognition under the Startup India initiative gives eligible startups access to tax benefits, faster and cheaper patent & trademark filing, self-certification under labour laws, easier public procurement and government funding schemes. Nexa Hub Services prepares your pitch, innovation write-up and documents, files the application and handles queries until your recognition certificate is issued.",
    "services": [
      "Eligibility Check & Entity Structuring",
      "Pitch / Innovation Write-up Preparation",
      "DPIIT Recognition Application",
      "Section 80-IAC Tax Exemption Application",
      "Startup India Seed Fund Guidance",
      "Query & Clarification Handling"
    ],
    "highlights": [
      { "icon": "ri-percent-line", "title": "3-Year Tax Holiday", "text": "100% income-tax exemption for 3 consecutive years under Section 80-IAC (on approval)." },
      { "icon": "ri-lightbulb-flash-line", "title": "Cheaper IP Filing", "text": "Up to 80% rebate on patent fees and 50% on trademark fees." },
      { "icon": "ri-government-line", "title": "Funding Access", "text": "Eligibility for the Startup India Seed Fund and Fund of Funds schemes." }
    ],
    "documents": [
      "Certificate of Incorporation / LLP or Partnership registration",
      "PAN of the entity",
      "Director / partner details",
      "Brief on the product or service and its innovation",
      "Website, pitch deck or product video (if available)",
      "Proof of funding / awards / IP (if any)"
    ],
    "faqs": [
      { "id": 1, "q": "Which businesses are eligible for DPIIT recognition?", "a": "Private limited companies, LLPs and registered partnership firms that are up to 10 years old, have not crossed ₹100 crore turnover in any financial year, and are working on innovation, improvement of products / processes, or a scalable business model with potential for jobs or wealth creation." },
      { "id": 2, "q": "Is a sole proprietorship eligible for Startup India?", "a": "No. Only private limited companies, LLPs and registered partnership firms can be recognised. We can help you convert or incorporate the right entity first." },
      { "id": 3, "q": "Is the 80-IAC tax exemption automatic after DPIIT recognition?", "a": "No. Recognition is the first step. Private limited companies and LLPs must then apply separately to the Inter-Ministerial Board for the Section 80-IAC tax holiday — we prepare and file that application too." },
      { "id": 4, "q": "Is there any government fee for DPIIT recognition?", "a": "No. The DPIIT application itself is free; you pay only our professional fee for preparation, filing and follow-up." }
    ],
    "startingPrice": "₹2,999",
    "timeline": "7-15 working days",
    "whatsappMsg": "Hi! I want to get Startup India (DPIIT) recognition for my business.",
    "image": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 13,
    "slug": "trademark-registration",
    "title": "Trademark Registration",
    "shortTitle": "Trademark",
    "category": "Registration",
    "shortDesc": "Protect your brand name, logo and tagline with a registered trademark — search, filing and objection handling.",
    "overview": "Your brand is one of your most valuable assets. A registered trademark gives you exclusive rights over your name, logo or tagline across India and the legal power to stop copycats. Nexa Hub Services runs a detailed availability search, picks the right class, files your application and represents you through objections until registration.",
    "services": [
      "Trademark Availability Search",
      "Class Selection & Application Filing (TM-A)",
      "Use of ™ Symbol from Filing Date",
      "Examination Report & Objection Reply",
      "Opposition Support",
      "Trademark Renewal & Assignment"
    ],
    "highlights": [
      { "icon": "ri-shield-check-line", "title": "Exclusive Rights", "text": "Legal ownership of your brand name and logo across India." },
      { "icon": "ri-time-line", "title": "Valid for 10 Years", "text": "Renewable indefinitely, every 10 years." },
      { "icon": "ri-price-tag-3-line", "title": "Lower Govt. Fee", "text": "Individuals, startups and MSMEs pay half the standard government fee." }
    ],
    "documents": [
      "Applicant name, address and nationality",
      "Brand name / logo (JPG) to be registered",
      "Description of goods or services",
      "Date of first use (if already in use)",
      "MSME / Startup certificate (for fee concession)",
      "Signed authorisation (Form TM-48)"
    ],
    "faqs": [
      { "id": 1, "q": "How long does trademark registration take?", "a": "The application is filed within 1–2 days and you can use the ™ symbol immediately. Full registration (®) typically takes several months to over a year, depending on examination, objections and opposition." },
      { "id": 2, "q": "What is the government fee for trademark registration?", "a": "For e-filing, the government fee is ₹4,500 per class for individuals, startups and MSMEs, and ₹9,000 per class for other applicants." },
      { "id": 3, "q": "When can I use the ® symbol?", "a": "Only after the trademark is registered and the certificate is issued. Until then you can use ™ once the application is filed." },
      { "id": 4, "q": "What if my trademark gets an objection?", "a": "We draft and file a detailed reply to the examination report and, if required, represent you at the hearing to get the mark accepted." }
    ],
    "startingPrice": "₹999",
    "timeline": "1-2 working days to file",
    "whatsappMsg": "Hi! I want to register a trademark for my brand.",
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 14,
    "slug": "iec-registration",
    "title": "Import Export Code (IEC) Registration",
    "shortTitle": "IEC Registration",
    "category": "Registration",
    "shortDesc": "Get your 10-digit IEC from DGFT to start importing or exporting — quick online approval, no renewal.",
    "overview": "An Import Export Code (IEC) issued by the Directorate General of Foreign Trade is mandatory for anyone importing or exporting goods or services from India. Nexa Hub Services files your IEC application online, links it with your bank and helps you with the annual update so your code always stays active.",
    "services": [
      "New IEC Application on DGFT Portal",
      "IEC Modification / Update",
      "Annual IEC Update (April–June)",
      "AD Code Registration Guidance",
      "RCMC Registration with Export Councils",
      "GST LUT for Exporters"
    ],
    "highlights": [
      { "icon": "ri-earth-line", "title": "Go Global", "text": "Mandatory for import / export and to receive foreign payments for exports." },
      { "icon": "ri-infinity-line", "title": "No Renewal", "text": "Valid for life — just a simple yearly update to keep it active." },
      { "icon": "ri-flashlight-line", "title": "Quick Approval", "text": "Fully online application, usually approved within a few working days." }
    ],
    "documents": [
      "PAN of the individual / business",
      "Aadhaar / identity proof of the applicant",
      "Address proof of the business premises",
      "Cancelled cheque or bank certificate",
      "Digital signature or Aadhaar-linked mobile for verification"
    ],
    "faqs": [
      { "id": 1, "q": "Who needs an IEC?", "a": "Any business or individual importing goods into India or exporting goods / services from India for commercial purposes needs an IEC. Banks also ask for it to process foreign remittances for exports." },
      { "id": 2, "q": "Does IEC need to be renewed?", "a": "No, IEC has lifetime validity. However, it must be updated on the DGFT portal every year between April and June, even if there are no changes — otherwise it gets deactivated." },
      { "id": 3, "q": "What is the government fee for IEC?", "a": "The DGFT government fee for a new IEC is ₹500." }
    ],
    "startingPrice": "₹1,999",
    "timeline": "2-5 working days",
    "whatsappMsg": "Hi! I want to apply for an Import Export Code (IEC).",
    "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 15,
    "slug": "fssai-registration",
    "title": "FSSAI Food Licence & Registration",
    "shortTitle": "FSSAI Licence",
    "category": "Registration",
    "shortDesc": "Basic registration, State or Central FSSAI licence for restaurants, cloud kitchens, manufacturers and traders.",
    "overview": "Every food business in India — from home kitchens and cafés to manufacturers, distributors and exporters — must be registered or licensed with FSSAI. Nexa Hub Services identifies the right licence type for your turnover and activity, prepares the documents and files the application on FoSCoS, then handles renewals and annual returns.",
    "services": [
      "FSSAI Basic Registration",
      "FSSAI State Licence",
      "FSSAI Central Licence",
      "Licence Renewal & Modification",
      "Annual Return (Form D1)",
      "Labelling & Compliance Guidance"
    ],
    "highlights": [
      { "icon": "ri-restaurant-2-line", "title": "Right Licence, First Time", "text": "Basic (up to ₹12 lakh), State (₹12 lakh–₹20 crore) or Central licence." },
      { "icon": "ri-shield-star-line", "title": "Build Customer Trust", "text": "Display your 14-digit FSSAI number on menus, packaging and listings." },
      { "icon": "ri-store-2-line", "title": "Sell Anywhere", "text": "Required to list on Swiggy, Zomato, Amazon and other platforms." }
    ],
    "documents": [
      "Photo ID & address proof of the proprietor / partners / directors",
      "Passport-size photograph",
      "Address proof of the premises (rent agreement / electricity bill)",
      "List of food products to be handled",
      "Layout plan & equipment list (for State / Central licence)",
      "Food safety management plan (for State / Central licence)"
    ],
    "faqs": [
      { "id": 1, "q": "Which FSSAI licence do I need?", "a": "Basic registration is for businesses with annual turnover up to ₹12 lakh, State licence for ₹12 lakh to ₹20 crore, and Central licence above ₹20 crore or for importers, exporters and businesses operating in multiple states." },
      { "id": 2, "q": "What is the validity of an FSSAI licence?", "a": "You can choose a validity of 1 to 5 years at the time of application, and renew before expiry." },
      { "id": 3, "q": "Is FSSAI required for home-based food businesses?", "a": "Yes. Even home bakers, tiffin services and cloud kitchens need at least a Basic FSSAI registration." }
    ],
    "startingPrice": "₹999",
    "timeline": "7-30 working days",
    "whatsappMsg": "Hi! I need an FSSAI food licence / registration.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 16,
    "slug": "msme-registration",
    "title": "MSME (Udyam) Registration",
    "shortTitle": "MSME / Udyam",
    "category": "Registration",
    "shortDesc": "Register your business as an MSME on the Udyam portal and unlock cheaper loans, subsidies and payment protection.",
    "overview": "Udyam Registration is the official government recognition for Micro, Small and Medium Enterprises. It opens the door to collateral-free loans, interest subsidies, protection against delayed payments, tender benefits and concessions on trademark and patent fees. Nexa Hub Services completes your Udyam registration accurately and helps you actually use the benefits.",
    "services": [
      "New Udyam Registration",
      "Udyam Update / Amendment",
      "NSIC & GeM Portal Registration",
      "MSME Samadhaan (Delayed Payment) Claims",
      "Scheme & Subsidy Guidance",
      "Udyam Certificate Support"
    ],
    "highlights": [
      { "icon": "ri-bank-line", "title": "Easier Bank Credit", "text": "Priority-sector lending and collateral-free loans under CGTMSE." },
      { "icon": "ri-time-line", "title": "Payment Protection", "text": "Buyers must pay MSMEs within 45 days under the MSMED Act." },
      { "icon": "ri-auction-line", "title": "Tender Benefits", "text": "EMD exemptions and preference in government procurement." }
    ],
    "documents": [
      "Aadhaar of the proprietor / partner / director",
      "PAN of the business (for firms & companies)",
      "GSTIN (if applicable)",
      "Bank account details",
      "Business address & activity (NIC code) details",
      "Investment and turnover figures"
    ],
    "faqs": [
      { "id": 1, "q": "Is Udyam registration free?", "a": "Yes, registration on the government Udyam portal is free. Our fee covers accurate classification, NIC code selection, filing and support." },
      { "id": 2, "q": "How are MSMEs classified?", "a": "From April 2025: Micro — investment up to ₹2.5 crore and turnover up to ₹10 crore; Small — up to ₹25 crore and ₹100 crore; Medium — up to ₹125 crore and ₹500 crore." },
      { "id": 3, "q": "Can a trader or service provider register as an MSME?", "a": "Yes. Manufacturers, service providers and retail / wholesale traders can all obtain Udyam registration (traders for priority-sector lending benefits)." }
    ],
    "startingPrice": "₹999",
    "timeline": "1-2 working days",
    "whatsappMsg": "Hi! I want to register my business as an MSME (Udyam).",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop"
  }
]

// ─── PARENT SERVICE CATEGORIES (12 parent cards + subcategories & pricing) ──
// Used in the main Services page with expandable subcategory accordions.
// Prices shown as "Starting from ₹XXX" — final quote depends on scope / complexity.
// Govt fees (if any) are charged at actuals, separately.
export const PARENT_SERVICES = [
  {
    id: 'startup-funding',
    title: 'Startup India & Govt. Funding',
    shortTitle: 'Startup & Funding',
    icon: 'ri-rocket-line',
    startingPrice: '₹1,999',
    badge: 'Trending',
    isPopular: true,
    category: 'Startup & Funding',
    page: 'pmegp-loan',
    shortDesc: 'PMEGP loans with up to 35% subsidy, Startup India (DPIIT) recognition, Mudra & CGTMSE — funding guidance end-to-end.',
    whatsappMsg: 'Hi! I need guidance on Startup India / government funding schemes.',
    subcategories: [
      { name: 'PMEGP Loan — Application & Project Report', price: 'Starting from ₹2,499', popular: true },
      { name: 'Startup India (DPIIT) Recognition', price: 'Starting from ₹2,999', popular: true },
      { name: 'Section 80-IAC Tax Exemption Application', price: 'Starting from ₹4,999' },
      { name: 'Mudra Loan Application Support', price: 'Starting from ₹1,999' },
      { name: 'CGTMSE Collateral-Free Loan Assistance', price: 'Starting from ₹1,999' },
      { name: 'Startup India Seed Fund Application', price: 'On Consultation' },
      { name: 'Bank Loan Project Report & CMA Data', price: 'Starting from ₹2,999' },
    ]
  },
  {
    id: 'gst',
    title: 'GST Services',
    shortTitle: 'GST',
    emoji: '🧾',
    icon: 'ri-receipt-line',
    startingPrice: '₹499',
    badge: 'Most Popular',
    isPopular: true,
    category: 'GST',
    page: 'gst-services',
    shortDesc: 'Complete GST compliance — new registration, return filing, amendments & notices handled by experts.',
    whatsappMsg: 'Hi! I need GST services from Nexa Hub Services. Please guide me.',
    subcategories: [
      { name: 'New GST Registration', price: 'Starting from ₹499', popular: true },
      { name: 'GSTR-1 Monthly / Quarterly Filing', price: 'Starting from ₹499/month' },
      { name: 'GSTR-3B Return Filing', price: 'Starting from ₹499/month' },
      { name: 'GSTR-9 Annual Return', price: 'Starting from ₹1,999' },
      { name: 'GSTR-9C Reconciliation Statement', price: 'Starting from ₹3,499' },
      { name: 'GST Cancellation / Surrender', price: 'Starting from ₹999' },
      { name: 'GST Amendment (Core / Non-Core)', price: 'Starting from ₹699' },
      { name: 'LUT Application (Export)', price: 'Starting from ₹999' },
      { name: 'GST Notice / Demand Reply', price: 'Starting from ₹1,999' },
      { name: 'GST Refund Application', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'itr',
    title: 'Income Tax Return (ITR)',
    shortTitle: 'ITR',
    emoji: '💰',
    icon: 'ri-file-chart-line',
    startingPrice: '₹499',
    badge: 'High Demand',
    isPopular: true,
    category: 'ITR',
    page: 'income-tax',
    shortDesc: 'Accurate ITR filing for salaried, business, professionals & NRIs with maximum deductions.',
    whatsappMsg: 'Hi! I need ITR filing services from Nexa Hub Services.',
    subcategories: [
      { name: 'ITR-1 — Salaried / Pension', price: 'Starting from ₹499', popular: true },
      { name: 'ITR-2 — Capital Gains / HUF / NRI', price: 'Starting from ₹999' },
      { name: 'ITR-3 — Business / Profession / F&O', price: 'Starting from ₹1,499' },
      { name: 'ITR-4 (Presumptive) — Freelancers & Small Business', price: 'Starting from ₹799' },
      { name: 'Updated Return (ITR-U) — Old Pending Years', price: 'Starting from ₹1,499' },
      { name: 'NRI Income Tax Return Filing', price: 'Starting from ₹2,499' },
      { name: 'Income Tax Notice Reply & Assessment', price: 'Starting from ₹2,999' },
      { name: 'Tax Computation & Planning', price: 'Starting from ₹999' },
      { name: 'Advance Tax Computation', price: 'Starting from ₹799' },
      { name: 'AIS / 26AS Reconciliation', price: 'Starting from ₹699' },
    ]
  },
  {
    id: 'tds',
    title: 'TDS Services',
    shortTitle: 'TDS',
    emoji: '📊',
    icon: 'ri-percent-line',
    startingPrice: '₹999',
    badge: null,
    isPopular: false,
    category: 'TDS',
    page: 'tds-compliance',
    shortDesc: 'Quarterly TDS / TCS return filing, Form 16 generation & TDS notice resolution.',
    whatsappMsg: 'Hi! I need TDS return filing services from Nexa Hub Services.',
    subcategories: [
      { name: 'TAN Registration (New)', price: 'Starting from ₹999' },
      { name: '24Q — Salary TDS Return', price: 'Starting from ₹999/quarter', popular: true },
      { name: '26Q — Non-Salary TDS Return', price: 'Starting from ₹999/quarter' },
      { name: '27EQ — TCS Return', price: 'Starting from ₹999/quarter' },
      { name: 'Form 16 / 16A Generation & Issuance', price: 'Starting from ₹499' },
      { name: 'TDS Default / Short Deduction Rectification', price: 'Starting from ₹1,499' },
      { name: 'TDS Refund Claim (Form 26B)', price: 'Starting from ₹999' },
      { name: 'Lower TDS Deduction Certificate (Sec 197)', price: 'Starting from ₹1,999' },
      { name: '15CA / 15CB for Foreign Remittances', price: 'Starting from ₹1,999' },
      { name: 'TDS Notice & Demand Reply', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'legal',
    title: 'Legal Services',
    shortTitle: 'Legal',
    emoji: '⚖️',
    icon: 'ri-scales-3-line',
    startingPrice: '₹4,999',
    badge: 'Expert Panel',
    isPopular: false,
    category: 'Legal',
    shortDesc: 'Litigation support, appeal filing, demand notice replies & tax dispute resolution.',
    whatsappMsg: 'Hi! I need legal / litigation assistance from Nexa Hub Services.',
    subcategories: [
      { name: 'Income Tax Litigation & Representation', price: 'Starting from ₹4,999', popular: true },
      { name: 'GST Appeal Filing', price: 'Starting from ₹4,999' },
      { name: 'CIT(A) Appeal Preparation', price: 'Starting from ₹5,999' },
      { name: 'ITAT (Tribunal) Appeal', price: 'Starting from ₹9,999' },
      { name: 'Demand Notice Reply (Income Tax)', price: 'Starting from ₹4,999' },
      { name: 'Demand Notice Reply (GST)', price: 'Starting from ₹4,999' },
      { name: 'Scrutiny Assessment Response', price: 'Starting from ₹6,999' },
      { name: 'Writ Petition / High Court Matter', price: 'On Consultation' },
      { name: 'Compounding Application', price: 'Starting from ₹4,999' },
      { name: 'Stay Application — Tax Recovery', price: 'Starting from ₹4,999' },
    ]
  },
  {
    id: 'pf-esic',
    title: 'PF & ESIC',
    shortTitle: 'PF / ESIC',
    emoji: '🛡️',
    icon: 'ri-shield-user-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'PF / ESIC',
    shortDesc: 'PF & ESIC registration, monthly challan, returns & employee compliance management.',
    whatsappMsg: 'Hi! I need PF / ESIC registration or compliance services from Nexa Hub Services.',
    subcategories: [
      { name: 'PF (EPFO) Registration', price: 'Starting from ₹1,999', popular: true },
      { name: 'ESIC Registration', price: 'Starting from ₹1,999' },
      { name: 'Monthly PF Challan Filing', price: 'Starting from ₹999/month' },
      { name: 'Monthly ESIC Challan Filing', price: 'Starting from ₹999/month' },
      { name: 'PF Annual Return (Form 3A / 6A)', price: 'Starting from ₹1,999' },
      { name: 'PF Withdrawal / Transfer Assistance', price: 'Starting from ₹999' },
      { name: 'UAN Activation & KYC Update', price: 'Starting from ₹499' },
      { name: 'PF / ESIC Inspection Support', price: 'Starting from ₹2,499' },
      { name: 'PF Arrears Computation & Payment', price: 'Starting from ₹1,999' },
      { name: 'ESIC IP Number & Card Assistance', price: 'Starting from ₹499' },
    ]
  },
  {
    id: 'trademark',
    title: 'Trade Mark',
    shortTitle: 'Trade Mark',
    emoji: '™️',
    icon: 'ri-service-line',
    startingPrice: '₹999',
    badge: 'Govt Fees Extra',
    isPopular: false,
    category: 'Trade Mark',
    page: 'trademark-registration',
    shortDesc: 'Trademark registration, objection reply, copyright & design protection — protect your brand.',
    whatsappMsg: 'Hi! I need trademark registration services from Nexa Hub Services.',
    subcategories: [
      { name: 'Trademark Registration (1 Class)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'Trademark Search & Availability Report', price: 'Starting from ₹499' },
      { name: 'Trademark Objection Reply', price: 'Starting from ₹2,999' },
      { name: 'Trademark Renewal', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'Trademark Assignment / Transfer', price: 'Starting from ₹2,499' },
      { name: 'Copyright Registration', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'Design Registration', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'Geographical Indication (GI Tag)', price: 'On Consultation' },
      { name: 'Logo / Brand Protection Advisory', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'incorporation',
    title: 'Incorporation & Registration',
    shortTitle: 'Incorporation',
    emoji: '🏢',
    icon: 'ri-building-4-line',
    startingPrice: '₹999',
    badge: 'High Demand',
    isPopular: true,
    category: 'Incorporation',
    page: 'business-registration',
    shortDesc: 'Company, LLP, OPC, Section 8, Partnership & Proprietorship — complete incorporation support.',
    whatsappMsg: 'Hi! I want to incorporate a company or register a business with Nexa Hub Services.',
    subcategories: [
      { name: 'Private Limited Company (Pvt Ltd)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'Limited Liability Partnership (LLP)', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'One Person Company (OPC)', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'Section 8 Company (NGO)', price: 'Starting from ₹4,999 + Govt Fee' },
      { name: 'Partnership Firm Registration', price: 'Starting from ₹999' },
      { name: 'Sole Proprietorship Registration', price: 'Starting from ₹999' },
      { name: 'Producer Company Registration', price: 'Starting from ₹7,999 + Govt Fee' },
      { name: 'Nidhi Company Registration', price: 'Starting from ₹9,999 + Govt Fee' },
      { name: 'DSC (Digital Signature Certificate)', price: 'Starting from ₹999' },
      { name: 'DIN (Director Identification Number)', price: 'Starting from ₹499' },
    ]
  },
  {
    id: 'mca',
    title: 'MCA / ROC Compliance',
    shortTitle: 'MCA',
    emoji: '🏛️',
    icon: 'ri-government-line',
    startingPrice: '₹499',
    badge: null,
    isPopular: false,
    category: 'MCA',
    page: 'roc-compliance',
    shortDesc: 'Annual filings, board minutes, director changes & all MCA / ROC compliance for companies & LLPs.',
    whatsappMsg: 'Hi! I need MCA / ROC compliance services from Nexa Hub Services.',
    subcategories: [
      { name: 'AOC-4 — Annual Financial Statement Filing', price: 'Starting from ₹499', popular: true },
      { name: 'MGT-7 / MGT-7A — Annual Return Filing', price: 'Starting from ₹499' },
      { name: 'LLP Form 8 — Statement of Accounts', price: 'Starting from ₹499' },
      { name: 'LLP Form 11 — Annual Return', price: 'Starting from ₹499' },
      { name: 'Director Appointment / Resignation (DIR-12)', price: 'Starting from ₹999' },
      { name: 'Change of Registered Office (INC-22)', price: 'Starting from ₹1,499' },
      { name: 'Share Allotment / Transfer (PAS-3 / SH-4)', price: 'Starting from ₹1,499' },
      { name: 'Increase in Authorised Capital (SH-7)', price: 'Starting from ₹1,499' },
      { name: 'Board Meeting Minutes & Resolutions', price: 'Starting from ₹999' },
      { name: 'Company Name Change (INC-24)', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'import-export',
    title: 'Import Export (IEC)',
    shortTitle: 'Import / Export',
    emoji: '🌏',
    icon: 'ri-ship-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'Import / Export',
    page: 'iec-registration',
    shortDesc: 'IEC registration, DGFT services, export documentation & foreign trade compliance.',
    whatsappMsg: 'Hi! I need Import Export / IEC services from Nexa Hub Services.',
    subcategories: [
      { name: 'IEC Registration (Import Export Code)', price: 'Starting from ₹1,999 + Govt Fee', popular: true },
      { name: 'IEC Modification / Update', price: 'Starting from ₹999' },
      { name: 'IEC Surrender / Cancellation', price: 'Starting from ₹999' },
      { name: 'RCMC Registration (Export Council)', price: 'Starting from ₹1,999' },
      { name: 'EPCG Licence Application', price: 'On Consultation' },
      { name: 'Advance Authorisation (DFIA)', price: 'On Consultation' },
      { name: 'RODTEP / MEIS Benefit Claims', price: 'Starting from ₹2,499' },
      { name: 'GST LUT for Exporters', price: 'Starting from ₹999' },
      { name: '15CA / 15CB for Import Payments', price: 'Starting from ₹1,999' },
      { name: 'Export Invoice & Shipping Bill Guidance', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    shortTitle: 'Accounting',
    emoji: '📒',
    icon: 'ri-book-2-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'Accounting',
    shortDesc: 'Monthly bookkeeping, P&L, balance sheet preparation & payroll management for businesses.',
    whatsappMsg: 'Hi! I need Accounting & Bookkeeping services from Nexa Hub Services.',
    subcategories: [
      { name: 'Monthly Bookkeeping (Tally / Zoho)', price: 'Starting from ₹1,999/month', popular: true },
      { name: 'Profit & Loss Statement', price: 'Starting from ₹1,999' },
      { name: 'Balance Sheet Preparation', price: 'Starting from ₹1,999' },
      { name: 'Payroll Processing & Salary Slips', price: 'Starting from ₹1,999/month' },
      { name: 'Bank Reconciliation Statement (BRS)', price: 'Starting from ₹1,999' },
      { name: 'Accounts Receivable / Payable Management', price: 'Starting from ₹1,999/month' },
      { name: 'Stock / Inventory Accounting', price: 'Starting from ₹1,999/month' },
      { name: 'Fixed Asset Register Maintenance', price: 'Starting from ₹1,999' },
      { name: 'Annual Accounts Finalization', price: 'Starting from ₹2,999' },
      { name: 'MIS Reports & Cash Flow Statements', price: 'Starting from ₹1,999' },
    ]
  },
  {
    id: 'msme',
    title: 'MSME / Udyam Registration',
    shortTitle: 'MSME',
    emoji: '🏭',
    icon: 'ri-store-3-line',
    startingPrice: '₹999',
    badge: null,
    isPopular: false,
    category: 'MSME',
    page: 'msme-registration',
    shortDesc: 'MSME / Udyam registration, update & government scheme assistance for small businesses.',
    whatsappMsg: 'Hi! I need MSME / Udyam registration from Nexa Hub Services.',
    subcategories: [
      { name: 'New Udyam Registration', price: 'Starting from ₹999', popular: true },
      { name: 'Udyam Update / Amendment', price: 'Starting from ₹499' },
      { name: 'Udyam Certificate Download', price: 'Starting from ₹299' },
      { name: 'UAM to Udyam Migration', price: 'Starting from ₹499' },
      { name: 'NSIC Registration for Tenders', price: 'Starting from ₹2,999' },
      { name: 'GeM Portal Registration (Govt Marketplace)', price: 'Starting from ₹1,999' },
      { name: 'MSME Samadhaan (Delayed Payment Claim)', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'fssai',
    title: 'FSSAI Food Licensing',
    shortTitle: 'FSSAI',
    emoji: '🍽️',
    icon: 'ri-restaurant-line',
    startingPrice: '₹999',
    badge: 'Govt Fees Extra',
    isPopular: false,
    category: 'FSSAI',
    page: 'fssai-registration',
    shortDesc: 'FSSAI basic, state & central food licence registration, renewal & modifications.',
    whatsappMsg: 'Hi! I need FSSAI food licence registration from Nexa Hub Services.',
    subcategories: [
      { name: 'FSSAI Basic Registration (Petty Operator)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'FSSAI State Licence', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'FSSAI Central Licence', price: 'Starting from ₹2,999 + Govt Fee' },
      { name: 'FSSAI Licence Renewal', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'FSSAI Modification / Amendment', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'FSSAI Annual Return (Form D1)', price: 'Starting from ₹999' },
      { name: 'FSSAI Petitioner / Appeal Filing', price: 'Starting from ₹1,999' },
      { name: 'Food Safety Compliance Advisory', price: 'Starting from ₹1,499' },
      { name: 'Product Approval & Labelling Guidance', price: 'Starting from ₹1,999' },
    ]
  },
]

// ─── SERVICE GROUPS (navbar mega-menu) ──────────────────────
export const NAV_SERVICE_GROUPS = [
  {
    heading: 'Registrations',
    links: [
      { name: 'GST Registration & Returns', href: '/services/gst-services' },
      { name: 'MSME (Udyam) Registration', href: '/services/msme-registration' },
      { name: 'Trademark Registration', href: '/services/trademark-registration' },
      { name: 'FSSAI Food Licence', href: '/services/fssai-registration' },
      { name: 'Import Export Code (IEC)', href: '/services/iec-registration' },
      { name: 'Company & Business Setup', href: '/services/business-registration' },
    ],
  },
  {
    heading: 'Startup & Funding',
    links: [
      { name: 'PMEGP Loan Scheme', href: '/services/pmegp-loan' },
      { name: 'Startup India (DPIIT)', href: '/services/startup-india' },
      { name: 'Project Reports & CMA Data', href: '/services/project-reports' },
      { name: 'Loan Documentation', href: '/services/loan-documentation' },
    ],
  },
  {
    heading: 'Tax & Compliance',
    links: [
      { name: 'Income Tax Return Filing', href: '/services/income-tax' },
      { name: 'TDS Return & Compliance', href: '/services/tds-compliance' },
      { name: 'ROC / Corporate Compliance', href: '/services/roc-compliance' },
      { name: 'Tax Audit', href: '/services/tax-audit' },
      { name: 'Certificates & Attestations', href: '/services/certificates' },
    ],
  },
]

// ─── FEATURED (client's WhatsApp catalogue) ─────────────────
export const FEATURED_SERVICES = [
  { slug: 'pmegp-loan',             tag: 'Govt. Funding', title: 'PMEGP Loan Scheme',        text: 'Project cost up to ₹50 lakh with 15–35% government subsidy. Start your business, build your future.' },
  { slug: 'gst-services',           tag: 'Registration',  title: 'GST Registration',          text: 'Fast GSTIN with complete documentation support.' },
  { slug: 'startup-india',          tag: 'Startup',       title: 'Startup India (DPIIT)',     text: 'Get recognised and unlock tax & funding benefits.' },
  { slug: 'trademark-registration', tag: 'Brand',         title: 'Trademark Registration',    text: 'Protect your brand name, logo and identity.' },
  { slug: 'msme-registration',      tag: 'MSME',          title: 'MSME (Udyam) Registration', text: 'Cheaper loans, subsidies and payment protection.' },
  { slug: 'fssai-registration',     tag: 'Food',          title: 'FSSAI Licence',             text: 'Basic, State & Central food licences.' },
  { slug: 'iec-registration',       tag: 'Global Trade',  title: 'Import Export Code',        text: 'Start importing or exporting — no renewal needed.' },
]

// ─── WHY CHOOSE US (from the client's own promise) ──────────
export const WHY_CHOOSE_US = [
  { icon: 'ri-route-line',          title: 'Registration A to Z',      desc: 'From documentation to filing and approvals — one team handles everything, start to finish.' },
  { icon: 'ri-funds-box-line',      title: 'Funding Guidance',         desc: 'Expert help with PMEGP, Mudra, CGTMSE and Startup India schemes to fund your growth.' },
  { icon: 'ri-checkbox-circle-line',title: 'No Confusion, No Delay',   desc: 'Clear checklists, honest timelines and proactive updates at every step.' },
  { icon: 'ri-flashlight-line',     title: 'Quick Response',           desc: 'Always here when you need us — fast answers on WhatsApp and call.' },
]

// ─── PROCESS STEPS ───────────────────────────────────────────
export const PROCESS_STEPS = [
  { step: '01', icon: 'ri-chat-smile-3-line',   title: 'Tell Us Your Need',   desc: 'Message us on WhatsApp or call and share what you want to start, register or fund.' },
  { step: '02', icon: 'ri-folder-upload-line',  title: 'Share Documents',     desc: 'Get a personalised checklist and send your documents securely — no office visit required.' },
  { step: '03', icon: 'ri-settings-5-line',     title: 'We Do the Work',      desc: 'We prepare, verify and file everything on the relevant government portals and follow up.' },
  { step: '04', icon: 'ri-medal-line',          title: 'Done & Delivered',    desc: 'Receive your certificate, approval or acknowledgment — and keep growing.' },
]

// ─── HERO ────────────────────────────────────────────────────
export const HERO = {
  rotatingWords: ['GST Registration', 'PMEGP Loans', 'Startup India', 'Trademarks', 'MSME Udyam', 'FSSAI Licence'],
  headingLines: ['Start. Fund. Grow.', 'We Handle the Rest.'],
  description:
    'Business registration from A to Z — documentation, filing, approvals and government funding, handled end-to-end with quick response and complete support, so you can focus on growing your business.',
  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
  highlights: ['Business Registration A–Z', 'PMEGP & Govt. Funding', 'GST, FSSAI & IEC', 'Trademark Protection'],
}

// ─── MARQUEE ITEMS ────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'PMEGP Loan Scheme', 'GST Registration', 'Startup India (DPIIT)', 'Trademark Registration',
  'MSME Udyam', 'FSSAI Licence', 'Import Export Code', 'Company Registration',
  'Income Tax Filing', 'Mudra Loan', 'Project Reports', 'ROC Compliance',
]

// ─── TESTIMONIALS ─────────────────────────────────────────────
// ← sample reviews for the demo — replace with genuine client reviews before launch
export const TESTIMONIALS = [
  { id: 1, name: 'Rakesh Patel',     role: 'Manufacturing Unit Owner', city: 'Ahmedabad', rating: 5, text: 'My PMEGP loan looked impossible until Nexa Hub took over. Project report, portal application, bank follow-up — everything was handled and my subsidy came through.' },
  { id: 2, name: 'Nidhi Shah',       role: 'Co-founder, D2C Brand',    city: 'Surat',     rating: 5, text: 'Company registration, trademark and Startup India recognition — all done by one team, with updates on WhatsApp at every step. No confusion, no delay.' },
  { id: 3, name: 'Imran Qureshi',    role: 'Exporter',                 city: 'Rajkot',    rating: 5, text: 'Got my IEC and GST LUT sorted in days. They clearly understand what exporters need and explain everything simply.' },
  { id: 4, name: 'Meera Joshi',      role: 'Cloud Kitchen Owner',      city: 'Vadodara',  rating: 5, text: 'FSSAI licence and GST registration done together without stepping out once. Very professional and patient with all my questions.' },
  { id: 5, name: 'Harsh Mehta',      role: 'IT Consultant',            city: 'Gandhinagar', rating: 5, text: 'Quick response is real — I get answers on WhatsApp within minutes. My ITR and GST returns are always filed before the deadline.' },
  { id: 6, name: 'Kavita Desai',     role: 'Retail Business Owner',    city: 'Ahmedabad', rating: 5, text: 'MSME Udyam registration helped me get a collateral-free loan. Nexa Hub guided me through the whole process.' },
]

// ─── ABOUT SECTION ────────────────────────────────────────────
export const ABOUT = {
  heading: 'Your Partner From Idea to Growing Enterprise',
  description:
    'Nexa Hub Services was built to empower startups and MSMEs. Starting a business in India means registrations, approvals, funding applications and ongoing compliance — and that is exactly what we take off your plate. From your first GST number or PMEGP loan to trademarks, Startup India recognition and annual filings, we handle it end-to-end so you can focus on building your business.',
  highlights: [
    'Business registration from A to Z',
    'Government funding & loan scheme guidance',
    'Quick response — always here when you need',
    'Your work, our responsibility',
  ],
  image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  clientCategories: [
    'First-time Entrepreneurs', 'Startups', 'MSMEs & Manufacturers', 'Traders & Shop Owners',
    'Restaurants & Cloud Kitchens', 'Importers & Exporters', 'Freelancers & Professionals',
    'Private Limited Companies & LLPs', 'Salaried Individuals',
  ],
}

// ─── SERVICE CATEGORIES (contact form dropdown) ──────────────
export const SERVICE_CATEGORIES = ['PMEGP / Govt. Funding', 'Startup India (DPIIT)', 'GST', 'MSME / Udyam', 'Trademark', 'FSSAI', 'Import Export (IEC)', 'Company / Business Registration', 'Income Tax (ITR)', 'TDS', 'ROC Compliance', 'Accounting', 'Other']

// ─── FAQS ────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 1,
    q: 'What services does Nexa Hub Services offer?',
    a: 'We help startups and MSMEs with business registration from A to Z — GST, MSME (Udyam), trademark, FSSAI, Import Export Code and company / LLP registration — plus government funding support (PMEGP loans, Startup India DPIIT recognition, Mudra, CGTMSE), income tax and TDS filing, ROC compliance, accounting and project reports.',
  },
  {
    id: 2,
    q: 'Can you help me get a PMEGP loan for my new business?',
    a: 'Yes. We check your eligibility and subsidy category, prepare a bankable project report, file your application on the KVIC PMEGP portal and follow up with the agency and bank until sanction. PMEGP supports projects up to ₹50 lakh (manufacturing) with 15–35% government subsidy.',
  },
  {
    id: 3,
    q: 'Do I need to visit your office in Ahmedabad?',
    a: 'No. Every service is delivered online — share documents on WhatsApp or email and we handle the rest. Clients in and around Ahmedabad are always welcome to meet us in person.',
  },
  {
    id: 4,
    q: 'What are the benefits of Startup India (DPIIT) recognition?',
    a: 'Eligible startups can apply for a 3-year income-tax holiday under Section 80-IAC, get up to 80% rebate on patent fees and 50% on trademark fees, self-certify under labour laws and access government funding schemes like the Startup India Seed Fund.',
  },
  {
    id: 5,
    q: 'When is GST registration mandatory?',
    a: 'GST registration is mandatory when aggregate turnover exceeds ₹40 lakh for suppliers of goods (₹20 lakh in special category states) or ₹20 lakh for service providers (₹10 lakh in special category states). Inter-state suppliers and e-commerce sellers must register regardless of turnover.',
  },
  {
    id: 6,
    q: 'How quickly will you respond?',
    a: 'Quick response is our promise. Message us on WhatsApp at +91 98750 37579 and we usually reply within minutes — with a clear document checklist and a fixed quote.',
  },
]

// ─── TEAM ──────────────────────────────────────────────────
// Set `image` to an imported photo of the founder to replace the monogram
export const TEAM = [
  {
    name: 'Yogi Surendra Nath',
    role: 'Founder, Nexa Hub Services',
    description:
      'Yogi Surendra Nath founded Nexa Hub Services to empower startups and MSMEs with strategic advisory, funding, compliance and digital transformation. From documentation to filing and approvals, the Nexa Hub team handles everything with quick response and complete support — so entrepreneurs can focus on growing their business.',
    quote: 'Your work, my responsibility.',
    expertise: ['Business Registration', 'Govt. Funding & Loans', 'Startup Advisory', 'Compliance'],
    linkedin: '',
    image: null,
  },
]
