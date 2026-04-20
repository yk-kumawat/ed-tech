import { useState } from "react";
import Header from "../Components/Header";
import RightSidebar from "../Components/RightSidebar";
import SideBar from "../Components/Sidebar";
import SaveIcon from "../assets/icons/save.svg";

const VideoSession = () => {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const [showPlaylist, setShowPlaylist] = useState(false);

  const addComment = () => {
    if (!comment.trim()) return;

    setComments([comment, ...comments]);
    setComment("");
  };

  return (
    <div className="bg-white">
      <Header />

      <div className="flex justify-between">
        <SideBar />

        {/* ================= MAIN CONTENT ================= */}
        <div className="bg-gray-100 min-h-screen p-4 md:p-8 flex-1">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-6 gap-6">

            {/* ================= VIDEO SECTION ================= */}
            <div className="lg:col-span-4 bg-white rounded-xl shadow p-4 relative">

              <div className="w-full aspect-video relative">

                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/videoseries?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
                  title="Course Video"
                  allowFullScreen
                ></iframe>

              </div>

              {/* VIDEO INFO */}
              <div className="flex items-center justify-between mt-4">

                <div>
                  <h2 className="text-xl font-semibold">
                    Sample Video Title
                  </h2>

                  <p className="text-gray-600">
                    This is the description
                  </p>
                </div>

                <img
                  src={SaveIcon}
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                  onClick={() => setShowPlaylist(!showPlaylist)}
                />

              </div>

            </div>
             {/* PLAYLIST POPUP */}
                {showPlaylist && (
                  <div className="absolute inset-0 flex items-center justify-center">

                    {/* dark overlay */}
                    <div
                      className="absolute inset-0 bg-black/40 rounded-lg"
                      onClick={() => setShowPlaylist(false)}
                    ></div>

                    {/* popup */}
                    <div className="relative z-10 bg-black/70 text-white rounded-xl p-5 w-[360px] m-4 backdrop-blur-md">

                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          Choose Playlist
                        </h3>

                        <button
                          onClick={() => setShowPlaylist(false)}
                          className="text-orange-400 font-medium"
                        >
                          Skip
                        </button>
                      </div>

                      {/* Playlist buttons */}
                      <div className="flex flex-wrap gap-3 mb-4">

                        {["All", "JavaScript", "NodeJs", "HTML", "CSS", "React"].map((item) => (
                          <button
                            key={item}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm"
                          >
                            {item}
                          </button>
                        ))}

                      </div>

                      {/* create playlist */}
                      <input
                        placeholder="Make a new Playlist"
                        className="w-full px-4 py-2 rounded-full bg-white text-black"
                      />

                    </div>

                  </div>
                )}

            {/* ================= COMMENT SECTION ================= */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-4 flex flex-col">

              <h3 className="font-semibold text-lg mb-4">
                Comments
              </h3>

              {/* Comments List */}
              <div className="flex-1 overflow-y-auto space-y-3 max-h-[520px]">

                {comments.length === 0 && (
                  <p className="text-gray-400 text-sm">
                    No comments yet
                  </p>
                )}

                {comments.map((c, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg text-sm"
                  >
                    {c}
                  </div>
                ))}

              </div>

              {/* Input */}
              <div className="mt-4">

                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={addComment}
                  className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Comment
                </button>

              </div>

            </div>

          </div>

        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default VideoSession;