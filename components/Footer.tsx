export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">TaskMaster</h3>
            <p className="text-sm mt-1">Manage your tasks efficiently</p>
          </div>
          
          <div className="text-sm mt-4 md:mt-0">
            <p>&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}