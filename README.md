# ระบบสุ่มข้อความจากภายในอาร์เรย์
เว็บแอพลิเคชันตัวนี้เป็น**ระบบแม่พิมพ์ตัวต้นแบบ**ของระบบการสุ่มแบบสามารถรันข้อความได้อัตโนมัติในบางครั้งเวลาที่ทางสภาต้องมีการจัดทำกิจกรรมดังกล่าวขึ้นก็อาจจะต้องมีการหาเว็บสุ่มที่สามารถจะมี Reaction กับผู้เข้าแข่งขันได้ แต่เนื่องจากเว็บที่มีระบบสุ่มคล้ายๆ กับตัวต้นแบบที่ได้จัดทำขึ้นมาในครั้งนี้ไม่สามารถหาได้/หาได้แต่ยากมาก จึงได้มีการพัฒนาเพื่อการใช้งานเองสำหรับกิจกรรมภายในสภานักเรียน

### หลักการที่ใช้งานของเว็บแอพนี้
- Loop
- Arrays *(Slicing Data)*
- Random
- DOM *(Document Object Model)*
- Function of Asynchronous/Synchronous *(await async)*

### เทคโนโลยีที่มีการใข้งาน
- HTML
- CSS
- JavaScript

### โค้ดตัวอย่างที่ใช้ในการรันข้อความ
โค้ดที่ปรากฏดังกล่าวนี้เป็นส่วนหลักที่สามารถทำให้ระบบนี้เกิดขึ้นได้ 
```js
/*

(Sample of) Random Text System
Made by.. IT of Council PCSHSST (2565-2566)
Date: 2023-04-24 16:30 (GMT+7)
Dump by : @_ngixx (TheNongice Wasawat)

*/

// Asynchronus function to random text position
setInterval(() => {
    if (press_time % 2 == 1) {
        if (allPos === -1) {
            randomTextHtml.innerHTML = "Out of range random text!";
            status_btn.innerHTML = "Disabled btn!!";
            status_btn.disabled = true;
            return false;
        }
        nums = changeTextRandom();
    } else {
        if (active === 1) {
            TextClues.splice(nums, 1);
            allPos--;
            console.log(TextClues);
            active = 0;
            console.log(`allPos have are : ${allPos}`);
        }
    }
}, 10)

```

### เทคโนโลยีที่อาจจะมีการนำมาใช้เพิ่มเติมภายหลัง
- JS Framework *(React, **NextJS**, Svelte, VueJS)*
- CSS Framework *(**Bootstrap**, Tailwind CSS, MUI)*
- WebSocket JS *(Socket.io)*
- ExpressJS *(ใช้เพื่อทำรบบแอดข้อความการสุ่มจากระยะไกลได้)*

### จัดทำโดย
คณะกรรมการนักเรียนโรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล (ประจำปีการศึกษา 2565-2566) ฝ่ายเทคโนโลยีและสารสนเทศ