import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Homepage from '../Homepage/Homepage';

const AppRouter = () => {
    return (
        <Router>
            <div className='flex'>
                <div className="w-[20%] border border-l-slate-500 pl-10">
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
export default AppRouter;
