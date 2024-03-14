import { isPageStatic } from 'next/dist/build/utils';
import { Modern_Antiqua } from 'next/font/google';

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized: true,
    },
    basePath: isProd ? '/colorapp':'',    
    assetPrefix: isProd ? '/colorapp/' :'',
};



export default nextConfig;