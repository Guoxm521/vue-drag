<template>
  <div id="container">
    <!-- 订单信息 -->
    <div class="orderlist">
      <li
        v-for="(item, index) in orderlist"
        :key="index"
        :style="{ top: item.top + 'px', left: item.left + 'px' }"
        @mousedown="move(item, { type: '' }, $event)"
      >
        {{ item.label }}
      </li>
    </div>
    <!-- 商品信息 -->
    <div
      class="goodslist"
      :style="{
        top: mainlist.goodslist.top + 'px',
        left: mainlist.goodslist.left + 'px',
      }"
      @mousedown="move(mainlist.goodslist, { type: 'row' }, $event)"
    >
      <li
        v-for="(item, index) in goodslist"
        :key="index"
        :style="{ top: item.top + 'px', left: item.left + 'px' }"
        @mousedown.stop="move(item, { type: 'vertical' }, $event)"
      >
        {{ item.label }}
      </li>
    </div>
    <!-- 合计信息 -->
    <div class="countlist">
      <li
        v-for="(item, index) in countlist"
        :key="index"
        :style="{ top: item.top + 'px', left: item.left + 'px' }"
        @mousedown="move(item, { type: 'vertical' }, $event)"
      >
        {{ item.label }}
      </li>
    </div>

    <!-- 签名信息 -->
    <div class="signlist clear">
      <li
        v-for="(item, index) in signlist"
        :key="index"
        :style="{ top: item.top + 'px', left: item.left + 'px' }"
        @mousedown="move(item, {}, $event)"
      >
        {{ item.label }}
      </li>
    </div>
        
  </div>
</template>

<script>
export default {
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
    mainlistProps: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.mainlist);
  },
  computed: {
    orderlist() {
      return this.orderlistProps;
    },
    goodslist() {
      return this.goodslistProps;
    },
    countlist() {
      return this.countlistProps;
    },
    signlist() {
      return this.signlistProps;
    },
    mainlist() {
      return this.mainlistProps;
    },
  },
  methods: {
    /* 
    params 对象
    type:vertical row

     */
    move(item, params, e) {
      // 元素信息
      let elementWidth = e.path[0].offsetWidth;
      let elementHeight = e.path[0].offsetHeight;
      // 父级元素的信息
      let fatherWidth = e.path[1].offsetWidth;
      let fatherHeight = e.path[1].offsetHeight;
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        if (elementWidth + left > fatherWidth) {
          left = fatherWidth - elementWidth;
        }
        if (fatherHeight - elementHeight < top) {
          top = fatherHeight - elementHeight;
        }
        left = left < 0 ? 0 : left;
        top = top < 0 ? 0 : top;
        if (params.type && params.type == "vertical") {
          top = 0;
        }

        //移动当前元素
        // odiv.style.left = left + "px";
        // odiv.style.top = top + "px";

        //绑定元素位置到positionX和positionY上面
        item.top = top;
        item.left = left;
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
.clear {
  clear: both;
}

// 订单信息
.orderlist {
  position: absolute;
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 160px;
  cursor: move;
  li {
    position: absolute;
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
// 商品信息
.goodslist {
  position: absolute;
  width: 100%;
  height: 30px;
  width: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  cursor: move;

  li {
    position: absolute;
    cursor: move;
    background-color: #000;
    color: #ffffff;
    border-radius: 5px;
    width: 74px;
    text-align: center;
    text-align: center;
    line-height: 30px;
  }
}
// 合计信息
.countlist {
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 30px;
  width: 100%;
  background-color: #ccc;
  li {
    cursor: move;
    background-color: #000;
    color: #ffffff;
    border-radius: 5px;
    width: 106px;
    text-align: center;
    text-align: center;
    line-height: 30px;
    margin-right: 5px;
    position: absolute;
  }
}
// 签字信息
.signlist {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  li {
    cursor: move;
    width: 84px;
    text-align: center;
    height: 25px;
    line-height: 25px;
    border-radius: 5px;
    background-color: #000;
    color: #ffffff;
    position: absolute;
  }
}
</style>