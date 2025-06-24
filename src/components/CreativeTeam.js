import React from "react";
import Header from "../partials/Header";

const CreativeTeam = () => {
  return (
    <>
      <Header />
      <div style={{ height: '6rem' }} />
      <div className="bg-gradient-to-r from-[#e0f7ff] via-[#f0e9ff] to-[#e0f7ff] min-h-screen flex items-center justify-center p-6">
        <div
          className="relative rounded-[40px] overflow-hidden"
          style={{ width: 1472, height: 540 }}
        >
          <img
            alt="Two men wearing VR headsets in a futuristic tunnel with blue lighting"
            className="w-full h-full object-cover rounded-[1.5rem]"
            height="540"
            src="https://storage.googleapis.com/a1aa/image/0e692277-3ada-4b9d-e3e2-3761f213b7ca.jpg"
            width="1472"
          />
          <h1
            className="absolute inset-0 flex items-center justify-center text-white text-[3.5rem] font-sans font-normal"
            style={{ lineHeight: 1 }}
          >
            / Creative team /
          </h1>
          <div
            className="absolute bottom-0 left-0 bg-white text-[0.75rem] font-sans text-black rounded-tl-[1.5rem] rounded-br-[1.5rem] px-6 py-3 flex items-center space-x-1 shadow"
            style={{ width: 180 }}
          >
            <a className="underline font-semibold" href="#">
              Home
            </a>
            <span> / </span>
            <span>Creative team</span>
          </div>
        </div>
      </div>
      {/* BẮT ĐẦU PHẦN NỘI DUNG CHUYỂN TỪ HTML */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tiêu đề team và số lượng thành viên */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <span className="block text-base font-medium text-gray-700 mb-2">[ team ]</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              The Neural Network experts:<br />uniting talent for intelligent solutions
            </h2>
          </div>
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <div className="text-[90px] md:text-[120px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text leading-none" style={{WebkitTextStroke: '2px #b3b3ff'}}>
              250+
            </div>
            <div className="text-xl font-medium text-black mt-2">Awesome team members</div>
          </div>
        </div>
        {/* Card team sole: 3 trên trái, 3 dưới phải */}
        <div className="flex flex-col gap-10">
          {/* Hàng trên: 3 card trái */}
          <div className="flex flex-row justify-start gap-8 md:gap-10">
            {/* Card 1 */}
            <a href="/team/alan-begham" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a bearded man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/ac30d169-6aa9-4659-ccda-1ee61f8bb4a1.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                  <p className="text-xs text-gray-400 italic">/ CEO Aiero /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Neural</span>
                </div>
              </article>
            </a>
            {/* Card 2 */}
            <a href="/team/arthur-dowson" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a smiling man wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/36c7bc5f-1f62-4294-0a9e-b596dd8d24bb.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Arthur Dowson</h3>
                  <p className="text-xs text-gray-400 italic">/ AI Programmer /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Solution</span>
                </div>
              </article>
            </a>
            {/* Card 3 */}
            <a href="/team/dan-smith" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Dan Smith</h3>
                  <p className="text-xs text-gray-400 italic">/ Manager /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Future</span>
                </div>
              </article>
            </a>
          </div>
          {/* Hàng dưới: 3 card phải */}
          <div className="flex flex-row justify-end gap-8 md:gap-10">
            {/* Card 4 */}
            <a href="/team/brandon-adams" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none ml-[236px] md:ml-[240px] lg:ml-[240px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/435c514d-06a3-4f46-58e8-bebc51b9195e.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Brandon Adams</h3>
                  <p className="text-xs text-gray-400 italic">/ HR Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Digital</span>
                </div>
              </article>
            </a>
            {/* Card 5 */}
            <a href="/team/alan-begham-neuro" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                  <p className="text-xs text-gray-400 italic">/ CEO Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Learning</span>
                </div>
              </article>
            </a>
            {/* Card 6 */}
            <a href="/team/tim-bearton" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a cheerful man with dark hair, wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z"/></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5"/>
                      <circle cx="6" cy="12" r="2.5"/>
                      <circle cx="18" cy="19" r="2.5"/>
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Tim Bearton</h3>
                  <p className="text-xs text-gray-400 italic">/ HR Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{writingMode:'vertical-rl',textOrientation:'mixed',fontWeight:700,color:'rgba(31,41,55,0.7)',fontSize:'1.75rem',userSelect:'none',lineHeight:1}}>Ideas</span>
                </div>
              </article>
            </a>
          </div>
        </div>
      </div>

      {/* PHẦN TESTIMONIALS ĐẸP NHƯ HTML ĐÍNH KÈM */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-8 rounded-2xl overflow-hidden mt-12">
        {/* Left panel */}
        <div className="bg-[#191919] flex flex-col justify-center p-12 md:p-16 rounded-2xl md:w-7/12 relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Nền lõm trắng cho mũi tên testimonial */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20 flex flex-col items-center">
            <div className="w-[176px] h-[60px] bg-white rounded-t-[2rem] rounded-b-[2rem] flex items-start justify-center pt-2">
              <div className="flex gap-12 items-start w-full justify-center">
                <span className="text-2xl text-black select-none flex items-center justify-center">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                </span>
                <span className="text-2xl text-black select-none flex items-center justify-center">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </div>
          {/* End nền lõm trắng và mũi tên testimonial */}
          <div className="flex items-center mb-6">
            <span className="inline-block bg-[#393b40] text-white text-lg font-bold rounded px-4 py-2">❝</span>
          </div>
          <p className="text-white text-xl md:text-2xl leading-relaxed max-w-[700px]">
            Working with Aiero has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease. We couldn't be happier with the results."
          </p>
        </div>
        {/* Right panel */}
        <div className="md:w-5/12 rounded-2xl overflow-hidden relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]" style={{background:'linear-gradient(120deg, #2e3192 0%, #1bffff 100%)'}}>
          <div className="absolute inset-0 w-full h-full" style={{backgroundImage:'url(https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2025/02/section-bg.svg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.7}}></div>
          <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
            <div>
              <span className="text-xs mb-2 opacity-80 block">[ testimonials ]</span>
              <h2 className="text-3xl md:text-4xl font-semibold max-w-[400px] mb-12">Discover what our clients have to say about our AI solutions</h2>
            </div>
            <div className="mt-auto max-w-[180px]">
              <h3 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-transparent" style={{WebkitTextStroke: '2px white'}}>250+</h3>
              <p className="text-base font-semibold mt-1">Happy clients</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section cuối: Banner giới thiệu neural network */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-white via-[#f6faff] to-[#eaf6ff] py-20 px-4 md:px-0 mt-20 relative overflow-hidden">
        {/* Pattern X bên trái */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 pl-8 relative z-10">
          <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <g transform="translate(0,0)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(100,0)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(200,0)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(300,0)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(0,100)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(100,100)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(200,100)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(300,100)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(0,200)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(100,200)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(200,200)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(300,200)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(0,300)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(100,300)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(200,300)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
              <g transform="translate(300,300)"><path d="M10 10L90 90M90 10L10 90" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/></g>
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3ed6e6"/>
                <stop offset="1" stopColor="#b39ddb"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Text bên phải */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black mb-8 text-center md:text-left">
            Tinker with a <span className="text-[#3ed6e6]">Neural<br className="hidden md:block"/>Network right here</span> in<br className="hidden md:block"/>your browser. Don’t<br className="hidden md:block"/>worry, you can’t break<br className="hidden md:block"/>it. We Promise.
          </h2>
          {/* Logo đối tác */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 mt-8 opacity-80">
            <img src="https://dummyimage.com/120x32/ccc/fff&text=MN+MIZE" alt="MN MIZE" className="h-8 object-contain grayscale" />
            <img src="https://dummyimage.com/80x32/ccc/fff&text=ND2" alt="ND2" className="h-8 object-contain grayscale" />
            <img src="https://dummyimage.com/120x32/ccc/fff&text=Metriks" alt="Metriks" className="h-8 object-contain grayscale" />
            <img src="https://dummyimage.com/120x32/ccc/fff&text=QUO" alt="QUO" className="h-8 object-contain grayscale" />
          </div>
        </div>
        {/* Hiệu ứng gradient phủ nhẹ */}
        <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(120deg, #eaf6ff 0%, #fff 100%)', opacity: 0.7}}></div>
      </section>
    </>
  );
};

export default CreativeTeam;
