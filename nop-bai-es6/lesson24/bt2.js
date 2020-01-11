//Thay thế các kí tự đặc biệt bằng kí tự “-”?


const str = ' Trần thị hồng huệ cute@123';
console.log(str.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-'));