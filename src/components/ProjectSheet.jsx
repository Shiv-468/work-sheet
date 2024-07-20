import React, { useState, useEffect } from 'react';
import Icons from './icons';
import Profile from '../assets/images/webp/Profile.webp'
import JanuaryData from './JanuaryData';
import MarchData from './MarchData';
import AprilData from './AprilData'
import MayData from './MayData';
import FebruaryData from './FebruaryData';
import JuneData from './JuneData';
import JulyData from './JulyData';
import Downchevron from '../assets/images/webp/down-chevron-svgrepo-com.svg'
import OctoberData from './OctoberData';
import NovemberData from './NovemberData';
import DecemberData from './DecemberData';

const projectsByMonth = {
  2024: {
    January2024: <JanuaryData year={2024} />,
    February2024: <FebruaryData year={2024} />,
    March2024: <MarchData year={2024} />,
    April2024: <AprilData year={2024} />,
    May2024: <MayData year ={2024} />,
    June2024: <JuneData year={2024} />,
    July2024: <JulyData year={2024} />,
  },
  2023: {
    October2023: <OctoberData year={2023}/>,
    November2023:<NovemberData year={2023}/>,
    December2023:<DecemberData year={2023}/>,
  }
};

const ProjectSheet = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const years = Array.from({ length: 10 }, (_, i) => 2024 - i);
    const [activeTab, setActiveTab] = useState(getCurrentMonthTab(2024));
    const [noDataAvailable, setNoDataAvailable] = useState(false);

    useEffect(() => {
        if (!(projectsByMonth[selectedYear])) {
            setNoDataAvailable(true);
            setActiveTab(null);
        } else {
            setNoDataAvailable(false);
            if (selectedYear === new Date().getFullYear()) {
                setActiveTab(getCurrentMonthTab(selectedYear));
            } else {
                setActiveTab(`January${selectedYear}`);
            }
        }
    }, [selectedYear]);

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setDropdownOpen(false);
    };

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let tabs;
    if (noDataAvailable) {
        tabs = [];
    } else if (selectedYear === currentYear) {
        tabs = monthNames.slice(0, currentMonth).map((monthName) => {
            const tabId = `${monthName}${selectedYear}`;
            return {
                id: tabId,
                label: monthName,
                content: (projectsByMonth[selectedYear] && projectsByMonth[selectedYear][tabId]) || <p className='font-Grandstander text-4xl font-semibold capitalize'>No projects for this month.</p>,
            };
        });
    } else {
        tabs = monthNames.map((monthName) => {
            const tabId = `${monthName}${selectedYear}`;
            return {
                id: tabId,
                label: monthName,
                content: (projectsByMonth[selectedYear] && projectsByMonth[selectedYear][tabId]) || <p className='font-Grandstander text-4xl font-semibold capitalize'>No projects for this month.</p>,
            };
        });
    }

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section>
            <div className="p-4 shadow-LinkBox">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex justify-between items-center">
                        <Icons icon="Logo" />
                        <div className="flex items-center gap-2 sm:gap-3">
                            <h1 className='font-Grandstander font-bold text-xl sm:text-3xl pt-[6px]'>Shiv-468</h1>
                            <img src={Profile} className='rounded-full w-[40px] h-[40px]' alt="profileimg" />
                        </div>
                        <div className="relative">
                            <button
                                className="flex items-center justify-center shadow-LinkBox rounded-[8px] px-4 py-1 gap-2 text-lg font-Grandstander font-bold"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className='pt-1'>{selectedYear}</span>
                                <img src={Downchevron} alt="Downchevron" className='w-[20px]' />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-LinkBox">
                                    <ul>
                                        {years.map((year) => (
                                            <li key={year}>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-lg font-Grandstander font-bold text-center hover:text-[#5928E5]"
                                                    onClick={() => handleYearSelect(year)}
                                                >
                                                    {year}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {noDataAvailable ? (
                <p className='text-4xl font-Grandstander font-bold text-center pt-24 capitalize'>No data available for {selectedYear}</p>
            ) : (
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex lg:flex-col overflow-x-scroll gap-6 lg:max-w-[200px] link_scroll w-full items-center pe-6 pb-6 mt-6 lg:border-r-[4px] lg:border-[#7a7676]">
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
                        <div className="flex items-center flex-col gap-6 pt-1 w-full px-4 lg:px-6 pb-6 overflow-y-scroll h-[70vh] lg:h-[85vh] mt-6 link_scroll ">
                            {noDataAvailable ? (
                                <p className='text-3xl font-Grandstander font-bold'>No data available for {selectedYear}</p>
                            ) : (
                                tabs.map((tab) => (
                                    activeTab === tab.id && tab.content
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const getCurrentMonthTab = (year) => {
    const month = new Date().getMonth() + 1;
    const monthName = getMonthName(month);
    const currentYear = new Date().getFullYear();
    return year === currentYear ? `${monthName}${year}` : `January${year}`;
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
