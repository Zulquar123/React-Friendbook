import Friends from "./Friends";

export default function FriendContainer({
  fData,
  blockFriend,
  handleAddFriend,
}) {
  return (
    <div className="flex gap-3 flex-wrap mt-5 justify-center">
      {fData.map((fitem, index) => (
        <Friends
          fitem={fitem}
          id={index}
          key={index}
          blockFriend={blockFriend}
          handleAddFriend={handleAddFriend}
        />
      ))}
    </div>
  );
}
