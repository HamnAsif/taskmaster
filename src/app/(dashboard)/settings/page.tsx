import Link from "next/link";
import ToggleButton from "./toggle-button"

export default function SettingsPage() {
  return (
    <div className="px-10 py-4 flex flex-col space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Account Settings</h1>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Change Password</h2>
            <p className="text-blue-500 text-sm">
              Change the password associated with your account.
            </p>
          </div>
          <button
            className="text-sm font-medium px-4 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          >
            Change
          </button>
        </div>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Change Email</h2>
            <p className="text-blue-500 text-sm">
              Update the email address linked to your account.
            </p>
          </div>
          <button
            className="text-sm font-medium px-4 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          >
            Change
          </button>
        </div>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Deactivate/Delete Account</h2>
            <p className="text-blue-500 text-sm">
              Deactivate or permanently delete your account.
            </p>
          </div>
          <button
            className="text-sm font-medium px-4 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          >
            Manage
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">App Preferences</h1>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Theme</h2>
            <p className="text-blue-500 text-sm">
              Choose between light or dark theme.
            </p>
          </div>
          <Link href="#"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            Change
          </Link>
        </div>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Time Format</h2>
            <p className="text-blue-500 text-sm">
              Choose between 12-hour or 24-hour time format.
            </p>
          </div>
          <button
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            12h
          </button>
        </div>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Default Task Sorting</h2>
            <p className="text-blue-500 text-sm">
              Set the default order for displaying your tasks.
            </p>
          </div>
          <button
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            Due Date
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Notifications</h1>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Enable Notifications</h2>
            <p className="text-blue-500 text-sm">
              Enable email notifications for important updates.
            </p>
          </div>
          <ToggleButton/>
        </div>

        <div className="py-4 flex flex-row justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-md">Daily Reminder</h2>
            <p className="text-blue-500 text-sm">
              Set the time for your daily task reminder.
            </p>
          </div>
          <Link href="#"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            9:00 AM
          </Link>
        </div>
      </div>
    </div>
  );
}
