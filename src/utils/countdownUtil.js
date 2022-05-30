// TODO: 改成用moment来做，确保UTC时间问题
// import "moment";

export const now = Math.round(new Date().getTime()).toString(); //获取当前时间
export const end = new Date("2022-06-14 00:00:00").getTime(); //设置截止时间  UTC-0     ///UTC + 8
export const timeDifference = (() =>{
  return end - now
})