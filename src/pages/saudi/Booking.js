import React from 'react';
import SaudiProductPage from './SaudiProductPage';

const mockup = (
  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
    {/* Phone mockup */}
    <div style={{ width: 240, margin: '0 auto', border: '2px solid rgba(148,163,184,0.15)', borderRadius: 16, overflow: 'hidden' }}>
      <div style={{ background: '#f1f5f9', padding: '8px 14px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
        <span>9:41</span><span>5G 100%</span>
      </div>
      <div style={{ background: '#f1f5f9', padding: '12px 16px 18px', textAlign: 'center' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Noura Salon</div>
        <div style={{ fontSize: 11, color: '#64748b' }}>Book your appointment</div>
      </div>
      <div style={{ padding: 12, background: '#0f172a' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', marginBottom: 8 }}>SELECT SERVICE</div>
        {[
          { name: 'Cut & Color', dur: '90 min', price: '250 SAR', active: true },
          { name: 'Hair Treatment', dur: '120 min', price: '450 SAR' },
          { name: 'Evening Makeup', dur: '60 min', price: '350 SAR' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '8px 10px', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            border: s.active ? '1px solid #f1f5f9' : '1px solid rgba(148,163,184,0.1)',
            background: s.active ? 'rgba(241,245,249,0.06)' : 'transparent',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: s.active ? 700 : 500, color: '#f1f5f9' }}>{s.name}</div>
              <div style={{ fontSize: 10, color: '#64748b' }}>{s.dur}</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: s.active ? '#f1f5f9' : '#94a3b8', fontFamily: 'Inter, sans-serif' }}>{s.price}</div>
          </div>
        ))}
        <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', margin: '12px 0 6px' }}>SELECT TIME — THU MAR 10</div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {['10:00', '11:30', '1:00', '3:30'].map((t, i) => (
            <span key={i} style={{
              padding: '6px 10px', fontSize: 11, fontFamily: 'Inter, sans-serif',
              border: i === 1 ? '1px solid #f1f5f9' : '1px solid rgba(148,163,184,0.15)',
              color: i === 0 ? '#475569' : i === 1 ? '#f1f5f9' : '#94a3b8',
              fontWeight: i === 1 ? 700 : 400,
              textDecoration: i === 0 ? 'line-through' : 'none',
              background: i === 1 ? 'rgba(241,245,249,0.06)' : 'transparent',
            }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 12, padding: 10, background: '#f1f5f9', color: '#0f172a', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>CONFIRM BOOKING</div>
      </div>
    </div>
    {/* Schedule + WhatsApp */}
    <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ border: '1px solid rgba(148,163,184,0.1)', padding: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Inter, sans-serif' }}>TODAY'S SCHEDULE</div>
        {[
          { time: '10:00', name: 'Sara — Cut & Color', status: '✓ Attended', color: '#22c55e' },
          { time: '11:30', name: 'Noura — Cut & Color', status: 'Up next', color: '#f1f5f9', highlight: true },
          { time: '1:00', name: 'Huda — Hair Treatment', status: 'Confirmed via WhatsApp', color: '#94a3b8' },
          { time: '3:30', name: 'Reem — Evening Makeup', status: 'Awaiting confirmation', color: '#eab308' },
        ].map((a, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, alignItems: 'center', padding: 8, marginBottom: 4,
            background: a.highlight ? 'rgba(241,245,249,0.06)' : 'transparent',
            borderLeft: a.highlight ? '2px solid #f1f5f9' : '2px solid transparent',
          }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: a.color, minWidth: 40 }}>{a.time}</div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#f1f5f9' }}>{a.name}</div>
              <div style={{ fontSize: 10, color: a.color }}>{a.status}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.1)', padding: 12, position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 12, background: '#22c55e', color: '#fff', padding: '1px 8px', fontSize: 9, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>WHATSAPP</div>
        <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.7 }}>
          Hi Noura! 👋<br />
          Reminder: Your appointment at Noura Salon<br />
          📅 Thu Mar 10 — 11:30 AM<br />
          💇‍♀️ Cut & Color<br /><br />
          Reply ✅ to confirm<br />
          Reply ❌ to cancel
        </div>
      </div>
    </div>
  </div>
);

