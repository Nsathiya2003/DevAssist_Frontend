import profile from "../assets/profile-icon.jpg";

export default function Profile() {
  return (
    <>
      <img
        src={profile}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-800">Sathiya</span>
        <span className="text-xs text-gray-500">sathiya@email.com</span>
      </div>
    </>
  );
}
