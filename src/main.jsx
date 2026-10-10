import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Phone,
  Wifi,
  Home as HomeIcon,
  Smartphone,
  Building2,
  CreditCard,
  Search,
  ChevronRight,
  ArrowRight,
  Globe,
  FileText,
  Headphones,
  RadioTower,
  Monitor,
  Check,
  LayoutGrid,
  Maximize2,
  X,
  Award,
  Image as ImageIcon
} from 'lucide-react';
import './styles.css';

// Exact Cropped Image Assets
import houseFinalImg from './assets/house_final.png';
import landlineImg from './assets/landline.jpg';
import broadbandImg from './assets/broadband.jpg';
import ftthImg from './assets/ftth.jpg';
import mobileImg from './assets/mobile.jpg';
import leasedImg from './assets/leased.jpg';
import selfImg from './assets/selfservice.jpg';
import vasImg from './assets/vas.jpg';
import otherImg from './assets/other.jpg';
import overviewImg from './assets/overview_4screens.png';

// ----------------------------------------------------------------------
// CUSTOM SVG ICONS (EXACT MATCH FOR CARD & INFO IN THE REFERENCE IMAGE)
// ----------------------------------------------------------------------

function SmartCardIcon({ size = 18, color = "#2563eb" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="13" rx="3" />
      <line x1="2" y1="10.5" x2="22" y2="10.5" />
    </svg>
  );
}

