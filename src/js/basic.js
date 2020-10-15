export default function getSpecial(object) {
  const { special } = object;

  const result = []; let
    tempArr = [];

  for (const value of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = value;
    tempArr = [];
    tempArr.push(id, name, icon, description);
    result.push(tempArr);
  }

  return result;
}
