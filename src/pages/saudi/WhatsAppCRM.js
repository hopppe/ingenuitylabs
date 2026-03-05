import React from 'react';
import SaudiProductPage from './SaudiProductPage';

const mockup = (
  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 220px', gap: '1px', background: 'rgba(148,163,184,0.08)', minHeight: 260, fontSize: 13 }}>
    {/* Sidebar */}
    <div style={{ background: '#0f172a', padding: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Inter, sans-serif' }}>CONVERSATIONS</div>
      {[
        { name: 'Ahmed — Al Sharq Restaurant', msg: 'Catering for 50 people...', active: true },
        { name: 'Noura — Salon booking', msg: 'Is Thursday available?' },
        { name: 'Khalid — Price inquiry', msg: 'Monthly plan price?' },
        { name: 'Fatima — Complaint', msg: '⚠ No reply — 3 hours', urgent: true },
      ].map((c, i) => (
        <div key={i} style={{
          padding: '8px 10px', marginBottom: 6, borderRadius: 4,
          background: c.active ? 'rgba(241,245,249,0.06)' : 'transparent',
          borderLeft: c.active ? '2px solid #f1f5f9' : c.urgent ? '2px solid #ef4444' : '2px solid transparent',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#f1f5f9', marginBottom: 2 }}>{c.name}</div>
          <div style={{ fontSize: 11, color: c.urgent ? '#ef4444' : '#64748b' }}>{c.msg}</div>
        </div>
      ))}
    </div>
    {/* Chat */}
    <div style={{ background: '#1e293b', padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(148,163,184,0.08)' }}>
          <span style={{ fontWeight: 600, color: '#f1f5f9' }}>Ahmed — Al Sharq</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ background: 'rgba(241,245,249,0.06)', color: '#94a3b8', padding: '1px 8px', borderRadius: 2, fontSize: 10, fontWeight: 600 }}>VIP</span>
            <span style={{ background: 'rgba(234,179,8,0.1)', color: '#eab308', padding: '1px 8px', borderRadius: 2, fontSize: 10, fontWeight: 600 }}>CATERING</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ alignSelf: 'flex-end', background: '#22c55e', color: '#fff', padding: '6px 12px', borderRadius: '6px 6px 2px 6px', maxWidth: '70%', fontSize: 12 }}>Need catering for 50 people</div>
          <div style={{ alignSelf: 'flex-start', background: '#0f172a', color: '#f1f5f9', padding: '6px 12px', borderRadius: '6px 6px 6px 2px', maxWidth: '70%', fontSize: 12, border: '1px solid rgba(148,163,184,0.1)' }}>Sure! What's the approximate budget?</div>
          <div style={{ alignSelf: 'flex-end', background: '#22c55e', color: '#fff', padding: '6px 12px', borderRadius: '6px 6px 2px 6px', maxWidth: '70%', fontSize: 12 }}>Around 5,000 SAR</div>
        </div>
      </div>
      <div style={{ background: '#0f172a', padding: '8px 12px', borderRadius: 4, border: '1px solid rgba(148,163,184,0.1)', display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
        <span style={{ color: '#475569', fontSize: 12, flexGrow: 1 }}>Type a message...</span>
        <span style={{ background: '#f1f5f9', color: '#0f172a', padding: '4px 12px', borderRadius: 2, fontSize: 11, fontWeight: 600 }}>SEND</span>
      </div>
    </div>
    {/* Details */}
    <div style={{ background: '#0f172a', padding: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: 12, fontFamily: 'Inter, sans-serif' }}>CUSTOMER</div>
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <div style={{ width: 36, height: 36, background: '#1e293b', borderRadius: '50%', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#94a3b8', fontWeight: 700 }}>A</div>
        <div style={{ fontWeight: 600, fontSize: 13, color: '#f1f5f9' }}>Ahmed Al-Malki</div>
        <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>+966 5X XXX XXXX</div>
      </div>
      <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)', paddingTop: 10 }}>
        <div style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>Tags</div>
        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 10 }}>
          <span style={{ background: 'rgba(241,245,249,0.06)', color: '#94a3b8', padding: '1px 6px', fontSize: 10 }}>VIP</span>
          <span style={{ background: 'rgba(234,179,8,0.08)', color: '#eab308', padding: '1px 6px', fontSize: 10 }}>Catering</span>
        </div>
        <div style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>Next follow-up</div>
        <div style={{ fontSize: 11, color: '#eab308', fontWeight: 600 }}>In 2 days — Confirm catering</div>
      </div>
    </div>
  </div>
);

const EN = {
  slug: 'whatsapp-crm',
  badge: 'MOST REQUESTED',
  headline: 'Never lose a customer message again.',
  subheadline: 'A WhatsApp CRM built for Saudi restaurants, salons, and clinics. Every conversation in one place — no more chaos.',
  price: '$79 – 149 / MO',
  painTitle: 'The problems you face every single day',
  pains: [
    { title: 'Customer messages get lost', text: 'A customer sent an order at 2pm and nobody replied. You lost the order and the customer. It happens every day.' },
    { title: 'Follow-up is impossible', text: "Each employee has a different WhatsApp. There's no system to know who replied and who didn't. You lose control." },
    { title: 'Personal phone = your office', text: 'Personal and business chats mixed together. Employee quits? All customer data walks out with them.' },
  ],
  solutionTitle: 'All your conversations. One place. Zero chaos.',
  solutions: [
    { icon: '→', title: 'Unified inbox', text: 'All WhatsApp messages in one dashboard. Your whole team sees every conversation and knows who is handling what.' },
    { icon: '→', title: 'Smart tags & reminders', text: 'Auto-tag customers. Set follow-up reminders. Never miss a sale opportunity again.' },
    { icon: '→', title: 'Reports & analytics', text: 'Message volume, response time, team performance — understand your business communication at a glance.' },
  ],
  mockup: mockup,
  proofAvatars: ['A', 'N', 'K'],
  proofCount: 47,
  heroVisual: (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#475569' }}>
      <div style={{ fontSize: 48, opacity: 0.3, marginBottom: 8 }}>💬</div>
      <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>WhatsApp CRM</div>
    </div>
  ),
};

const AR = {
  ...EN,
  badge: 'الأكثر طلباً',
  headline: 'لا تضيع أي رسالة عميل مرة أخرى.',
  subheadline: 'نظام إدارة محادثات واتساب مصمم للمطاعم والصالونات والعيادات في السعودية. كل محادثاتك في مكان واحد — بدون فوضى.',
  price: '$79 – 149 / شهرياً',
  painTitle: 'المشاكل التي تواجهها يومياً',
  pains: [
    { title: 'رسائل العملاء تضيع', text: 'عميل أرسل طلب على واتساب الساعة ٢ الظهر وما أحد رد عليه. خسرت الطلب والعميل.' },
    { title: 'المتابعة مستحيلة', text: 'كل موظف عنده واتساب مختلف. ما فيه نظام يعرف مين رد ومين ما رد. تفقد السيطرة.' },
    { title: 'الجوال الشخصي = مكتبك', text: 'محادثاتك الشخصية مختلطة مع العمل. موظف يستقيل؟ تروح كل بيانات العملاء معه.' },
  ],
  solutionTitle: 'كل محادثاتك. مكان واحد. بدون فوضى.',
  solutions: [
    { icon: '←', title: 'صندوق وارد موحد', text: 'كل رسائل واتساب في لوحة تحكم واحدة. فريقك كامل يشوف نفس المحادثات ويعرف مين يتابع مين.' },
    { icon: '←', title: 'تصنيف وتنبيهات ذكية', text: 'صنّف عملاؤك تلقائياً. حط تنبيه للمتابعة. ما يفوتك أي فرصة بيع.' },
    { icon: '←', title: 'تقارير وإحصائيات', text: 'اعرف كم رسالة وصلت اليوم، متوسط وقت الرد، وأداء كل موظف — كل هذا من لوحة واحدة.' },
  ],
};

export function WhatsAppCRM() {
  return <SaudiProductPage content={EN} lang="en" />;
}

export function WhatsAppCRMAr() {
  return <SaudiProductPage content={AR} lang="ar" />;
}
