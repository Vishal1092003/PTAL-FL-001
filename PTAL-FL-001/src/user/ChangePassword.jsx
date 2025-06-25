export default function ChangePassword() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-3xl  text-[#b3332b]"  style={{ fontFamily: "Fondamento, cursive" }}>Change Password</h2>
      <input
        type="password"
        placeholder="Current Password"
        className="w-full border px-4 py-2 rounded-md text-sm"
      />
      <input
        type="password"
        placeholder="New Password"
        className="w-full border px-4 py-2 rounded-md text-sm"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        className="w-full border px-4 py-2 rounded-md text-sm"
      />
      <button className="bg-[#b3332b] text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
        Update Password
      </button>
    </div>
  );
}
