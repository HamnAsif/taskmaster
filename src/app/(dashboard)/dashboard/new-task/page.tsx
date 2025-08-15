import Link from "next/link"
export default function NewTaskPage() {
  return (
    <div className="py-6 px-10 h-screen">
      <h1 className="text-2xl font-bold mb-4">Create New Task</h1>

      <div className="flex flex-row space-x-6 h-[80%]">
        <div className="flex-[70%] border border-gray-300 border-2 flex flex-col">
          <div className="border-b border-gray-300">
            <input
              className="p-3 font-semibold text-lg outline-none w-full"
              placeholder="Task Title"
            />
          </div>
          <textarea
            className="w-full flex-1 p-3 outline-none resize-none text-gray-700"
            placeholder="Type description here"
          ></textarea>
        </div>

        <div className="flex-[30%] bg-blue-100 rounded-lg p-6 h-full flex flex-col justify-between space-y-20">
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">Priority</h2>
              <div className="flex space-x-4 mt-2">
                <button className="bg-white px-3 py-1 border rounded">Low</button>
                <button className="bg-white px-3 py-1 border rounded">Medium</button>
                <button className="bg-white px-3 py-1 border rounded">High</button>
              </div>
            </div>

            <div>
              <h2 className="font-semibold">Status</h2>
              <div className="flex space-x-2 mt-2">
                <button className="bg-white px-3 py-1 border rounded">To Do</button>
                <button className="bg-white px-3 py-1 border rounded">In Progress</button>
                <button className="bg-white px-3 py-1 border rounded">Done</button>
              </div>
            </div>

            <div>
              <h2 className="font-semibold">Deadline</h2>
              <div className="mt-2 flex items-center border rounded px-2 bg-white">
                <input
                  type="datetime-local"
                  className="w-full outline-none py-1"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center text-gray-600 flex flex-col items-center justify-center flex-1">
            <span className="text-base font-medium">Drag and drop files here</span>
            <div className="my-2 text-sm text-gray-500">or</div>
            <button className="px-4 py-2 text-sm font-medium border font-semibold rounded bg-white hover:bg-gray-200">
              Browse files
            </button>
          </div>
          </div>
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <Link href="/dashboard" className="px-4 py-2 border rounded">Cancel</Link>
        <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded">Done</Link>
      </div>
    </div>
  );
}
