// requires https://github.com/sindresorhus/do-not-disturb-cli
export const command = "sh ./nero.widgets/donotdisturb.sh";
export const refreshFrequency = 5000;

export const initialState = "Dnd: ...";

export const updateState = event => {
  const output = event.output.replace(/[^a-zA-Z]/g, "");

  if (output === "off") status = "○";
  else if (output === "on") status = "●";
  else status = "?";

  return `Dnd: ${status}`;
};

export const render = output => <div>{output}</div>;

export const className = {
  boxSizing: "border-box",
  top: "0px",
  left: "103px",
  borderRight: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
