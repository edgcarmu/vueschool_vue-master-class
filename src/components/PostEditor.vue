<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="newPostText"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PostEditor',
    props: {
      threadId: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        newPostText: ''
      }
    },
    methods: {
      save () {
        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
        }

        this.$store.dispatch('createPost', post)
        this.newPostText = ''
      }
    }
  }
</script>

<style scoped>

</style>
