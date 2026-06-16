import React from "react";
import {
  Home,
  Compass,
  Video,
  Clock,
  ThumbsUp,
  Menu,
  Search,
  Bell,
} from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Learn React in 30 Minutes",
    thumbnail: "https://picsum.photos/400/250?random=1",
    channel: "Postly Academy",
    views: "125K",
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Build a MERN Stack Project",
    thumbnail: "https://picsum.photos/400/250?random=2",
    channel: "Code World",
    views: "89K",
    time: "1 week ago",
  },
  {
    id: 3,
    title: "JavaScript Interview Questions",
    thumbnail: "https://picsum.photos/400/250?random=3",
    channel: "Tech Talks",
    views: "210K",
    time: "3 days ago",
  },
  {
    id: 4,
    title: "Node.js Crash Course",
    thumbnail: "https://picsum.photos/400/250?random=4",
    channel: "Developer Hub",
    views: "56K",
    time: "5 days ago",
  },
  {
    id: 5,
    title: "Tailwind CSS Complete Guide",
    thumbnail: "https://picsum.photos/400/250?random=5",
    channel: "UI Masters",
    views: "178K",
    time: "4 days ago",
  },
  {
    id: 6,
    title: "MongoDB Tutorial",
    thumbnail: "https://picsum.photos/400/250?random=6",
    channel: "Database Guru",
    views: "95K",
    time: "6 days ago",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-5 py-3 border-b border-gray-800 sticky top-0 bg-black z-50">
        <div className="flex items-center gap-4">
          <Menu className="cursor-pointer" />
          <h1 className="text-2xl font-bold text-red-500">
            Postly<span className="text-white">Video</span>
          </h1>
        </div>

        <div className="flex items-center w-[40%]">
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-l-full outline-none"
          />
          <button className="bg-zinc-800 px-5 py-2 border border-gray-700 rounded-r-full">
            <Search />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <Bell className="cursor-pointer" />
          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen border-r border-gray-800 p-4 hidden md:block">
          <div className="space-y-4">
            <SidebarItem icon={<Home />} text="Home" />
            <SidebarItem icon={<Compass />} text="Explore" />
            <SidebarItem icon={<Video />} text="Subscriptions" />
            <SidebarItem icon={<Clock />} text="Watch Later" />
            <SidebarItem icon={<ThumbsUp />} text="Liked Videos" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5">
          <h2 className="text-2xl font-semibold mb-5">
            Recommended Videos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {video.channel}
                  </p>

                  <p className="text-sm text-gray-500">
                    {video.views} views • {video.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800 cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default HomePage;