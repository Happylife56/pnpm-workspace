import KButton from './button';
import KInput from './input';
import KTable from './table';
import KPage from './pagination';
import KBatchTable from './batch-table';
import KDialog from './dialog';
import KBreadcrumb from './breadcrumb';
import KTabs from './tabs';
import KPicker from './picker';

const KUI = {
  KButton,
  KInput,
  KTable,
  KPage,
  KBatchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
  install: () => {},
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

KUI.install = function (app) {
  Object.keys(KUI).forEach((key) => {
    if (startsWith(key, 'K')) {
      const Component = KUI[key];
      app.component(Component.name, Component);
    }
  });
};

export default KUI;

export {
  KButton, KInput, KTable, KPage, KBatchTable, KDialog, KBreadcrumb, KTabs, KPicker,
};
