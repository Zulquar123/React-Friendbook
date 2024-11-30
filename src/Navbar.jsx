export default function Navbar({ fData }) {
  const navStyle =
    "mt-3 w-[80%] m-auto border-2 border-sky-600 rounded flex justify-between p-3 text-sky-600 font-semibold text-xl";
  const added = fData.filter((item, index) => item.friendship).length;
  return (
    <div className={navStyle}>
      <h1>Welcome to FriendBook </h1>
      <h1>No. of friend : {added}</h1>
    </div>
  );
}
