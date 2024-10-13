// app/dashboard/page.js
export const metadata = {
  title: "Votacle · Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Votacle!</h1>
      <p className="mt-4">Here you can manage your elections and profile.</p>
      {/* Add more summary content or stats here */}
    </div>
  );
}
