// import Link from "next/link";

// const experience = [
//   {
//     role: "Owner & House Audio Engineer",
//     organization: "WinterBeast",
//     location: "Portland, Oregon",
//     dates: "2018–Present",
//     description: [
//       "Designed and built an independent recording studio, including acoustic treatment and sound isolation.",
//       "Produce, record, edit, and mix albums for independent artists, adapting recording methods to each project's needs.",
//       "Operate and troubleshoot microphones, analog signal chains, monitoring, and digital recording systems.",
//       "Manage session preparation, scheduling, artist communication, file organization, and final delivery.",
//     ],
//   },
//   {
//     role: "Freelance Audio Engineer",
//     organization: "Various Studios",
//     location: "New York, California, Oregon & Montreal",
//     dates: "2008–2014",
//     description: [
//       "Operated recording sessions in professional studio environments, setting up equipment, troubleshooting technical issues, and supporting creative collaboration.",
//       "Worked at Headgear Recording, Rare Book Room, Avatar Studios, LoHo Recording, Mercy Sound Studios, Applehead Recording, Studios Piccolo, Hyde Street Studios, and The Map Room.",
//       "Clients included Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
//     ],
//   },
//   {
//     role: "Audio Engineer",
//     organization: "Outta Sight Outta Mind / Open Hearts Open Minds",
//     location: "Portland, Oregon",
//     dates: "2022–2024",
//     description: [
//       "Mixed and archived more than 120 music projects through a community-based program serving incarcerated participants.",
//       "Standardized file naming and digital archiving workflows.",
//       "Supported live showcases with technical setup, stage coordination, and front-of-house sound mixing.",
//     ],
//   },
//   {
//     role: "Facilities & AV Support",
//     organization: "Oregon Contemporary",
//     location: "Portland, Oregon",
//     dates: "2017–2018",
//     description: [
//       "Prepared and maintained gallery and event spaces, including cleaning, painting, and restoring exhibition areas.",
//       "Assisted with installation and operation of stage, projection, lighting, and sound systems.",
//       "Provided technical support to event organizers, attendees, and freelance technicians.",
//     ],
//   },
//   {
//     role: "Stagehand & AV Support",
//     organization: "Portland Institute for Contemporary Art",
//     location: "Portland, Oregon",
//     dates: "2017",
//     description: [
//       "Supported Time-Based Art Festival events through technical setup, event logistics, and front-of-house mixing.",
//       "Set up seating, sound systems, microphones, and instruments; recorded performances for archival and press use.",
//     ],
//   },
//   {
//     role: "Writing Tutor",
//     organization: "Portland Community College",
//     location: "Portland, Oregon",
//     dates: "2018–2023",
//     description: [
//       "Supported students with research, argument development, drafting, revision, editing, and citation practices.",
//       "Worked with both the Reading & Writing Center and TRIO Student Support Services, including students with varied learning and support needs.",
//     ],
//   },
//   {
//     role: "AV Technician",
//     organization: "Portland Community College",
//     location: "Portland, Oregon",
//     dates: "2005–2006",
//     description: [
//       "Delivered, installed, tracked, and retrieved multimedia equipment for classrooms and events.",
//       "Assisted faculty and students with equipment operation and troubleshooting.",
//     ],
//   },
// ];

