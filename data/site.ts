/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * Structured content for the portfolio pages.
 */

export const site = {
  url: 'https://toha4991.github.io',
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
      'I am a DevOps Engineer focused on building and operating reliable cloud infrastructure, automating delivery workflows, and improving how applications are deployed and supported in production.',
      'My work spans cloud infrastructure, Kubernetes operations, CI/CD, observability, and incident troubleshooting. I particularly enjoy turning manual or unclear operational processes into repeatable automation: whether that is a Terraform module, an Ansible playbook, a deployment pipeline, or a runbook that helps teams release safely with less manual work and makes the next incident easier to resolve.',
      {
        heading: 'Cloud platforms',
        bullets: [
          {
            label: 'AWS:',
            text: 'EKS, IAM, CloudWatch, S3, ACM, Secrets Manager, and load balancing',
          },
          {
            label: 'GCP:',
            text: 'GKE, Cloud Storage, Cloud Monitoring, IAM, Secret Manager, and Cloud Load Balancing',
          },
        ],
      },
      {
        heading: 'Current focus areas',
        bullets: [
          'Deploying and operating Kubernetes workloads using Helm, ingress controllers, cert-manager, configuration management, and rollback-friendly delivery pipelines',
          'Troubleshooting production systems using Prometheus, Grafana, CloudWatch, ELK, and OpenSearch to understand application behavior and improve reliability',
          'Automating infrastructure provisioning and application delivery with Terraform, Ansible, GitLab CI/CD, and supporting tooling',
          'Improving operational processes, deployment documentation, and runbooks for multi-environment systems',
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
      repo: 'https://gitlab.com/anton.gordynskii/k8s-python-postgresql-app',
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
      repo: 'https://gitlab.com/anton.gordynskii/demo-app-provisioning',
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
      project: 'Kubernetes Python/PostgreSQL app',
      role: 'DevOps',
      techStack: 'Kubernetes, Docker, PostgreSQL, manifests',
      repo: 'https://gitlab.com/anton.gordynskii/k8s-python-postgresql-app',
    },
    {
      date: '2026',
      project: 'Kubernetes app provisioning',
      role: 'Infrastructure automation',
      techStack: 'Terraform, Ansible, Kubernetes, cloud prerequisites',
      repo: 'https://gitlab.com/anton.gordynskii/k8s-app-provisioning',
    },
    {
      date: '2026',
      project: 'Demo app provisioning',
      role: 'Infrastructure automation',
      techStack: 'AWS, Terraform, Ansible, Docker',
      repo: 'https://gitlab.com/anton.gordynskii/demo-app-provisioning',
    },
    {
      date: '2026',
      project: 'Python/PostgreSQL demo app',
      role: 'Cloud deployment',
      techStack: 'Python, PostgreSQL, Docker, AWS ECS',
      repo: 'https://gitlab.com/anton.gordynskii/python-postgresql-demo-app',
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