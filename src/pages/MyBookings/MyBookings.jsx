import { useContext, useEffect, useState } from "react";
import MyBooking from "../../components/MyBooking/MyBooking";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `http://localhost:5000/myBookings?email=${user?.email}`;
  // const url = `http://localhost:5000/myBookings?email=afsar2@gmail.com`;
  const url = `/myBookings?email=${user?.email}`;

  useEffect(() => {
    // axios.get(url, {withCredentials: true}).then((data) => {
    //   setBookings(data.data);
    // });
    axiosSecure.get(url)
    .then(res => setBookings(res.data))
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this booking?");
    if (proceed) {
      fetch(`https://car-doctor-server-zeta-bice.vercel.app/deleteBooking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    // console.log("Handle Updated");
    // fetch(`http://localhost:5000/updateBookings/${id}`, {
    fetch(`https://car-doctor-server-zeta-bice.vercel.app/updateBookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
  };

  return (
    <div>
      <div className="container p-2 w-full mx-auto sm:p-4 text-gray-700">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          My Total Bookings: {bookings.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="">
              <tr className="text-left">
                <th className="p-3">Service Id</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <MyBooking
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></MyBooking>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
