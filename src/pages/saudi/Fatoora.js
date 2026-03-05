import React from 'react';
import SaudiProductPage from './SaudiProductPage';

const mockup = (
  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
    {/* Invoice form */}
    <div style={{ flex: '1 1 260px', border: '1px solid rgba(148,163,184,0.1)', padding: 20 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: 14, fontFamily: 'Inter, sans-serif' }}>NEW INVOICE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { label: 'Client', value: 'Gulf Trading Co.' },
          { label: 'Tax Number', value: '300XXXXXXXXX0003' },
        ].map((f, i) => (
          <div key={i}>
            <div style={{ fontSize: 10, color: '#64748b', marginBottom: 3 }}>{f.label}</div>
            <div style={{ padding: '8px 12px', background: 'rgba(148,163,184,0.06)', fontSize: 12, color: '#f1f5f9', border: '1px solid rgba(148,163,184,0.08)', fontFamily: 'Inter, sans-serif' }}>{f.value}</div>
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div>
            <div style={{ fontSize: 10, color: '#64748b', marginBottom: 3 }}>Amount</div>
            <div style={{ padding: '8px 12px', background: 'rgba(148,163,184,0.06)', fontSize: 12, color: '#f1f5f9', border: '1px solid rgba(148,163,184,0.08)', fontFamily: 'Inter, sans-serif' }}>2,500.00 SAR</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: '#64748b', marginBottom: 3 }}>VAT 15%</div>
            <div style={{ padding: '8px 12px', background: 'rgba(34,197,94,0.06)', fontSize: 12, color: '#22c55e', fontWeight: 700, border: '1px solid rgba(34,197,94,0.1)', fontFamily: 'Inter, sans-serif' }}>375.00 SAR</div>
          </div>
        </div>
        <div style={{ padding: 12, background: '#f1f5f9', color: '#0f172a', textAlign: 'center', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>GENERATE INVOICE</div>
      </div>
    </div>
    {/* Preview */}
    <div style={{ flex: '1 1 260px', border: '1px solid rgba(148,163,184,0.1)', padding: 20, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '1px 8px', fontSize: 9, fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>ZATCA COMPLIANT ✓</div>
      <div style={{ textAlign: 'center', marginBottom: 12, paddingTop: 4 }}>
        <div style={{ fontSize: 10, color: '#64748b', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>INVOICE #INV-2026-0047</div>
      </div>
      <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 11 }}>
          <div><div style={{ color: '#64748b', fontSize: 9 }}>FROM</div><div style={{ fontWeight: 600, color: '#f1f5f9' }}>Al-Noor LLC</div></div>
          <div style={{ textAlign: 'right' }}><div style={{ color: '#64748b', fontSize: 9 }}>TO</div><div style={{ fontWeight: 600, color: '#f1f5f9' }}>Gulf Trading Co.</div></div>
        </div>
        <div style={{ background: 'rgba(148,163,184,0.04)', padding: 10, marginBottom: 12 }}>
          {[
            ['Base amount', '2,500.00'],
            ['VAT (15%)', '375.00'],
          ].map(([l, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>
              <span>{l}</span><span style={{ fontFamily: 'Inter, sans-serif' }}>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, color: '#f1f5f9', paddingTop: 8, borderTop: '1px solid rgba(148,163,184,0.08)' }}>
            <span>Total</span><span style={{ fontFamily: 'Inter, sans-serif' }}>2,875.00 SAR</span>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', width: 56, height: 56, background: '#f1f5f9', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 6, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gridTemplateRows: 'repeat(5,1fr)', gap: 1 }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ background: Math.random() > 0.4 ? '#0f172a' : 'transparent', borderRadius: 1 }} />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 9, color: '#64748b', marginTop: 4, fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>ZATCA QR CODE</div>
        </div>
      </div>
    </div>
  </div>
);

const EN = {
  slug: 'fatoora',
  badge: 'E-INVOICING',
  headline: 'ZATCA-compliant invoices in 30 seconds.',
  subheadline: 'Generate e-invoices with QR codes, automatic VAT calculation, and WhatsApp delivery. Like Wave, but built for Saudi compliance.',
  price: 'FREE + $29 – 49 / MO',
  painTitle: 'Manual invoicing means fines and headaches',
  pains: [
    { title: "Your invoices aren't compliant", text: 'ZATCA requires a specific e-invoice format with QR codes. Still using plain PDFs? Fines up to SAR 50,000.' },
    { title: 'Manual tax calculation', text: 'Calculating 15% VAT by hand every time. One small mistake means problems with the tax authority.' },
    { title: "Current tools aren't built for Saudi", text: "All invoicing software is English-first. Complex UI. No Mada support. No WhatsApp delivery. Built for the US, not Saudi Arabia." },
  ],
  solutionTitle: 'Invoice ready. Tax calculated. Sent instantly.',
  solutions: [
    { icon: '→', title: 'Invoice in 30 seconds', text: 'Enter client name and amount — the system handles QR code, VAT, and XML format. Ready to send.' },
    { icon: '→', title: 'Send via WhatsApp', text: 'Send invoices directly to your client on WhatsApp or email with one tap. No printing, no attachments.' },
    { icon: '→', title: 'Tax reports ready', text: 'All invoices stored and organized. When tax filing comes, pull the report instantly — no manual work.' },
  ],
  mockup: mockup,
  proofAvatars: ['S', 'A', 'N'],
  proofCount: 28,
  heroVisual: (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#475569' }}>
      <div style={{ fontSize: 48, opacity: 0.3, marginBottom: 8 }}>🧾</div>
      <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Fatoora</div>
    </div>
  ),
};

const AR = {
  ...EN,
  badge: 'فوترة إلكترونية',
  headline: 'فاتورة متوافقة مع زاتكا في ٣٠ ثانية.',
  subheadline: 'أصدر فواتير إلكترونية متوافقة مع متطلبات زاتكا في ثوانٍ. رمز QR، حساب ضريبة القيمة المضافة، وإرسال عبر واتساب.',
  price: 'مجاني + $29 – 49 / شهرياً',
  painTitle: 'الفوترة اليدوية = غرامات ومشاكل',
  pains: [
    { title: 'فواتيرك مو متوافقة', text: 'زاتكا تطلب فاتورة إلكترونية بصيغة محددة مع رمز QR. لسا تستخدم PDF عادي؟ غرامة تصل ٥٠,٠٠٠ ريال.' },
    { title: 'حساب الضريبة يدوي', text: 'كل فاتورة تحسب الضريبة يدوياً. خطأ بسيط في ١٥٪ ضريبة القيمة المضافة = مشاكل مع الهيئة.' },
    { title: 'الأدوات الحالية مو عربية', text: 'كل برامج الفوترة بالإنجليزي. واجهة معقدة. ما تدعم مدى ولا واتساب. مصممة لأمريكا مو للسعودية.' },
  ],
  solutionTitle: 'فاتورة جاهزة. ضريبة محسوبة. إرسال فوري.',
  solutions: [
    { icon: '←', title: 'فاتورة في ٣٠ ثانية', text: 'أدخل اسم العميل والمبلغ — والنظام يسوي كل شي: رمز QR، الضريبة، الصيغة الصحيحة. جاهزة للإرسال.' },
    { icon: '←', title: 'إرسال عبر واتساب', text: 'أرسل الفاتورة مباشرة لعميلك على واتساب أو الإيميل بضغطة زر. ما يحتاج تطبع أو ترفق ملفات.' },
    { icon: '←', title: 'تقارير ضريبية جاهزة', text: 'كل فواتيرك محفوظة ومرتبة. وقت الإقرار الضريبي — طلّع التقرير جاهز بدون تعب.' },
  ],
};

export function Fatoora() {
  return <SaudiProductPage content={EN} lang="en" />;
}

export function FatooraAr() {
  return <SaudiProductPage content={AR} lang="ar" />;
}
