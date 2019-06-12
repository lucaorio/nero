// this widget is part of Nero -> https://github.com/lucaorio/nero
// https://github.com/MusicPlayerDaemon/mpc (via ncmpcpp)
export const command = "sh ./nero-bottom/mpc.sh";
export const refreshFrequency = 4000;
export const initialState = "○ mpc stopped...";

export const updateState = event => {
  let status = initialState;

  if (event.output) {
    const array = event.output.split(/((?!^)\{.*?\})/);
    const playingState = array[0].replace(/[{}]/g, "");
    const song = array[1].replace(/[{}]/g, "");
    if (playingState === "paused") status = `○ ${song}`;
    else if (playingState === "playing") status = `‣ ${song}`;
  }

  return status;
}

export const render = output => (
  <section>
    <div>{output}</div>
  </section>
);

export const className = {
  bottom: "0px",
  left: "102px",
  boxSizing: "border-box",
  width: "auto",
  maxWidth: "220px",
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
