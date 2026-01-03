export interface CareerSlide {
  description: {
    en: string;
    ru: string;
  };
  iconName: string;
  company?: {
    en: string;
    ru: string;
  };
  position?: {
    en: string;
    ru: string;
  };
  period?: string;
  skills?: string[];
}

export interface CareerGroup {
  name: {
    en: string;
    ru: string;
  };
  slides: CareerSlide[];
}

export const careerGroups: CareerGroup[] = [
  {
    name: {
      en: "Teaching",
      ru: "Преподавание"
    },
    slides: [
      {
        description: {
          en: 'Taught programming languages including Java, Python, and C.',
          ru: 'Преподавал языки программирования, включая Java, Python и C.'
        },
        iconName: 'mdi:teach',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Java', 'Python', 'C', 'Programming']
      },
      {
        description: {
          en: 'Developed personalized lesson plans to improve student skills.',
          ru: 'Разрабатывал персонализированные планы уроков для улучшения навыков студентов.'
        },
        iconName: 'mdi:book-open-page-variant',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Curriculum Design', 'Mentoring', 'Teaching']
      },
      {
        description: {
          en: 'Encouraged students to study by letting them teach back concepts.',
          ru: 'Мотивировал студентов учиться, позволяя им объяснять концепции другим.'
        },
        iconName: 'mdi:school',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Student Engagement', 'Mentoring', 'Teaching']
      },
    ]
  },
  {
    name: {
      en: "FarTech",
      ru: "FarTech"
    },
    slides: [
      {
        description: {
          en: 'Developed a chatbot using React, Twilio API, and Google Cloud.',
          ru: 'Разработал чат-бота с использованием React, Twilio API и Google Cloud.'
        },
        iconName: 'mdi:robot',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['React', 'Twilio API', 'Google Cloud']
      },
      {
        description: {
          en: 'Worked closely with clients to meet their requirements.',
          ru: 'Тесно сотрудничал с клиентами для удовлетворения их требований.'
        },
        iconName: 'mdi:account-group',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['Requirements Gathering', 'Client Communication']
      },
      {
        description: {
          en: 'Worked with Dialogflow, Flutter on AR navigation systems.',
          ru: 'Работал с Dialogflow, Flutter над AR навигационными системами.'
        },
        iconName: 'mdi:augmented-reality',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['Dialogflow', 'Flutter', 'AR Navigation']
      },
    ]
  },
  {
    name: {
      en: "Freelance",
      ru: "Фриланс"
    },
    slides: [
      {
        description: {
          en: 'Developed and maintained an admin dashboard for a clothing-selling application using Vue.js and Spring Boot.',
          ru: 'Разработал и поддерживал панель администратора для приложения по продаже одежды с использованием Vue.js и Spring Boot.'
        },
        iconName: 'mdi:vuejs',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: 'Sep 2024 - May 2025',
        skills: ['Vue.js', 'Spring Boot', 'Admin Dashboard']
      },
      {
        description: {
          en: 'Utilized Spring Boot for scalable and efficient backend infrastructure, handling product management, order tracking, and user roles.',
          ru: 'Использовал Spring Boot для масштабируемой и эффективной backend-инфраструктуры, обрабатывая управление продуктами, отслеживание заказов и роли пользователей.'
        },
        iconName: 'mdi:server',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: 'Sep 2024 - May 2025',
        skills: ['Spring Boot', 'Backend Infrastructure', 'Product Management', 'Order Tracking']
      },
      {
        description: {
          en: 'Designed a responsive and user-friendly interface using Vue.js, ensuring seamless navigation and data visualization.',
          ru: 'Спроектировал адаптивный и удобный интерфейс с использованием Vue.js, обеспечивая плавную навигацию и визуализацию данных.'
        },
        iconName: 'mdi:monitor-dashboard',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: 'Sep 2024 - May 2025',
        skills: ['Vue.js', 'Responsive Design', 'Data Visualization', 'UI/UX']
      },
      {
        description: {
          en: 'Built a static website using React, Vite, and CSS, optimizing performance and maintaining a clean UI/UX.',
          ru: 'Создал статический веб-сайт с использованием React, Vite и CSS, оптимизируя производительность и поддерживая чистый UI/UX.'
        },
        iconName: 'mdi:react',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: 'Sep 2024 - May 2025',
        skills: ['React', 'Vite', 'CSS', 'Performance Optimization']
      },
    ]
  },
  {
    name: {
      en: "Inform Medical",
      ru: "Inform Medical"
    },
    slides: [
      {
        description: {
          en: 'Developed responsive websites using React 19, Next.js 16, TypeScript, and TailwindCSS 4 to enhance user experience.',
          ru: 'Разработал адаптивные веб-сайты с использованием React 19, Next.js 16, TypeScript и TailwindCSS 4 для улучшения пользовательского опыта.'
        },
        iconName: 'mdi:react',
        company: {
          en: 'Inform Medical',
          ru: 'Inform Medical'
        },
        position: {
          en: 'Frontend Developer',
          ru: 'Frontend-разработчик'
        },
        period: 'May 2025 - Present',
        skills: ['React 19', 'Next.js 16', 'TypeScript', 'TailwindCSS 4']
      },
      {
        description: {
          en: 'Collaborated with cross-functional teams to create practical interfaces that prioritize usability.',
          ru: 'Сотрудничал с кросс-функциональными командами для создания практичных интерфейсов с акцентом на удобство использования.'
        },
        iconName: 'mdi:account-group',
        company: {
          en: 'Inform Medical',
          ru: 'Inform Medical'
        },
        position: {
          en: 'Frontend Developer',
          ru: 'Frontend-разработчик'
        },
        period: 'May 2025 - Present',
        skills: ['Cross-functional Collaboration', 'UI/UX Design', 'Usability']
      },
      {
        description: {
          en: 'Implemented best practices in frontend development to ensure seamless functionality and performance.',
          ru: 'Внедрил лучшие практики frontend-разработки для обеспечения безупречной функциональности и производительности.'
        },
        iconName: 'mdi:speedometer',
        company: {
          en: 'Inform Medical',
          ru: 'Inform Medical'
        },
        position: {
          en: 'Frontend Developer',
          ru: 'Frontend-разработчик'
        },
        period: 'May 2025 - Present',
        skills: ['Frontend Best Practices', 'Performance Optimization', 'Code Quality']
      },
    ]
  },
];

export default careerGroups;