import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  return (<div className="py-10 px-6 ">
    <h1 className="text-3xl font-bold mb-6">Manage Your Profile</h1>
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <Image src="/profileimage.jpg" alt="Profile Image" width={130} height={130} className="rounded-full mb-6" />
        <h2 className="text-gray-500">Full Name of User</h2>
        <p className="text-gray-500">email@example.com</p>
        <p className="text-gray-500">Joined on Month Date, Year</p>
        <Link
          href="#"
          className="mt-3 px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          Edit Profile
        </Link>
      </div>

      <div className="mt-10 w-full">
        <h1 className="text-xl font-bold mb-4">Productivity Stats</h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="border border-gray-400 rounded-lg p-4 pt-10">
            <p className="text-gray-500">Total Tasks Created</p>
            <p className="text-2xl font-bold">X</p>
          </div>
          <div className="border border-gray-400 rounded-lg p-4 pt-10">
            <p className="text-gray-500">Tasks In Progress</p>
            <p className="text-2xl font-bold">X</p>
          </div>
          <div className="border border-gray-400 rounded-lg p-4 pt-10">
            <p className="text-gray-500">Tasks Completed</p>
            <p className="text-2xl font-bold">X</p>
          </div>
        </div>
      </div>
    </div>
</div>);
}
