import React from 'react'
import { Briefcase } from 'lucide-react'

// Define the shape of each experience item
type ExperienceItem = {
  id: number
  role: string
  company: string
  startDate: string
  endDate?: string
  description: string[]
}

// Dynamic experiences data; add more entries as needed
const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Developer',
    company: 'Printeaze',
    startDate: 'March 2025',
    endDate: 'Present',
    description: [
      'Co‑founded Printeaze, a campus startup solving on‑demand printing needs.',
      'Built core frontend and backend features using Next.js, TypeScript, and Node.js.',
      'Implemented user authentication, order flow, and real‑time print status updates.',
    ],
  },
]

type ExperienceProps = ExperienceItem[]

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section id="experience" className="py-12 bg-white dark:bg-gray-900">
      <div className="app-container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-12 md:pl-16 lg:pl-20"
            >
              <Briefcase
                className="absolute left-0 top-0 bg-white text-blue-400 rounded-full p-1"
                size={24}
              />

              <h3 className="text-xl font-semibold">
                {exp.role}{' '}
                <span className="text-blue-400">@ {exp.company}</span>
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {exp.startDate} – {exp.endDate}
              </p>

              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
