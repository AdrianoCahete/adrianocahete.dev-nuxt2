<template>
  <section class="page">
    <navbar-menu show-avatar />
    <section class="content">
      <section id="skills" class="section">
        <listItem
          title="Knowledge / Soft Skills"
          :items-col-left="[
            {name: 'Microsoft Azure DevOps'},
            {name: 'Git'},
            {name: 'Working with remote teams for the past ~5 years'},
            {name: 'Customer focused'}
          ]"
          :items-col-right="[
            {name: 'Scrum / Kanban / Agile'},
            {name: 'Atlassian Jira/Confluence'},
            {name: 'Quality in mind'},
            {name: 'English (Read/Write/Speak)'}
          ]"
        />

        <listItem
          title="Basic Notions"
          :items-col-left="[
            {name: 'Javascript'},
            {name: 'jQuery'},
            {name: 'VueJS'},
            {name: 'NuxtJS'},
            {name: 'ReactJS'},
            {name: 'Webpack'},
            {name: 'Github Actions'},
            {name: 'IIS/Apache'},
            {name: 'MS SQLServer/MySQL'}
          ]"
          :items-col-right="[
            {name: 'C#/.NET/.NET Core'},
            {name: 'ASP.NET (WebForms/MVC)'},
            {name: 'Java (Android)'},
            {name: 'Python'},
            {name: 'WordPress'},
            {name: 'PHP'},
            {name: 'Microsoft PowerBI'},
            {name: 'Adobe Premiere'},
            {name: 'Adobe After Effects'}
          ]"
        />

        <listItem
          title="Advanced"
          :items-col-left="[
            {name: 'HTML5'},
            {name: 'CSS 3/4 (Selectors 3 and 4)'},
            {name: 'CSS Preprocessors (Stylus/Saas/Less)'},
            {name: 'CSS Variables (Custom properties)'},
            {name: 'Adobe Photoshop'}
          ]"
          :items-col-right="[
            {name: 'Powershell'},
            {name: 'GruntJS'},
            {name: 'NodeJS/npm'},
            {name: 'Adobe XD'},
            {name: 'Sketch'}
          ]"
        />
      </section>
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import listItem from '~/components/common/listItem'

export default {
  components: {
    navbarMenu,
    listItem
  },

  head () {
    return {
      title: 'Skills'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'
</style>
