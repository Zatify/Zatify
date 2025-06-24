import React from "react";
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
      {/* Banner section */}
      <div className="relative w-full max-w-full mx-auto mt-36 mb-12">
        <div className="rounded-[2.5rem] overflow-hidden w-full min-h-[340px] h-[340px] md:h-[380px] lg:h-[420px] flex items-center justify-center bg-gray-100">
          <img
            src={bannerImg}
            alt="Team banner"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 340 }}
          />
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-semibold text-center select-none drop-shadow-lg">/ Team single /</h1>
          {/* Breadcrumb */}
          <div className="absolute left-0 bottom-0 mb-6 ml-6 bg-white/80 rounded-tl-[1.5rem] rounded-br-[1.5rem] px-6 py-2 flex items-center gap-1 text-base text-black shadow">
            <Link to="/" className="underline font-semibold hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/creative-team" className="underline font-semibold hover:text-blue-600">Team Members</Link>
            <span>/</span>
            <span className="font-semibold">{member.name}</span>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8">
          <img
            src={member.img}
            alt={member.name}
            className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-blue-200"
          />
          <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
          <div className="text-lg text-blue-600 font-semibold mb-1">{member.role}</div>
          <div className="text-base text-gray-500 mb-4">{member.label}</div>
          <p className="text-gray-700 text-center">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