// const releasedCredits = [
//   ["2026", "Hail", "Child of A Cursed Temple", "Production, Recording, Mixing"],
//   ["2026", "Zothique", "Abominations of Yondo", "Drum Recording, Mixing"],
//   ["2024", "Hail", "Transgression", "Production, Recording, Mixing"],
//   ["2024", "Old Town Diamonds", "40 Miles", "Production, Recording, Mixing"],
//   ["2023", "Hail", "We Are Nothing", "Production, Recording, Mixing"],
//   [
//     "2023",
//     "Old Town Diamonds",
//     "A Pale Horse",
//     "Production, Recording, Mixing",
//   ],
//   [
//     "2023",
//     "Hollow Senses",
//     "Taurobolium",
//     "Mixing, Noise/Synthesis Interlude Recording",
//   ],
//   ["2022", "Fliege", "The Invisible Seam", "Mixing, Vocal Recording"],
//   ["2020", "The Kolotov Mocktails", "Ivy Hall", "Mixing"],
//   ["2019", "L’Acephale", "L’Acephale", "Recording, Mixing"],
//   ["2018", "Twin Perish", "Blue Pour", "Production, Recording, Mixing"],
//   ["2016", "Bulldog Shadow", "24-Hour Drunk", "Production, Recording, Mixing"],
//   [
//     "2014",
//     "Night Surgeon",
//     "Gandola Crimewave",
//     "Production, Recording, Mixing",
//   ],
//   ["2013", "Night Surgeon", "Self-Titled", "Production, Recording, Mixing"],
//   ["2012", "Steelhymen", "0 || 0/0", "Recording, Mixing"],
//   ["2011", "Blondie", "Panic of Girls", "Recording"],
//   ["2011", "Shalants", "Self-Titled", "Recording, Mixing"],
//   ["2011", "Night Surgeon", "Day for Night", "Production, Recording, Mixing"],
//   ["2011", "Casey Spooner", "Adult Contemporary", "Recording"],
//   ["2009", "Fischerspooner", "Entertainment", "Recording"],
//   ["2008", "Mobile", "Tales from the City", "Recording"],
//   ["2007", "Stab The Matador", "Doctor", "Recording"],
// ];

// const pendingCredits = [
//   {
//     artist: "The Notnauts",
//     project: "Title forthcoming",
//     format: "Full-length LP",
//   },
//   {
//     artist: "Refrigerated Nurses",
//     project: "Title forthcoming",
//     format: "Full-length LP",
//   },
//   { artist: "Entrain", project: "Title forthcoming", format: "Full-length LP" },
//   { artist: "Mistons", project: "Return to Cinder", format: "Full-length LP" },
//   { artist: "L’Acephale", project: "Eden!", format: "Full-length LP" },
//   {
//     artist: "Hellcows",
//     project: "Two cover songs",
//     format: "Singles",
//   },
// ];

// const technicalSkills = [
//   "Audio recording & production",
//   "Analog signal chains",
//   "Microphone selection & placement",
//   "Digital multitrack recording",
//   "Editing, comping & punch-ins",
//   "In-the-box mixing",
//   "Live sound & FOH mixing",
//   "AV setup & troubleshooting",
//   "Session preparation & file management",
//   "Equipment setup & maintenance",
//   "Technical problem-solving",
//   "Artist & client communication",
// ];

// function Section({
//   id,
//   label,
//   children,
// }: {
//   id: string;
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <section
//       id={id}
//       className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20 lg:px-20"
//     >
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
//         <div className="md:col-span-3">
//           <p className="text-[15px] uppercase tracking-[0.22em] text-zinc-400">
//             {label}
//           </p>
//         </div>
//         <div className="min-w-0 md:col-span-8 md:col-start-5">{children}</div>
//       </div>
//     </section>
//   );
// }

// export default function CVPage() {
//   return (
//     <main className="min-h-screen bg-black text-[#e6e6e6]">
//       {/* HEADER */}
//       <header className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-8 md:px-12 md:pb-24 lg:px-20">
//         <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />

//         <div className="relative z-10 mx-auto max-w-6xl">
//           <div className="flex items-center justify-between gap-4">
//             <Link
//               href="/"
//               className="text-sm uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-white"
//             >
//               WinterBeast
//             </Link>

//             <Link
//               href="/"
//               className="text-sm text-zinc-400 transition-colors hover:text-white"
//             >
//               ← Back to studio
//             </Link>
//           </div>

//           <div className="mt-24 max-w-3xl md:mt-32">
//             <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">
//               Professional History & Recording Credits
//             </p>

//             <h1 className="mt-6 font-display text-4xl font-light tracking-wide md:text-6xl">
//               Gabriel Espinosa
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
//               Producer, recording engineer, and studio operator based in
//               Portland, Oregon. Experience across independent record production,
//               professional recording studios, live sound, and community-based
//               music programs.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
//               <a
//                 href="#experience"
//                 className="transition-colors hover:text-white"
//               >
//                 Experience ↓
//               </a>
//               <a
//                 href="#discography"
//                 className="transition-colors hover:text-white"
//               >
//                 Discography ↓
//               </a>
//               <a href="#skills" className="transition-colors hover:text-white">
//                 Technical Skills ↓
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* EXPERIENCE */}
//       <Section id="experience" label="Experience">
//         <div className="space-y-12">
//           {experience.map((job) => (
//             <article
//               key={`${job.organization}-${job.dates}`}
//               className="border-b border-white/10 pb-10 last:border-0 last:pb-0"
//             >
//               <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-6">
//                 <div>
//                   <h2 className="text-xl font-normal">{job.organization}</h2>
//                   <p className="mt-1 text-zinc-300">{job.role}</p>
//                 </div>
//                 <p className="shrink-0 text-sm text-zinc-500">{job.dates}</p>
//               </div>

