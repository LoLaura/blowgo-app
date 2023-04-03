<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost"  :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>view more recent blogs</h3>
        <div class="blog-cards">
          <BlogCards v-for="(post,index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../assets/components/BlogPost.vue';
import BlogCards from '../assets/components/BlogCard.vue'
export default {
  name: "home",
  components: {
    BlogPost,
    BlogCards},
  data(){
    return{
      welcomeScreen:{
        title:"Welcome",
        blogPost:"I'm blogpost",
        welcomeScreen:true,
        photo:"coding",
      },
      sampleBlogPost:[
        {
        title:"Filter Title",
        blogHTML:"Filter Blog",
        blogCoverPhoto:"beautiful-stories",
      },{
        title:"Filter Title",
        blogHTML:"Filter Blog",
        blogCoverPhoto:"designed-for-everyone",}
      ],
      sampleBlogCards:[
        {BlogTitle:"Blog Card #1",blogCoverPhoto:"stock-1",blogDate:"May 1,2021"},
        {BlogTitle:"Blog Card #2",blogCoverPhoto:"stock-2",blogDate:"May 1,2021"},
        {BlogTitle:"Blog Card #3",blogCoverPhoto:"stock-3",blogDate:"May 1,2021"},
        {BlogTitle:"Blog Card #4",blogCoverPhoto:"stock-4",blogDate:"May 1,2021"}
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight:300;
    font-size:28px;
    margin-bottom: 32px;
  }
}
</style>
