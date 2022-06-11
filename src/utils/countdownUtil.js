// TODO: 改成用moment来做，确保UTC时间问题
var moment = require('moment');

// export const now = Math.round(new Date().getTime()).toString(); //获取当前时间
// export const end = new Date("2022-06-14 00:00:00").getTime(); //设置截止时间

const nowtime = moment();
export const timeInShanghai = nowtime.tz('Asia/Shanghai').valueOf()
export const endtime = moment.tz("2022-07-05 00:00:00",'Asia/Shanghai').valueOf()
export const now = moment().local().valueOf()
export const end = moment("2022-07-05 00:00:00").local().valueOf()
export const timeDifference = (() =>{
  console.log(timeInShanghai)
  console.log(endtime)
  return endtime - timeInShanghai
})