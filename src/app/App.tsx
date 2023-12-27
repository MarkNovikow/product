
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {Suspense, useState} from 'react'
import Modal from "shared/ui/Modal/Modal";

const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { theme } = useTheme()
    return (
    
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                <button onClick={() => setIsOpen(true)}> toggle </button>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
