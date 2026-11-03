import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users, Radio, Shield, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <MessageSquare className="text-blue-400" />, title: 'Real-time Chats', desc: 'Instant conversations with premium, cinematic messaging experiences.' },
    { icon: <Users className="text-purple-400" />, title: 'Dynamic Communities', desc: 'Create vibrant groups and circles with intelligent controls for community growth.' },
    { icon: <Radio className="text-green-400" />, title: 'Broadcast Reach', desc: 'Send announcements and updates to the people who matter most, instantly.' },
    { icon: <Shield className="text-red-400" />, title: 'Secure by Design', desc: 'Built with privacy-first architecture and trusted cloud infrastructure.' },
    { icon: <Globe className="text-yellow-400" />, title: 'Global Access', desc: 'Connect people across regions with seamless, fast, and modern communication.' },
    { icon: <Zap className="text-cyan-400" />, title: 'High-Speed Experience', desc: 'Optimized for quick interactions, smooth UX, and low-latency delivery.' },
  ];

  return (
    <div className="landing-shell" style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />
      <div className="hero-grid" />

      <section style={{ padding: '7rem 2rem 4rem', textAlign: 'center', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="brand-badge">Developer: Anuga Senithu • UltraDev • Dark Tech Zone</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.3rem)', marginBottom: '1.2rem', lineHeight: 1.05 }}>
            Welcome to <span className="gradient-text">Nexora</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '760px', margin: '0 auto 2.3rem', lineHeight: '1.7' }}>
            Nexora is the next-generation social platform for real-time messaging, communities, creator culture, and seamless digital connection.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/signup')} className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
              Get Started <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('/login')} className="glass" style={{ padding: '16px 32px', fontSize: '1.05rem', borderRadius: '12px', border: '1px solid var(--glass-border)', color: 'white' }}>
              Sign In
            </button>
          </div>

          <div className="ownership-banner">
            Full ownership and creative rights belong to UltraDev and Dark Tech Zone.
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Built for modern communities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '2.5rem', borderRadius: '24px' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="glass" style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
          <div className="video-panel" />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem', position: 'relative', zIndex: 1 }}>Trusted by creators, teams, and digital communities</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2.5rem', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
            Nexora brings together private messaging, fast communities, and premium social experiences designed for the next era of digital connection.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={24} className="text-blue-500" /> <span>Premium Security</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={24} className="text-blue-500" /> <span>Lightning-Fast Delivery</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={24} className="text-blue-500" /> <span>Modern Community Tools</span></div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-dim)' }}>© 2026 Nexora by UltraDev. Built by Anuga Senithu and the Dark Tech Zone team.</p>
      </footer>
    </div>
  );
};

export default Landing;
