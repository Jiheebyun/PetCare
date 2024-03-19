

import MainNavBar from "../_components/navBar/NavBar";
import classes from "./layout.module.css";




export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          <div className={classes.userGlobalWrapper}>
              <div className={classes.userGlobalContainer}>
                  <MainNavBar></MainNavBar>
                  <div>
                    {children}
                  </div>
              </div>
          </div>
          
      </>
      
  );
}