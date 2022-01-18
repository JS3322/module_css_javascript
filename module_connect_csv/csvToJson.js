// 1. node.js의 fs모듈 추출 
const fs = require('fs'); 
// 2. csv파일 읽기 
const file_csv = fs.readFileSync('파일경로'); 
// 3. string으로 변환: fs로 읽은 Buffer를 문자열로 변환합니다. 
const string_csv = file_csv.toString(); 
// 4. csvToJSON(CSV문자열) 함수 호출 
const arr_json = csvToJSON(string_csv);
