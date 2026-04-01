import { useEffect, useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: "2022 — Now",
    title: "Staff DevOps Engineer",
    company: "Canadian Tire",
    desc: "Architected an enterprise Container-as-a-Service platform on Azure AKS with Istio service mesh and Calico network policies. Migrated HashiCorp Vault, Terraform Enterprise, and JFrog Artifactory to Azure. Standardized CI/CD and GitOps templates across Flux and ArgoCD.",
  },
  {
    period: "2019 — 2022",
    title: "Senior Consultant",
    company: "BDO Canada",
    desc: "Delivered end-to-end Azure IaaS and PaaS solutions for multiple enterprise clients. Authored IaC with PowerShell and ARM templates, orchestrated 250+ portal deployments via CI/CD, and established observability stacks with Azure Sentinel, Grafana, and Prometheus.",
  },
  {
    period: "2017 — 2019",
    title: "Systems Administrator",
    company: "RICOH",
    desc: "Operated VMware clusters spanning 50+ hosts and 1,000+ VMs. Administered Citrix XenApp/XenDesktop for multi-site application delivery. Owned vulnerability management, patch orchestration via WSUS, and network hardening.",
  },
  {
    period: "2015 — 2017",
    title: "IT Specialist",
    company: "Micro Computers Consulting",
    desc: "Centrally managed client infrastructure via SolarWinds N-central. Configured perimeter firewalls (Cisco ASA, SonicWALL), provisioned SAN storage across IBM, Lenovo, and NetApp, and built ESXi and Hyper-V environments.",
  },
];

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".exp-card");
    if (!items) return;

    items.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.08,
        }
      );
    });
  }, []);

  return (
    <section className="exp-section" ref={sectionRef}>
      <div className="exp-inner">
        <span className="exp-label title">Experience</span>
        <h2 className="exp-heading">
          Career <em>&</em> Journey
        </h2>
        <div className="exp-timeline">
          {roles.map((role, i) => (
            <div className="exp-card" key={i}>
              <div className="exp-card-top">
                <span className="exp-period">{role.period}</span>
                <span className="exp-company">{role.company}</span>
              </div>
              <h3 className="exp-role">{role.title}</h3>
              <p className="exp-desc">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
