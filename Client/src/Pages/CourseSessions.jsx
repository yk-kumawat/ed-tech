import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSessions, startCourse } from "../services/api";
import Header from "../Components/Header";

const CourseSessions = () => {
  const { courseId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await startCourse(courseId);
    const data = await getSessions(courseId);
    setSessions(data.sessions || []);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Course Timeline</h2>

        <div className="space-y-4">
          {sessions.map(s => (
            <div
              key={s._id}
              className={`p-4 rounded-xl flex justify-between items-center shadow
                ${s.status === "completed" ? "bg-green-100" : ""}
                ${s.status === "active" ? "bg-blue-100" : ""}
                ${s.status === "locked" ? "bg-gray-200 opacity-60" : ""}
              `}
            >
              <div>
                <p className="font-semibold">Day {s.day}</p>
                <p className="text-sm text-gray-600">{s.title}</p>
              </div>

              <div>
                {s.status === "completed" && "✅"}
                {s.status === "active" && "🔥"}
                {s.status === "locked" && "🔒"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSessions;