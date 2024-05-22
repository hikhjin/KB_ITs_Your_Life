// node core module
// fs (file system, 파일 시스템)
// - 파일 시스템을 활용하기 위한 모듈로 파일, 폴더의 읽기/쓰기/수정/삭제를 지원 한다.
// - fs 모듈은 크게 Promises, Callback, Synchronous 패턴으로 구분됨
// - encoding을 지원함으로 적절한 인코딩 사용을 권장(최근은 utf-8로 거의 통일, euc-kr도 가끔 보임)
// https://nodejs.org/docs/latest/api/fs.html

// fs import문
// const fs = require('node:fs');
const fs = require('fs');
// 1. Callback 패턴
// 1.1 파일 읽기 - readFile(비동기), readFileSync(동기)
// fs.readFile(path[, options], callback) : 비동기식으로 파일 읽어 오는 메소드
// fs.readFileSync(path[, options]) : 동기로 파일을 읽어서 리턴하는 메소드, 파일을 읽어 올 때까지 block
// path : ing> | <Buffer> | <URL> | <integer>
// options(obj) : encoding(null), flag(r), flush(false)
// callback(func) : func(error, data)

//비동기, 동기 순서 보장이 안 되는 방식
const path1 = 'test_en.txt';
fs.readFile(path1, 'utf8', (error, data) => {
    if (error) throw error;
    console.log('readFile');
    console.log(data);
});

// 동기 방식, 코드 순서가 보장되는 방식
const path2 = 'test_ko.txt';
const readData = fs.readFileSync(path2, {encoding: 'utf8'});
console.log('readFileSync');
console.log(readData);