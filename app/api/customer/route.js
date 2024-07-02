import { NextResponse } from "next/server";



export async function GET(req, res) {
  //  const { mobile } = req.body
  // console.log(mobile)
  const apiURL = "https://smsplus.sslwireless.com/api/v3/send-sms?";
  const apiToken = "3wotq5ai-qqvghx5t-yl4pdokk-qyz7aknu-xco9vpxn";
  const sid = "SHODAGOREXOTP";
  const csmsID = "2934fe343";
  const PhoneNumber ="01768009215";// "01955109710";//"01768009215" ;// 
  const Message = "Your OTP is :1234";
 const smsurl = apiURL + "api_token=" + apiToken + "&sid=" + sid + "&msisdn=" + PhoneNumber + "&csms_id=" + csmsID + "&sms=" + Message


    // const shout = await fetch('https://smsplus.sslwireless.com/api/v3/send-sms?api_token=3wotq5ai-qqvghx5t-yl4pdokk-qyz7aknu-xco9vpxn&sid=SHODAGOREXOTP&msisdn=01768009215&csms_id=2934fe343&sms=Test')
    const sendSms =  await fetch(smsurl)
  return NextResponse.json(smsurl)
}

// const resData = await fetch('https://smsplus.sslwireless.com/api/v3/send-sms?api_token=3wotq5ai-qqvghx5t-yl4pdokk-qyz7aknu-xco9vpxn&sid=SHODAGOREXBULK&msisdn=01768009215&csms_id=2934fe343&sms=Test')
// .then((response) => response.text()).then(result => JSON.parse(result).data);