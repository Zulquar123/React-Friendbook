export default function Friends({ fitem, id, blockFriend, handleAddFriend }) {
  const { name, address, profile_pic, occupation, friendship } = fitem;
  return (
    <div className="w-64 h-60 border-2 border-sky-600 rounded  ">
      <div className="flex justify-center items-center p-1">
        <img
          src={profile_pic}
          alt="Profile-Picture"
          className="w-28 h-28 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-sky-600">{name}</h1>
        <h1 className="font-semibold text-gray-500">{occupation}</h1>
        <h1 className="font-semibold text-gray-700">{address}</h1>
      </div>
      <div className="justify-between flex px-3 mt-1 ">
        <button
          className={` rounded px-2 ${
            friendship ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={() => handleAddFriend(id)}
        >
          {friendship ? "Unfriend" : "Add friend"}
        </button>
        <button
          className="border-2 border-sky-600 rounded px-2"
          onClick={() => blockFriend(id)}
        >
          Block Friend
        </button>
      </div>
    </div>
  );
}
