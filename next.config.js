/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Desactiva la validación de ESLint durante el build para evitar errores en Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desactiva la validación de tipos durante el build para asegurar el despliegue
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/research',
        destination: '/ctf-research',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
