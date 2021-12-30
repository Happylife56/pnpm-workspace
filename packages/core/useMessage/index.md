# useMessage

ElMessage提示的方法，取消上次提示，防止重复多次提示

## Usage

```js
import { useMessage } from '@common/core'

<script setup>
  import { useMessage } from '@common/core';
  const { message,mesageBox } = useMessage();

  message.error('错误提示')
  message.success('成功提示')

  
  // mesageBox
  mesageBox.confirm({ msg: '是否确认删除?' }).then(() => {
    message.success('删除成功');
  });
</script>
```