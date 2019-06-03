// this widget is part of Nero -> https://github.com/lucaorio/nero
// requires https://github.com/arybczak/ncmpcpp (mpc based)
// or https://github.com/MusicPlayerDaemon/mpc
export const command = 'sh ./nero.widgets/mpc.sh';
export const refreshFrequency = 4000;

export const initialState = "...";

export const updateState = event => {
  const array = event.output.split(/((?!^)\{.*?\})/);
  const statusString = array[0].replace(/[{}]/g, "");
  let song = array[1].replace(/[{}]/g, "");
  let status;

  if (statusString === 'paused') status = "○";
  else if (statusString === 'playing') status = "‣";
  else {
    status = "○";
    song = "mpc not runnning..."
  }

  return `${status} ${song}`;
}

export const render = output => (<section><div>{output}</div></section>);

export const className = {
  bottom: "0px",
  left: "102px",
  boxSizing: "border-box",
  width: "220px",
  borderRight: "1px solid #1c1c1c",
  padding: "8px 12px 5px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  "& div": {
    width: "100%",
    overflow: "hidden",
    display: "inline-block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left"
  }
};
