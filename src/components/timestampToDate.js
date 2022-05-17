import dateFormat from "dateformat";

 export default function timeStampToDate (timestamp) {
    return dateFormat(new Date(timestamp * 1000), "dddd, mmm dS").toString();
  };

