export default function Dashboard({ setPage }) {
  return (
    <div className="min-h-screen p-6 bg-green-50">

      <h1 className="text-3xl font-bold mb-6">
        Welcome to Dashboard 👤
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          Orders
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Profile
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Support
        </div>

      </div>

      <button
        onClick={() => setPage("Home")}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}