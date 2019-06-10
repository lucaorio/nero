// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "date +'%d %b - %H:%M'";
export const refreshFrequency = 30000;
export const initialState = "...";

export const updateState = event => {
  if (event.error) return event.error;
  return event.output;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "calc(50% - 100px)",
  width: "200px",
  boxSizing: "border-box",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  textAlign: "center",
};
