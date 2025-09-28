import React from "react";
import "./TeEsperamosSection.css";
import ThemedText from "./shared/ThemedText";

export default function TeEsperamosSection() {
  return (
    <section className="te-esperamos-section">
      <h2 className="te-esperamos-title">TE ESPERAMOS EL</h2>
      <ThemedText variant="" className="te-esperamos-dia">VIERNES</ThemedText>
      <div className="te-escalera" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '24px', marginTop: '12px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="te-num" style={{ fontFamily: 'NekaLaurent, serif', color: '#B1732A', fontSize: '2.3rem', fontWeight: 400, marginBottom: '8px', marginLeft: '0px' }}>07</div>
          <img src="/img/landing/te_esperamos_2.jpg" alt="" className="te-img" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <div className="te-num" style={{ fontFamily: 'NekaLaurent, serif', color: '#B1732A', fontSize: '2.3rem', fontWeight: 400, marginBottom: '8px'}}>11</div>
          <img src="/img/landing/te_esperamos_3.jpg" alt="" className="te-img" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <div className="te-num" style={{ fontFamily: 'NekaLaurent, serif', color: '#B1732A', fontSize: '2.3rem', fontWeight: 400, marginBottom: '8px'}}>25</div>
          <img src="/img/landing/te_esperamos_1.jpg" alt="" className="te-img" />
        </div>
      </div>
    </section>
  );
}
