<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost"  :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../assets/components/BlogPost.vue';
export default {
  name: "home",
  components: {
    BlogPost},
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
      ]
    }
  }
};
</script>
