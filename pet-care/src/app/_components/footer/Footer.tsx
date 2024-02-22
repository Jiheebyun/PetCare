

import React from 'react';
import classes from './Footer.module.css';


export default function Footer (){
    return(
        <>
            <div className={classes.footerDark}>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className={classes.developerInfoContainer}>
                                <div>
                                    <h3>Jihee.B</h3>
                                    <h5>Front-End Developer</h5>
                                    <div className={classes.stackImgContainer}>
                                        <div className={classes.stackContainer}>
                                            🔨 Skill Stacks 🔨 <br/>
                                            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/NextJs-brown?logo=Next.js&logoColor=white&logoWidth=20"/>
                                        </div>
                                        <div className={classes.stackContainer}>
                                            🖥️ OS 🖥️<br/>    
                                            <img src="https://img.shields.io/badge/Linux Server-FCC624?style=flat&logo=Linux&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=Ubuntu&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/CentOS-262577?style=flat&logo=CentOS&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/Windows Server-0078D6?style=flat&logo=Windows&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/macOS-000000?style=flat&logo=macOS&logoColor=10100F"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>Jihye.Y</h3>
                                    <h5>Front-End Developer</h5>
                                    <div className={classes.stackImgContainer}>
                                        <div className={classes.stackContainer}>
                                            🔨 Skill Stacks 🔨 <br/>
                                            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=10100F"/> 
                                            <br/>
                                            <img src="https://img.shields.io/badge/NextJs-brown?logo=Next.js&logoColor=white&logoWidth=20"/>
                                        </div>
                                        <div className={classes.stackContainer}>
                                            🖥️ OS 🖥️<br/>    
                                            <img src="https://img.shields.io/badge/Linux Server-FCC624?style=flat&logo=Linux&logoColor=10100F"/> 
                                            <img src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=Windows&logoColor=10100F"/>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.introContainer}>
                                <h3>PetCare</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                <p className="copyright">PetCare © 2024</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )

}