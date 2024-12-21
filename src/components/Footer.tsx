import React from "react";

const socials = [
  {
    id: 1,
    title: "Abstract",
    links: [
      {
        id: 1,
        title: "Start Trial",
        href: "#",
      },
      {
        id: 2,
        title: "Pricing",
        href: "#",
      },
      {
        id: 3,
        title: "Download",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    links: [
      {
        id: 1,
        title: "Blog",
        href: "#",
      },
      {
        id: 2,
        title: "Help Center",
        href: "#",
      },
      {
        id: 3,
        title: "Release Notes",
        href: "#",
      },
      {
        id: 4,
        title: "Status",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Community",
    links: [
      {
        id: 1,
        title: "Twitter",
        href: "#",
      },
      {
        id: 2,
        title: "LinkedIn",
        href: "#",
      },
      {
        id: 3,
        title: "Facebook",
        href: "#",
      },
      {
        id: 4,
        title: "Instagram",
        href: "#",
      },
      {
        id: 5,
        title: "YouTube",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    links: [
      {
        id: 1,
        title: "About Us",
        href: "#",
      },
      {
        id: 2,
        title: "Careers",
        href: "#",
      },
      {
        id: 3,
        title: "Legal",
        href: "#",
      },
      {
        id: 4,
        title: "Contact Us",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {socials.map((social) => (
            <div key={social.id} className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">{social.title}</h3>
              <ul className="list-none mt-4">
                {social.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="font-semibold">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center">
          © Copyright 2024. Abstract by Criss, Inc.All rights reserved
        </p>
      </div>
    </footer>
  );
}
