const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const dayjs = require('dayjs');
const pkg = require('./package.json');

const folderName = 'dist';

const compressName = `Project-Name_${pkg.version}_Release.zip`;

// 删除已经存在的同名压缩包
const compressFile = path.resolve(__dirname, compressName);
fs.exists(compressFile, function (exists) {
  if (exists) {
    fs.unlinkSync(compressFile);
  }
});

// 判断文件夹是否存在
const folder = path.resolve(__dirname, folderName);
fs.stat(folder, function (err, stats) {
  if (!stats) {
    console.log(`[compress]: 未找到 ${folderName} 文件夹`);
  } else {
    compressFn();
  }
});

// 压缩函数
function compressFn() {
  const date = dayjs().format('MM-DD');
  const output = fs.createWriteStream(`${__dirname}/${compressName}`);
  const archive = archiver('zip', { zlib: { level: 9 } });
  archive.pipe(output);
  archive.directory(`${folderName}/`, false);
  archive.finalize();
}
