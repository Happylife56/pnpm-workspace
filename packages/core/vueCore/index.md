# useCommon

使用vue，vue-roter，vuex一些公共的api

## Usage

```js
import { useCommon } from '@common/core'

<script setup>
  import { useCommon } from '@common/core';
  const { store, route, router, ref, reactive, computed, watch, getState, getGetters, loadPage, } = useCommon();
</script>
```