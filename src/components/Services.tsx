// import React from "react";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import { HiArrowLongRight } from "react-icons/hi2";

const services = [
  {
    id: 1,
    title: "Using Abstract",
    desc: "Abstract lets you manage, version, and document your designs in one place.",
    href: "Learn More",
    icon: icon1,
  },
  {
    id: 2,
    title: "Manage your account",
    desc: "Configure your account settings, such as your email, profile details, and password.",
    href: "Learn More",
    icon: icon2,
  },
  {
    id: 3,
    title: "Manage organizations, teams, and projects",
    desc: "Use Abstract organizations, teams, and projects to organize your people and your work.",
    href: "Learn More",
    icon: icon3,
  },
  {
    id: 4,
    title: "Manage billing",
    desc: "Change subscriptions and payment details.",
    href: "Learn More",
    icon: icon4,
  },
  {
    id: 5,
    title: "Authenticate to Abstract",
    desc: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    href: "Learn More",
    icon: icon5,
  },
  {
    id: 6,
    title: "Abstract support",
    desc: "Get in touch with a human.",
    href: "Learn More",
    icon: icon6,
  },
];

export default function Services() {
  return (
    <section>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex gap-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-24 h-24 object-cover"
                />

                <div className="flex flex-col ">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-xl text-gray-700 mt-5">{service.desc}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <a href="#" className="text-primary font-semibold">
                      {service.href}
                    </a>
                    <HiArrowLongRight className="text-primary w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
