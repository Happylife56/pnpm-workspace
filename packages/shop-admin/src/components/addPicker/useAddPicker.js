import { ref } from 'vue';

export function useAddPicker() {
  const tableData = ref([]);
  const total = ref([]);

  const getListData = ({ search, page }) => {
    console.log('search, page: ', search, page);
  };

  const currentPage = ({ search, page }) => {
    getListData({ search, page });
  };

  return {
    tableData, total, getListData, currentPage,
  };
}
