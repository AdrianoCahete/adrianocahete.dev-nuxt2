<template>
  <transition name="slide-fade">
    <section class="listItem">
      <h3 class="title">
        {{ title }}
      </h3>
      <section class="listContent">
        <transition-group
          v-if="itemsColLeft"
          tag="ul"
          name="list"
          class="list colList"
          :class="itemsColRight.length ? '' : 'colList-single'"
          appear
        >
          <!-- https://github.com/vuejs/eslint-plugin-vue/issues/726#issuecomment-451740732 -->
          <li v-for="(item, idx) in itemsColLeft" :key="idx + 0">
            {{ item.name }}
          </li>
        </transition-group>
        <transition-group v-if="itemsColRight.length" tag="ul" name="list" class="list colList" appear>
          <li v-for="(item, idx) in itemsColRight" :key="idx + 0">
            {{ item.name }}
          </li>
        </transition-group>
      </section>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    animationDelay: {
      type: String,
      required: false,
      default: '0'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    itemsColLeft: {
      type: Array,
      required: true,
      default: () => []
    },
    itemsColRight: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.listItem {
  .title {
    color: var(--subtitleColor);
    font-weight: 500;
  }

  .list {
    list-style: none;
    padding-left: .5rem;

    li {
      list-style-type: none;

      &::before {
        content: "▹";
        color: var(--subtitleColor);
      }
    }
  }

  .listContent {
    display: flex;

    .colList {
      flex: 1;
      margin-top: 1rem;
      margin-right: 3vw;
      min-width: 50%;

      &.colList-single {
        margin-right: 0;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  animation: fadeIn 1s ease-in;
}

.list-enter {
  opacity: 0;
  animation: fadeIn 1s ease-in;
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}

// @media print {
//   .listItem .listContent .colList {
//     li {
//       page-break-after: auto !important;
//       page-break-inside: avoid !important;
//     }
//   }
// }
</style>
