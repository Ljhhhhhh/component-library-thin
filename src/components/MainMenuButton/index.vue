<template>
  <button
    class="main-menu-button"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: backgroundColor,
      color: color,
    }"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="button-content">
      <Icon v-if="icon !== 'icon-button'" :icon="icon" class="button-icon" />
      <span class="button-text">{{ text }}</span>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'MainMenuButton',
  components: {
    Icon,
  },
  props: {
    width: {
      type: Number,
      default: 140,
    },
    height: {
      type: Number,
      default: 70,
    },
    text: {
      type: String,
      default: '按钮',
    },
    icon: {
      type: String,
      default: 'icon-button',
    },
    backgroundColor: {
      type: String,
      default: '#1A7285',
    },
    color: {
      type: String,
      default: '#18DBD3',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { width, height, text, icon, backgroundColor, color, disabled } =
      toRefs(props);

    const handleClick = () => {
      console.log('click');
    };

    return {
      width,
      height,
      text,
      icon,
      backgroundColor,
      color,
      disabled,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;

    &:hover::after {
      opacity: 0;
    }
  }

  .button-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .button-icon {
    font-size: 24px;
  }

  .button-text {
    font-size: 14px;
    text-align: center;
  }
}
</style>
