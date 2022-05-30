// TODO: 改成用moment来做，确保UTC时间问题
var moment = require('moment');

// export const now = Math.round(new Date().getTime()).toString(); //获取当前时间
// export const end = new Date("2022-06-14 00:00:00").getTime(); //设置截止时间

export const now = moment().local().valueOf()
export const end = moment("2022-06-14 00:00:00").local().valueOf()
export const timeDifference = (() =>{
  console.log(end)
  console.log(now)
  return end - now
})