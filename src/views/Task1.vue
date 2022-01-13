<template>
  <div class="home">
    <h3>All posts</h3>
    <h2 class="text-danger" v-if="hasError">{{ errorMessage }}</h2>
    <div class="row px-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-xl-3 py-4"
        v-for="(post, index) in posts"
        :key="index"
      >
        <div class="post-card">
          <div class="post-card__head">
            <div class="post-card__head--image">
              <img src="images/post-image.jpeg" alt="image" />
            </div>
          </div>
          <div class="post-card__body">
            <h4 class="post-card__body--title">{{ post.title }}</h4>
            <p class="post-card__body--description">{{ post.body }}</p>
          </div>
          <div class="post-card__footer">
            <div class="post-card__footer--read">
              <router-link
                class="btn btn-primary"
                :to="{ name: 'Post', params: { id: post.id } }"
                >Read Post</router-link
              >
            </div>
            <div class="post-card__footer--author">
              <img :src="putAuthorImage(post.userId)" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
      hasError: false,
      errorMessage: "Something bad happened :(",
    };
  },
  methods: {
    getAllPosts() {
      return new Promise((resolve, reject) => {
        API.getAllPosts()
          .then((response) => {
            this.posts = response.data;
            resolve();
          })
          .catch(() => {
            this.hasError = true;
            reject;
          });
      });
    },
    // put images due to user ids
    putAuthorImage(id) {
      return `images/a${id}.jpeg`;
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>
