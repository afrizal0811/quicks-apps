export const compConfig = (color) => {
  return {
    components: {
      Button: {
        defaultBg: color,
        defaultHoverBg: color,
      },
      Divider: {
        colorSplit: color ? color : 'black',
        colorTextHeading: color,
      },
      Input: {
        activeShadow: color ? color : '0 0 0 2px rgba(5, 145, 255, 0.1)',
      },
    },
  }
}
