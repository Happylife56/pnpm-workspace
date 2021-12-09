import { ElMessage } from 'element-plus';

ElMessage.closeAll();
const KMessage = {
  ...ElMessage,
};

KMessage.install = function (app) {
  app.component(KMessage.name, KMessage);
};

export default KMessage;
