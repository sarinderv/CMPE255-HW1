import React from "react";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

import allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = (props) => {
  const dom = props.data.map((d) => d.corr);
  const myColor = scaleLinear().domain(dom).range(["white", "blue"]);
  const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21],
  };

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <React.Fragment>
            {geographies.map((geo) => {
              const cur = allStates.find((s) => s.val === geo.id);
              const state = props.data.find((s) => s.state === cur.id) || {
                state: "??",
                corr: 0,
              };
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={myColor(state.corr)}
                />
              );
            })}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              const corr = props.data.find((s) => s.state === cur.id) || { state: "??", corr: 0};
              if (!corr) console.error("no corr");
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {corr.state}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {corr.state}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </React.Fragment>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
