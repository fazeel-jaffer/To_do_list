exports.getDate=function (){
const today = new Date();
const day = "";
const options = {
     weekday: "long",
     day: "numeric",
     month: "long"
};
  return today.toDateString("en-US", options);
  
}
exports.getDay=function(){
  const today = new Date();
  const day = "";
  const options = {
       weekday: "long"
  };
  return today.toDateString("en-US", options);
  }