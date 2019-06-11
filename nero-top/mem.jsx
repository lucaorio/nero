// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = 'ESC=`printf "e"`; ps -A -o %mem | awk \'{s+=$1} END {print "" s}\'';
export const refreshFrequency = 30000;
export const initialState = "M ...";

export const updateState = event => {
  const mem = parseInt(event.output);
  const memval = mem.toString().padStart(2, "0");
  let color;

  if (mem <= 80) color = "#ffffff";
  else color = "#d0021b";

  return {
    val: memval,
    col: color
  };
};

export const render = output => (
  <section>
  M
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
  right: "118px",
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
