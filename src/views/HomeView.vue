<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <div class="blog-card-wrap-box">
          <h3>More Recent Blogs</h3>
          <router-link class="link all-blogs-link" :to="{ name: 'Blogs' }"
            >View All Blogs <Arrow class="arrow"
          /></router-link>
        </div>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in blogPostsCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a Post. Register for your free account today!</h2>
        <router-link class="router-button" :to="{ name: 'Register' }">
          Register for FireBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "HomeView",
  components: { BlogPost, BlogCard, Arrow },
  data: () => ({
    welcomeScreen: {
      title: "Welcome!",
      blogPost:
        "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to never a post.",
      welcomeScreen: true,
      photo: "coding",
    },
  }),
  computed: {
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap-box {
  display: flex;
  @media (max-width: 800px) {
    display: block;
  }
  h3 {
    flex: 1;
  }
  .all-blogs-link {
    display: inline-flex;
    align-items: center;
    height: 37px;
    border-bottom: 1px solid transparent;
    transition: 0.5s ease-in all;
    @media (max-width: 800px) {
      margin-bottom: 10px;
    }
    &:hover {
      border-bottom-color: #42b883;
    }
  }
}
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
    @media (max-width: 800px) {
      margin-bottom: 0;
    }
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
