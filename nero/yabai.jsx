// widget part of "Nero Yabai" -> https://github.com/lucaorio/nero-yabai
// requires https://github.com/koekeishiya/yabai
// requires http://tracesof.net/uebersicht

// ==========================================================================
// custom settings
// ==========================================================================

const forcedTheme = false // false, 'dark', or 'light'

const lightTheme = {
  // regular indicators
  txtColor: 'rgba(255, 255, 255, 1)',
  bgColor: 'rgba(0, 0, 0, 0.2)',
  borderWidth: '1px',
  borderColor: 'rgba(255, 255, 255, 0.2)',

  // active indicators
  txtColorActive: 'rgba(29, 36, 26, 1)',
  bgColorActive: 'rgba(255, 255, 255, 1)',
  borderWidthActive: '1px',
  borderColorActive: 'rgba(255, 255, 255, 1)',
}

const darkTheme = {
  // regular indicators
  txtColor: 'rgba(255, 255, 255, 1)',
  bgColor: 'rgba(255, 255, 255, 0.18)',
  borderWidth: '1px',
  borderColor: 'rgba(255, 255, 255, 0.2)',

  // active indicators
  txtColorActive: 'rgba(29, 36, 26, 1)',
  bgColorActive: 'rgba(255, 255, 255, 1)',
  borderWidthActive: '1px',
  borderColorActive: 'rgba(255, 255, 255, 1)',
}

// ==========================================================================
// get all data from yabai and macos, dispatch an event
// ==========================================================================

import { run } from 'uebersicht'
export const refreshFrequency = false
export const initialState = 'Loading Yabai...'

export const command = (dispatch) => {
  run('defaults read -g AppleInterfaceStyle 2>/dev/null').then((themeData) => {
    run('/usr/local/bin/yabai -m query --spaces').then((spacesData) => {
      run('/usr/local/bin/yabai -m query --windows').then((windowData) => {
        const spaces = JSON.parse(spacesData)
        const windows = JSON.parse(windowData || {})
        const theme = themeData ? 'dark' : 'light'
        const output = { spaces, windows, theme }
        dispatch({ type: 'DATA_READY', output })
      })
    })
  })
}

// ==========================================================================
// update the state
// ==========================================================================

export const updateState = (event, previousState) => {
  // if data is ready, show the updated state
  // otherwise if there was a previous state, show it before updating the layout
  // as a fallback, show an initial placeholder for no current nor previous data
  if (event.output && event.type === 'DATA_READY') {
    return (
      <div className={forcedTheme || event.output.theme}>
        {getSpaces(event.output.spaces)}
        {getWindow(event.output.windows)}
      </div>
    )
  }
  else if (previousState) return previousState
  else return initialState
}

// ==========================================================================
// simply render whatever the update state function returns
// ==========================================================================

export const render = (output) => output

// ==========================================================================
// get information about spaces and build the proper layout
// ==========================================================================

const getSpaces = (spaces) => {
  const displays = spaces.reduce((groups, item) => {
    const val = item['display']
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})

  if (Object.keys(displays).length > 1) return getMultiScreenSpaces(displays)
  else return getSingleScreenSpaces(displays['1'])
}

const getSpaceMode = (spaces) => {
  const active = spaces.filter((space) => space['has-focus'])[0]
  if (active) return active.type
  else return 'unk'
}

// ==========================================================================
// render spaces for single screen
// ==========================================================================

const getSingleScreenSpaces = (spaces) => {
  const active = spaces.filter((space) => space['has-focus'])[0]
  const flt = active.type === 'float' ? true : false
  const bsp = active.type === 'bsp' ? true : false

  return (
    <div className="displays">
      <div className={`badge badge-l ${flt && 'active'}`}>flt</div>
      <div className={`badge badge-r ${bsp && 'active'}`}>bsp</div>
      {spaces.map((space) => (
        <div
          key={space.id}
          className={space['has-focus'] ? 'badge active' : 'badge'}>
          {space.index}
        </div>
      ))}
    </div>
  )
}

