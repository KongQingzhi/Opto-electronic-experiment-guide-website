const groupByClass = array => {
  const newArray = [];
  if (array.length <= 1) {
    return array;
  }
  array.forEach(element => {
    if (newArray.length === 0) {
      newArray.push({ c_name: element.c_name, list: [ element ] });
    } else {
      const flag = newArray.some(item => {
        if (item.c_name === element.c_name) {
          item.list.push(element);
          return true;
        }
        return false;
      });
      if (!flag) {
        newArray.push({ c_name: element.c_name, list: [ element ] });
      }
    }
  });
  return newArray;
};

module.exports = groupByClass;