//               <p className="mt-2 text-sm text-zinc-500">{job.location}</p>

//               <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-300 marker:text-zinc-600">
//                 {job.description.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </Section>

//       {/* DISCOGRAPHY */}
//       <Section id="discography" label="Selected Discography">
//         <div className="mb-8">
//           <h2 className="text-2xl font-light">Released Work</h2>
//           <p className="mt-2 text-sm leading-relaxed text-zinc-400">
//             Production, recording, engineering, and mixing credits across
//             independent and professional releases.
//           </p>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[680px] border-collapse text-left text-sm">
//             <thead>
//               <tr className="border-y border-white/15 text-xs uppercase tracking-[0.14em] text-zinc-500">
//                 <th className="py-4 pr-4 font-normal">Year</th>
//                 <th className="py-4 pr-4 font-normal">Artist</th>
//                 <th className="py-4 pr-4 font-normal">Project</th>
//                 <th className="py-4 font-normal">Credit</th>
//               </tr>
//             </thead>
//             <tbody>
//               {releasedCredits.map(([year, artist, project, credit]) => (
//                 <tr
//                   key={`${year}-${artist}-${project}`}
//                   className="border-b border-white/[0.07] align-top"
//                 >
//                   <td className="whitespace-nowrap py-4 pr-4 text-zinc-500">
//                     {year}
//                   </td>
//                   <td className="py-4 pr-4 text-zinc-200">{artist}</td>
//                   <td className="py-4 pr-4">{project}</td>
//                   <td className="py-4 leading-relaxed text-zinc-400">
//                     {credit}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* UNRELEASED */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-light">Unreleased & In Progress</h2>
//           <p className="mt-2 text-sm leading-relaxed text-zinc-400">
//             Additional album and recording projects. Release details may change.
//           </p>

//           <div className="mt-6 border-t border-white/15">
//             {pendingCredits.map((item) => (
//               <article
//                 key={`${item.artist}-${item.project}`}
//                 className="grid grid-cols-1 gap-2 border-b border-white/[0.07] py-5 sm:grid-cols-12 sm:gap-6"
//               >
//                 <div className="sm:col-span-4">
//                   <h3 className="text-[15px]">{item.artist}</h3>
//                 </div>
//                 <div className="sm:col-span-4">
//                   <p className="text-[15px] text-zinc-300">{item.project}</p>
//                 </div>
//                 <div className="sm:col-span-4">
//                   <p className="text-sm leading-relaxed text-zinc-500">
//                     {item.format}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <p className="mt-6 text-sm text-zinc-400">
//             Credits for these projects: Production, Recording, Mixing. Hellcows
//             compilation placement is tentative.
//           </p>
//         </div>
//       </Section>

//       {/* TECHNICAL SKILLS */}
//       <Section id="skills" label="Technical Skills">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
//           {technicalSkills.map((skill) => (
//             <div
//               key={skill}
//               className="border-b border-white/[0.08] py-3 text-[15px] text-zinc-300"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* EDUCATION */}
//       <Section id="education" label="Education">
//         <div className="space-y-8">
//           <article>
//             <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-6">
//               <h2 className="text-lg">Portland State University</h2>
//               <p className="text-sm text-zinc-500">2011–2016</p>
//             </div>
//             <p className="mt-2 text-zinc-300">
//               B.A. Philosophy, departmental honors
//             </p>
//             <p className="mt-1 text-sm text-zinc-400">
//               Minor in History of Science
//             </p>
//           </article>
//         </div>
//       </Section>

