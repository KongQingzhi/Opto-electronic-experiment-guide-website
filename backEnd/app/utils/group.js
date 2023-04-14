

const groupByLesson = array => {
  const newArray = [];
  if (array.length <= 1) {
    return array;
  }
  array.forEach(element => {
    if (newArray.length === 0) {
      newArray.push({ l_name: element.l_name, l_content: element.l_content, list: [ element ] });
    } else {
      const flag = newArray.some(item => {
        if (item.l_name === element.l_name) {
          item.list.push(element);
          return true;
        }
        return false;
      });
      if (!flag) {
        newArray.push({ l_name: element.l_name, l_content: element.l_content, list: [ element ] });
      }
    }
  });
  return newArray;
};

module.exports = groupByLesson;
