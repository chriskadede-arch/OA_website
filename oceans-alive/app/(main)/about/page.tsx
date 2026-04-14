import Hero from '@/components/common/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="About Oceans Alive"
        subtitle="Community-Led Marine Conservation in Kenya"
        description="Oceans Alive Foundation is dedicated to sustainable marine conservation through community empowerment and environmental education."
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              To empower coastal communities in Kenya to restore marine ecosystems, support
              sustainable fisheries, and protect biodiversity through education and community-led action.
            </p>

            <h3 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4 mt-12">
              Our Values
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✓ <strong>Community-Led:</strong> Solutions designed by and for local communities</li>
              <li>✓ <strong>Sustainability:</strong> Long-term environmental and social benefits</li>
              <li>✓ <strong>Education:</strong> Empowering people with knowledge and skills</li>
              <li>✓ <strong>Conservation:</strong> Protecting marine biodiversity and ecosystems</li>
              <li>✓ <strong>Partnership:</strong> Collaborating with all stakeholders</li>
            </ul>

            <h3 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4 mt-12">
              Our Work
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Since our founding, Oceans Alive Foundation has worked with over 1,200 community members
              across Kilifi County, restoring coral ecosystems, supporting sustainable fishing practices,
              and educating over 2,500 students annually about marine conservation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
