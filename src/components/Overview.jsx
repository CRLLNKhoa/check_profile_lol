import React, { useEffect } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

function Overview({ data }) {
  console.log(data);
  return (
    <div className="py-2 grid grid-cols-5 gap-4">
      <div className="flex flex-col col-span-5 lg:col-span-1 items-center justify-center border p-6 rounded-xl">
        <div className="w-[80px] h-[80px] bg-green-800 flex justify-center items-center rounded-full">
          {data ? (
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${data?.profileIconId || "5764"}.png`}
              alt="avatar"
              className="w-[72px] h-[72px] border-4 rounded-full"
            />
          ) : (
            <div className="flex items-center animate-spin border-t-4 border-slate-600 justify-center bg-white w-[80%] h-[80%] rounded-full">
              <div className="bg-green-800 w-[80%] h-[80%] rounded-full"></div>
            </div>
          )}
        </div>

        {data && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold">{data?.name || "Cá heo chin"}</h2>
            <p className="text-xs">Level: {data?.summonerLevel || "488"}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center border p-6 rounded-xl lg:col-span-2 col-span-5">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-bold">Current rank</h2>
          <p className="text-xs">Ranked solo/dual</p>
        </div>
        <div className="flex items-center">
          <img
            src="./plat.webp"
            alt="avatar"
            className="w-32 h-32 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-bold flex gap-2">
              Platinum 4{" "}
              <p className="text-green-600 flex items-center text-[12px] gap-1">
                <BiSolidUpArrow size={10} /> 30LP
              </p>
            </h1>
            <p className="text-[12px]">20W/12L (55.6%)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border p-6 rounded-xl lg:col-span-2 col-span-5">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-bold">Favourite role</h2>
        </div>
        <div className="flex h-full gap-2 items-center">
          <img
            src="./mid.webp"
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-bold flex gap-2">Middle</h1>
            <p className="text-[12px]">80%| Win Ratio 57%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
