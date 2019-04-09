'use strict';

// filter -> пришла статистика загрузок и надо выбрать те что больше процента

const uploads = [
  { name: 'pdf', percentage: 14 },
  { name: 'psd', percentage: 21 },
  { name: 'mp3', percentage: 3 },
  { name: 'flac', percentage: 7 },
];

const filterUploadsWithThreshold = function(uploads, threshold) {
  // console.table(uploads);
  // console.log(threshold);
  const filteredUploads = [];

  for (const upload of uploads) {
    if (upload.percentage >= threshold) {
      filteredUploads.push(upload);
    }
  }

  return filteredUploads;
};

console.table(filterUploadsWithThreshold(uploads, 10));
console.table(filterUploadsWithThreshold(uploads, 20));
