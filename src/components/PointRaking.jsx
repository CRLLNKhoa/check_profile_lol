import React from "react";

function PointRaking({data}) {
  return (
    <div className="col-span-5 flex flex-col justify-center items-center mt-12">
      <h1 className="font-bold">Champion Mastery Points ranking</h1>
      <div className="mt-4 flex items-center">
        <div className="flex gap-10 relative justify-center w-full items-end">
            <div className="w-[70%] border-t border-yellow-600 absolute bottom-4"></div>
          <div className="relative w-[52px] z-30 h-[52px] rounded-full bg-yellow-600 flex items-center justify-center">
            <img
              src="https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/khazix.png?V3"
              alt=""
              className="w-[48px] z-20 h-[48px] rounded-full border-2 border-black"
            />
            <img src="./tt7.png" className="absolute z-30 top-[80%] w-8 h-8" />
            <div className="w-0 h-0 border-[20px] border-blue-900 -z-0 border-b-white absolute top-[60%]"></div>
            <div className="w-0 h-0 border-[12px] border-blue-900 -z-0 border-b-white absolute top-[90%]"></div>
            <div className="absolute top-[160%] w-[100px] flex justify-center items-center flex-col">
                <h1 className="font-bold border-b border-yellow-600">KHA'ZIX</h1>
                <span className="text-[10px] font-semibold mt-2">{data[1]?.championPoints ||"150.258"}  điểm</span>
                <span className="text-[10px] font-semibold">Hạng cao nhất S-</span>
            </div>
          </div>
          <div className="relative w-[74px] z-30 h-[74px] rounded-full bg-yellow-600 flex items-center justify-center">
            <img
              src="https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/yasuo.png?V3"
              alt=""
              className="w-[70px] z-20 h-[70px] rounded-full border-2 border-black"
            />
            <img
              src="./tt7.png"
              className="absolute z-30 top-[80%] w-12 h-12"
            />
            <div className="w-0 h-0 border-[32px] border-blue-900 -z-0 border-b-white absolute top-[60%]"></div>
            <div className="w-0 h-0 border-[24px] border-blue-900 -z-0 border-b-white absolute top-[90%]"></div>
            <div className="absolute top-[160%] w-[100px] flex justify-center items-center flex-col">
                <h1 className="font-bold border-b border-yellow-600">YASUO</h1>
                <span className="text-[10px] font-semibold mt-2">{data[0]?.championPoints ||"350.258"} điểm</span>
                <span className="text-[10px] font-semibold">Hạng cao nhất S-</span>
            </div>
          </div>
          <div className="relative w-[52px] z-30 h-[52px] rounded-full bg-yellow-600 flex items-center justify-center">
            <img
              src="https://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Lux.png"
              alt=""
              className="w-[48px] z-20 h-[48px] rounded-full border-2 border-black"
            />
            <img src="./tt7.png" className="absolute z-30 top-[80%] w-8 h-8" />
            <div className="w-0 h-0 border-[20px] border-blue-900 -z-0 border-b-white absolute top-[60%]"></div>
            <div className="w-0 h-0 border-[12px] border-blue-900 -z-0 border-b-white absolute top-[90%]"></div>
            <div className="absolute top-[160%] w-[100px] flex justify-center items-center flex-col">
                <h1 className="font-bold border-b border-yellow-600">LUX</h1>
                <span className="text-[10px] font-semibold mt-2">{data[2]?.championPoints || "233.420"} điểm</span>
                <span className="text-[10px] font-semibold">Hạng cao nhất S-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointRaking;
