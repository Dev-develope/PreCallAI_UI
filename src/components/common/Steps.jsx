import CommonButton from "./Button";

export default function Steps() {
    return (
      <div className="flex flex-col items-center px-4 py-12 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          3 Simple Steps to Smarter Calls
        </h2>
        <p className="text-center text-gray-600 mb-8">
          to improve engagement and drive results.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-72 p-6 border-2 border-purple-400 rounded-2xl">
            <h3 className="font-bold text-lg">Assign a Task</h3>
            <p className="text-center text-gray-600">
              Set up your call requirements—whether it's sales, support, follow-ups, or reminders.
            </p>
          </div>
          {/* Arrow */}
          <div className="hidden md:block text-purple-500 text-2xl">➡</div>
          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-72 p-6 border-2 border-purple-500 rounded-2xl">
            <h3 className="font-bold text-lg">AI Takes Over</h3>
            <p className="text-center text-gray-600">
              QCall.ai dials, engages, and responds in real-time—handling interactions just like a human.
            </p>
          </div>
          {/* Arrow */}
          <div className="hidden md:block text-purple-500 text-2xl">➡</div>
          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-72 p-6 border-2 border-purple-600 rounded-2xl">
            <h3 className="font-bold text-lg">Track & Optimize</h3>
            <p className="text-center text-gray-600">
              Get instant call transcripts, insights, and analytics to improve future conversations.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-8">It’s that simple!</p>
        <CommonButton title="Try PreCallAI Today" className="rounded-full bg-purple-500 text-white text-sm mt-5"/>
      </div>
    );
  }
  