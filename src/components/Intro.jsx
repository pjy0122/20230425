import { FaChessRook } from "react-icons/fa";
import { CONTRACT_ADDRESS } from "../web3.config";

// 1~1000번까지 나오게 하는 함수
// Math.random()*1000을 쓰면 0~1000까지 나오는데 소수점 0.999등이 나오는데
// Math.floor를 써서 내림을 해줘서 +1로 인해 랜덤의 정수가 1부터 1000까지....
const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    // bg-gradient-to-b 아래로 b==bottom
    <div className="bg-gradient-to-b from-transparent to-green-400 pt-10">
      {/* 그라데이션만 헤더크기 넘치게 해서 끝까지 보여지게 표시 */}
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 text-9xl truncate opacity-40 pointer-events-none">
          DaDenBu
        </div>
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          DaDenBu
          <div className="bg-yellow-300 w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <FaChessRook size={16} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-blue-300 ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          <span className="bg-black text-green-400 font-bold">DaDenBu</span>
          란(.env란 "environment"의 약어)은 소프트웨어 개발에서 자주 사용되는
          파일 형식 중 하나입니다. 이 파일은 소프트웨어 개발자들이 프로젝트에서
          사용되는 환경 변수(environment variable)를 저장하는 데 사용됩니다.
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="text-gray-300">총 NFT</div>
            <div className="font-bold">{totalNft}</div>
          </div>
          <div className="ml-4">
            <div className="text-gray-300">발행된 NFT</div>
            <div className="font-bold">{mintedNft}</div>
          </div>
          <div className="ml-4">
            <div className="text-gray-300">내 NFT</div>
            <div className="font-bold">{myNft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
