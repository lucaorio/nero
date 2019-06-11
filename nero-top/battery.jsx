// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1";
export const refreshFrequency = 60000;
export const initialState = "B ...";

export const updateState = event => {
  const battery = parseInt(event.output);
  const batteryval = battery.toString().padStart(2, "0");
  let color;

  if (battery > 6 && battery < 100) color = "#ffffff";
  else if (battery < 6) color = "#d0021b";
  else color = "#7ed321";

  return {
    val: batteryval,
    col: color
  };
};

export const render = output => (
  <section>
  B
  <div className="bar">
    <div className="progress" style={{
      width: output.val + "%",
      backgroundColor: output.col
    }}></div>
  </div>
  </section>
);

export const className = {
  top: "0px",
  right: "0px",
  boxSizing: "border-box",
  borderLeft: "1px solid #1c1c1c",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  "& .bar": {
    display: "inline-block",
    boxSizing: "border-box",
    marginLeft: "8px",
    width: "20px",
    height: "7px",
    border: "1px solid #333333",
    padding: "2px",
    "& .progress": {
      height: "1px",
    },
  },
};
