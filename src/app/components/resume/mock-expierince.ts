import { ResumeExperience } from './resume';

export const EXPERIENCE: ResumeExperience[] = [
  {
    from: new Date(),
    to: new Date(),
    company: 'moguru',
    companyLocation: 'Darmstadt',
    position: 'Web Developer',
    tasks: [
      'programmieren von webanwendungen',
      'lorem ipsum loorem',
      'anwendung mit angular und react',
    ],
  },
  {
    from: new Date(),
    to: new Date(),
    company: 'INFOMOTION',
    companyLocation: 'Frankfurt',
    position: 'Web Developer',
    tasks: [
      'Konzeptionierung eines News Bereichs',
      'Implementierung der CRUD Funktionen',
      'Stylen der Compnenten mit SCSS',
    ],
  },
];