//       {/* ARTS & COMMUNITY */}
//       <Section id="community" label="Arts & Community">
//         <div className="space-y-8">
//           <article>
//             <h2 className="text-lg">Regional Arts & Culture Council</h2>
//             <p className="mt-1 text-sm text-zinc-500">
//               Grant Panelist / Community Reviewer · 2020, 2022
//             </p>
//             <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
//               Evaluated arts funding proposals, including 170 time-sensitive
//               applications for pandemic relief in 2022 and 15 Portland Project
//               Grant applications in 2020.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-lg">Portland Butoh Festival</h2>
//             <p className="mt-1 text-sm text-zinc-500">
//               Performance Photographer · 2024, 2025
//             </p>
//             <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
//               Documented dance performances on 35mm black-and-white and
//               color-negative film.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-lg">Western States Center</h2>
//             <p className="mt-1 text-sm text-zinc-500">
//               Paid Fellow · 2022–2023
//             </p>
//           </article>

//           <article>
//             <h2 className="text-lg">STANСE Philosophy Journal</h2>
//             <p className="mt-1 text-sm text-zinc-500">
//               External Reviewer · 2017
//             </p>
//           </article>
//         </div>
//       </Section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
//         <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
//           <p className="text-sm text-zinc-500">
//             Gabriel Espinosa · Portland, Oregon
//           </p>
//           <Link
//             href="/"
//             className="text-sm text-zinc-400 transition-colors hover:text-white"
//           >
//             WinterBeast Studio →
//           </Link>
//         </div>
//       </footer>
//     </main>
//   );
// }




import Link from "next/link";

const experience = [
  {
    role: "Owner & House Audio Engineer",
    organization: "WinterBeast",
    location: "Portland, Oregon",
    dates: "2018–Present",
    description: [
      "Designed and built an independent recording studio, including acoustic treatment and sound isolation.",
      "Produce, record, edit, and mix albums for independent artists, adapting recording methods to each project's needs.",
      "Operate and troubleshoot microphones, analog signal chains, monitoring, and digital recording systems.",
      "Manage session preparation, scheduling, artist communication, file organization, and final delivery.",
    ],
  },
  {
    role: "Freelance Audio Engineer",
    organization: "Various Studios",
    location: "New York, California, Oregon & Montreal",
    dates: "2008–2014",
    description: [
      "Operated recording sessions in professional studio environments, setting up equipment, troubleshooting technical issues, and supporting creative collaboration.",
      "Worked at Headgear Recording, Rare Book Room, Avatar Studios, LoHo Recording, Mercy Sound Studios, Applehead Recording, Studios Piccolo, Hyde Street Studios, and The Map Room.",
      "Clients included Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
    ],
  },
  {
    role: "Audio Engineer",
    organization: "Outta Sight Outta Mind / Open Hearts Open Minds",
    location: "Portland, Oregon",
    dates: "2022–2024",
    description: [
      "Mixed more than 120 music projects through a community-based program serving incarcerated participants.",
      "Standardized file naming and digital archiving workflows.",
      "Supported live showcases with technical setup, stage coordination, and front-of-house sound mixing.",
    ],
  },
  {
    role: "Facilities & AV Support",
    organization: "Oregon Contemporary",
    location: "Portland, Oregon",
    dates: "2017–2018",
    description: [
      "Prepared and maintained gallery and event spaces, including cleaning, painting, and restoring exhibition areas.",
      "Assisted with installation and operation of stage, projection, lighting, and sound systems.",
      "Provided technical support to event organizers, attendees, and freelance technicians.",
    ],
  },
  {
    role: "Stagehand & AV Support",
    organization: "Portland Institute for Contemporary Art",
    location: "Portland, Oregon",
    dates: "2017",
    description: [
      "Supported Time-Based Art Festival events through technical setup, event logistics, and front-of-house mixing.",
      "Set up seating, sound systems, microphones, and instruments; recorded performances for archival and press use.",
    ],
  },
  {
    role: "Writing Tutor",
    organization: "Portland Community College",
    location: "Portland, Oregon",
    dates: "2018–2023",
    description: [
      "Supported students with research, argument development, drafting, revision, editing, and citation practices.",
      "Worked with both the Reading & Writing Center and TRIO Student Support Services, including students with varied learning and support needs.",
    ],
  },
  {
    role: "AV Technician",
    organization: "Portland Community College",
    location: "Portland, Oregon",
    dates: "2005–2006",
    description: [
      "Delivered, installed, tracked, and retrieved multimedia equipment for classrooms and events.",
      "Assisted faculty and students with equipment operation and troubleshooting.",
    ],
  },
];

