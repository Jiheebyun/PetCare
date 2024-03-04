


import classes from './layout.module.css';
import MainNavBar from "../_components/navBar/NavBar";





export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div >
                <div >
                
                    <div>
                      {children}
                    </div>
                </div>
            </div>
            
        </>
        
    );
  }