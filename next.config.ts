import type { NextConfig } from 'next';
const nextConfig:NextConfig={devIndicators:false,outputFileTracingIncludes:{'/api/media/[name]':['./private/**/*']}};
export default nextConfig;
