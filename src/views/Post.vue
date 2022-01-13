<template>
  <div>
    <div class="post-page">
      <h2 class="post-page__title my-5">{{ post.title }}</h2>
      <div class="post-page__image">
        <img src="../assets/post-image.jpeg" alt="image" />
      </div>

      <p class="post-page__description">{{ post.body }}</p>
      <div class="post-card__footer mt-5">
        <div class="post-card__footer--read">
          <router-link class="btn btn-primary" to="/"
            >Back to all posts</router-link
          >
        </div>
        <div class="post-card__footer--author">
          <img src="../assets/a10.jpeg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api";
export default {
  data() {
    return {
      id: null,
      post: {},
    };
  },
  methods: {
    getPostDetails() {
      return new Promise((resolve, reject) => {
        API.getPostById(this.$route.params.id)
          .then((response) => {
            this.post = response.data;
            resolve;
          })
          .catch(() => {
            this.hasError = true;
            reject();
          });
      });
    },
  },
  created() {
    this.getPostDetails();
  },
};
</script>

<style></style>
