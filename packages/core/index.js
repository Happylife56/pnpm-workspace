import request from './useRequest';

export { request };

export * from './vueCore';
export * from './useMessage';
export * from './useForm';

export const getNow = () => (new Date().getTime());
