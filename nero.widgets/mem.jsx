// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command =
  'ESC=`printf "e"`; ps -A -o %mem | awk \'{s+=$1} END {print "" s}\'';
export const refreshFrequency = 30000;

export const initialState = "Mem: ...";

export const updateState = event => {
  const mem = parseInt(event.output);
  const memval = mem.toString().padStart(2, "0");

  if (mem <= 80) return `Mem: ${memval}%`;
  else return "Mem: !!!";
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "146px",
  boxSizing: "border-box",
  borderLeft: "1px solid #1c1c1c",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
