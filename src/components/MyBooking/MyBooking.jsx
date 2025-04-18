const MyBooking = ({ booking, handleDelete, handleUpdate }) => {
  const { _id, service, price, img, date, service_id, status } = booking;

  return (
    <tr className="border-b border-opacity-20 border-gray-700 ">
      <td className="p-3">
        <p>{service_id}</p>
      </td>
      <td className="p-3">
        <img className="w-32 rounded-xl" src={img} />
      </td>
      <td className="p-3">
        <p className="font-bold text-xl">{service}</p>
      </td>
      <td className="p-3">
        <p>{date}</p>
      </td>
      <td className="p-3 text-right">
        <p>${price}</p>
      </td>
      <td className="p-3 text-right ">
        <div className="px-3 py-1 font-semibold rounded-md  text-gray-900 flex flex-row gap-5">

            {
                status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : <button className="bg-red-500 rounded px-5 py-2 text-white font-bold text-base" onClick={() => handleUpdate(_id)}>Please Confirm</button>
            }
          <button
            className="bg-red-500 rounded px-5 py-2 text-white font-bold text-base"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyBooking;
