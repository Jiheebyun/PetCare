// "use server";

// import {redirect} from "next/navigation";
// import {signIn} from "@/auth";

// export default async (prevState: any, formData: FormData) => {
//   if (!formData.get('email') || !(formData.get('id') as string)?.trim()) {
//     return { message: 'no_email' };
//   }
//   if (!formData.get('password') || !(formData.get('name') as string)?.trim()) {
//     return { message: 'no_password' };
//   }
  
//   let shouldRedirect = false;
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
//       method: 'post',
//       body: formData,
//       credentials: 'include',
//     })
//     console.log(response.status);
//     if (response.status === 403) {
//       return { message: 'user_exists' };
//     }
//     console.log(await response.json())
//     shouldRedirect = true;
//     await signIn("credentials", {
//       username: formData.get('id'),
//       password: formData.get('password'),
//       redirect: false,
//     })
//   } catch (err) {
//     console.error(err);
//     return;
//   }

//   if (shouldRedirect) {
//     redirect('/home'); // try/catch문 안에서 X
//   }
// }