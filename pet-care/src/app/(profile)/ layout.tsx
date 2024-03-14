



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