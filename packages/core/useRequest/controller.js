function getSource() {
  const { MODE, BASE_URL } = import.meta.env;
  let { pathname } = window.location;
  if (MODE === 'development') pathname = BASE_URL;
  if (pathname.includes('/admin/')) return 'admin'; // 后台操作
  if (pathname.includes('/erp/')) return 'erp';
  return '';
}

function interceptors(code) {
  const source = getSource();
  console.log('source: ', source, code);
}

export {
  getSource, interceptors,
};
