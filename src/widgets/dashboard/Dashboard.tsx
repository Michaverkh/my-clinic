import React, { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { dashbordKeys } from "./constants";
import { IDashBoardRenderData } from "entities/dashboard/interafces";

export interface IDashBoard {
  dashBoardRenderData: IDashBoardRenderData[];
  axisBottomText?: string;
  axisLeftText?: string;
}

export const DashBoard: FC<IDashBoard> = ({
  dashBoardRenderData,
  axisBottomText = "X",
  axisLeftText = "Y",
}) => {
  const tickRotation: number = dashBoardRenderData.length > 3 ? 30 : 0;

  return (
    <ResponsiveBar
      //@ts-ignore
      data={dashBoardRenderData}
      keys={dashbordKeys}
      indexBy="name"
      theme={{
        axis: {
          legend: {
            text: {
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "500",
            },
          },
          ticks: {
            text: {
              fontFamily: "Roboto",
              fontSize: "14px",
            },
          },
        },
        legends: {
          text: {
            fontFamily: "Roboto",
            fontSize: "14px",
          },
          title: {
            text: {
              fontFamily: "Roboto",
              fontSize: "14px",
            },
          },
          ticks: {
            text: {
              fontFamily: "Roboto",
              fontSize: "14px",
            },
          },
        },
        annotations: {
          text: {
            fontFamily: "Roboto",
            fontSize: "14px",
          },
        },
      }}
      margin={{ top: 60, right: 240, bottom: 150, left: 70 }}
      padding={0.1}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: tickRotation,
        legend: `${axisBottomText}`,
        legendPosition: "middle",
        legendOffset: 100,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `${axisLeftText}`,
        legendPosition: "middle",
        legendOffset: -60,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      enableGridY={false}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 30,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};
