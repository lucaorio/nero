// requires https://github.com/koekeishiya/chunkwm
export const command = "sh ./nero.widgets/chunkwm.sh";
export const refreshFrequency = 1000;

export const initialState = "[00-...] ...";
export const updateState = event => event.output;
export const render = output => <div>{output}</div>;

export const className = {
  boxSizing: "border-box",
  top: "0px",
  left: "0px",
  borderRight: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
