export const isDarkMode = true

// Noncolors
export const BLACK = '#000000'
export const PRIMARY_BLUE = '#3B4BAF'
export const RED = '#ED2D38'

// DARK MODE
export const FIRST_LEVEL_DARK = '#0E1818'
export const FLOATING_BG = isDarkMode ? '#252642' : '#F1F2F2'
export const HIGH_EMPHASIS_WHITE = 'rgba(255,255,255,0.95)'
export const MEDIUM_EMPHASIS_WHITE = 'rgba(255,255,255,0.8)'
export const LOW_EMPHASIS_WHITE = 'rgba(255,255,255,0.6)'

// LIGHT MODE
export const WHITE = '#FFFFFF'
export const LIGHT_GREY = '#606060'
export const MEDIUM_GREY = '#383838'
export const VERY_LIGHT_GREY = '#F1F2F2'

// export const MEDIUM_GREY = '#323447'
export const DARK_GREY = '#1E1E1F'

export const TEXT_COLOR_LIGHT = '#606060'
export const TEXT_COLOR_DARK = '#252627'

//
export const DARK_FEED_BG = '#323447'
export const LIGHT_FEED_BG = '#F0F1F2'

// BACKGROUNDS
export const MAIN_BG_COLOR = isDarkMode ? FIRST_LEVEL_DARK : WHITE
export const FEED_BG_COLOR = isDarkMode ? FIRST_LEVEL_DARK : WHITE
export const SECOND_LEVEL_BG_COLOR = isDarkMode ? FLOATING_BG : WHITE

export const MAIN_CONTRAST_COLOR = isDarkMode ? HIGH_EMPHASIS_WHITE : DARK_GREY
export const SECONDARY_CONTRAST_COLOR = isDarkMode ? MEDIUM_EMPHASIS_WHITE : LIGHT_GREY
export const THIRD_CONTRAST_COLOR = isDarkMode ? LOW_EMPHASIS_WHITE : LIGHT_GREY
export const HEADER_BG_COLOR = isDarkMode ? '#20223C' : '#FFFFFF'
export const ANDROID_STATUS_BAR_COLOR = isDarkMode ? HEADER_BG_COLOR : '#C8C8C8'

export const IMAGE_PLACEHOLDER_COLOR = isDarkMode ? DARK_FEED_BG : '#ecebeb'
