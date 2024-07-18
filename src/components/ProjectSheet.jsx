import React, { useState } from 'react';
import Icons from './icon';
import Profile from '../assets/images/webp/Profile.jpg'
import JanuaryData from './JanuaryData';
import MarchData from './MarchData';
import AprilData from './AprilData'
import MayData from './MayData';
import FebruaryData from './FebruaryData';
import JuneData from './JuneData';
import JulyData from './JulyData';

const projectsByMonth = {
    January2024: <JanuaryData />,
    February2024: <FebruaryData />,
    March2024: <MarchData />,
    April2024: <AprilData />,
    May2024: <MayData />,
    June2024: <JuneData />,
    July2024: <JulyData />
};

const ProjectSheet = () => {
    const [activeTab, setActiveTab] = useState(getCurrentMonth());
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const tabs = monthNames.slice(0, currentMonth).map((monthName) => {
        const tabId = `${monthName}${currentYear}`;
        return {
            id: tabId,
            label: monthName,
            content: projectsByMonth[tabId] || <p>No projects for this month.</p>,
        };
    });
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section >
            <div className=" p-4  shadow-LinkBox">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex justify-between items-center">
                        <Icons icon="Logo" />
                        <div className=" flex items-center gap-3 ">
                            <h1 className=' font-Grandstander font-bold text-3xl pt-[6px]'>Shiv-468</h1>
                            <img src={Profile} className=' rounded-full w-[40px] h-[40px]' alt="profileimg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] mx-auto px-3 ">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex lg:flex-col overflow-x-scroll gap-10 lg:max-w-[200px] link_scroll w-full items-center pe-6 pb-6 mt-6 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`lg:px-3 py-3 text-lg px-8 font-semibold border rounded-[5px] max-w-[200px] w-full ${activeTab === tab.id ? 'bg-[#5928E5] text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center flex-col gap-6 w-full px-4 lg:px-6 pb-6 overflow-y-scroll h-[70vh] lg:h-[85vh] mt-6 link_scroll border-l-[4px] border-[#7a7676">
                        {tabs.map((tab) => (
                            activeTab === tab.id && tab.content
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    const monthName = getMonthName(month);
    const currentYear = new Date().getFullYear();
    return `${monthName}${currentYear}`;
};

const getMonthName = (month) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return monthNames[month - 1];
};

export default ProjectSheet;
