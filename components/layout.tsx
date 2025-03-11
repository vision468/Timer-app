import * as React from 'react';
const Layout:React.FC<{children: React.ReactNode}> = (props) => {
    const {children} = props;
    return (
        <>
            <div className=' w-screen min-h-screen flex flex-col custom-bg bg-cover bg-fixed bg-bottom'>
                <main className='flex-grow flex flex-col'>
                    {children}
                </main>
            </div>
        </>
    )
}
export default Layout;