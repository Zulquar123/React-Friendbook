import { useState } from "react";
import FriendContainer from "./FriendContainer";
import Navbar from "./Navbar";

export default function App() {
  const data = [
    {
      id: 1,
      name: "Alice Johnson",
      address: "123 Maple Street, Springfield, IL",
      profile_pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg",
      occupation: "Software Engineer",
      friendship: false,
    },
    {
      id: 2,
      name: "Bob Smith",
      address: "456 Oak Avenue, Austin, TX",
      profile_pic:
        "https://yt3.googleusercontent.com/WuPodYLA22bumFSAnf654wJ8cE7n2Zb8M2KEF5B3RiyziqLTXQpp6JXBYOSH8zifY_jihWVq=s900-c-k-c0x00ffffff-no-rj",
      occupation: "Graphic Designer",
      friendship: false,
    },
    {
      id: 3,
      name: "Charlie Davis",
      address: "789 Pine Road, Seattle, WA",
      profile_pic:
        "https://imageio.forbes.com/specials-images/imageserve/6744ad59c8b8a4e1d84f8e00/US-finance-Buffett-politics/0x0.jpg?crop=1843,1229,x0,y6,safe&height=474&width=711&fit=bounds",
      occupation: "Data Analyst",
      friendship: false,
    },
    {
      id: 4,
      name: "Diana Lee",
      address: "321 Birch Lane, Boston, MA",
      profile_pic:
        "https://images.moneycontrol.com/static-mcnews/2024/05/20240522135516_WhatsApp-Image-2024-05-22-at-7.21.46-PM.jpg?impolicy=website&width=770&height=431",
      occupation: "Marketing Specialist",
      friendship: false,
    },
    {
      id: 5,
      name: "Ethan Brown",
      address: "654 Cedar Street, Denver, CO",
      profile_pic:
        "https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Ffeatureimage%2F2019%2F05%2FMohammad-Amir.jpg&w=1200&q=75",
      occupation: "Product Manager",
      friendship: false,
    },
    {
      id: 6,
      name: "Fiona Harris",
      address: "147 Elm Drive, San Francisco, CA",
      profile_pic: "https://static.toiimg.com/photo/101217996/101217996.jpg",
      occupation: "UX Designer",
      friendship: false,
    },
    {
      id: 7,
      name: "George Clark",
      address: "369 Willow Way, Chicago, IL",
      profile_pic:
        "https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg",
      occupation: "Civil Engineer",
      friendship: false,
    },
    {
      id: 8,
      name: "Hannah Wilson",
      address: "258 Aspen Circle, Miami, FL",
      profile_pic:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg",
      occupation: "Content Writer",
      friendship: false,
    },
    {
      id: 9,
      name: "Ian Martinez",
      address: "753 Redwood Avenue, Dallas, TX",
      profile_pic:
        "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
      occupation: "Mechanical Engineer",
      friendship: false,
    },
    {
      id: 10,
      name: "Julia Roberts",
      address: "987 Cypress Lane, New York, NY",
      profile_pic:
        "https://s3images.zee5.com/wp-content/uploads/sites/7/2021/11/Untitled-design-2021-11-19T185625.848.jpg",
      occupation: "Photographer",
      friendship: false,
    },
  ];
  const [fData, setfData] = useState(data);

  // Function to handle friendship status
  const handleAddFriend = (id) => {
    setfData((pre) =>
      pre.map((item, index) => {
        if (index == id) return { ...item, friendship: !item.friendship };
        return item;
      })
    );
  };

  // Function for Blocking Friend or removing permanently

  const blockFriend = (id) => {
    setfData(() => fData.filter((item, index) => index != id));
  };

  return (
    <div>
      <Navbar fData={fData} />
      <FriendContainer
        fData={fData}
        blockFriend={blockFriend}
        handleAddFriend={handleAddFriend}
      />
    </div>
  );
}
