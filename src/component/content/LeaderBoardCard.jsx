import avtar from "../../assets/avatar1.png";

const LeaderBoardCard = ({ title, winnerName, items }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <img src={avtar} alt="winner" className="w-16 mb-3 mx-auto rounded-full" />
          <h3 className="text-sm font-semibold mb-3 text-green-700">{winnerName}</h3>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default LeaderBoardCard
  