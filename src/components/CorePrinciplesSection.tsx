import ScrollStack, { ScrollStackItem } from './ScrollStack';

export function CorePrinciplesSection() {
  const principles = [
    {
      step: '01',
      title: 'Integrity in Every Batch',
      desc: 'Formulations engineered with strict quality adherence and certified testing standards.'
    },
    {
      step: '02',
      title: 'Precision Chemistry',
      desc: 'Targeted bonding, waterproofing, and surface treatment additives designed for harsh environments.'
    },
    {
      step: '03',
      title: 'Engineering Excellence',
      desc: 'Reliable construction chemicals supporting landmark infrastructures and global standards.'
    }
  ];

  return (
    <section className="vura-core-principles-section" id="foundational-pillars">
      <div className="vura-container">
        <div className="vura-principles-header">
          <h2 className="vura-section-heading">
            Built On Integrity, Precision &amp; Engineering Excellence
          </h2>
          <p className="vura-section-desc">
            Three non-negotiable principles that drive our formulations and projects.
          </p>
        </div>

        {/* Scroll Stacking Cards Container */}
        <div className="scroll-stack-wrapper">
          <ScrollStack
            itemDistance={90}
            itemStackDistance={20}
            stackPosition="20%"
            itemScale={0.04}
            baseScale={0.88}
            dimAmount={0.2}
            smoothScroll={true}
            useWindowScroll={true}
          >
            {principles.map((p, idx) => (
              <ScrollStackItem
                key={idx}
                itemClassName="core-principle-card"
              >
                <div className="core-principle-inner">
                  <div className="core-principle-top">
                    <span className="core-principle-step">{p.step}</span>
                    <span className="core-principle-tag">Principle</span>
                  </div>
                  <div className="core-principle-content">
                    <h3 className="core-principle-title">{p.title}</h3>
                    <p className="core-principle-desc">{p.desc}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}

export default CorePrinciplesSection;
