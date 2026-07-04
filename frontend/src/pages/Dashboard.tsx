function Dashboard() {

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-700 text-white p-6">

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>

      </div>

      <div className="grid grid-cols-4 gap-6 p-10">

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-bold">

            Notes

          </h2>

          <p className="text-4xl mt-4">

            20

          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-bold">

            PYQs

          </h2>

          <p className="text-4xl mt-4">

            18

          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-bold">

            Doubts

          </h2>

          <p className="text-4xl mt-4">

            15

          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-bold">

            Projects

          </h2>

          <p className="text-4xl mt-4">

            8

          </p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;