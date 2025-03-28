import { ShieldCheck, Lock, Database, Cloud } from "lucide-react";
import CommonButton from "./Button";

const securityData = [
  {
    icon: <ShieldCheck size={32} className="text-purple-600" />,
    title: "Enterprise-Grade Security",
    description: "From call logs to client data, everything is protected with end-to-end encryption, ensuring compliance with industry regulations."
  },
  {
    icon: <Lock size={32} className="text-purple-600" />,
    title: "Role-Based Access Control",
    description: "Restrict access based on employee roles, keeping sensitive data secure while enabling collaboration."
  },
  {
    icon: <Database size={32} className="text-purple-600" />,
    title: "Adaptive Data Retention",
    description: "Customize your data storage policies to meet regulatory requirements, ensuring compliance and operational efficiency."
  },
  {
    icon: <Cloud size={32} className="text-purple-600" />,
    title: "No Extra IT Overhead",
    description: "QCallAI is cloud-based, meaning no extra hardware, installations, or IT maintenance is required."
  }
];

export default function SecurityCompliance() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <span className="px-4 py-1 text-sm font-semibold border border-purple-300 rounded-full text-purple-700">Security & Compliance</span>
      <h2 className="text-3xl font-bold text-gray-900 mt-4">Built for Security & Compliance</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        Ensuring compliance and security with cutting-edge technology to protect your data and operations.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {securityData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-6  items-start space-x-4 shadow-sm hover:shadow-md transition">
            <div className="py-2">
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="text-lg font-light text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CommonButton title="Try it now for free!!!" className="bg-purple-600 text-white mt-10"/>

    </section>
  );
}
