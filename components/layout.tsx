import * as React from 'react';
import Header from "./header";
import Footer from "./footer";
const Layout:React.FC<{children: React.ReactNode}> = (props) => {
    const {children} = props;
    return (
        <>
            <div className=' w-screen min-h-screen flex flex-col'>
                <Header /> 
                <main className='flex-grow flex flex-col'>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Layout;