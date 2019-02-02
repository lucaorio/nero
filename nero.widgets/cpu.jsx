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
  boxSizing: "border-box",
  top: "0px",
  right: "73px",
  borderLeft: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