const EN = {
  slug: 'booking',
  badge: 'SMART BOOKING',
  headline: 'Let customers book via WhatsApp, automatically.',
  subheadline: 'Arabic booking system for salons, clinics, and gyms. Auto-confirmation, reminders before appointments, and online payment.',
  price: '$59 – 99 / MO',
  painTitle: 'Notebook bookings and message chaos',
  pains: [
    { title: 'Double bookings', text: "Two clients booked the same slot because everything is in a notebook. Result: embarrassment and a lost customer." },
    { title: 'No-shows without warning', text: 'Client booked and forgot. No reminder sent. The slot is wasted. Staff sits idle for an hour.' },
    { title: 'Global tools are expensive and English-only', text: "Mindbody starts at $80+/mo, English-only, no Mada or STC Pay. Not built for the Saudi market." },
  ],
  solutionTitle: 'Smart booking. Instant confirmation. Happy customers.',
  solutions: [
    { icon: '→', title: 'Arabic booking page', text: 'Your customer opens a link and books themselves — pick the service, time, and staff. All in Arabic, simple and fast.' },
    { icon: '→', title: 'WhatsApp confirmation & reminders', text: 'Instant WhatsApp confirmation when booked. Automatic reminder 1 hour before. 40% fewer no-shows.' },
    { icon: '→', title: 'Online payment with Mada', text: 'Accept deposits at booking time via Mada and STC Pay. Dramatically reduce no-shows.' },
  ],
  mockup: mockup,
  proofAvatars: ['R', 'N', 'H'],
  proofCount: 35,
  heroVisual: (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#475569' }}>
      <div style={{ fontSize: 48, opacity: 0.3, marginBottom: 8 }}>📅</div>
      <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Booking System</div>
    </div>
  ),
};

const AR = {
  ...EN,
  badge: 'حجوزات ذكية',
  headline: 'اجعل عملاؤك يحجزون عبر واتساب تلقائياً.',
  subheadline: 'نظام حجز عربي مصمم للصالونات والعيادات والصالات الرياضية. تأكيد تلقائي، تذكير قبل الموعد، ودفع إلكتروني.',
  price: '$59 – 99 / شهرياً',
  painTitle: 'حجوزات الدفتر والرسائل = فوضى',
  pains: [
    { title: 'حجوزات تتعارض', text: 'عميلتين حجزن نفس الموعد لأن كل شي مكتوب بالدفتر. النتيجة: إحراج وخسارة عميلة.' },
    { title: 'عدم الحضور بدون إنذار', text: 'العميلة حجزت ونسيت. ما فيه تذكير. الموعد ضاع. الموظفة قعدت فاضية ساعة كاملة.' },
    { title: 'الأنظمة العالمية مكلفة وبالإنجليزي', text: 'أنظمة الحجز العالمية بالإنجليزي، ما تدعم مدى ولا STC Pay، وأسعارها تبدأ من ٨٠ دولار. مو مناسبة.' },
  ],
  solutionTitle: 'حجز ذكي. تأكيد فوري. عملاء سعيدين.',
  solutions: [
    { icon: '←', title: 'صفحة حجز عربية', text: 'عميلتك تفتح الرابط وتحجز بنفسها — تختار الخدمة، الموعد، والموظفة. كله بالعربي وبسيط.' },
    { icon: '←', title: 'تأكيد وتذكير واتساب', text: 'بمجرد الحجز — رسالة تأكيد على واتساب. قبل الموعد بساعة — تذكير تلقائي. نسبة الحضور ترتفع ٤٠٪.' },
    { icon: '←', title: 'دفع إلكتروني بمدى', text: 'اقبل دفع مقدم أو عربون وقت الحجز عبر مدى و STC Pay. قلل حالات عدم الحضور.' },
  ],
};

export function Booking() {
  return <SaudiProductPage content={EN} lang="en" />;
}

export function BookingAr() {
  return <SaudiProductPage content={AR} lang="ar" />;
}
