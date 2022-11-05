import I4G from "../assets/I4G.png";
import midfooter from "../assets/midfooter.png";
import zuriintern from "../assets/zuri-intern.png";

export default function Foot() {
  return (
    <>
      <footer className="foot">
        <img src={zuriintern} alt="" />
        <img src={midfooter} alt="" />
        <img src={I4G} alt="" />
      </footer>
    </>
  );
}
