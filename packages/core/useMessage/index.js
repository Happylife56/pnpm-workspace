import { ElMessage, ElMessageBox } from 'element-plus';

export function useMessage() {
  const setOption = (text, type) => {
    ElMessage.closeAll();
    ElMessage({ message: text, type });
  };
  const message = {
    error: (text) => setOption(text, 'error'),
    success: (text) => setOption(text, 'success'),
    warning: (text) => setOption(text, 'warning'),
    info: (text) => setOption(text, 'info'),
  };
  const mesageBox = {
    confirm: ({ msg, title = '提示', type = 'warning' }) => new Promise((resolve) => {
      ElMessageBox.confirm(msg, title, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type,
      }).then(() => resolve(true))
        .catch(() => { });
    }),
  };

  return { message, mesageBox };
}