const releasedCredits = [
  ["2026", "Hail", "Child of A Cursed Temple", "Production, Recording, Mixing"],
  ["2026", "Zothique", "Abominations of Yondo", "Drum Recording, Mixing"],
  ["2024", "Hail", "Transgression", "Production, Recording, Mixing"],
  ["2024", "Old Town Diamonds", "40 Miles", "Production, Recording, Mixing"],
  ["2023", "Hail", "We Are Nothing", "Production, Recording, Mixing"],
  ["2023", "Old Town Diamonds", "A Pale Horse", "Production, Recording, Mixing"],
  [
    "2023",
    "Hollow Senses",
    "Taurobolium",
    "Mixing, Noise/Synthesis Interlude Recording",
  ],
  ["2022", "Fliege", "The Invisible Seam", "Mixing, Vocal Recording"],
  ["2020", "The Kolotov Mocktails", "Ivy Hall", "Mixing"],
  ["2019", "L’Acephale", "L’Acephale", "Recording, Mixing"],
  ["2018", "Twin Perish", "Blue Pour", "Production, Recording, Mixing"],
  ["2016", "Bulldog Shadow", "24-Hour Drunk", "Production, Recording, Mixing"],
  [
    "2014",
    "Night Surgeon",
    "Gandola Crimewave",
    "Production, Recording, Mixing",
  ],
  ["2013", "Night Surgeon", "Self-Titled", "Production, Recording, Mixing"],
  ["2012", "Steelhymen", "0 || 0/0", "Recording, Mixing"],
  ["2011", "Blondie", "Panic of Girls", "Recording"],
  ["2011", "Shalants", "Self-Titled", "Recording, Mixing"],
  ["2011", "Night Surgeon", "Day for Night", "Production, Recording, Mixing"],
  ["2011", "Casey Spooner", "Adult Contemporary", "Recording"],
  ["2009", "Fischerspooner", "Entertainment", "Recording"],
  ["2008", "Mobile", "Tales from the City", "Recording"],
  ["2007", "Stab The Matador", "Doctor", "Recording"],
];

const pendingCredits = [
  {
    artist: "The Notnauts",
    project: "Title forthcoming",
    format: "Full-length LP",
  },
  {
    artist: "Refrigerated Nurses",
    project: "Title forthcoming",
    format: "Full-length LP",
  },
  {
    artist: "Entrain",
    project: "Title forthcoming",
    format: "Full-length LP",
  },
  {
    artist: "Mistons",
    project: "Return to Cinder",
    format: "Full-length LP",
  },
  {
    artist: "L’Acephale",
    project: "Eden!",
    format: "Full-length LP",
  },
  {
    artist: "Hellcows",
    project: "Two cover songs",
    format: "Singles",
  },
];

