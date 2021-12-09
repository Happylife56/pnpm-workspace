import { ElMessage } from 'element-plus';

export function useMessage() {
  const setOption = (text, type) => {
    ElMessage.closeAll();
    ElMessage({ message: text, type });
  };
  const message = {
    error: (text) => setOption(text, 'error'),
    success: (text) => setOption(text, 'success'),
    warning: (text) => setOption(text, 'warning'),
  };

  return { message };
}
