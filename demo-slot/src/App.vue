<template>
  <div class="app-container">
    <!-- 绑定私有自定义指令 -->
    <h1 v-color="color">App 根组件</h1>
    <p>测试</p>
    
    <button @click="color = 'pink'">改变color的颜色值</button>
    <Article>
      <template #title>
        <h2>大海</h2>
      </template>

      <template #content="scope">
        <p>啊，大海，全是水</p>
        <p>{{ scope.msg }}</p>
      </template>

      <template #zuozhe>
        <p>作者：阿标</p>
      </template>
    </Article>
    

    <div class="box" style="display:none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3. 以标签形式，使用注册好的组件 -->
      
        <Left>
          <template v-slot:default>
            <p>这里是在left组件的内容区域，声明的p标签</p>
          </template>
        </Left>
      
     
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的 .vue 组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Article from '@/components/article.vue'

export default {
  data() {
    return {
      color: 'aqua'
    }
  },
  // 2. 注册组件
  components : {
    Left,
    Right,
    Article
  },

  // 定义私有自定义指令
  directives: {
    color: {
      bind(el,binding) {
        // el.style.color = "pink"
        console.log('触发了 v-color 的 bind 函数');
        el.style.color = binding.value
        console.log(binding);
      },
      // 在DOM元素更新的时候，会去触发update函数
      update(el,binding) {
        // el.style.color = "pink"
        console.log('触发了 v-color 的 update 函数');
        el.style.color = binding.value
        console.log(binding);
      }
    }

    // color(el,binding) {
    //   el.style.color = binding.value
    // }
    //  color(el) {
    //   el.style.color = 'pink'
    // }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
