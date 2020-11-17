<template>
  <div class="font-set-box">
    <span class="font-set-title">字体设置：</span>
    <select name="" id="">
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
    </select>
    <li>
      <span :class="bold ? 'selected' : ''" @click="SetFont('bold')">
        <i class="fa fa-bold fa-lg" title="加粗"></i>
      </span>
      <span :class="underline ? 'selected' : ''" @click="SetFont('underline')">
        <i class="fa fa-underline fa-lg" title="下划线"></i>
      </span>
      <span :class="italic ? 'selected' : ''" @click="SetFont('italic')">
        <i class="fa fa-italic fa-lg" title="倾斜"></i>
      </span>
      <span
        :class="textAlign == 'center' ? 'selected' : ''"
        @click="SetTextAlign('center')"
      >
        <i class="fa fa-align-center fa-lg" title="居中对齐"></i>
      </span>
      <span
        :class="textAlign == 'left' ? 'selected' : ''"
        @click="SetTextAlign('left')"
      >
        <i class="fa fa-align-left fa-lg" title="左侧对齐"></i>
      </span>
      <span
        :class="textAlign == 'right' ? 'selected' : ''"
        @click="SetTextAlign('right')"
      >
        <i class="fa fa-align-right fa-lg" title="右侧对齐"></i>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 14,
      bold: false,
      underline: false,
      italic: false,
      textAlign: "center",
    };
  },
  methods: {
    SetFont(value) {
      if (value == "bold") {
        this.bold = !this.bold;
      } else if (value == "underline") {
        this.underline = !this.underline;
      } else if (value == "italic") {
        this.italic = !this.italic;
      }
      this.sendData()
    },
    SetTextAlign(value) {
      this.textAlign = value;
      this.sendData()
    },
    // 向父组件传值
    sendData() {
      let form = {
        fontset:{
          fontSize:this.fontSize,
          bold:this.bold,
          underline:this.underline,
          italic:this.italic,
          textAlign:this.textAlign
        }
      }
      this.$emit("getdata",form)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/font-awesome-4.7.0/css/font-awesome.css";
$main-color1: #009688; //主体颜色
.font-set-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  padding-top: 10px;
  .font-set-title {
    font-size: 16x;
  }
  select {
    padding: 2px 3px;
    border-radius: 5px;
    height: 30px;
    box-sizing: border-box;
    border-style: none;
    border: 1px solid #cccccc;
    &:hover {
      border: 1px solid $main-color1;
    }
  }
  li {
    display: inline-block;
    span {
      padding-left: 10px;
      padding-right: 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      margin-left: 10px;
    }
    .selected {
      border: 1px solid $main-color1;
      box-sizing: border-box;
    }
    .fa {
      font-size: 20px;
      color: #333333;
    }
  }
}
</style>