// ==========================================================================
// render spaces for multi-screen
// ==========================================================================

const getMultiScreenSpaces = (displays) => {
  return Object.keys(displays).map((displayKey) => {
    const spaces = displays[displayKey]
    const active = spaces.filter((space) => space['has-focus'])[0]
    const flt = active ? (active.type === 'float' ? true : false) : false
    const bsp = active ? (active.type === 'bsp' ? true : false) : false

    return (
      <div key={displayKey} className="displays">
        <div className={`badge badge-l ${flt && 'active'}`}>flt</div>
        <div className={`badge badge-r ${bsp && 'active'}`}>bsp</div>
        {spaces.map((space) => (
          <div
            key={space.id}
            className={space['has-focus'] ? 'badge active' : 'badge'}>
            {space.index}
          </div>
        ))}
      </div>
    )
  })
}

// ==========================================================================
// render window properties (sticky/floating)
// ==========================================================================

const getWindow = (windows) => {
  const active = windows.filter((window) => window['has-focus'])[0]
  const sticky = active ? active['is-sticky'] : 0
  const floating = active ? active['is-floating'] : 0

  return (
    <div className="window">
      <div className={sticky ? 'badge active' : 'badge'}>sticky</div>
      <div className={floating ? 'badge active' : 'badge'}>floating</div>
    </div>
  )
}

// ==========================================================================
// styling and css
// ==========================================================================

export const className = {
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  boxSizing: 'border-box',
  width: "100%",
  padding: '5px 4px',
  fontFamily: '-apple-system',
  fontWeight: '500',
  fontSize: '11px',
  lineHeight: '12px',
  letterSpacing: '-0.35px',

  '& > div > div': {
    display: 'inline-block',
    width: 'auto',
  },

  '& .badge': {
    display: 'inline-block',
    marginRight: '6px',
    borderRadius: '4px',
    padding: '6px 12px',
    // note: mix-blend-mode seems no to be working with uebersicht, and
    // backdrop-filter have been affected by a bug for a while now
    // https://github.com/felixhageloh/uebersicht/issues/172
    // backdropFilter: 'saturate(140%) blur(60px) brightness(100%) contrast(98%)',
  },

  '& .badge.badge-l': {
    marginRight: '1px',
    borderRadius: '4px 0px 0px 4px',
  },

  '& .badge.badge-r': {
    marginRight: '10px',
    borderRadius: '0px 4px 4px 0px'
  },

  // theme based properties
  '& > div.light .badge': {
    color: lightTheme.txtColor,
    backgroundColor: lightTheme.bgColor,
    boxShadow: `0px 0px 0px ${lightTheme.borderWidth} ${lightTheme.borderColor}`,

    '&.active': {
      color: lightTheme.txtColorActive,
      backgroundColor: lightTheme.bgColorActive,
      boxShadow: `0px 0px 0px ${lightTheme.borderWidthActive} ${lightTheme.borderColorActive}`,
    },

    '&.badge-l': {
      clipPath: `inset(-${lightTheme.borderWidth} 0px -${lightTheme.borderWidth} -${lightTheme.borderWidth})`,
    },
  },

  '& > div.dark .badge': {
    color: darkTheme.txtColor,
    backgroundColor: darkTheme.bgColor,
    boxShadow: `0px 0px 0px ${darkTheme.borderWidth} ${darkTheme.borderColor}`,

    '&.active': {
      color: darkTheme.txtColorActive,
      backgroundColor: darkTheme.bgColorActive,
      boxShadow: `0px 0px 0px ${darkTheme.borderWidthActive} ${darkTheme.borderColorActive}`,
    },

    '&.badge-l': {
      clipPath: `inset(-${darkTheme.borderWidth} 0px -${darkTheme.borderWidth} -${darkTheme.borderWidth})`,
    },
  },

  '& .window': {
    position: 'absolute',
    bottom: '4px',
    right: '-2px',
    display: 'inline-block',
  },

  '& .displays': {
    marginRight: '20px',
  },
}
