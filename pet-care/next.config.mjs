/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.youtube.com'],
    },
  };
  
  export default nextConfig;

// next/image 컴포넌트를 사용하여 외부 호스트에서 이미지를 로드하려면 
// next.config.js 파일을 image 속성에 유투브 호스트를 추가해야한다.