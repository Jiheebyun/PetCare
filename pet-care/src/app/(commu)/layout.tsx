

import CommuMain from "./commu/page";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommuMain></CommuMain>
  );
}