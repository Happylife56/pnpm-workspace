import KButton from './button';
import KInput from './input';

const KUI = {
  KButton,
  KInput,
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

export { KButton, KInput };
