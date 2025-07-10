
import { useParams, Link } from "react-router-dom";

const memberData = {
  "alan-begham": {
    name: "Alan Begham",
    role: "CEO Aiero",
    label: "Neural",
    img: "https://storage.googleapis.com/a1aa/image/ac30d169-6aa9-4659-ccda-1ee61f8bb4a1.jpg",
    description: "Alan is the CEO of Aiero, leading the team with a vision for AI-driven solutions and innovation.",
  },
  "arthur-dowson": {
    name: "Arthur Dowson",
    role: "AI Programmer",
    label: "Solution",
    img: "https://storage.googleapis.com/a1aa/image/36c7bc5f-1f62-4294-0a9e-b596dd8d24bb.jpg",
    description: "Arthur specializes in AI programming and is passionate about building intelligent systems.",
  },
  "dan-smith": {
    name: "Dan Smith",
    role: "Manager",
    label: "Future",
    img: "https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg",
    description: "Dan manages projects and ensures the team delivers high-quality results.",
  },
  "brandon-adams": {
    name: "Brandon Adams",
    role: "HR Neuro",
    label: "Digital",
    img: "https://storage.googleapis.com/a1aa/image/435c514d-06a3-4f46-58e8-bebc51b9195e.jpg",
    description: "Brandon is responsible for HR and team culture at Neuro.",
  },
  "alan-begham-neuro": {
    name: "Alan Begham",
    role: "CEO Neuro",
    label: "Learning",
    img: "https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg",
    description: "Alan also leads the Neuro division, focusing on learning and development.",
  },
  "tim-bearton": {
    name: "Tim Bearton",
    role: "HR Neuro",
    label: "Ideas",
    img: "https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg",
    description: "Tim brings creative ideas and energy to the HR team at Neuro.",
  },
};

