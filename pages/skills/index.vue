<template>
  <section :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <navbar-menu />
    <section class="content">
      <section id="skills" class="section">
        <!-- <p class="description">
          General skills, other knowledges
        </p> -->
        <div class="listItem">
          <h3 class="title">
            Knowledge / Soft Skills
          </h3>
          <div class="listContent">
            <ul class="list colList">
              <li>Microsoft Azure DevOps</li>
              <li>Working with remote teams for the past ~5 years</li>
              <li>Customer focused</li>
              <li>English (Read/Write/Speak)</li>
            </ul>
            <ul class="list colList">
              <li>Scrum / Kanban / Agile</li>
              <li>Atlassian Jira/Confluence</li>
              <li>Quality in mind</li>
            </ul>
          </div>
        </div>

        <div class="listItem">
          <h3 class="title">
            Basic Notions
          </h3>
          <div class="listContent">
            <ul class="list colList">
              <li>Javascript</li>
              <li>jQuery</li>
              <li>VueJS</li>
              <li>ReactJS</li>
              <li>Webpack</li>
              <li>Python</li>
              <li>IIS/Apache</li>
              <li>MS SQLServer/MySQL</li>
            </ul>
            <ul class="list colList">
              <li>C#/.NET/.NET Core</li>
              <li>ASP.NET (WebForms/MVC)</li>
              <li>Java (Android)</li>
              <li>WordPress</li>
              <li>PHP</li>
              <li>Microsoft PowerBI</li>
              <li>Adobe Premiere</li>
              <li>Adobe After Effects</li>
            </ul>
          </div>
        </div>
        <div class="listItem">
          <h3 class="title">
            Advanced
          </h3>
          <div class="listContent">
            <ul class="list colList">
              <li>HTML5</li>
              <li>CSS 3/4 (Selectors 3 and 4)</li>
              <li>CSS Preprocessors (Stylus/Saas/Less</li>
              <li>CSS Variables (Custom properties)</li>
              <li>Adobe Photoshop</li>
            </ul>
            <ul class="list colList">
              <li>Powershell</li>
              <li>GruntJS</li>
              <li>NodeJS/npm</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'

export default {
  components: {
    navbarMenu
  },

  head () {
    return {
      title: 'Skills',
      meta: [
      ]
      // bodyAttrs: {
      //   class: 'work'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

.title {
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

.listItem {
  margin-top: 2rem;
  margin-bottom: 3rem;

  .title {
    color: var(--primaryColor, #ffffff);
  }

  .list {
    list-style: circle;
    padding-left: 2rem;
  }

  .listContent {
    display: flex;

    .colList {
      flex: 1;
      margin-right: 3vw;
      min-width: 50%;
      margin-top: 1rem;
    }
  }
}
</style>
