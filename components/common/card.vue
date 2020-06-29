<template>
  <div class="card">
    <h2 class="cardTitle">
      {{ title }}
      <Icon :url="url" :icon="icon" :title="tooltip" class="cardLink-Item" />
    </h2>
    <h3 class="cardSubTitle">
      {{ subtitle }}
    </h3>
    <ul class="cardItems">
      <li>Fixed major issues from the original repository</li>
      <li>Tested and merged Pull Requests from original repository</li>
      <li>Updated documentation to match the current implementation</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: '#'
    },
    icon: {
      type: String,
      required: true,
      default: '#'
    },
    tooltip: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  a {
    color: var(--navbarIconColorAlt, inherit);
  }

  svg {
    width: 24px;
    height: @width;
    fill: inherit;

    &:hover {
      fill: var(--primaryColor, rgba(255, 255, 255, .5));
      transition: .3s ease fill;
    }
  }

  .cardLink-Item {
    fill: var(--textColor, #fff);

    svg {
      height: 15px;
    }
  }
</style>
