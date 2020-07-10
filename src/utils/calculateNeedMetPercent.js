import {
  MAX_FOR_ITEM,
  MAX_LEVEL,
} from './constants';

const calculateNeedMetPercent = (need, items) => {
  const itemsCheck = [...items];
  if (!itemsCheck.length) {
    return 0;
  }
  const maxForNeed = itemsCheck.length * MAX_FOR_ITEM * MAX_LEVEL;
  let needScore = 0;
  itemsCheck.forEach((item) => {
    needScore += (item[need] || 0) * item.level;
  });
  needScore = Math.min((needScore / maxForNeed) * 100, 100);
  if (needScore < 0) {
    needScore = 0;
  }
  return needScore;
};

export default calculateNeedMetPercent;
