## table组件

### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| tableColumn | Array | [{ lable:'日期', prop: 'date'}] |
| tableData | Array |  :tableData 或者 v-model:tableData="data" |
| currentPage | Number |  v-model="current" |

其他参数看element官网

### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
|  current-change | 当用户切换分页的触发该事件 | currengPage |

