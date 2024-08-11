/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
   
        compiler: {
          // Enables the styled-components SWC transform
          styledComponents: true
        }
      
};


export default nextConfig;
