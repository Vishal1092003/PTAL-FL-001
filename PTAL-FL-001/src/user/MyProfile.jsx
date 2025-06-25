import { useEffect, useState } from "react";
import { Pencil, Check, X } from "lucide-react";

export default function MyProfile({ user, setUser }) {
  //   const [user, setUser] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const userData = JSON.parse(localStorage.getItem("user")) || {
        name: "Vishal",
        email: "Vishal@example.com",
        mobile: "+1 (555) 123-4567",
        home: "123 Main St, Anytown, USA",
        work: "456 Business Ave, Downtown, USA",
      };
      setUser(userData);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleEdit = (field) => {
    setEditingField(field);
    setEditedValue(user[field]);
  };

  const handleSave = () => {
    const updatedUser = { ...user, [editingField]: editedValue };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditingField(null);
    setEditedValue("");
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditedValue("");
  };

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 sm:px-6 py-8 md:py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl text-[#b3332b]"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            Sánaaaya
          </h1>
          <p className="text-gray-600 mt-2">Manage your profile information</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group">
                <img
                  src="https://i.imgur.com/BeW9NfM.png"
                  alt="avatar"
                  className="w-24 h-24 rounded-full border-2 border-[#b3332b] shadow-md"
                />
                <button className="absolute bottom-0 right-0 bg-[#b3332b] text-white p-2 rounded-full transform translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Pencil size={16} />
                </button>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="flex items-center justify-between group">
                  {editingField === "name" ? (
                    <div className="flex items-center w-full">
                      <input
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        autoFocus
                      />
                      <div className="flex ml-2">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700 p-1"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-700 p-1 ml-1"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg font-medium text-gray-800">
                        {user.name}
                      </p>
                      <button
                        onClick={() => handleEdit("name")}
                        className="text-gray-400 hover:text-[#b3332b] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Pencil size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="flex items-center justify-between group">
                  {editingField === "email" ? (
                    <div className="flex items-center w-full">
                      <input
                        type="email"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        autoFocus
                      />
                      <div className="flex ml-2">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700 p-1"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-700 p-1 ml-1"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700">{user.email}</p>
                      <button
                        onClick={() => handleEdit("email")}
                        className="text-gray-400 hover:text-[#b3332b] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Pencil size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile Number
                </label>
                <div className="flex items-center justify-between group">
                  {editingField === "mobile" ? (
                    <div className="flex items-center w-full">
                      <input
                        type="tel"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        autoFocus
                      />
                      <div className="flex ml-2">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700 p-1"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-700 p-1 ml-1"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700">{user.mobile}</p>
                      <button
                        onClick={() => handleEdit("mobile")}
                        className="text-gray-400 hover:text-[#b3332b] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Pencil size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Address Information
            </h2>

            {/* Home Address */}
            <div className="space-y-1 mb-6">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Home Address
              </label>
              <div className="flex items-center justify-between group">
                {editingField === "home" ? (
                  <div className="flex items-center w-full">
                    <textarea
                      rows={3}
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      autoFocus
                    />
                    <div className="flex ml-2">
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-700 p-1"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-red-600 hover:text-red-700 p-1 ml-1"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700">{user.home}</p>
                    <button
                      onClick={() => handleEdit("home")}
                      className="text-gray-400 hover:text-[#b3332b] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Work Address */}
            <div className="space-y-1 mb-8">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Work Address
              </label>
              <div className="flex items-center justify-between group">
                {editingField === "work" ? (
                  <div className="flex items-center w-full">
                    <textarea
                      rows={3}
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      autoFocus
                    />
                    <div className="flex ml-2">
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-700 p-1"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-red-600 hover:text-red-700 p-1 ml-1"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700">{user.work}</p>
                    <button
                      onClick={() => handleEdit("work")}
                      className="text-gray-400 hover:text-[#b3332b] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  localStorage.removeItem("auth");
                  localStorage.removeItem("user");
                  window.location.href = "/signin";
                }}
                className="px-6 py-2 border border-[#b3332b] text-[#b3332b] rounded-md hover:bg-[#b3332b] hover:text-white transition-colors"
              >
                Logout
              </button>
              <button className="px-6 py-2 bg-[#b3332b] text-white rounded-md hover:bg-[#9a2b24] transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
