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
    },
  }
}
