import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Aditya',
    lastName: 'Pandya',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Developer',
    avatar: '/images/avatar.jpg',
    location: 'Asia/Calcutta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/laZZySpiDer',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/pandya-aditya/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/AdityaPandya13',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:adityapandya7001@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>A World Built in Code</>,
    subline: <>I'm Aditya, a software developer at <InlineCode>Citi</InlineCode>, where I create intuitive<br /> user interfaces & experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/aditya-pandya/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>A Full Stack Developer who specializes in Javascript Technologies across the whole stack (NodeJs, Express, Angular). Experienced in containerizing the application using Docker and deploying on Kubernetes.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Citi',
                timeframe: '2022 - Present',
                role: 'Apps Dev Intmd Programmer Analyst',
                achievements: [
                    <>Enabled Micro-Frontend architecture for Angular applications using Module
                        Federation, improving modularity and scalability by 30%. </>,
                    <>Bootstrapped Host & Shell applications for Micro-Frontend integration, which
                        enhanced application performance and reduced load times by 20%. </>,
                    <>Developed 10+ reusable libraries and components, increasing code efficiency
                        and reducing redundancy across applications by 25%. </>

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Quantiphi',
                timeframe: '2021 - 2022',
                role: 'Full-stack Developer',
                achievements: [
                    <>Developed REST APIs using Node & Express, integrating AWS Services like
                        DynamoDB and SQS, which improved data processing efficiency by 20%. </>,
                    <>Built 15+ reusable Angular Components, Pipes, and services, enhancing code
                        reusability and reducing development time by 30%. </>
                ],
                images: []
            },
            {
                company: 'Digitate - TCS',
                timeframe: '2019 - 2021',
                role: 'Frontend Developer & DevOps Engineer',
                achievements: [
                    <>Designed and developed key features of an Automation Testing Suite,
                        significantly enhancing its functionality. Actively enabled Kubernetes integration,
                        improving scalability and deployment efficiency. </>,
                    <>Improved UI responsiveness by 40% and introduced SCSS, which enhanced the
                        maintainability of the codebase.  </>,
                    <>Implemented animated graph components using D3.js, which improved data
                        visualization and user engagement by 15%</>,
                    <>Containerized 5+ components and created corresponding K8s components,
                        improving deployment speed by 35%. </>,
                    <>Architected and implemented a robust K8s solution, integrating AGIC, RabbitMQ,
                        Postgres, and Container Registry, which reduced deployment errors by 40%. </>


                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Gujarat Technological University',
                description: <>Studied software engineering.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Angular',
                description: <>Working on MFE.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-02.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Javascript',
                description: <>Building next gen apps with Angular + Node + Supabase.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };