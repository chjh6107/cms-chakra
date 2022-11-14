function calcHsla(
  hsla = "",
  { addHue = 0, addSat = 0, addLight = 0, addAlpha = 0 }
) {
  const regexp =
    /hsla\s*\(\s*(?<hue>([0-9])|([0-2][0-9]+)|(3[0-5][0-9])|360)\s*,\s*(?<sat>([0-9]{1,2})|100)%\s*,\s*(?<light>([0-9]{1,2})|100)%\s*,\s*(?<alpha>[01](\.[0-9]*)?)\)/;
  const matched = hsla.match(regexp);

  if (!matched?.groups) return hsla;
  const { hue, sat, light, alpha } = matched.groups;
  const calcHue = (Number(hue) + addHue).toFixed(2);
  const calcSat = (Number(sat) + addSat).toFixed(2);
  const calcLight = (Number(light) + addLight).toFixed(2);
  const calcAlpha = (Number(alpha) + addAlpha).toFixed(2);

  return `hsla(${calcHue}, ${calcSat}%, ${calcLight}%, ${calcAlpha})`;
}
