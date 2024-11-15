import React from "react";
import {
  chairColors,
  cushionColors,
  useCustomization,
} from "../context/Customization";

export default function Configurator() {
  const {
    material,
    setMaterial,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="fixed right-[24px] w-[320px] bottom-[10vh] text-white p-[16px] font-['Helvetica']">
      <div className="conf_section">
        <div className="conf-section-title font-bold uppercase">
          Chair Material
        </div>

        <div className="conf-section-values flex items-center gap-[16px] mt-[24px]">
          <div
            className="item hover:opacity-[0.8] cursor-pointer transition-opacity duration-[400ms]"
            onClick={() => setMaterial("leather")}
          >
            <div
              className={`item-label font-[12px] text-gray-300 hover:opacity-[0.8] hover:cursor-pointer ${
                material === "leather" && "text-white"
              }`}
            >
              Leather
            </div>
          </div>

          <div
            className="item hover:opacity-[0.8] cursor-pointer transition-opacity duration-[400ms]"
            onClick={() => setMaterial("fabric")}
          >
            <div
              className={`item-label font-[12px] text-gray-300 hover:opacity-[0.8] hover:cursor-pointer ${
                material === "fabric" && "text-white"
              }`}
            >
              Fabric
            </div>
          </div>
        </div>
      </div>

      <div className="conf_section mt-10">
        <div className="conf-section-title font-bold uppercase">
          Chair Colour
        </div>

        <div className="conf-section-values flex-wrap flex items-center gap-[24px] mt-[24px]">
          {chairColors.map((item, id) => (
            <div
              key={id}
              className="item flex flex-col gap-[8px] flex-wrap text-white"
              onClick={() => setChairColor(item)}
            >
              <div
                className={`w-[32px] h-[32px] rounded-full border-[2px]  ${
                  item.color === chairColor.color
                    ? "border-white"
                    : "border-gray-700"
                }`}
                style={{ backgroundColor: item.color }}
              />
              <div className="capitalize">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="conf_section mt-10">
        <div className="conf-section-title font-bold uppercase">
          Cushion Colour
        </div>

        <div className="conf-section-values flex-wrap flex items-center gap-[24px] mt-[24px]">
          {cushionColors.map((item, id) => (
            <div
              key={id}
              className="item flex flex-col gap-[8px] flex-wrap text-white"
              onClick={() => setCushionColor(item)}
            >
              <div
                className={`w-[32px] h-[32px] rounded-full border-[2px]  ${
                  item.color === cushionColor.color
                    ? "border-white"
                    : "border-gray-700"
                }`}
                style={{ backgroundColor: item.color }}
              />
              <div className="capitalize">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
