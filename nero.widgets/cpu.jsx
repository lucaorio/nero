// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command =
  'ESC=`printf "e"`; ps -A -o %cpu | awk \'{s+=$1} END {printf("%.2f",s/8);}\'';
export const refreshFrequency = 10000;

export const initialState = "Cpu: ...";

export const updateState = event => {
  const cpu = parseInt(event.output);
  const cpuval = cpu.toString().padStart(2, "0");

  if (cpu <= 80) return `Cpu: ${cpuval}%`;
  else return "Cpu: !!!";
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "73px",
  boxSizing: "border-box",
  borderLeft: "1px solid #1c1c1c",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
