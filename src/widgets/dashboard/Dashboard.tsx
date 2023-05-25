import React, { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { dashboardMockData, dashbordKeys } from "./constants";

export interface IDashBoard {
  axisBottomText?: string;
  axisLeftText?: string;
}

export const DashBoard: FC<IDashBoard> = ({
  axisBottomText = "X",
  axisLeftText = "Y",
}) => {
  return (
    <ResponsiveBar
      data={dashboardMockData}
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
              fontSize: "16px",
            },
          },
        },
        legends: {
          text: {
            fontFamily: "Roboto",
            fontSize: "16px",
          },
          title: {
            text: {
              fontFamily: "Roboto",
              fontSize: "16px",
            },
          },
          ticks: {
            text: {
              fontFamily: "Roboto",
              fontSize: "16px",
            },
          },
        },
        annotations: {
          text: {
            fontFamily: "Roboto",
            fontSize: "16px",
          },
        },
      }}
      margin={{ top: 0, right: 140, bottom: 60, left: 75 }}
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
        tickRotation: 0,
        legend: `${axisBottomText}`,
        legendPosition: "middle",
        legendOffset: 50,
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
      // tooltip={() => {
      //   <div>
      //     <p>Я тултип</p>
      //   </div>;
      // }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};
