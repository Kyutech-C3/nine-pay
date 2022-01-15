<template>
  <div>
    hogefuga
  </div>
</template>
<script lang="typescript">
import { getUser } from '../plugins/auth'
export default {
  name: 'Manage',
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.user = await getUser()
  }
}
</script>
<style scoped>

</style>