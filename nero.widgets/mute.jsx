// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "osascript -e 'get volume settings'";
export const refreshFrequency = 5000;

export const initialState = "Mut: ...";

export const updateState = event => {
  const data = event.output.split(",");
  const muted = data[data.length - 1].slice(0, -1).split(":")[1];

  if (muted === "true") status = "●";
  else if (muted === "false") status = "○";
  else status = "?";

  return `Mut: ${status}`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  left: "164px",
  boxSizing: "border-box",
  borderRight: "1px solid #1c1c1c",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
