import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Cloud & Platform Engineering",
    desc: "I design and operate cloud-native platforms on Azure — from AKS-based CaaS with service-mesh networking to Terraform-managed IaC estates.",
    tags: ["Azure", "AKS", "Terraform", "Vault", "Istio", "Bicep"],
  },
  {
    number: "02",
    title: "CI/CD & GitOps",
    desc: "I build standardized CI/CD templates and GitOps workflows that give development teams repeatable, auditable releases at scale.",
    tags: ["Azure DevOps", "Flux", "ArgoCD", "Python", "Go", "JFrog"],
  },
  {
    number: "03",
    title: "Observability & Security",
    desc: "Full-stack monitoring, vulnerability management, and zero-trust network policies. From Prometheus to Sentinel, I keep platforms visible and secure.",
    tags: ["NewRelic", "Grafana", "Prometheus", "Calico", "Sentinel", "RBAC"],
  },
  {
    number: "04",
    title: "Architecture & Mentorship",
    desc: "Technical design leadership at the Architecture Review Board level. I mentor engineers and shape strategy that scales with the organization.",
    tags: ["System Design", "Runbooks", "Documentation", "ARB", "SAFe"],
  },
];

const WhatIDo = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".wid-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section className="wid-section">
      <div className="wid-inner">
        <span className="wid-label title">What I Do</span>
        <h2 className="wid-heading">
          Expertise across the full
          <br />
          <em>cloud-native</em> stack
        </h2>
        <div className="wid-grid" ref={gridRef}>
          {services.map((s) => (
            <div className="wid-card" key={s.number}>
              <span className="wid-card-num">{s.number}</span>
              <h3 className="wid-card-title">{s.title}</h3>
              <p className="wid-card-desc">{s.desc}</p>
              <div className="wid-card-tags">
                {s.tags.map((t, i) => (
                  <span className="wid-tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
