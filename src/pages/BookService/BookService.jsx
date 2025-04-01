import axios from "axios";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const serviceData = useLoaderData();
  const { _id, title, img, price, email } = serviceData;

  const handleConfirm = (e) => {
    e.preventDefault();
    // console.log("Booked Successfully!");

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    // const email = form.email.value;
    const bookService = {
        service: title,
        service_id: _id,
        img,
        price,
        email: user.email,
        date,
        name,
    }
    console.log(bookService);

    // axios.post("http://localhost:5000/addBookings", bookService)
    axios.post("https://car-doctor-server-zeta-bice.vercel.app/addBookings", bookService)
    .then(data => {
        // console.log(data.data);
        if(data.data.insertedId) {
            alert("Booked Successfully!");
            form.reset();
        }
    })
  }

  return (
    <div>
      {/* <h1>Service Details: {id}</h1> */}
      <h1 className="text-center text-5xl font-bold">Book Service {title}</h1>

      <section className="p-6 text-gray-700 w-3/4 mx-auto shadow-lg border-2 mt-10 rounded-lg ">
        <form
          onSubmit={handleConfirm}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  required
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400  border-gray-700 border-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email && user.email}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Due Amount
                </label>
                <input
                  id="amount"
                  type="text"
                  defaultValue={"$" + serviceData.price}
                  //   placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-2"
                />
              </div>
            </div>
          </fieldset>

          <button className="btn bg-green-600 text-white font-bold text-xl">
            Confirm
          </button>
        </form>
      </section>
    </div>
  );
};

export default BookService;
