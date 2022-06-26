<template>
  <div class="alert alert-danger" role="alert" v-if="err">{{err}}</div>
</template>

<script>
export default {
    name: 'LoginError',
    props: ['err']
}
</script>

<style>

</style>