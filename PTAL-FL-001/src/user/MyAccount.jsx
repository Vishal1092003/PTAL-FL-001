import { useEffect, useState } from "react";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import MyAddresses from "./MyAddresses";
import ChangePassword from "./ChangePassword";
import { Menu, X } from "lucide-react";

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {
      name: "John Doe",
      email: "john@example.com",
      mobile: "+1 (555) 123-4567",
      home: "123 Main St, Anytown, USA",
      work: "456 Business Ave, Downtown, USA",
    };
    setUser(userData);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const renderTab = () => {
    switch (activeTab) {
      case "orders":
        return <MyOrders />;
      case "addresses":
        return <MyAddresses />;
      case "password":
        return <ChangePassword />;
      case "profile":
      default:
        return <MyProfile user={user} setUser={setUser} />; // pass user state
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] font-sans text-[#2b1910] flex flex-col md:flex-row">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-[#fefbf2]">
        <div className="text-xl font-semibold truncate max-w-[200px]">
          {user?.name || "User"}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`md:w-1/4 bg-[#fefbf2] border-r border-gray-300 flex flex-col justify-between px-6 py-6 space-y-6 md:space-y-0 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="space-y-8">
          <div className="hidden md:block text-2xl font-semibold truncate">
            {user?.name || "User"}
          </div>

          <ul className="space-y-4 text-sm">
            {["profile", "orders", "addresses", "password"].map((tab) => (
              <li
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer transition ${
                  activeTab === tab
                    ? "font-bold text-red-700"
                    : "hover:text-red-500"
                }`}
              >
                {tab === "profile"
                  ? "My Profile"
                  : tab === "orders"
                  ? "My Orders"
                  : tab === "addresses"
                  ? "My Addresses"
                  : "Change Password"}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            localStorage.removeItem("user");
            window.location.href = "/signin";
          }}
          className="px-6 py-2 border border-[#b3332b] text-[#b3332b] rounded-md hover:bg-[#b3332b] hover:text-white transition-colors"
          style={{ marginTop: "20px" }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 md:p-10">{renderTab()}</div>
    </div>
  );
}
