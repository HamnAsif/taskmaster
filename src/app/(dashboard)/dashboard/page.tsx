import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-3xl font-bold">WELCOME!</h1>
      <Link href="/new-task" className="px-4 py-2 bg-white rounded border border-gray-300 hover:border-gray-500 transition">
        New Task
      </Link>
    </div>
  );
}
