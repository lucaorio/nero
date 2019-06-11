// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "osascript -e 'get volume settings'";
export const refreshFrequency = 5000;
export const initialState = "Mut ...";

export const updateState = event => {
  const data = event.output.split(",");
  const muted = data[data.length - 1].slice(0, -1).split(":")[1];
  return muted === "true" ? 100 : 0;
};

export const render = output => (
  <section>
  Mut
  <div className="bar">
    <div className="progress" style={{width: output + "%"}}></div>
  </div>
  </section>
);

export const className = {
  top: "0px",
  left: "59px",
  boxSizing: "border-box",
  borderRight: "1px solid #1c1c1c",
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
    width: "7px",
    height: "7px",
    border: "1px solid #333333",
    padding: "1px",
    "& .progress": {
      height: "3px",
      backgroundColor: "white",
    },
  },
};
