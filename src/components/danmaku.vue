<template >
  <div class="item">
    <span class="username">
      {{ inform.username }}:
    </span>
    <span class="words">
      {{ inform.words }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'danmaku',
  props: {
    inform: {},
  },
};
</script>

<style scoped>
.item {
  padding: 4px;
}
.username {
  color: #409edd;
}
</style>
