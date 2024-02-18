import MainNavBar from "../_components/navBar/NavBar";





export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            {children}
        </>
        
    );
  }