// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "sh ./nero-top/netspeeds.sh";
export const refreshFrequency = 5000;

export const initialState = {
  dwl: "D/U ...",
  upl: "D/U ..."
};

const speed = (usage, dwl) => {
  if (usage < 1000) return { val: usage / 100, col: "#ffffff" };
  else return { val: 100, col: dwl ? "#7ed321" : "#d0021b" };
};

export const updateState = event => {
  const data = event.output.split("#");

  return {
    dwl: speed(Math.round(data[0]), true),
    upl: speed(Math.round(data[1]), false)
  };
};

export const render = output => (
  <section>
  D/U
  <div className="bar">
    <div className="progress download" style={{
      width: output.dwl.val + "%",
      backgroundColor: output.dwl.col
    }}></div>
    <div className="progress upload" style={{
      width: output.upl.val + "%",
      backgroundColor: output.upl.col
    }}></div>
  </div>
  </section>
);

export const className = {
  top: "0px",
  right: "177px",
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
    padding: "1px 2px",
    "& .progress": {
      height: "1px",
    },
    "& .upload": {
      marginTop: "1px",
    },
  },
};
