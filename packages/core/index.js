import request from './request';

import { useCommon } from './vueCore';

export { request, useCommon };

export const getNow = () => (new Date().getTime());
