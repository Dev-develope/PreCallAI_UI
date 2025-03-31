import CommonButton from "./Button";

export default function EducationCommunication() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-12 text-center">
      {/* Header Section */}
      <div className="mb-12">
        <span className="bg-purple-600 text-sm px-4 py-1 rounded-full">Virtual Conversations</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Transforming Education with Flawless, <br /> Real-Time Communication
        </h2>
        <p className="text-gray-400 mt-2">to improve engagement and drive results.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Card */}
        {[
          {
            title: "No Downloads. No Extra Apps.",
            description: "Students and educators can engage through calls, emails, and texts without the need for additional apps or software.",
          },
          {
            title: "Boost Collaboration Across Channels",
            description: "Leverage AI-powered notifications, call logs, and real-time messaging to enhance student engagement and maximize learning outcomes.",
          },
          {
            title: "Strengthen Instructor-Student Relationships",
            description: "Create a dynamic educational environment where professors and students interact effortlessly through real-time, multi-channel communication.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-green-400 shadow-lg">
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Second Features Section */}
      <h3 className="text-2xl font-bold mt-16">Powered by the Most Reliable Communication Network</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
        {[
          {
            title: "Enterprise-Grade Security & Reliability",
            description: "Ensure safe and seamless communication with top-tier security standards.",
          },
          {
            title: "AI-Driven Insights & Analytics",
            description: "Track engagement metrics and optimize learning experiences with real-time data.",
          },
          {
            title: "Borderless Learning & Global Reach",
            description: "Connect students and educators across different time zones and locations without limitations.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-green-400 shadow-lg">
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <p className="text-gray-400 mt-10">QCallAI – Shaping the Future of Education, One Conversation at a Time!</p>
      <CommonButton title="Let's connect today!" className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full text-sm" />
    </section>
  );
}
