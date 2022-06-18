import { useAuth } from "../context/authContext"

export function Home() {

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);      
    }
  }

  if (loading) return <p>Loading...</p>;

  return <div className="w-full max-w-xs m-auto">
    <div className="bg-neutral-100 text-black border border-gray-300 dark:border-blue-500 dark:bg-slate-900 dark:text-white transition duration-500 rounded shadow-md px-8 pt-6 pb-8">
      <h1 className="text-xl mb-4">Hi {user.displayName || user.email}, welcome! Not much to see here for now...</h1>

      <button onClick={handleLogout} className="bg-neutral-100 text-black dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700 transition duration-500 hover:bg-slate-200  shadow-md rounded border border-gray-300 dark:border-blue-5000 rounded py-2 px-4 text-black">
        Logout
      </button>
    </div>
  </div>
}
