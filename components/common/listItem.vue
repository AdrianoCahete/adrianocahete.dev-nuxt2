<template>
  <transition name="slide-fade">
    <div class="listItem">
      <h3 class="title">
        {{ title }}
      </h3>
      <div class="listContent">
        <transition-group v-if="itemsColLeft" tag="ul" name="list" class="list colList" appear>
          <!-- https://github.com/vuejs/eslint-plugin-vue/issues/726#issuecomment-451740732 -->
          <li v-for="(item, idx) in itemsColLeft" :key="idx + 0">
            {{ item.name }}
          </li>
        </transition-group>
        <transition-group v-if="itemsColRight" tag="ul" name="list" class="list colList" appear>
          <li v-for="(item, idx) in itemsColRight" :key="idx + 0">
            {{ item.name }}
          </li>
        </transition-group>
      </div>
    </div>
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
      required: true,
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
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.title {
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

.listItem {
  margin-top: 2rem;
  margin-bottom: 3rem;

  .title {
    color: var(--textColor, #ffffff);
    font-weight: 500;
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
</style>