const bannerImg = "https://storage.googleapis.com/a1aa/image/0e692277-3ada-4b9d-e3e2-3761f213b7ca.jpg";

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const member = memberData[memberId];

  if (!member) {
    return <div className="text-center py-20 text-2xl">Member not found.</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />

      <section className="relative p-4 mt-32 md:mt-32 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/svg/background/servicesingle.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Team single</h1>
          {/* Vertical Neural text */}
          <div className="absolute right-24 bottom-5 items-center hidden md:block">
            <span
              className="font-sans select-none"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: '90px',
                fontWeight: 650,
                color: 'transparent',
                WebkitTextStroke: '1px #fff',
                textStroke: '1px #fff',
                letterSpacing: '1px',
                lineHeight: 1,
                transform: 'rotate(180deg)'
              }}
            >Neural</span>
          </div>
          {/* Breadcrumb and decorations */}
          <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
            <span className="text-sm mb-1">Home / Team Members</span>
          </div>
          <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-sans flex-col"></div>
          <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex-col shadow-md"></div>
        </div>
      </section>

      {/* Member Detail Content */}
      <div className="h-8 md:h-16 lg:h-20 xl:h-24 2xl:h-28" />
      <main className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row md:gap-10 mx-auto mt-0">
        {/* Left side */}
        <section className="md:w-1/2 relative rounded-3xl overflow-hidden flex items-start">
          <div className="relative flex flex-col items-center w-full mx-auto bg-[#e5e5e5] rounded-3xl overflow-hidden shadow-md" style={{ minHeight: '420px', minWidth: 320, maxHeight: 'none', height: 'auto', maxWidth: 420 }}>
            <div className="relative w-full h-full flex items-center justify-center" style={{ aspectRatio: 'auto', height: '100%' }}>
              <img
                alt="confident-ginger-man-with-trendy"
                className="object-cover w-full h-full rounded-t-3xl"
                src="https://storage.googleapis.com/a1aa/image/2ac68bab-a8f7-41cc-7f80-4b4271ae3f05.jpg"
                style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
              />
              <span
                className="absolute right-2 top-0 h-full flex items-center text-[44px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-extrabold text-gray-300 select-none"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  letterSpacing: 0,
                  lineHeight: 1,
                  fontFamily: 'Inter, sans-serif',
                  maxHeight: '90%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >Neural</span>
            </div>
            <div className="relative w-full bg-white p-8 pt-6 rounded-b-3xl flex flex-col gap-4 min-h-[180px]" style={{ width: '100%', minHeight: 180 }}>
              <h3 className="text-base font-semibold mb-1">Contact Information</h3>
              <div className="mb-1">
                <p className="text-sm mb-1">+1 (368) 567 89 54</p>
                <p className="text-sm mb-2">+ 800 350 84 31</p>
                <a className="text-sm underline text-gray-800 inline-block mb-1" href="mailto:alan@aiero.com">alan@aiero.com</a>
              </div>
              <nav aria-label="Social media links" className="flex flex-col gap-3 absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-2">
                <a aria-label="YouTube" className="text-white text-xs w-6 h-6 flex items-center justify-center" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184A2.997 2.997 0 0017.5 2H6.5a3 3 0 00-2.115 1.184C3.5 4.5 3.5 8.5 3.5 8.5s0 4 0.885 5.316A2.997 2.997 0 006.5 15h11a3 3 0 002.115-1.184C20.5 12.5 20.5 8.5 20.5 8.5s0-4-0.885-5.316zM10 12.5v-5l4 2.5-4 2.5z"></path></svg>
                </a>
                <a aria-label="LinkedIn" className="text-white text-xs w-6 h-6 flex items-center justify-center" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z"></path></svg>
                </a>
                <a aria-label="Twitter" className="text-white text-xs w-6 h-6 flex items-center justify-center" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.67 0c-2.5 0-4.5 2.1-4.5 4.7 0 .37.04.73.12 1.08A12.94 12.94 0 013 1.64a4.7 4.7 0 00-.61 2.37c0 1.63.8 3.07 2.02 3.92a4.48 4.48 0 01-2.04-.57v.06c0 2.28 1.6 4.18 3.72 4.62a4.52 4.52 0 01-2.03.08c.57 1.8 2.22 3.12 4.18 3.16A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-7.1 12.85-13.25 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"></path></svg>
                </a>
                <a aria-label="Facebook" className="text-white text-xs w-6 h-6 flex items-center justify-center" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z"></path></svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
        {/* Right side */}
        <section className="md:w-1/2 p-6 md:p-12 flex flex-col md:ml-12 lg:ml-20 xl:ml-32">
          <p className="text-xs text-gray-600 mb-2 select-none">/ CEO Aiero /</p>
          <h1 className="text-4xl font-semibold mb-6 leading-tight">Alan Begham</h1>
          <p className="font-semibold text-gray-800 mb-4 max-w-xl">Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon armoured catfish gudgeon sawfish whitefish orbicular batfish mummichog paradise fish!</p>
          <p className="text-gray-700 mb-6 max-w-xl leading-relaxed">Triggerfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod." Pacific hake false trevally queen parrotfish black prickleback moss. Pacific hake false trevally queen parrotfish black prickleback moss.</p>
          <p className="text-gray-700 mb-12 max-w-xl leading-relaxed">Knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod." Pacific hake false trevally queen parrotfish black prickleback moss. Pacific hake false trevally queen parrotfish black prickleback moss</p>
          <h2 className="text-3xl font-semibold mb-6">My experience & years of education</h2>
          <div className="max-w-xl w-full px-2 sm:px-4 md:px-0">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="flex items-center gap-2 mb-2 text-lg font-light text-gray-700">
              <span className="text-cyan-400 text-2xl leading-none select-none">↘</span>
              <span className="text-2xl font-semibold">2004 - 2007</span>
            </div>
            <p className="font-semibold mb-1">ABMP University</p>
            <p className="text-gray-700 leading-[1.7] mb-4">Pacific hake false trevally queen parrotfish black prickleback moss.<br/>Pacific hake</p>
          </div>
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
            <div className="flex items-center gap-2 mb-2 text-lg font-light text-gray-700">
              <span className="text-cyan-400 text-2xl leading-none select-none">↘</span>
              <span className="text-2xl font-semibold">2012 - 2017</span>
            </div>
            <p className="font-semibold mb-1">Microsoft Inc.</p>
            <p className="text-gray-700 leading-[1.7] mb-4">Triggerfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid cat shark saw shark trout cod.</p>
          </div>
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 text-lg font-light text-gray-700">
              <span className="text-cyan-400 text-2xl leading-none select-none">↘</span>
              <span className="text-2xl font-semibold">2018 - 2023</span>
            </div>
            <p className="font-semibold mb-1">Neuro AI</p>
            <p className="text-gray-700 leading-[1.7] mb-4">Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Spanish mackerel yellow weaver sixgill. Pacific hake false trevally queen parrotfish black prickleback moss.</p>
          </div>
          <div className="mt-10 w-full">
            <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-base sm:text-lg">
                <span className="text-cyan-400 text-xl sm:text-2xl leading-none select-none">↘</span>
                <span>Modern trucks and cars</span>
              </li>
              <li className="flex items-center gap-2 text-base sm:text-lg">
                <span className="text-cyan-400 text-xl sm:text-2xl leading-none select-none">↘</span>
                <span>Network of warehouses</span>
              </li>
              <li className="flex items-center gap-2 text-base sm:text-lg">
                <span className="text-cyan-400 text-xl sm:text-2xl leading-none select-none">↘</span>
                <span>New technologies</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamMemberDetail;
