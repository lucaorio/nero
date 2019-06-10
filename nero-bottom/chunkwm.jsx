// this widget is part of Nero -> https://github.com/lucaorio/nero
// requires https://github.com/koekeishiya/chunkwm
export const command = "sh ./nero-bottom/chunkwm.sh";
export const refreshFrequency = 1000;
export const initialState = "[00-...] ...";

export const updateState = event => event.output || initialState;
export const render = output => <div>{output}</div>;

export const className = {
  bottom: "0px",
  left: "0px",
  boxSizing: "border-box",
  borderRight: "1px solid #1c1c1c",
  padding: "8px 12px 5px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
