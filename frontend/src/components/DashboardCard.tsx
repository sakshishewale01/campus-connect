type DashboardCardProps = {
  title: string;
  value: number;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="text-4xl font-bold text-blue-600 mt-4">
        {value}
      </p>

    </div>
  );
}

export default DashboardCard;