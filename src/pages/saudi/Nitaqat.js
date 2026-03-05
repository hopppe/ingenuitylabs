import React from 'react';
import SaudiProductPage from './SaudiProductPage';

const mockup = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {/* Status cards */}
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {[
        { label: 'NITAQAT STATUS', value: 'Medium Green', color: '#22c55e', bg: 'rgba(34,197,94,0.08)' },
        { label: 'EXPIRING SOON', value: '3', sub: 'within 90 days', color: '#eab308', bg: 'rgba(234,179,8,0.08)' },
        { label: 'OVERDUE', value: '1', sub: 'needs action now', color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
      ].map((s, i) => (
        <div key={i} style={{ flex: '1 1 160px', background: s.bg, border: `1px solid ${s.color}22`, padding: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: s.color, letterSpacing: '0.1em', marginBottom: 4, fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
          {s.sub && <div style={{ fontSize: 10, color: `${s.color}99` }}>{s.sub}</div>}
        </div>
      ))}
    </div>
    {/* Table */}
    <div style={{ border: '1px solid rgba(148,163,184,0.1)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '8px 14px', background: 'rgba(148,163,184,0.04)', fontSize: 10, color: '#64748b', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid rgba(148,163,184,0.08)' }}>
        <span>EMPLOYEE</span><span>NATIONALITY</span><span>IQAMA EXPIRY</span><span>DAYS LEFT</span><span>STATUS</span>
      </div>
      {[
        { name: 'Mohammed Ahmed', nat: 'Pakistani', exp: '2026-04-15', days: '41', status: 'Warning', sc: '#eab308' },
        { name: 'Rajesh Kumar', nat: 'Indian', exp: '2026-03-10', days: '5', status: 'Urgent', sc: '#ef4444' },
        { name: 'Abdullah Al-Saeed', nat: 'Saudi', exp: '—', days: '—', status: 'Saudi', sc: '#22c55e' },
      ].map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '10px 14px', fontSize: 12, alignItems: 'center', borderBottom: '1px solid rgba(148,163,184,0.05)', color: '#94a3b8' }}>
          <span style={{ fontWeight: 600, color: '#f1f5f9' }}>{r.name}</span>
          <span>{r.nat}</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11 }}>{r.exp}</span>
          <span style={{ color: r.sc, fontWeight: 700 }}>{r.days}</span>
          <span style={{ background: `${r.sc}15`, color: r.sc, padding: '1px 8px', fontSize: 10, fontWeight: 700, textAlign: 'center', display: 'inline-block' }}>{r.status}</span>
        </div>
      ))}
    </div>
  </div>
);

const EN = {
  slug: 'nitaqat',
  badge: 'COMPLIANCE',
  headline: 'Get alerted before your Iqama expires.',
  subheadline: 'Track employee Iqamas, auto-calculate Nitaqat status, and get WhatsApp alerts 90 days before expiry. Stop the chaos.',
  price: '$79 – 199 / MO',
  painTitle: 'Compliance without a system means painful fines',
  pains: [
    { title: 'Iqamas expire without warning', text: 'SAR 10,000 fine per expired Iqama. An employee forgot to renew? You pay. Every day of delay means a bigger penalty.' },
    { title: 'Red Nitaqat = disaster', text: "Your Nitaqat drops to red? No new visas, no license renewals, and they can shut down your entire business." },
    { title: 'Everything in Excel or someone\'s head', text: 'Old spreadsheet. HR manager quits? All Iqama information walks out the door with them. No system, no backup.' },
  ],
  solutionTitle: 'Smart tracking. Proactive alerts. Peace of mind.',
  solutions: [
    { icon: '→', title: 'Automatic WhatsApp alerts', text: 'Get alerted 90, 60, and 30 days before every Iqama expiry. Via WhatsApp and email. Nothing slips through.' },
    { icon: '→', title: 'Instant Nitaqat calculator', text: 'Enter your employees and nationalities — instantly see your current color and exactly what you need to improve.' },
    { icon: '→', title: 'Complete dashboard', text: 'All employees in one place. Iqama dates, nationalities, salaries, and current Saudization ratio at a glance.' },
  ],
  mockup: mockup,
  proofAvatars: ['K', 'A', 'M'],
  proofCount: 32,
  heroVisual: (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#475569' }}>
      <div style={{ fontSize: 48, opacity: 0.3, marginBottom: 8 }}>🛡</div>
      <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Nitaqat Tracker</div>
    </div>
  ),
};

const AR = {
  ...EN,
  badge: 'امتثال وتنبيهات',
  headline: 'تنبيهات قبل انتهاء الإقامة — قبل أن تصبح أزمة.',
  subheadline: 'تتبع إقامات موظفيك، حاسبة نطاقات تلقائية، وتنبيهات واتساب قبل الانتهاء بـ ٩٠ يوم. وقف الفوضى.',
  price: '$79 – 199 / شهرياً',
  painTitle: 'الامتثال بدون نظام = غرامات مؤلمة',
  pains: [
    { title: 'إقامات تنتهي بدون ما تدري', text: 'غرامة ١٠,٠٠٠ ريال لكل إقامة منتهية. موظف نسي يجدد؟ أنت اللي تدفع. كل يوم تأخير = مبلغ أكبر.' },
    { title: 'نطاقات أحمر = كارثة', text: 'نطاقك نزل أحمر؟ ما تقدر تستقدم، ما تقدر تجدد رخص، وممكن يوقفون نشاطك بالكامل.' },
    { title: 'كل شي في إكسل أو رأس أحد', text: 'جدول إكسل قديم. مدير الموارد البشرية يستقيل؟ كل معلومات الإقامات تروح معه. ما فيه نظام.' },
  ],
  solutionTitle: 'تتبع ذكي. تنبيهات استباقية. راحة بال.',
  solutions: [
    { icon: '←', title: 'تنبيهات واتساب تلقائية', text: 'تنبيه قبل انتهاء كل إقامة بـ ٩٠ و ٦٠ و ٣٠ يوم. على واتساب والإيميل. ما يفوتك شي.' },
    { icon: '←', title: 'حاسبة نطاقات فورية', text: 'أدخل عدد موظفيك وجنسياتهم وقطاعك — يطلعلك لونك الحالي وإيش تحتاج تسوي عشان تتحسن.' },
    { icon: '←', title: 'لوحة تحكم شاملة', text: 'كل موظفيك في مكان واحد. تواريخ الإقامات، الجنسيات، الرواتب، ونسبة السعودة الحالية.' },
  ],
};

export function Nitaqat() {
  return <SaudiProductPage content={EN} lang="en" />;
}

export function NitaqatAr() {
  return <SaudiProductPage content={AR} lang="ar" />;
}
