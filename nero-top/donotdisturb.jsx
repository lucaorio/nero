// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "defaults -currentHost read com.apple.notificationcenterui doNotDisturb";
export const refreshFrequency = 5000;
export const initialState = "Dnd ...";

export const updateState = event => parseInt(event.output) * 100;

export const render = output => (
  <section>
  Dnd
  <div className="bar">
    <div className="progress" style={{width: output + "%"}}></div>
  </div>
  </section>
);

export const className = {
  top: "0px",
  left: "0px",
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
