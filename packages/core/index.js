import request from './request';
import { useCommon } from './vueCore';
import { useMessage } from './message';

export { request, useCommon, useMessage };

export const getNow = () => (new Date().getTime());
