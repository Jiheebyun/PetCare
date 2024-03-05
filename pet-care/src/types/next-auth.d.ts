// next-auth.d.ts

declare module "next-auth" {
    interface MyNextAuthOptions {
        pages?: {
            // 페이지 설정...
          };
          providers?: any[]; // 적절한 타입을 제공해야 합니다.
      session?: {
        jwt?: boolean;
        maxAge?: number;
        // 다른 세션 설정 옵션들...
      };
      jwt?: {
        // jwt 설정 옵션들...
      };
      callbacks?: {
        // 콜백 함수 정의...
      };
    }
  
    export default function NextAuth(options: MyNextAuthOptions): any;
  }