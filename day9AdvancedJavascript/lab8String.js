/* 1. เขียนฟังก์ชั่น ucFirst(string) โดยทำคืนค่าเป็น String เดิม แต่ตัวแรกของ String กลายเป็นตัวพิมพ์ใหญ่ */

function ucFirst(txt1){
    let upFs = txt1.toUpperCase();
    let ans = upFs.slice(0,1) + txt1.slice(1);
    return ans;
}

console.log(ucFirst("hello hi hay"));

/* 2. เขียนฟังชั่นก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า "xxx" หรือ "viagra" ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false */

function checkSpam(txt2){
    let ans2 = false;
    if ((txt2.indexOf("xxx") >= 0 )|| (txt2.indexOf("viagra") >= 0)){
        ans2 = true;
    }
    return ans2;
}


checkSpam("txt2 fdsfd viagra");


/* 3. เขียนฟังก์ชั่นที่ truncate (str,maxlength) โดยฟังก์ชั่นดังกล่าวจะเช็คว่า String 
ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย "..." */

function truncate(str,maxlength){
    let txt3="";
    if (str.length > maxlength) {
        txt3 += str.slice(0,maxlength) + "...";
    } else txt3 = str;

    return txt3;

}

truncate("abcdefghijk",3);

/* 4. เขียนฟังก์ชั่นที่ extractCurrencyValue (string,rate) โดยที่ฟังก์ชั่นดังกล่าวจะแปลง String 
ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง rate จาก parameters ตัวที่สอง ที่ส่งมาให้ */

function extractCurrencyValue (str4,rate){
    let num1 = "";

    for (let num2 of str4){
        if ( !isNaN(str4[num2])) {
            num1 += str4.slice(num2)
            return (Number(num1) * rate);

        } 
    }
}


extractCurrencyValue("$120",30.5);