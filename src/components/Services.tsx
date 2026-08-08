import { HeartPulse, Users, Briefcase, ShieldCheck } from 'lucide-react'

  const services = [
    {
      icon: HeartPulse,
      title: 'Personal Injury Law',
      description:
        'We fight for the compensation you deserve after accidents, negligence, and injuries.',
    },
    {
      icon: Users,
      title: 'Family Law & Divorce',
      description:
        'Compassionate guidance for custody, divorce, adoption, and other family disputes.',
    },
    {
      icon: Briefcase,
      title: 'Corporate & Business Law',
      description:
        'Contracts, compliance, and corporate strategy to protect and grow your business.',
    },
    {
      icon: ShieldCheck,
      title: 'Criminal Defense',
      description:
        'Aggressive and strategic defense to protect your rights and your freedom.',
    },
  ]

  const Services = () => {
    return (
      <section className="py-20">
        <h2 className="text-center text-navy text-3xl md:text-4xl font-bold mb-14">
          Legal Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <span className="w-16 h-16 rounded-full bg-sky-accent/15 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-navy" />
              </span>
              <h3 className="text-navy text-lg font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  export default Services
