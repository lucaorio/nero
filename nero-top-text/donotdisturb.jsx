// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "defaults -currentHost read com.apple.notificationcenterui doNotDisturb";
export const refreshFrequency = 5000;
export const initialState = "Dnd: ...";

export const updateState = event => {
  const output = parseInt(event.output);

  if (output === 0) status = "○";
  else if (output === 1) status = "●";
  else status = "?";

  return `Dnd: ${status}`;
};

export const render = output => <div>{output}</div>;

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
};
