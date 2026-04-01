import "./styles/About.css";

const highlights = [
  { metric: "10+", label: "Years in IT & Cloud" },
  { metric: "CKA", label: "Kubernetes Certified" },
  { metric: "AZ-305", label: "Azure Solutions Architect" },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-col about-text-col">
          <span className="about-label title">About Me</span>
          <h2 className="about-headline para">
            Staff DevOps Engineer with 10+ years building enterprise-scale
            infrastructure and cloud-native platforms.
          </h2>
          <p className="about-desc">
            I architect container platforms on Azure AKS, lead cloud
            migrations, and build the CI/CD and GitOps foundations that
            engineering teams rely on. My work spans platform engineering,
            infrastructure as code, observability, and security — and I
            take equal pride in mentoring engineers and shaping technical
            strategy at the architecture-review level.
          </p>
        </div>
        <div className="about-col about-metrics-col">
          {highlights.map((h, i) => (
            <div className="about-metric" key={i}>
              <span className="about-metric-value">{h.metric}</span>
              <span className="about-metric-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
