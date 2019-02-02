export const command = 'date +"%d %b %Y - %H:%M"';
export const refreshFrequency = 30000;

export const initialState = "...";

export const updateState = event => {
  if (event.error) return event.error;
  return event.output;
};

export const render = output => <div>{output}</div>;

export const className = {
  boxSizing: "border-box",
  top: "0px",
  right: "calc(50% - 100px)",
  width: "200px",
  paddingTop: "2px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)",
  textAlign: "center"
};