const technicalSkills = [
  "Audio recording & production",
  "Analog signal chains",
  "Microphone selection & placement",
  "Digital multitrack recording",
  "Editing, comping & punch-ins",
  "In-the-box mixing",
  "Live sound & FOH mixing",
  "AV setup & troubleshooting",
  "Session preparation & file management",
  "Equipment setup & maintenance",
  "Technical problem-solving",
  "Artist & client communication",
];

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <p className="text-[15px] uppercase tracking-[0.22em] text-zinc-400">
            {label}
          </p>
        </div>

        <div className="min-w-0 md:col-span-8 md:col-start-5">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-[#e6e6e6]">
      {/* HEADER */}
      <header className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-8 md:px-12 md:pb-24 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-white"
            >
              WinterBeast
            </Link>

            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              ← Back to studio
            </Link>
          </div> */}

          <div className="mt-24 max-w-3xl md:mt-32">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">
              Professional History & Recording Credits
            </p>

            <h1 className="mt-6 font-display text-4xl font-light tracking-wide md:text-6xl">
              Gabriel Espinosa
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Producer, recording engineer, and studio operator based in
              Portland, Oregon. Experience across independent record production,
              professional recording studios, live sound, and community-based
              music programs.
            </p>

            <nav
              aria-label="CV sections"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400"
            >
              <a
                href="#experience"
                className="transition-colors hover:text-white"
              >
                Experience ↓
              </a>
              <a
                href="#discography"
                className="transition-colors hover:text-white"
              >
                Discography ↓
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-white"
              >
                Technical Skills ↓
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* EXPERIENCE */}
      <Section id="experience" label="Experience">
        <div className="space-y-12">
          {experience.map((job) => (
            <article
              key={`${job.organization}-${job.dates}`}
              className="border-b border-white/10 pb-10 last:border-0 last:pb-0"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-6">
                <div>
                  <h2 className="text-base font-normal">{job.organization}</h2>
                  <p className="mt-1 text-[15px] text-zinc-300">{job.role}</p>
                </div>

                <p className="shrink-0 text-sm text-zinc-500">{job.dates}</p>
              </div>

              <p className="mt-2 text-sm text-zinc-500">{job.location}</p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-300 marker:text-zinc-600">
                {job.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* DISCOGRAPHY */}
      <Section id="discography" label="Selected Discography">
        <div className="mb-8">
          <h2 className="text-xl font-light">Released Work</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
            Production, recording, engineering, and mixing credits across
            independent and professional releases.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-y border-white/15 text-xs uppercase tracking-[0.14em] text-zinc-500">
                <th className="py-4 pr-4 font-normal">Year</th>
                <th className="py-4 pr-4 font-normal">Artist</th>
                <th className="py-4 pr-4 font-normal">Project</th>
                <th className="py-4 font-normal">Credit</th>
              </tr>
            </thead>

            <tbody>
              {releasedCredits.map(([year, artist, project, credit]) => (
                <tr
                  key={`${year}-${artist}-${project}`}
                  className="border-b border-white/[0.07] align-top"
                >
                  <td className="whitespace-nowrap py-4 pr-4 text-zinc-500">
                    {year}
                  </td>
                  <td className="py-4 pr-4 text-zinc-200">{artist}</td>
                  <td className="py-4 pr-4">{project}</td>
                  <td className="py-4 leading-relaxed text-zinc-400">
                    {credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UNRELEASED */}
        <div className="mt-20">
          <h2 className="text-xl font-light">Unreleased & In Progress</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
            Additional album and recording projects. Release details may change.
          </p>

          <div className="mt-6 border-t border-white/15">
            {pendingCredits.map((item) => (
              <article
                key={`${item.artist}-${item.project}`}
                className="grid grid-cols-1 gap-2 border-b border-white/[0.07] py-5 sm:grid-cols-12 sm:gap-6"
              >
                <div className="sm:col-span-4">
                  <h3 className="text-base">{item.artist}</h3>
                </div>

                <div className="sm:col-span-4">
                  <p className="text-[15px] text-zinc-300">{item.project}</p>
                </div>

                <div className="sm:col-span-4">
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {item.format}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            Credits for these projects: Production, Recording, Mixing. Hellcows
            compilation placement is tentative.
          </p>
        </div>
      </Section>

      {/* TECHNICAL SKILLS */}
      <Section id="skills" label="Technical Skills">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {technicalSkills.map((skill) => (
            <div
              key={skill}
              className="border-b border-white/[0.08] py-3 text-[15px] text-zinc-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" label="Education">
        <div className="space-y-8">
          <article>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-6">
              <h2 className="text-base">Portland State University</h2>
              <p className="text-sm text-zinc-500">2011–2016</p>
            </div>

            <p className="mt-2 text-[15px] text-zinc-300">
              B.A. Philosophy, departmental honors
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Minor in History of Science
            </p>
          </article>
        </div>
      </Section>

      {/* ARTS & COMMUNITY */}
      <Section id="community" label="Arts & Community">
        <div className="space-y-8">
          <article>
            <h2 className="text-base">Regional Arts & Culture Council</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Grant Panelist / Community Reviewer · 2020, 2022
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
              Evaluated arts funding proposals, including 170 time-sensitive
              applications for pandemic relief in 2022 and 15 Portland Project
              Grant applications in 2020.
            </p>
          </article>

          <article>
            <h2 className="text-base">Portland Butoh Festival</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Performance Photographer · 2024, 2025
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
              Documented dance performances on 35mm black-and-white and
              color-negative film.
            </p>
          </article>

          <article>
            <h2 className="text-base">Western States Center</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Paid Fellow · 2022–2023
            </p>
          </article>

          <article>
            <h2 className="text-base">STANСE Philosophy Journal</h2>
            <p className="mt-1 text-sm text-zinc-500">
              External Reviewer · 2017
            </p>
          </article>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">
            Gabriel Espinosa · Portland, Oregon
          </p>

          <Link
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            WinterBeast Studio →
          </Link>
        </div>
      </footer>
    </main>
  );
}
