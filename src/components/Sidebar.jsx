import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white h-full p-6">
      <h2 className="text-xl font-bold mb-6">Expense App</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
        <li><Link to="/expenses" className="hover:text-gray-400">Expenses</Link></li>
      </ul>
    </div>
  );
}
