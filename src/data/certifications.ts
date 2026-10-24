import type { ImageMetadata } from 'astro';
import pageServerImg from '../assets/page_server.png';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl?: ImageMetadata;
  badgeHtml?: string;
  url: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-hubspot',
    name: 'Software de ventas de HubSpot',
    issuer: 'HubSpot Academy',
    date: '2025-02-10',
    badgeHtml: `<img src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/452fbce214ed4bfa8583dc8f3d693d57.png" class="w-20 h-20 object-contain drop-shadow-md" />`,
    url: 'https://app.hubspot.com/academy/achievements/g38lctm5/es/1/andrew-jose-licona-blanco/software-de-ventas-de-hubspot',
    credentialId: 'g38lctm5',
  },
  {
    id: 'cert-1',
    name: 'Linux Professional Institute Certified',
    issuer: 'Linux Professional Institute',
    date: '2025-01-15',
    imageUrl: pageServerImg,
    url: 'https://www.lpi.org/',
    credentialId: 'LPI-000123456',
  },
  {
    id: 'cert-2',
    name: 'Docker & Kubernetes Fundamentals',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024-11-20',
    imageUrl: pageServerImg,
    url: 'https://www.cncf.io/',
    credentialId: 'CNCF-987654',
  },
  {
    id: 'cert-3',
    name: 'Advanced TypeScript Developer',
    issuer: 'Frontend Masters',
    date: '2024-08-10',
    imageUrl: pageServerImg,
    url: 'https://frontendmasters.com',
    credentialId: 'FEM-554433',
  },
    {
    id: 'cert-3',
    name: 'Advanced TypeScript Developer',
    issuer: 'Frontend Masters',
    date: '2024-08-10',
    imageUrl: pageServerImg,
    url: 'https://frontendmasters.com',
    credentialId: 'FEM-554433',
  },
];
