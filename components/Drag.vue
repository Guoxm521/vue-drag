<template>
  <div id="container">
    <!-- 标题 -->
    <div class="title clear">
      <span>配送单</span>
      <button @click="btn">按钮</button>
    </div>
    <!-- 订单信息 -->
    <div class="orderlist clear">
      <draggable
        class="orderlist-drag"
        tag="ul"
        v-model="orderlist"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group
          class="orderlist-group"
          type="transition"
          :name="'flip-list'"
        >
          <li
            class="orderlist-drag-item"
            v-for="element in orderlistProps"
            :key="element.id"
          >
            {{ element.label }}
          </li>
        </transition-group>
      </draggable>
    </div>
    <!-- 商品信息 -->
    <div
      class="goodslist clear"
      @mousedown="move({ type: 'vertical' }, $event)"
      :style="{ top: positionX + 'px', left: positionY + 'px' }"
    >
      <draggable
        class="goodslist-drag"
        tag="ul"
        v-model="goodslist"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group
          class="goodslist-group"
          type="transition"
          :name="'flip-list'"
        >
          <li
            class="goodslist-drag-item"
            v-for="element in goodslist"
            :key="element.id"
            style="top: 0; left: 15px"
          >
            {{ element.label }}
          </li>
        </transition-group>
      </draggable>
    </div>
    <!-- 合计信息 -->
    <div class="countlist">
      <draggable
        class="countlist-drag"
        tag="ul"
        v-model="countlist"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group
          class="countlist-group"
          type="transition"
          :name="'flip-list'"
        >
          <li
            class="countlist-drag-item"
            v-for="element in countlistProps"
            :key="element.id"
          >
            {{ element.label }}
          </li>
        </transition-group>
      </draggable>
    </div>
    <!-- 签名信息 -->
    <div class="signlist clear">
      <draggable
        class="signlist-drag"
        tag="ul"
        v-model="signlist"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group
          class="signlist-group"
          type="transition"
          :name="'flip-list'"
        >
          <li
            class="signlist-drag-item"
            v-for="element in signlist"
            :key="element.id"
          >
            {{ element.label }}
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [
  "订单号",
  "商户名称",
  "收货人",
  "收货手机",
  "收货地址",
  "下单日期",
  "配送日期",
];
export default {
  components: {
    draggable,
  },
  props: {
    orderlistProps: {
      type: Array,
    },
    goodslistProps: {
      type: Array,
    },
    countlistProps: {
      type: Array,
    },
    signlistProps: {
      type: Array,
    },
  },
  data() {
    return {
      positionX: 0,
      positionY: 0,
      orderlist: this.orderlistProps,
      goodslist: this.goodslistProps,
      countlist: this.countlistProps,
      signlist: this.signlistProps,
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
    };
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    move(parems, e) {
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        if (parems.type && parems.type == "vertical") {
          left = 0;
        }
        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";

      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    btn() {
      console.log(this.goodslist);
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        ghostClass: "ghost",
      };
    },
  },
  created() {
    console.log(this.orderlistProps);
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

.title {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  span {
    cursor: move;
    background-color: #000;
    color: #ffffff;
    border-radius: 5px;
    padding: 0 5px;
    text-align: center;
    line-height: 30px;
    margin-right: 5px;
  }
}
.clear {
  clear: both;
}
// 订单信息
.orderlist {
  position: absolute;
  top: 50px;
  left: 0;
  width: 80%;
  padding: 10px 15px;
  box-sizing: border-box;
  margin: 0 auto;
}
.orderlist-drag {
  height: 100%;
  .orderlist-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .orderlist-drag-item {
      cursor: move;
      background-color: #000;
      color: #ffffff;
      border-radius: 5px;
      padding: 0 5px;
      text-align: center;
      line-height: 30px;
      margin-right: 5px;
    }
  }
}
//   商品信息
.goodslist-drag {
  width: 100%;
  .goodslist-group {
    height: 30px;
    width: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: row;
    position: relative;
    .goodslist-drag-item {
      cursor: move;
      background-color: #000;
      color: #ffffff;
      border-radius: 5px;
      padding: 0 5px;
      text-align: center;
      line-height: 30px;
      margin-right: 5px;
      // position: absolute;
    }
  }
}

// 合计信息
.countlist {
  position: absolute;
  bottom: 50px;
  width: 100%;
  .countlist-drag {
    width: 100%;
    .countlist-group {
      height: 30px;
      width: 100%;
      background-color: #ccc;
      display: flex;
      flex-direction: row;
      .countlist-drag-item {
        cursor: move;
        background-color: #000;
        color: #ffffff;
        border-radius: 5px;
        padding: 0 5px;
        text-align: center;
        line-height: 30px;
        margin-right: 5px;
      }
    }
  }
}
// 签名信息
.signlist {
  position: absolute;
  bottom: 0;
  width: 100%;
  .signlist-drag {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    .signlist-group {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      .signlist-drag-item {
        cursor: move;
        padding: 0 10px;
        height: 25px;
        line-height: 25px;
        border-radius: 5px;
        background-color: #000;
        color: #ffffff;
      }
    }
  }
}
</style>