<template>
  <section id="resume">
    <header class="resume-header">
      {{ $config.appAuthor }}
    </header>
    <section class="resume-content">
      <p>
        Resume
      </p>
      <p>
        Conteudo 2
      </p>
    </section>
    <footer>
      Footer
    </footer>
  </section>
</template>

<script>
export default {
  layout: 'resume',

  components: {
    // Icon
  },
  head () {
    return {
      title: 'Resume'
    }
  }
}
</script>

<style lang="stylus" scoped>
// Margins follow the ABNT Standards

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: var(--bgColor);
  color: #fff;
  background-attachment: fixed;
  background-size: 500% 500%;
  background-position: 0 50%;
  border-bottom: var(--navbarBorder);
  padding: 30mm 20mm 0 30mm;
  height: 50mm;
}

.resume-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30mm 20mm 0 30mm;
}
</style>
