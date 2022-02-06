

export default (params) => {
  const { text, level, selected, disabled, inactive } = params;
  return {
    text,
    level,
    selected,
    disabled,
    inactive
  }
}