function InfoCircleIcon({ color = 'green' }) {
  const colorMap = {
    green: '#16a34a',
    blue: '#2563eb',
    orange: '#ea580c',
    red: '#dc2626'
  };
  const strokeColor = colorMap[color] || '#16a34a';

  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="10" cy="10" r="8.5" stroke={strokeColor} strokeWidth="1.5" />
      <circle cx="10" cy="6.3" r="1.1" fill={strokeColor} />
      <line x1="10" y1="9.2" x2="10" y2="14.5" stroke={strokeColor} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MtnlLogoIcon({ size = 22 }) {
  return (
    <div className="logo-phone-box">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8.5C4 5.5 8 4 12 4C16 4 20 5.5 20 8.5C18.5 8.5 17 8 16 9C15.2 9.8 15.2 11 15.5 12C14.5 12 9.5 12 8.5 12C8.8 11 8.8 9.8 8 9C7 8 5.5 8.5 4 8.5Z"
          fill="#0a9b49"
        />
        <path
          d="M7 11C7 11 7 13 6 14C5 15 4 15.5 4 17C4 19 6 20 12 20C18 20 20 19 20 17C20 15.5 19 15 18 14C17 13 17 11 17 11L7 11Z"
          fill="#0a9b49"
        />
        <circle cx="12" cy="15.5" r="2.5" fill="#eaf6ed" />
      </svg>
    </div>
  );
}

// ----------------------------------------------------------------------
// DATA DEFINITIONS (EXACT FROM FIGMA SCREENSHOT)
// ----------------------------------------------------------------------

const quickStripItems = [
  { name: 'Landline', sub: 'Voice Services' },
  { name: 'Broadband', sub: 'High Speed Internet' },
  { name: 'FTTH', sub: 'Fiber to the Home' },
  { name: 'Mobile', sub: '3G Services' },
  { name: 'Leased Circuits', sub: 'Business Solutions' },
  { name: 'Bill Pay', sub: 'Pay Your Bills' },
  { name: 'Recharge', sub: 'Mobile Recharge' }
];

const whatsNewItems = [
  {
    title: 'Observance of Vigilance Awareness Week 2025',
    sub: '27.10.2025 to 02.11.2025',
    color: 'green'
  },
  {
    title: 'Requirement of Advocates / Law Firms for empanelment',
    sub: '',
    color: 'blue'
  },
  {
    title: 'Notice Inviting Applications for Empanelment',
    sub: '',
    color: 'orange'
  }
];

const quickLinkTiles = [
  { line1: 'Directory', line2: 'Search' },
  { line1: 'Customer Care', line2: 'Centers' },
  { line1: 'Current', line2: 'Tenders' },
  { line1: 'Lease / Sale', line2: 'of Spaces' },
  { line1: 'Training', line2: 'Centre' },
  { line1: 'Citizen', line2: 'Charter' }
];

const importantNoticeItems = [
  {
    title: 'Vigilance Awareness Week 2025',
    sub: '“Vigilance : Our Shared Responsibility”',
    color: 'red'
  },
  {
    title: 'Empanelment of Advocates / Law Firms',
    sub: '',
    color: 'orange'
  },
  {
    title: 'Extension Bid Submission – NSIC Platform',
    sub: '',
    color: 'orange'
  }
];

const serviceCardsData = [
  {
    title: 'Landline Services',
    desc: 'Reliable voice communication for homes and businesses.',
    action: 'Explore Landline',
    img: landlineImg,
    icon: Phone,
    badgeColor: 'green'
  },
  {
    title: 'Broadband Services',
    desc: 'High speed internet for uninterrupted connectivity.',
    action: 'Explore Broadband',
    img: broadbandImg,
    icon: Wifi,
    badgeColor: 'blue'
  },
  {
    title: 'FTTH',
    desc: 'Superfast fiber internet with plans upto 1 Gbps.',
    action: 'Explore FTTH',
    img: ftthImg,
    icon: HomeIcon,
    badgeColor: 'orange'
  },
  {
    title: 'Mobile Services',
    desc: 'Prepaid, Postpaid, Data Card, MNP and more.',
    action: 'Explore Mobile',
    img: mobileImg,
    icon: Smartphone,
    badgeColor: 'purple'
  },
  {
    title: 'Leased Circuits',
    desc: 'Dedicated connectivity for enterprises.',
    action: 'Explore Enterprise',
    img: leasedImg,
    icon: Building2,
    badgeColor: 'purple'
  },
  {
    title: 'Self Services',
    desc: 'Pay bills, recharge, directory search and more.',
    action: 'Open Self Services',
    img: selfImg,
    icon: Monitor,
    badgeColor: 'teal'
  },
  {
    title: 'Value Added Services',
    desc: 'International calling, PCO, PhonePlus and more.',
    action: 'Explore VAS',
    img: vasImg,
    icon: Globe,
    badgeColor: 'pink'
  },
  {
    title: 'Other Services',
    desc: 'Training centre, asset lease, premium number bidding etc.',
    action: 'Explore More',
    img: otherImg,
    icon: RadioTower,
    badgeColor: 'gray'
  }
];

const tariffCardsData = [
  {
    name: 'Residential',
    desc: 'Affordable plans for households.',
    color: 'yellow',
    features: [
      'Local & STD Calling',
      'PhonePlus Services',
      'Multiple Plan Options'
    ]
  },
  {
    name: 'Business',
    desc: 'Special plans for businesses and offices.',
    color: 'blue',
    features: [
      'Customized Plans',
      'ISDN / PRI Options',
      'Value Added Services'
    ]
  },
  {
    name: 'International Calling',
    desc: 'Stay connected globally with easy calling plans.',
    color: 'mint',
    features: [
      'International Calling Rates',
      'Country-wise Tariff',
      'PCO & Direct Dialing'
    ]
  }
];

// ----------------------------------------------------------------------
// EXACT TOPBAR COMPONENT
// ----------------------------------------------------------------------
function TopBar({ activeNav = 'Home', onNavigate }) {
  const navItems = ['Home', 'Services', 'Tariffs', 'Customer Care', 'About Us', 'Tenders'];

  return (
    <header className="topbar">
      <button className="logo-badge" onClick={() => onNavigate('Home')}>
        <div className="logo-icon-wrap">
          <MtnlLogoIcon size={24} />
        </div>
        <div className="logo-info">
          <span className="logo-name">MTNL Mumbai</span>
          <span className="logo-sub">Mahanagar Telephone Nigam Ltd.</span>
        </div>
      </button>

      <nav className="nav-links">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${activeNav === item ? 'active' : ''}`}
            onClick={() => onNavigate(item === 'About Us' || item === 'Tenders' ? 'Services' : item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="search-box">
        <Search size={14} />
        <input placeholder="Search services, plans, support..." />
      </div>

      <div className="lang-selector">
        <span>EN | हिंदी | मराठी</span>
        <span className="accessibility-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0070f3" />
            <circle cx="12" cy="5" r="3" fill="#ffffff" />
            <path d="M12 9V15M12 15L16 20M12 15L8 20M8 11.5H16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <button className="login-btn" onClick={() => onNavigate('Customer Care')}>
        Login / Register
      </button>
    </header>
  );
}

// ----------------------------------------------------------------------
// SCREEN 1: HOME PAGE (100% FAITHFUL TO THE USER IMAGE)
// ----------------------------------------------------------------------
function HomeScreen({ onNavigate }) {
  return (
    <div className="home-page">
      <TopBar activeNav="Home" onNavigate={onNavigate} />

      {/* Hero Section with Bandra-Worli Sea Link & Illuminated Towers */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-kicker">Connecting Mumbai Since 1986</div>
          <h1 className="hero-title">
            Reliable Communication<br />
            for a <span className="highlight-green">Smarter Mumbai</span>
          </h1>
          <p className="hero-sub">
            Landline · Broadband · FTTH · Mobile · Enterprise Solutions<br />
            Connecting People, Businesses and a Digital Future.
          </p>
          <div className="hero-ctas">
            <button className="btn-pay-bill" onClick={() => onNavigate('Tariffs')}>
              View & Pay Bill <ArrowRight size={13} />
            </button>
            <button className="btn-explore" onClick={() => onNavigate('Services')}>
              Explore Services
            </button>
          </div>
        </div>

        {/* Promo Card on Right */}
        <div className="hero-promo-card">
          <div className="promo-text">
            <div className="promo-title">MTNL Fiber to the Home</div>
            <div className="promo-desc">
              Superfast Internet<br />
              Plans upto 1 Gbps
            </div>
            <button className="promo-btn" onClick={() => onNavigate('Services')}>
              Know More <ArrowRight size={11} />
            </button>
          </div>
          <div className="promo-img-wrap">
            <img src={houseFinalImg} alt="MTNL Fiber to the Home" className="promo-image" />
          </div>
        </div>
      </section>

      {/* Quick Services Strip (7 White Cards with Blue Card Icon) */}
      <section className="quick-strip">
        {quickStripItems.map(({ name, sub }) => (
          <button
            key={name}
            className="quick-card"
            onClick={() => onNavigate(name === 'Bill Pay' ? 'Tariffs' : 'Services')}
          >
            <div className="quick-icon-box">
              <SmartCardIcon size={18} color="#2563eb" />
            </div>
            <div className="quick-card-text">
              <span className="quick-card-title">{name}</span>
              <span className="quick-card-sub">{sub}</span>
            </div>
          </button>
        ))}
      </section>

      {/* 3 Panels: What's New | Quick Links | Important Notices */}
      <section className="home-panels">
        {/* Panel 1: What's New */}
        <article className="home-panel">
          <div className="panel-head">
            <h3>What's New</h3>
            <button className="panel-view-all" onClick={() => onNavigate('Services')}>
              View All <ArrowRight size={12} />
            </button>
          </div>
          <div className="panel-list">
            {whatsNewItems.map((item) => (
              <div className="news-item" key={item.title}>
                <InfoCircleIcon color={item.color} />
                <div className="item-info">
                  <span className="item-title">{item.title}</span>
                  {item.sub && <span className="item-date">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Panel 2: Quick Links (3x2 Grid with Blue Card Icon in Light Blue Box) */}
        <article className="home-panel">
          <div className="panel-head">
            <h3>Quick Links</h3>
          </div>
          <div className="quicklinks-grid">
            {quickLinkTiles.map((tile) => (
              <button
                key={tile.line1 + tile.line2}
                className="quicklink-tile"
                onClick={() => onNavigate(tile.line1.includes('Care') ? 'Customer Care' : 'Services')}
              >
                <div className="quicklink-tile-icon-box">
                  <SmartCardIcon size={16} color="#2563eb" />
                </div>
                <div className="quicklink-tile-text">
                  <span>{tile.line1}</span>
                  <span>{tile.line2}</span>
                </div>
              </button>
            ))}
          </div>
        </article>

        {/* Panel 3: Important Notices */}
        <article className="home-panel">
          <div className="panel-head">
            <h3>Important Notices</h3>
            <button className="panel-view-all" onClick={() => onNavigate('Services')}>
              View All <ArrowRight size={12} />
            </button>
          </div>
          <div className="panel-list">
            {importantNoticeItems.map((item) => (
              <div className="news-item" key={item.title}>
                <InfoCircleIcon color={item.color} />
                <div className="item-info">
                  <span className="item-title">{item.title}</span>
                  {item.sub && <span className="item-date">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

// ----------------------------------------------------------------------
// SCREEN 2: OUR SERVICES
// ----------------------------------------------------------------------
function ServicesScreen({ onNavigate }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterPills = [
    { name: 'All', icon: Phone },
    { name: 'Landline', icon: Phone },
    { name: 'Broadband', icon: Wifi },
    { name: 'FTTH', icon: HomeIcon },
    { name: 'Mobile', icon: Smartphone },
    { name: 'Enterprise', icon: Building2 },
    { name: 'Self Services', icon: Monitor }
  ];

  const displayedCards = serviceCardsData.filter((card) => {
    const matchesCat =
      selectedCat === 'All' ||
      card.title.toLowerCase().includes(selectedCat.toLowerCase()) ||
      (selectedCat === 'Broadband' && card.title === 'FTTH');
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="services-page">
      <TopBar activeNav="Services" onNavigate={onNavigate} />

      <div className="page-container">
        <div className="breadcrumbs">
          <span onClick={() => onNavigate('Home')} style={{ cursor: 'pointer' }}>Home</span>
          <ChevronRight size={12} />
          <span className="current">Services</span>
        </div>

        <div className="page-title-row">
          <div className="page-heading">
            <h1>Our Services</h1>
            <p>A complete range of telecommunication services for individuals, families and businesses.</p>
          </div>
          <div className="page-search-bar">
            <input
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <Search size={14} />
            </button>
          </div>
        </div>

        <div className="services-filters">
          {filterPills.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`service-filter-pill ${selectedCat === name ? 'active' : ''}`}
              onClick={() => setSelectedCat(name)}
            >
              <Icon size={13} />
              {name}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {displayedCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="service-card" key={card.title}>
                <div className="service-card-image-wrap">
                  <img src={card.img} alt={card.title} />
                  <div className={`service-floating-badge ${card.badgeColor}`}>
                    {card.title === 'Mobile Services' ? '3G' : <Icon size={14} />}
                  </div>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-desc">{card.desc}</p>
                  <button
                    className="service-card-link"
                    onClick={() => onNavigate('Tariffs')}
                  >
                    {card.action} <ArrowRight size={12} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// SCREEN 3: TARIFF PLANS
// ----------------------------------------------------------------------
function TariffsScreen({ onNavigate }) {
  const [userType, setUserType] = useState('Individual');
  const [selectedTariff, setSelectedTariff] = useState('Landline');

  const filterTabs = ['Landline', 'Broadband', 'FTTH', 'Mobile', 'Enterprise'];

  const sidebarItems = [
    { id: 'Landline', label: 'Landline Tariffs', icon: Phone },
    { id: 'Broadband', label: 'Broadband Tariffs', icon: Wifi },
    { id: 'FTTH', label: 'FTTH Plans', icon: HomeIcon },
    { id: 'Mobile', label: 'Mobile Tariffs', icon: Smartphone },
    { id: 'Enterprise', label: 'Enterprise Tariffs', icon: Building2 }
  ];

  const otherTariffs = [
    { name: 'PhonePlus Services', icon: Phone },
    { name: 'PCO Services', icon: Headphones },
    { name: 'LL Short Code', icon: FileText },
    { name: 'Premium Number Bidding', icon: Award },
    { name: 'Directory Search', icon: Search }
  ];

  return (
    <div className="tariffs-page">
      <TopBar activeNav="Tariffs" onNavigate={onNavigate} />

      <div className="page-container">
        <div className="breadcrumbs">
          <span onClick={() => onNavigate('Home')} style={{ cursor: 'pointer' }}>Home</span>
          <ChevronRight size={12} />
          <span className="current">Tariffs</span>
        </div>

        <div className="page-title-row">
          <div className="page-heading">
            <h1>Tariff Plans</h1>
            <p>Choose from a wide range of affordable and reliable plans for your communication needs.</p>
          </div>
          <div className="tariff-type-toggle">
            <button
              className={`tariff-type-btn ${userType === 'Individual' ? 'active' : ''}`}
              onClick={() => setUserType('Individual')}
            >
              Individual
            </button>
            <button
              className={`tariff-type-btn ${userType === 'Business' ? 'active' : ''}`}
              onClick={() => setUserType('Business')}
            >
              Business
            </button>
          </div>
        </div>

        <div className="tariff-toolbar">
          <div className="tariff-category-pills">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`tariff-pill ${selectedTariff === tab ? 'active' : ''}`}
                onClick={() => setSelectedTariff(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="page-search-bar">
            <input placeholder="Search plans, tariffs..." />
            <button>
              <Search size={14} />
            </button>
          </div>
        </div>

        <div className="tariff-main-layout">
          <aside className="tariff-sidebar">
            {sidebarItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`tariff-side-item ${selectedTariff === id ? 'active' : ''}`}
                onClick={() => setSelectedTariff(id)}
              >
                <Icon size={15} />
                <span>{label}</span>
              </button>
            ))}
          </aside>

          <main className="tariff-content-area">
            <div className="tariff-content-head">
              <h2>{selectedTariff} Tariff Plans</h2>
              <p>Reliable and economical voice plans for homes and businesses.</p>
            </div>

            <div className="tariff-cards-row">
              {tariffCardsData.map((plan) => (
                <article className="tariff-plan-card" key={plan.name}>
                  <div className="plan-card-top">
                    <div className={`plan-icon-badge ${plan.color}`}>
                      <FileText size={14} />
                    </div>
                    <span className="plan-card-title">{plan.name}</span>
                  </div>
                  <p className="plan-card-sub">{plan.desc}</p>
                  <ul className="plan-feature-list">
                    {plan.features.map((feat) => (
                      <li key={feat}>
                        <Check size={11} color="#16a34a" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="plan-cta-btn"
                    onClick={() => alert(`View details for ${plan.name} tariff plan`)}
                  >
                    View Tariff Details <ArrowRight size={12} />
                  </button>
                </article>
              ))}
            </div>
          </main>
        </div>

        <div className="other-tariffs-block">
          <h3>Other Tariffs</h3>
          <div className="other-tariffs-row">
            {otherTariffs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className="other-tariff-btn"
                onClick={() => onNavigate('Customer Care')}
              >
                <span>
                  <Icon size={13} />
                  {name}
                </span>
                <ChevronRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// SCREEN 4: HELPLINE NUMBERS
// ----------------------------------------------------------------------
function HelplineScreen({ onNavigate }) {
  return (
    <div className="helpline-page">
      <TopBar activeNav="Customer Care" onNavigate={onNavigate} />

      <div className="page-container">
        <div className="breadcrumbs">
          <span onClick={() => onNavigate('Home')} style={{ cursor: 'pointer' }}>Home</span>
          <ChevronRight size={12} />
          <span onClick={() => onNavigate('Customer Care')} style={{ cursor: 'pointer' }}>Customer Care</span>
          <ChevronRight size={12} />
          <span className="current">Helpline & Contact</span>
        </div>

        <div className="page-title-row">
          <div className="page-heading">
            <h1>Helpline Numbers</h1>
            <p>We are here to help you. Contact us for any service, support or grievance.</p>
          </div>
          <div className="helpline-actions">
            <button className="btn-care-centers" onClick={() => alert('MTNL Customer Care Centers in Mumbai')}>
              Customer Care Centers <ArrowRight size={12} />
            </button>
            <button className="btn-grievance" onClick={() => alert('Online Grievance Submission')}>
              Submit a Grievance <ArrowRight size={12} />
            </button>
          </div>
        </div>

        <div className="helpline-grid-container">
          <div className="helpline-top-row">
            <article className="common-number-card">
              <div className="common-number-left">
                <div className="big-headset-circle">
                  <Headphones size={28} />
                </div>
                <div className="common-number-details">
                  <span className="common-number-label">
                    Common Service Number<br />(Landline / Triband / Mobile)
                  </span>
                  <span className="common-number-digits">1130</span>
                </div>
              </div>
              <button
                className="common-call-btn"
                onClick={() => window.open('tel:1130')}
              >
                Call Now
              </button>
            </article>

            <article className="helpline-number-card">
              <div className="helpline-icon-box">
                <Phone size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">Landline Customer Care</span>
                <span className="helpline-info-numbers">
                  1500<br />2222 1500
                </span>
              </div>
            </article>

            <article className="helpline-number-card">
              <div className="helpline-icon-box">
                <Wifi size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">Internet / Triband</span>
                <span className="helpline-info-numbers">
                  1504<br />1800 228844<br />2222 1504
                </span>
              </div>
            </article>
          </div>

          <div className="helpline-bottom-row">
            <article className="helpline-number-card">
              <div className="helpline-icon-box" style={{ color: '#9333ea', background: '#faf5ff' }}>
                <RadioTower size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">DOLPHIN / TRUMP</span>
                <span className="helpline-info-numbers">
                  1503<br />9869012345<br />2222 1503
                </span>
              </div>
            </article>

            <article className="helpline-number-card">
              <div className="helpline-icon-box">
                <Globe size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">GARUDA</span>
                <span className="helpline-info-numbers">
                  1502<br />2222 1502
                </span>
              </div>
            </article>

            <article className="helpline-number-card">
              <div className="helpline-icon-box">
                <HomeIcon size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">FTTH</span>
                <span className="helpline-info-numbers">1505</span>
              </div>
            </article>

            <article className="helpline-number-card">
              <div className="helpline-icon-box">
                <CreditCard size={16} />
              </div>
              <div className="helpline-info">
                <span className="helpline-info-title">IN Services</span>
                <span className="helpline-info-numbers">1800 22 1500</span>
              </div>
            </article>
          </div>
        </div>

        <section className="other-services-box">
          <h3>Other Services</h3>
          <div className="other-services-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Fault Booking (Landline & Broadband)</span>
                  <span className="service-row-val">198 (Call 1500 for operator assistance)</span>
                </div>
              </div>

              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Fault Booking (Leased Circuit)</span>
                  <span className="service-row-val">12676, 22652225</span>
                </div>
              </div>

              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Changed Number Announcement</span>
                  <span className="service-row-val">1951 (Available in all languages)</span>
                </div>
              </div>

              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Directory Enquiry</span>
                  <span className="service-row-val">197</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">STD Code Enquiry Service</span>
                  <span className="service-row-val">1582</span>
                </div>
              </div>

              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Public Grievance Service</span>
                  <span className="service-row-val">1509</span>
                </div>
              </div>

              <div className="service-row-item">
                <Phone size={12} />
                <div className="service-row-content">
                  <span className="service-row-name">Know Your Landline/Broadband Unpaid Bill Amount</span>
                  <span className="service-row-val">
                    • Dial 1660 (Toll-Free) or 022-22192120 (From all operators)<br />
                    • Via SMS: Send 'Bill &lt;Landline No&gt;' to 51001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2x2 PRESENTATION BOARD
// ----------------------------------------------------------------------
function AllScreensBoard({ onSelectScreen, onCompare }) {
  return (
    <div className="board-container">
      <div className="board-header">
        <div>
          <h2>
            <LayoutGrid size={20} color="#27d971" /> MTNL Mumbai — 4 Screens Presentation
          </h2>
          <p>Faithful 1:1 implementation matching the photograph exactly.</p>
        </div>
        <button className="compare-btn" onClick={onCompare}>
          <ImageIcon size={14} /> Compare with Original Photo
        </button>
      </div>

      <div className="board-grid">
        <div className="board-card">
          <div className="board-card-header">
            <span className="screen-tag">Screen 1</span>
            <span>Home Page</span>
            <button onClick={() => onSelectScreen('Home')}>
              <Maximize2 size={12} /> Open Fullscreen
            </button>
          </div>
          <div className="board-card-content">
            <HomeScreen onNavigate={onSelectScreen} />
          </div>
        </div>

        <div className="board-card">
          <div className="board-card-header">
            <span className="screen-tag">Screen 2</span>
            <span>Our Services</span>
            <button onClick={() => onSelectScreen('Services')}>
              <Maximize2 size={12} /> Open Fullscreen
            </button>
          </div>
          <div className="board-card-content">
            <ServicesScreen onNavigate={onSelectScreen} />
          </div>
        </div>

        <div className="board-card">
          <div className="board-card-header">
            <span className="screen-tag">Screen 3</span>
            <span>Tariff Plans</span>
            <button onClick={() => onSelectScreen('Tariffs')}>
              <Maximize2 size={12} /> Open Fullscreen
            </button>
          </div>
          <div className="board-card-content">
            <TariffsScreen onNavigate={onSelectScreen} />
          </div>
        </div>

        <div className="board-card">
          <div className="board-card-header">
            <span className="screen-tag">Screen 4</span>
            <span>Helpline Numbers</span>
            <button onClick={() => onSelectScreen('Customer Care')}>
              <Maximize2 size={12} /> Open Fullscreen
            </button>
          </div>
          <div className="board-card-content">
            <HelplineScreen onNavigate={onSelectScreen} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// MAIN ROOT APP COMPONENT (DEFAULTS DIRECTLY TO HOME SCREEN)
// ----------------------------------------------------------------------
function App() {
  const [viewMode, setViewMode] = useState('Home'); // DEFAULT: 'Home'
  const [showCompareModal, setShowCompareModal] = useState(false);

  const handleNavigate = (page) => {
    setViewMode(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      {/* Floating Bottom-Right Screen Switcher */}
      <nav className="floating-switcher">
        <div className="floating-brand">
          <span>MTNL</span>
        </div>

        <div className="floating-pills">
          <button
            className={`floating-btn ${viewMode === 'Home' ? 'active' : ''}`}
            onClick={() => handleNavigate('Home')}
          >
            1. Home
          </button>
          <button
            className={`floating-btn ${viewMode === 'Services' ? 'active' : ''}`}
            onClick={() => handleNavigate('Services')}
          >
            2. Services
          </button>
          <button
            className={`floating-btn ${viewMode === 'Tariffs' ? 'active' : ''}`}
            onClick={() => handleNavigate('Tariffs')}
          >
            3. Tariffs
          </button>
          <button
            className={`floating-btn ${viewMode === 'Customer Care' ? 'active' : ''}`}
            onClick={() => handleNavigate('Customer Care')}
          >
            4. Helpline
          </button>
          <button
            className={`floating-btn ${viewMode === 'All' ? 'active' : ''}`}
            onClick={() => handleNavigate('All')}
          >
            <LayoutGrid size={12} /> Board
          </button>
        </div>

        <button
          className="floating-compare-btn"
          onClick={() => setShowCompareModal(true)}
          title="View reference screenshot"
        >
          <ImageIcon size={12} /> Photo
        </button>
      </nav>

      {/* Main Screen Content */}
      {viewMode === 'Home' && (
        <div className="screen-frame">
          <HomeScreen onNavigate={handleNavigate} />
        </div>
      )}

      {viewMode === 'Services' && (
        <div className="screen-frame">
          <ServicesScreen onNavigate={handleNavigate} />
        </div>
      )}

      {viewMode === 'Tariffs' && (
        <div className="screen-frame">
          <TariffsScreen onNavigate={handleNavigate} />
        </div>
      )}

      {viewMode === 'Customer Care' && (
        <div className="screen-frame">
          <HelplineScreen onNavigate={handleNavigate} />
        </div>
      )}

      {viewMode === 'All' && (
        <AllScreensBoard
          onSelectScreen={handleNavigate}
          onCompare={() => setShowCompareModal(true)}
        />
      )}

      {/* Compare Modal */}
      {showCompareModal && (
        <div
          className="compare-modal-backdrop"
          onClick={() => setShowCompareModal(false)}
        >
          <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
            <div className="compare-modal-header">
              <h3>Reference Photograph (Exact Home Screen)</h3>
              <button onClick={() => setShowCompareModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="compare-modal-body">
              <img src={overviewImg} alt="Exact Reference" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);