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
  boxSizing: "border-box",
  top: "0px",
  left: "164px",
  borderRight: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
