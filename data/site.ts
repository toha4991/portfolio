/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * Structured content for the portfolio pages.
 */

export const site = {
  url: 'https://anton.dev',
  meta: {
    title: 'Anton Gordynski | DevOps Engineer',
    description:
      'DevOps portfolio focused on AWS, Kubernetes, Terraform, Ansible, GitLab CI/CD, automation, and production reliability.',
  },
  hero: {
    name: 'Anton Gordynski',
    role: 'DevOps Engineer',
    tagline:
      'I build and operate reliable AWS and Kubernetes infrastructure with Terraform, Ansible, Helm, GitLab CI/CD, and practical observability.',
    contact: 'Based in Krakow, Poland. Open to DevOps, platform, and SRE-focused engineering roles.',
    avatarSrc: '/images/anton-gordynski.jpg',
    avatarAlt: 'Anton Gordynski',
  },
  about: {
    paragraphs: [
      'I am a mid-level DevOps Engineer focused on AWS-based infrastructure, CI/CD automation, Kubernetes operations, and production reliability. My work combines infrastructure ownership, incident troubleshooting, and automation that reduces manual deployment effort.',
      'I like turning unclear operational paths into repeatable workflows: Terraform modules, Ansible playbooks, GitLab pipelines, Helm-based deployments, and runbooks that help teams ship with less friction.',
      {
        heading: 'Current focus areas',
        bullets: [
          'Operating AWS environments with services such as EKS, IAM, Route53, CloudWatch, S3, ACM, Secrets Manager, and load balancers',
          'Deploying and supporting Kubernetes workloads with Helm, ingress controllers, cert-manager, configuration management, and rollback-friendly pipelines',
          'Using Prometheus, Grafana, CloudWatch, ELK, and OpenSearch to investigate incidents, understand application behavior, and improve reliability',
          'Improving tenant provisioning, deployment documentation, and operational runbooks for multi-environment systems',
        ],
      },
      {
        heading: 'Core stack',
        techItems: [
          'AWS',
          'Kubernetes',
          'Terraform',
          'Ansible',
          'GitLab CI/CD',
          'Helm',
          'Docker',
          'Prometheus',
          'Grafana',
          'CloudWatch',
          'OpenSearch',
          'Python',
          'SQL',
          'Linux',
        ],
      },
    ],
  },
  experiences: [
    {
      period: 'Aug 2024 - present',
      title: 'DevOps Engineer',
      company: 'DataArt Sp. z o.o.',
      summary:
        'Owns and improves AWS-based infrastructure, deployment automation, and production operations for multi-environment systems.',
      highlights: [
        'Designed and improved GitLab CI/CD and GitOps deployment workflows for more reliable releases across teams',
        'Automated infrastructure provisioning and configuration with Terraform and Ansible to reduce manual effort and environment drift',
        'Supported Kubernetes and AWS production systems by troubleshooting incidents, reviewing logs, and identifying root causes',
        'Worked with monitoring and logging through CloudWatch, Prometheus, Grafana, ELK, and OpenSearch to resolve operational issues',
        'Led improvements to tenant provisioning, reducing setup time from about six months to about one and a half months through automation and process changes',
        'Acted as a team lead for 3 engineers and helped onboard 5+ engineers through documentation and knowledge transfer',
      ],
      tech: ['AWS', 'Kubernetes', 'Terraform', 'Ansible', 'GitLab CI/CD', 'Helm', 'CloudWatch'],
    },
    {
      period: 'Sept 2022 - Aug 2024',
      title: 'Technical Support Engineer',
      company: 'DataArt Krakow Sp. z o.o.',
      summary:
        'Provided Tier 2 technical support for complex customer and production issues, connecting support, engineering, and operational troubleshooting.',
      highlights: [
        'Investigated complex issues using application logs, code analysis, scripts, SQL queries, and cross-team collaboration',
        'Participated in support on-call duties, handling incidents reported through the on-call line alongside regular responsibilities',
        'Created and maintained documentation that improved knowledge sharing and reduced repeated investigation effort',
      ],
      tech: ['Linux', 'SQL', 'Python', 'JavaScript', 'Logs', 'Incident Support'],
    },
    {
      period: 'Mar 2020 - Aug 2022',
      title: 'Technical Support Specialist',
      company: 'GeeksForLess Inc.',
      summary:
        'Built a strong production-support foundation by resolving Tier 1 and Tier 2 customer issues across Salesforce, chat, and phone channels.',
      highlights: [
        'Handled both routine and complex customer issues while maintaining clear communication and escalation paths',
        'Developed practical troubleshooting habits that later transferred into DevOps and reliability engineering work',
      ],
      tech: ['Salesforce', 'Customer Support', 'Troubleshooting', 'Documentation'],
    },
  ],
  featuredProjects: [
    {
      title: 'Tenant Provisioning Automation',
      period: '2024 - 2026',
      summary:
        'Improved a slow, manual tenant setup process across several environments by turning repeatable operational work into documented automation.',
      solution:
        'Combined process review, Terraform and Ansible automation, GitLab deployment workflows, configuration management, and operational documentation to make provisioning more predictable.',
      impact:
        'Reduced setup time for a new tenant from roughly six months to three months, and later to around one and a half months.',
      image: '',
      imageAlt: '',
      repo: '',
      techCategories: [
        {
          category: 'Automation',
          items: ['Terraform', 'Ansible', 'GitLab CI/CD', 'Runbooks'],
        },
        {
          category: 'Operations',
          items: ['AWS', 'Multi-environment deployments', 'Configuration management', 'Tenant provisioning'],
        },
      ],
    },
    {
      title: 'Kubernetes Python/PostgreSQL App',
      period: 'Public lab project',
      summary:
        'Built a Kubernetes deployment for a containerized Python and PostgreSQL application to demonstrate application orchestration and environment configuration.',
      solution:
        'Defined Kubernetes manifests for application and database workloads, including configuration needed to run the services consistently in a cluster environment.',
      impact:
        'Shows practical Kubernetes deployment knowledge beyond listing tools: workloads, service configuration, database dependencies, and repeatable environment setup.',
      image: '',
      imageAlt: '',
      repo: 'https://github.com/toha4991/k8s-python-postgresql-app',
      techCategories: [
        {
          category: 'Platform',
          items: ['Kubernetes', 'Docker', 'PostgreSQL', 'Linux'],
        },
        {
          category: 'Delivery',
          items: ['Manifests', 'Configuration management', 'Deployment troubleshooting'],
        },
      ],
    },
    {
      title: 'AWS App Provisioning with Terraform and Ansible',
      period: 'Public lab project',
      summary:
        'Automated infrastructure provisioning and configuration for a Python/PostgreSQL demo application running on AWS.',
      solution:
        'Used Terraform and Ansible to make cloud resources and operational configuration repeatable instead of relying on manual setup steps.',
      impact:
        'Demonstrates the infrastructure-as-code habits used in production work: repeatability, remote-friendly provisioning, and clearer deployment handoff.',
      image: '',
      imageAlt: '',
      repo: 'https://github.com/toha4991/demo-app-provisioning',
      techCategories: [
        {
          category: 'Infrastructure',
          items: ['AWS', 'Terraform', 'Ansible', 'Remote state'],
        },
        {
          category: 'Application',
          items: ['Python', 'PostgreSQL', 'Docker', 'ECS on EC2'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'Project archive',
    description:
      'DevOps project archive covering Kubernetes, AWS provisioning, Terraform, Ansible, CI/CD automation, and operational scripts.',
    intro:
      'A concise archive of public lab projects and representative operational work. Public repositories are linked from the featured project cards where available.',
  },
  projectArchive: [
    {
      date: '2026',
      project: 'Tenant provisioning automation',
      role: 'DevOps / SRE',
      techStack: 'Terraform, Ansible, GitLab CI/CD, AWS, runbooks',
    },
    {
      date: '2026',
      project: 'Kubernetes Python/PostgreSQL app',
      role: 'DevOps',
      techStack: 'Kubernetes, Docker, PostgreSQL, manifests',
      repo: 'https://github.com/toha4991/k8s-python-postgresql-app',
    },
    {
      date: '2026',
      project: 'Kubernetes app provisioning',
      role: 'Infrastructure automation',
      techStack: 'Terraform, Ansible, Kubernetes, cloud prerequisites',
      repo: 'https://github.com/toha4991/k8s-app-provisioning',
    },
    {
      date: '2026',
      project: 'Demo app provisioning',
      role: 'Infrastructure automation',
      techStack: 'AWS, Terraform, Ansible, Docker',
      repo: 'https://github.com/toha4991/demo-app-provisioning',
    },
    {
      date: '2026',
      project: 'Python/PostgreSQL demo app',
      role: 'Cloud deployment',
      techStack: 'Python, PostgreSQL, Docker, AWS ECS',
      repo: 'https://github.com/toha4991/python-postgresql-demo-app',
    },
    {
      date: '2026',
      project: 'Operational scripts',
      role: 'Automation',
      techStack: 'Python, shell scripting, SQL, troubleshooting',
      repo: 'https://github.com/toha4991/my-scripts',
    },
  ],
  contact: {
    email: 'anton.gordynski@gmail.com',
    location: 'Krakow, Poland',
    github: 'https://github.com/toha4991',
    gitlab: 'https://gitlab.com/anton.gordynskii',
    linkedin: 'https://www.linkedin.com/in/anton-gordynski-206214130/',
    resume: '/resume.pdf',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];