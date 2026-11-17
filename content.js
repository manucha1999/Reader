/*
  ไฟล์เนื้อหาของแอป
  - summaries: { title, pdf: "ชื่อไฟล์.pdf", group: "ชื่อกลุ่ม" }  (เปิดอ่านเป็น PDF)
    หรือ { title, text: `...` } แบบข้อความ (ขึ้นต้น "## " หัวข้อ, "> " กล่อง, "- " จุด, **หนา**)
  - quizzes: { id, title, name, group, count, file: "quiz-xxx.js", labels: "kk" }
    ไฟล์ข้อสอบ: window.QUIZ_DATA["id"] = { questions: [{q, choices:[...], answer: 0, explain}] }  (answer นับจาก 0)
*/
window.APP_CONTENT = {
 "appName": "สอบสัสดี 70",
 "subjects": [
  {
   "id": "sassadee",
   "title": "สัสดี",
   "color": "#22a55b",
   "icon": "shield",
   "summaries": [
    {
     "title": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗",
     "pdf": "shotnote-military-service-act-2497.pdf",
     "group": "สรุป"
    },
    {
     "title": "กฎหมายรับราชการทหาร (พิชิตสนามสอบ) – พ.ร.บ.+กฎกระทรวง+MoU",
     "pdf": "shotnote-military-service-exam-guide.pdf",
     "group": "สรุป"
    },
    {
     "title": "การลงรายการบัญชีเรียกฯ (สด.๑๖)",
     "pdf": "shotnote-selection-roll-guide.pdf",
     "group": "สรุป"
    },
    {
     "title": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗ การเรียกและตรวจเลือกทหารกองเกิน",
     "pdf": "shotnote-order29-selection.pdf",
     "group": "สรุป"
    },
    {
     "title": "ตอนที่ ๑–๒ การลงบัญชีทหารกองเกิน",
     "pdf": "shotnote-santi-guide-part1-2.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๓ การเรียกคนเข้ากองประจำการ",
     "pdf": "shotnote-santi-guide-part3.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๔ การยกเว้นและผ่อนผัน",
     "pdf": "shotnote-santi-guide-part4.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๕ การตรวจเลือกคนเข้ากองประจำการ",
     "pdf": "shotnote-santi-guide-part5.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๖ ทะเบียนกองประจำการ",
     "pdf": "shotnote-santi-guide-part6.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๗ การปลด จำหน่าย และย้ายภูมิลำเนาทหาร",
     "pdf": "shotnote-santi-guide-part7.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๘ การควบคุมทหารกองเกินและทหารกองหนุน",
     "pdf": "shotnote-santi-guide-part8.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตอนที่ ๙ ทหารกองประจำการลาและขาดหนีราชการ",
     "pdf": "shotnote-santi-guide-part9.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "ตัวเล่มเต็ม (ฉบับปรับปรุงใหม่ ๒๕๖๑)",
     "pdf": "santi-guide-2529.pdf",
     "group": "คำแนะนำสัสดี ๒๕๒๙"
    },
    {
     "title": "สรุปกำลังพลสำรอง + การเตรียมพล (พ.ร.บ.๒๕๕๘ · ระเบียบ ๒๕๕๙ · ข้อบังคับ ๒๕๑๕ · ระเบียบ ทบ.๒๕๓๑)",
     "pdf": "shotnote-reserve-mobilization-summary.pdf",
     "group": "สรุป"
    },
    {
     "title": "พ.ร.บ.กำลังพลสำรอง พ.ศ. ๒๕๕๘",
     "pdf": "shotnote-reserve-act-2558.pdf",
     "group": "สรุป"
    },
    {
     "title": "กฎกระทรวงกิจการกำลังพลสำรอง ๒๕๕๙",
     "pdf": "shotnote-reserve-ministerial-reg.pdf",
     "group": "สรุป"
    },
    {
     "title": "ข้อบังคับ กห. ว่าด้วยกิจการกำลังพลสำรอง ๒๕๕๙",
     "pdf": "shotnote-reserve-mod-regulation.pdf",
     "group": "สรุป"
    },
    {
     "title": "ระเบียบ ทบ. ว่าด้วยการเรียกกำลังพลสำรองเข้ารับราชการทหาร ๒๕๖๐",
     "pdf": "shotnote-reserve-army-regulation.pdf",
     "group": "สรุป"
    },
    {
     "title": "กฎกระทรวงกิจการกำลังพลสำรอง พ.ศ. ๒๕๕๙",
     "pdf": "reserve-ministerial-reg-2559.pdf",
     "group": "ต้นฉบับ"
    },
    {
     "title": "ข้อบังคับ กห. ว่าด้วยกิจการกำลังพลสำรอง พ.ศ. ๒๕๕๙",
     "pdf": "reserve-mod-regulation-2559.pdf",
     "group": "ต้นฉบับ"
    },
    {
     "title": "ระเบียบ ทบ. ว่าด้วยการเรียกกำลังพลสำรองเข้ารับราชการทหาร พ.ศ. ๒๕๖๐",
     "pdf": "reserve-army-regulation-2560.pdf",
     "group": "ต้นฉบับ"
    }
   ],
   "quizzes": [
    {
     "id": "law-easy",
     "title": "ง่าย",
     "name": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗ · ง่าย",
     "group": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗",
     "count": 100,
     "file": "quiz-law-easy.js",
     "labels": "kk"
    },
    {
     "id": "law-medium",
     "title": "กลาง",
     "name": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗ · กลาง",
     "group": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗",
     "count": 100,
     "file": "quiz-law-medium.js",
     "labels": "kk"
    },
    {
     "id": "law-hard",
     "title": "ยาก",
     "name": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗ · ยาก",
     "group": "พ.ร.บ.รับราชการทหาร พ.ศ. ๒๔๙๗",
     "count": 100,
     "file": "quiz-law-hard.js",
     "labels": "kk"
    },
    {
     "id": "roll-easy",
     "title": "ง่าย",
     "name": "การกรอกข้อความ สด.๑๖ · ง่าย",
     "group": "การกรอกข้อความ สด.๑๖",
     "count": 100,
     "file": "quiz-roll-easy.js",
     "labels": "kk"
    },
    {
     "id": "roll-medium",
     "title": "กลาง",
     "name": "การกรอกข้อความ สด.๑๖ · กลาง",
     "group": "การกรอกข้อความ สด.๑๖",
     "count": 100,
     "file": "quiz-roll-medium.js",
     "labels": "kk"
    },
    {
     "id": "roll-hard",
     "title": "ยาก",
     "name": "การกรอกข้อความ สด.๑๖ · ยาก",
     "group": "การกรอกข้อความ สด.๑๖",
     "count": 100,
     "file": "quiz-roll-hard.js",
     "labels": "kk"
    },
    {
     "id": "order29-easy",
     "title": "ง่าย",
     "name": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗ · ง่าย",
     "group": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗",
     "count": 100,
     "file": "quiz-order29-easy.js",
     "labels": "kk"
    },
    {
     "id": "order29-medium",
     "title": "กลาง",
     "name": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗ · กลาง",
     "group": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗",
     "count": 100,
     "file": "quiz-order29-medium.js",
     "labels": "kk"
    },
    {
     "id": "order29-hard",
     "title": "ยาก",
     "name": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗ · ยาก",
     "group": "คำสั่ง ทบ.ที่ ๒๙/๒๕๑๗",
     "count": 100,
     "file": "quiz-order29-hard.js",
     "labels": "kk"
    },
    {
     "id": "sassadee-easy",
     "title": "ง่าย",
     "name": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙ · ง่าย",
     "group": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙",
     "count": 100,
     "file": "quiz-sassadee-easy.js",
     "labels": "kk"
    },
    {
     "id": "sassadee-medium",
     "title": "กลาง",
     "name": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙ · กลาง",
     "group": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙",
     "count": 100,
     "file": "quiz-sassadee-medium.js",
     "labels": "kk"
    },
    {
     "id": "sassadee-hard",
     "title": "ยาก",
     "name": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙ · ยาก",
     "group": "พิชิตสนามสอบ คำแนะนำสัสดี ๒๕๒๙",
     "count": 100,
     "file": "quiz-sassadee-hard.js",
     "labels": "kk"
    },
    {
     "id": "rsv-easy",
     "title": "ง่าย",
     "name": "กำลังพลสำรองและการเตรียมพล · ง่าย",
     "group": "กำลังพลสำรองและการเตรียมพล",
     "count": 100,
     "file": "quiz-rsv-easy.js",
     "labels": "kk"
    },
    {
     "id": "rsv-medium",
     "title": "กลาง",
     "name": "กำลังพลสำรองและการเตรียมพล · กลาง",
     "group": "กำลังพลสำรองและการเตรียมพล",
     "count": 100,
     "file": "quiz-rsv-medium.js",
     "labels": "kk"
    },
    {
     "id": "rsv-hard",
     "title": "ยาก",
     "name": "กำลังพลสำรองและการเตรียมพล · ยาก",
     "group": "กำลังพลสำรองและการเตรียมพล",
     "count": 100,
     "file": "quiz-rsv-hard.js",
     "labels": "kk"
    }
   ]
  },
  {
   "id": "thai",
   "title": "ภาษาไทย",
   "color": "#ff6b3d",
   "icon": "thai",
   "summaries": [
    {
     "title": "หลักภาษาไทย ฉบับสรุป (๙ เรื่อง)",
     "pdf": "thai-principles-summary.pdf",
     "group": "สรุป"
    }
   ],
   "quizzes": [
    {
     "id": "thai-1",
     "title": "ชุดที่ ๑",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 96,
     "file": "quiz-thai-1.js",
     "labels": "th"
    },
    {
     "id": "thai-2",
     "title": "ชุดที่ ๒",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๒",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 99,
     "file": "quiz-thai-2.js",
     "labels": "th"
    },
    {
     "id": "thai-3",
     "title": "ชุดที่ ๓",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๓",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 97,
     "file": "quiz-thai-3.js",
     "labels": "th"
    },
    {
     "id": "thai-4",
     "title": "ชุดที่ ๔",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๔",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 98,
     "file": "quiz-thai-4.js",
     "labels": "th"
    },
    {
     "id": "thai-5",
     "title": "ชุดที่ ๕",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๕",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 100,
     "file": "quiz-thai-5.js",
     "labels": "th"
    },
    {
     "id": "thai-6",
     "title": "ชุดที่ ๖",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๖",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 99,
     "file": "quiz-thai-6.js",
     "labels": "th"
    },
    {
     "id": "thai-7",
     "title": "ชุดที่ ๗",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๗",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 95,
     "file": "quiz-thai-7.js",
     "labels": "th"
    },
    {
     "id": "thai-8",
     "title": "ชุดที่ ๘",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๘",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 98,
     "file": "quiz-thai-8.js",
     "labels": "th"
    },
    {
     "id": "thai-9",
     "title": "ชุดที่ ๙",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๙",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 99,
     "file": "quiz-thai-9.js",
     "labels": "th"
    },
    {
     "id": "thai-10",
     "title": "ชุดที่ ๑๐",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๐",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 100,
     "file": "quiz-thai-10.js",
     "labels": "th"
    },
    {
     "id": "thai-11",
     "title": "ชุดที่ ๑๑",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๑",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 98,
     "file": "quiz-thai-11.js",
     "labels": "th"
    },
    {
     "id": "thai-12",
     "title": "ชุดที่ ๑๒",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๒",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 97,
     "file": "quiz-thai-12.js",
     "labels": "th"
    },
    {
     "id": "thai-13",
     "title": "ชุดที่ ๑๓",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๓",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 98,
     "file": "quiz-thai-13.js",
     "labels": "th"
    },
    {
     "id": "thai-14",
     "title": "ชุดที่ ๑๔",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๔",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 96,
     "file": "quiz-thai-14.js",
     "labels": "th"
    },
    {
     "id": "thai-15",
     "title": "ชุดที่ ๑๕",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๕",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 99,
     "file": "quiz-thai-15.js",
     "labels": "th"
    },
    {
     "id": "thai-16",
     "title": "ชุดที่ ๑๖",
     "name": "แนวข้อสอบภาษาไทย · ชุดที่ ๑๖",
     "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ",
     "count": 98,
     "file": "quiz-thai-16.js",
     "labels": "th"
    }
   ]
  },
  {
   "id": "english",
   "title": "ภาษาอังกฤษ",
   "color": "#5b5ff0",
   "icon": "abc",
   "summaries": [
    {
     "title": "ภาษาอังกฤษพื้นฐานสำหรับกำลังพล (๑๒ เรื่อง)",
     "pdf": "english-basic-summary.pdf",
     "group": "สรุป"
    }
   ],
   "quizzes": [
    {
     "id": "eng-lastyear",
     "title": "ข้อสอบปีที่แล้ว",
     "name": "ข้อสอบปีที่แล้ว",
     "group": "ข้อสอบปีที่แล้ว",
     "count": 65,
     "file": "quiz-eng-lastyear.js",
     "labels": "kk"
    },
    {
     "id": "eng-bank-1",
     "title": "ชุดที่ 1",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 1",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 77,
     "file": "quiz-eng-bank-1.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-2",
     "title": "ชุดที่ 2",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 2",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 63,
     "file": "quiz-eng-bank-2.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-3",
     "title": "ชุดที่ 3",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 3",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 15,
     "file": "quiz-eng-bank-3.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-4",
     "title": "ชุดที่ 4",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 4",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 20,
     "file": "quiz-eng-bank-4.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-5",
     "title": "ชุดที่ 5",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 5",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 19,
     "file": "quiz-eng-bank-5.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-6",
     "title": "ชุดที่ 6",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 6",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 25,
     "file": "quiz-eng-bank-6.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-7",
     "title": "ชุดที่ 7",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 7",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 21,
     "file": "quiz-eng-bank-7.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-8",
     "title": "ชุดที่ 8",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 8",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 25,
     "file": "quiz-eng-bank-8.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-9",
     "title": "ชุดที่ 9",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 9",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 34,
     "file": "quiz-eng-bank-9.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-10",
     "title": "ชุดที่ 10",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 10",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 42,
     "file": "quiz-eng-bank-10.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-11",
     "title": "ชุดที่ 11",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 11",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 56,
     "file": "quiz-eng-bank-11.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-12",
     "title": "ชุดที่ 12",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 12",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 59,
     "file": "quiz-eng-bank-12.js",
     "labels": "num"
    },
    {
     "id": "eng-bank-13",
     "title": "ชุดที่ 13",
     "name": "แนวข้อสอบภาษาอังกฤษ · ชุดที่ 13",
     "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ",
     "count": 52,
     "file": "quiz-eng-bank-13.js",
     "labels": "num"
    }
   ]
  },
  {
   "id": "religion",
   "title": "ศาสนาศีลธรรม",
   "color": "#f2a20c",
   "icon": "lotus",
   "summaries": [
    {
     "title": "ศาสนาและศีลธรรม ฉบับสรุป (๑๑ เรื่อง)",
     "pdf": "religion-morality-summary.pdf",
     "group": "สรุป"
    },
    {
     "title": "วิชาการศาสนาและศีลธรรม (นายสิบอาวุโส)",
     "pdf": "shotnote-religion-morality.pdf",
     "group": "สรุป"
    }
   ],
   "quizzes": []
  }
 ]
};
