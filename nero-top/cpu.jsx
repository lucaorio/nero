// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = 'ESC=`printf "e"`; ps -A -o %cpu | awk \'{s+=$1} END {printf("%.2f",s/8);}\'';
export const refreshFrequency = 10000;
export const initialState = "C ...";

export const updateState = event => {
  const cpu = parseInt(event.output);
  const cpuval = cpu.toString().padStart(2, "0");
  let color;

  if (cpu <= 80) color = "#ffffff";
  else color = "#d0021b";

  return {
    val: cpuval,
    col: color
  };
};

export const render = output => (
  <section>
  C
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
  right: "59px",
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
